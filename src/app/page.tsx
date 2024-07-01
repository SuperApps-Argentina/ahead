import React from 'react';
import Ranking from "./components/Ranking";
import Avatar from "./components/avatar/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Avatar imageUrl="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" level={18} />
      {/* <Avatar level={10} /> Este usará la imagen predeterminada */}
      <Ranking position={46896} change="Aumentar" />
    </main>
  );
}