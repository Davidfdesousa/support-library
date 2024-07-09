 'use client';
import { Button } from "@repo/ui/button";
import { Link } from "@repo/ui/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Button appName="ONE" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</Button>
      <Link>2024</Link>
    </main>
  );
}
