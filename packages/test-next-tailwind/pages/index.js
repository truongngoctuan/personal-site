import React from "react";
import Head from "next/head";
import Link from "next/link";
import { CardGameWithHref } from "../components/organisms/CardGame/CardGame";
import { ParagraphRenderer } from "@/components/organisms/ParagraphRenderer/ParagraphRenderer";
import { useNovelsList } from "./api/novels";

export default function Home() {
  const { novels, isLoading } = useNovelsList();
  return (
    <div className="flex flex-col items-center justify-center justify-items-stretch min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-col  py-2">
        <div className="prose">
          <ParagraphRenderer
            data={{
              title: "asdf",
              plan: [{ title: "asdf", content: "asdfff asdf asdf asdf asdf" }],
            }}
          />
          <h1>Welcome!</h1>
        </div>
        {/* <div className="m-2 grid grid-cols-3 gap-2">
          {!isLoading &&
            novels.map((novel) => (
              <Link key={novel.id} href={`/novels/${novel.id}`} passHref>
                <CardGameWithHref data={novel} />
              </Link>
            ))}
        </div> */}
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by tntuan
        </a>
      </footer> */}
    </div>
  );
}
