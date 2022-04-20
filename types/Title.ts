import { Category } from "./Category";
import { Genre } from "./Genre";
import { Tag } from "./TitleTag";

export interface Title {
  name: string;
  thumbnail: string;
  images: string[];
  author: string;
  reads: number;
  likes: number;
  category: Category;
  tags: Tag[];
  genres: Genre[];
  totalChapter: number;
  freeChapter: number;
  totalPriceCoin: number;
  discount: number;
  description: string;
  credits: { avatar: string; name: string; position: string }[];
  updatedAt: string;
  ageRating: string;
  color: string;
  originMedia: string;
  styleOrigin: string;
  copyright: string;
  otherName: string;
  isPremium?: boolean;
}

export interface TitleRelated extends Partial<Title> {}
