import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg_black text-fg_white">
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">
          This is a showcase of my skills and projects as a Computer Systems Engineer. Explore the links above to learn more about my work.
        </p>
      </main>
    </div>
  );
}
