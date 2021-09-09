import Head from "next/head";
import Link from "next/link";
import CardGame from "../components/organisms/CardGame/CardGame";
import { useNovelsList } from "./api/novels";

export default function Home() {
  const { novels, isLoading, isError } = useNovelsList();
  console.log("novels", novels);
  return (
    <div className="flex flex-col items-center justify-center justify-items-stretch min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-col  py-2">
        <div className="prose">
          <h1>Welcome!</h1>
        </div>
        <div className="m-2 grid grid-cols-3 gap-2">
          {!isLoading &&
            novels.map((cardData) => (
              // todo fix key === href
              <Link key={cardData.id} href="/novels/first-novel">
                <CardGame data={cardData} />
              </Link>
            ))}
        </div>
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
