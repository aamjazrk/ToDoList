import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { compare } from 'bcrypt'

export async function POST(req: NextRequest,res: NextResponse){
    try {

        const reqBody = await req.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await prisma.user.findFirst({
            where:{
                Email: email
            }
        })
        if(!user){
            // return res.status(401).json({message: 'User does not exist'})
            return NextResponse.json({message: 'User does not exist'},{status:401})
        }
        console.log("user exists");
        
        
        //check if password is correct
        const validPassword = await compare(password, user.Password)
        if(!validPassword){
            return NextResponse.json({message: 'Invalid password'},{status:401}) 
        }
        console.log(user);
        
        //create payload data
        const payload = {
            id: user.Id,
            name: user.Name,
            email: user.Email,
            role: user.Roles
        }
        //create token
        // const token = await jwt.sign(payload, '123456', {expiresIn: "1h"})

        return NextResponse.json({
            message: "Login successful",
            success: true,
            // accessToken: token,
            expiresIn: 3600000, // 1 hour in milliseconds
            status:200,
            user:payload
        })
        

    } catch (error) {
        console.log(error)
        return NextResponse.json({message:'Internal Server Error',success:false},{status:500});
        
    }
}