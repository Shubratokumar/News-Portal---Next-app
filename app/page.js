import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <Button variant="ghost" className="transition-colors ease-in-out text-white hover:text-black">
        <Link  href="/news">
          Explore News
        </Link>
      </Button>
    </main>
  );
}
