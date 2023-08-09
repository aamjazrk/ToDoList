import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    if(req.method == 'GET'){
        try {
            
            return NextResponse.json({message:'Hi'}, {status:200})
          } catch (err) {
            return NextResponse.json({error:'error'}, {status:500})
          }

    }
    
  }