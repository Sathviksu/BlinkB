import clientPromise from "@/lib/mongodb";
import RootLayout from "@/app/layout";
import { notFound } from "next/navigation";
import Link from "next/link";
export default async function Page({ params }) {
  const handle = (await params).handle
  const client = await clientPromise;
  const db = client.db("blink");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle: handle });
  if(!item){
    return notFound()
}

  return (
    <RootLayout showNavbar={false}>
      <div className="bg-[url('/90595.jpg')] bg-cover">
      <div className="back  text-[#ff006e] h-screen flex flex-col width-[50%] items-center p-[50px] gap-3">
        <img className="h-[120px] w-[120px] rounded-full object-cover border-3 border-green-500" src={item.picture}></img>
        <div className="font-bold text-2xl text-[#ffd60a]">@{item.handle}</div>
        <div className="text-[#2ec4b6] desc max-w-[35%] text-center">{item.desc}</div>
        <div className="links">
                {item.links.map((item, index)=>{
                    return <Link  key={index} href= {item.link}><div className="bg-[#cbf3f0] transition-transform duration-300 transform hover:scale-105
                     h-[50px] text-[20px] font-bold py-4 shadow-lg px-2 min-w-85 flex justify-center items-center rounded-2xl my-3">
                       {item.linktext}
                       
                    </div></Link> 
                })}
            </div>
       
      </div>
      </div>
    </RootLayout>
  );
}