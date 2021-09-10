import React from "react";
import Link from "next/link";
import { ChapterData } from "./type";
type ChapterProps = {
  novelSlug: string;
  data: ChapterData;
} & React.HTMLAttributes<HTMLDivElement>;
const Chapter = ({ novelSlug, data, ...rest }: ChapterProps) => {
  const { slug, name } = data;
  return (
    <Link href={`/novels/${novelSlug}/chapters/${data.slug}`} {...rest}>
      {name}
    </Link>
  );
};

export default Chapter;
