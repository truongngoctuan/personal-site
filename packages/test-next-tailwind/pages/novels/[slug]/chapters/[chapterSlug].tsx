import { useNovelChapters } from "../../../api/novels";
import Layout from "../../../layout";

export default function Post({ slug, chapterSlug }) {
  return (
    <Layout>
      <>
        {slug} - {chapterSlug}
      </>
    </Layout>
  );
}

function getFakeData() {
  return [
    {
      params: {
        slug: "a",
        chapterSlug: "41494",
      },
    },
    {
      params: {
        slug: "b",
        chapterSlug: "pre-rendering",
      },
    },
  ];
}

export async function getStaticPaths() {
  const paths = getFakeData();
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
