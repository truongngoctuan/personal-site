/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";
import fetcher from "./fetcher";

export function useNovelsList() {
  const { data, error } = useSWR(`/novels-lists.json`, fetcher);

  return {
    novels: data ? data : [],
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(
    `/novels/${novelSlug}/chapter-list.json`,
    fetcher
  );

  const jsonData = data ? data : { items: [] };
  const tomes = jsonData.items;

  return {
    tomes,
    isLoading: !error && !data,
    isError: error,
  };
}
