import Image from "next/image";
import LevelProgress from "./components/LevelProgress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LevelProgress objetivo={80.000} distanciaActual={75.214} />
    </main>
  );
}
