"use server"
import prisma from "@/lib/prisma"

export default async function logout(name:string){
    await prisma.user.update({
        where: {
            email: name
        },
        data: {
            token: ""
        }
    })
}