import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt"){

    constructor(private configService: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET_KEY')
        });
    }

    async validate(payload:any){
        return payload
    }
    

}