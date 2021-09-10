export type TomeData = {
	id: number;
	title: string;
	chapters: ChapterData[];
};

export type ChapterData = {
	id: number;
	slug: string;
	name: string;
	spoilerTitle: boolean;
};