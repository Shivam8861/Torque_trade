"USE SERVER";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";


export async function getAdmin(){
   const {userId} = await auth();

   if (!userId) throw new Error ("unauthorized");
    
   const user = await db.user.findUnique({
    where:{clerkUserId:userId}
   });

   if(!user || user.role !=="ADMIN"){
    return {authorized:false, reason:"not an admin"};
   }
  
    return{authorized:true,user}
}