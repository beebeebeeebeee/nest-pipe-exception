import { Module } from "@nestjs/common";
import { AppController } from "./controller";
import { AppService } from "./service";
import { RequestInterceptor } from "./interceptor";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestInterceptor]
})
export class AppModule {
}
