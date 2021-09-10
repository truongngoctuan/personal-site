import { useNovelChapters } from "../../api/novels";
import Layout from "../../layout";
import Tome from "../../../components/organisms/Tome/Tome";

export default function Post({ slug }) {
  const { tomes, isLoading } = useNovelChapters(slug);
  return (
    <Layout>
      <>
        {tomes.map((tome) => (
          <Tome key={tome.title} novelSlug={slug} data={tome}></Tome>
        ))}
      </>
    </Layout>
  );
}

function getFakeNovels() {
  return [
    {
      params: {
        slug: "41494",
      },
    },
    {
      params: {
        slug: "pre-rendering",
      },
    },
  ];
}

export async function getStaticPaths() {
  const paths = getFakeNovels();
  return {
    paths,
    // prevetn 404
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
