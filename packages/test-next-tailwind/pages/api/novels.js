import useSWR from "swr";

const fetcherText = (...args) => fetch(...args).then((res) => res.text());

export function useNovelsList() {
  const { data, error } = useSWR(`/novels-lists.json`, fetcherText);

  return {
    novels: data ? JSON.parse(data) : [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useNovelChapters(novelSlug) {
  if (!novelSlug) {
    return {
      tomes: [],
      isLoading: true,
      isError: false,
    };
  }
  const { data, error } = useSWR(
    `/novels/${novelSlug}/chapter-list.json`,
    fetcherText
  );

  const jsonData = data ? JSON.parse(data) : { items: [] };
  const tomes = jsonData.items;

  return {
    tomes,
    isLoading: !error && !data,
    isError: error,
  };
}