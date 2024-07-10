import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService,private jwt:JwtService,private config:ConfigService){

    }
    async signup(dto:AuthDto){
        const hash=await argon.hash(dto.password);
        //generate hash

        //save user in new db
        try{
            const user=await this.prisma.user.create({
                data:{
                    email:dto.email,
                    hash
                },
                select:{
                    id:true,
                    email:true
                }
            })
            //return the save user
           return user;

        }catch(error){
          if(error instanceof PrismaClientKnownRequestError){
            if(error.code=="P2002"){
                throw new ForbiddenException('User already exist')
            }

          }
          throw error;
        }
    }
    async signin(dto:AuthDto){
    
        //find the user by email
        const user=await this.prisma.user.findUnique({
            where:{
                email:dto.email,
            }
        });
        if(!user){
            throw new ForbiddenException(
                "Credentials incorrect or user does not exist"
            )
        }
        //compare password
        const passwordmatches=await argon.verify(user.hash,dto.password)

        //if password incorrect throw error
        if(!passwordmatches){
            throw new ForbiddenException(
                "Credentials incorrect or user does not exist"
            )
        }
        return this.signToken(user.id,user.email);
    }
    signToken(userId:number,email:string):Promise<string>{
        const payload={
            sub:userId,
            email
        }
        const secret=this.config.get("JWT_SECRET")
        return this.jwt.signAsync(payload,{
            expiresIn:'20m',
            secret:secret
        })
    }
}