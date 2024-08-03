import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type userDocument = HydratedDocument<User>

@Schema()
export class User{
    @Prop(raw({
        username: {type: String, required: true},
        password: {type: String, required: true}
    }))
    details: Record<string,any>;
}

export const userSchema = SchemaFactory.createForClass(User)