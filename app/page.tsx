import Appbar from "@/components/Appbar";
import Chat from "@/components/Chat";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions)

  if(!session){
    redirect("/signin")
  }
  return (
    <main className="max-h-screen ">
      <Appbar name={session.user.name} />
      <Chat />
    </main>
  );
}
