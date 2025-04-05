import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db("blink");
    const collection = db.collection("links");
    const body = await request.json();
    const doc=await collection.findOne({handle:body.handle})
    if(doc){
        return Response.json({success: false,message: "Handle already exists"});
    }
    const result=await collection.insertOne(body);
    return Response.json({success: true,message: "Link added successfully",data:result});
    }
    