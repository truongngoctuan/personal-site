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
