import Ranking from "./components/Ranking";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Ranking position={46896} change="Aumentar" />
    </main>
  );
}