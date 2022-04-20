import { Chapter } from "./Chapter";

export interface Comment {
  user: { avatar: string; name: string };
  createdAt: string;
  chapter: Partial<Chapter>;
  message: string;
  reactions: {
    likes: number;
    replies: number;
  };
}
