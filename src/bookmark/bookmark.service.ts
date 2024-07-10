import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
    constructor(private prisma:PrismaService){

    }
    
    getBookmarks(userId:number){
        return this.prisma.bookmark.findMany({
            where:{
                userId,
            }
        })
        
    }
    
    async createBookmarks(userId:number,dto:CreateBookmarkDto){
        const bookmark=await this.prisma.bookmark.create({
            data:{
                ...dto,
                userId
            }
        })
        return bookmark;

    }
    
    getBookmarkById(userId:number,bookmark:number){
        return this.prisma.bookmark.findFirst({
            where:{
                id:bookmark,
                userId
            }
        })

    }
    async editBookmarkById(userId:number,bookmarkid:number,dto:EditBookmarkDto){
        const bookmark=await this.prisma.bookmark.findUnique({
            where:{
                id:bookmarkid,
            }
        })
        if(!bookmark||bookmark.userId!==userId){
            throw new ForbiddenException("access denied try agian choom")
        }
        return this.prisma.bookmark.update({
            where:{
                id:bookmarkid
            },
            data:{
                ...dto
            }
        })

    }
    
    async deleteBookmarkById(userId:number,bookmarkId:number){
        const bookmark=await this.prisma.bookmark.findUnique({
            where:{
                id:bookmarkId,
            }
        })
        if(!bookmark||bookmark.userId!==userId){
            throw new ForbiddenException("access denied try agian choom")
        }
        return this.prisma.bookmark.delete({
            where:{
                id:bookmarkId
            }
        })

    }
}
