import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <Link className="px-3 py-2 rounded-lg transition-colors ease-in-out text-white hover:bg-slate-200 hover:text-black" href="/news">Explore News</Link>
    </main>
  );
}
