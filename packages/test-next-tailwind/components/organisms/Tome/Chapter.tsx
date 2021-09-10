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
      <a className="hover:text-orange-900">{name}</a>
    </Link>
  );
};

export default Chapter;
