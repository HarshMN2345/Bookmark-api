import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

describe('App e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // You need to create the Nest application instance
    app = moduleRef.createNestApplication();

    // You missed assigning the created app to moduleRef.createNestApplication();
    // Corrected:
    app = moduleRef.createNestApplication();

    // Add global validation pipe
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    // Clean up resources after all tests
    await app.close();
  });

  it('should pass', () => {
    // Your test code goes here
    expect(true).toBe(true); // Example placeholder assertion
  });
});
