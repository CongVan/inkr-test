// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TITLE, RELATED_TITLES, CHAPTERS, COMMENTS } from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res
    .status(200)
    .json({
      title: TITLE,
      relatedTitles: RELATED_TITLES,
      chapters: CHAPTERS,
      comments: COMMENTS,
    });
}
