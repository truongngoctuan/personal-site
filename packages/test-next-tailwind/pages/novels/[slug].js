import Layout from "../layout";

export default function Post({ slug }) {
  return <Layout>hello</Layout>;
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
