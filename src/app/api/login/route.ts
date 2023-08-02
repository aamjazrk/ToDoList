import { NextRequest, NextResponse } from "next/server";
import {compare} from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";


export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await prisma.user.findFirst({
            where:{
                Email: email
            }
        })
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        //check if password is correct
        const validPassword = await compare(password, user.Password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        
        //create token data
        const tokenData = {
            id: user.Id,
            name: user.Name,
            email: user.Email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        console.log(response);
        console.debug(response)
        return response;
        

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}