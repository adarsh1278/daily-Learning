import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
    const respone =await prisma.post.create({
        data: {
            title: "Hello World",
            content:"first program",
            authorId:1   
        }   
    })
    console.log(respone)
}
main()