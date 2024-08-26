import "./App.css";
import { CardGameWithHref } from "./components/organisms/CardGame/CardGame";
import { useNovelsList } from "./api/novels";

function App() {
  const { novels, isLoading } = useNovelsList();
  return (
    <>
      <div className="m-2 grid grid-cols-3 gap-2">
        {!isLoading &&
          novels.map((novel) => (
            // <Link key={novel.id} href={`/novels/${novel.id}`} passHref>
            <CardGameWithHref data={novel} />
            // </Link>
          ))}
      </div>
    </>
  );
}

export default App;
