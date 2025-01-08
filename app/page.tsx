import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Appbar name={""} />
      <Sidebar />
    </main>
  );
}
