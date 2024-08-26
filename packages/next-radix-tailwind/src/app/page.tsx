"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useNovelsList } from "./api/novels";
import Link from "next/link";
import { CardGameWithHref } from "@/components/organisms/CardGame/CardGame";

export default function Home() {
  const { novels, isLoading } = useNovelsList();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex h-56 flex-col">
        {/* <Button size="lg" variant="destructive">
          Here button
        </Button> */}
        <div className="m-2 grid grid-cols-3 gap-2">
          {!isLoading &&
            novels.map((novel) => (
              <Link key={novel.id} href={`/novels/${novel.id}`} passHref>
                <CardGameWithHref data={novel} />
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
