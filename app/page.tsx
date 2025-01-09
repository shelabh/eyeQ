import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions)

  if(!session){
    redirect("/signin")
  }
  return (
    <main className="min-h-screen">
      <Appbar name={session.user.name} />
      <Sidebar />
    </main>
  );
}
