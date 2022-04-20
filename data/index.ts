import { Chapter } from "../types/Chapter";
import { Comment } from "../types/Comment";
import { TitleRelated, Title } from "../types/Title";

export const TITLE: Title = {
  name: "Kasane",
  thumbnail: "/images/thumb.png",
  author: "Kodansha",
  category: { name: "Drama" },
  totalChapter: 10,
  reads: 74483,
  likes: 15863,
  tags: [{ name: "NEW" }, { name: "TRENDING" }],
  genres: [{ name: "Horror" }, { name: "Psychological" }],
  description: `Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.`,
  freeChapter: 3,
  totalPriceCoin: 35,
  discount: 50,
  copyright: "© Daruma Matsuura / Kodansha Ltd.",
  credits: [
    { name: "Kodansha", position: "Publisher", avatar: "/images/avatar-1.png" },
    {
      name: "Johnnie Christmas",
      position: "Story",
      avatar: "/images/avatar-2.png",
    },
    { name: "Jack T. Cole", position: "Art", avatar: "/" },
  ],
  updatedAt: "2 days ago",
  originMedia: "Print",
  styleOrigin: "Japanese Comics (Manga)",
  color: "Black & White",
  ageRating: "Mature (18+)",
  images: [
    "/images/title-image-1.png",
    "/images/title-image-2.png",
    "/images/title-image-3.png",
    "/images/title-image-2.png",
    "/images/title-image-2.png",
  ],
  otherName: "Kasane -voleuse de visage",
};

export const CHAPTERS: Chapter[] = [
  {
    name: "Chapter 1",
    thumbnail: "/images/chapter-thumb.png",
    priceCoin: 0,
    readingProgress: 0,
  },
  {
    name: "Chapter 2",
    thumbnail: "/images/chapter-thumb.png",
    priceCoin: 0,
    readingProgress: 0,
  },
  {
    name: "Chapter 3",
    thumbnail: "/images/chapter-thumb.png",
    priceCoin: 0,
    readingProgress: 0,
  },
  {
    name: "Chapter 4",
    thumbnail: "/images/chapter-thumb.png",
    priceCoin: 5,
    readingProgress: 0,
  },
  {
    name: "Chapter 5",
    thumbnail: "/images/chapter-thumb.png",
    priceCoin: 5,
    readingProgress: 0,
  },
];

export const RELATED_TITLES: TitleRelated[] = [
  {
    name: "Title name 1",
    reads: 46500,
    thumbnail: "/images/title-related-thumbnail.png",
    category: { name: "PREQUEL" },
    isPremium: true,
  },
  {
    name: "Title name 2",
    reads: 46500,
    thumbnail: "/images/title-related-thumbnail.png",
    category: { name: "PREQUEL" },
    isPremium: true,
  },
  {
    name: "Title name 3",
    reads: 46500,
    thumbnail: "/images/title-related-thumbnail.png",
    category: { name: "PREQUEL" },
    isPremium: true,
  },
];

export const COMMENTS: Comment[] = [
  {
    user: { avatar: "/images/avatar-1.png", name: "Han Solo" },
    chapter: { name: "Chapter 35" },
    message: `I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.`,
    reactions: {
      likes: 61,
      replies: 35,
    },
    createdAt: "2022-04-20 00:00:00",
  },
];
