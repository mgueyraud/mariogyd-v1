import type { NextApiRequest, NextApiResponse } from 'next'
import {Post} from '@interface/Post';
import { getAllPosts } from '../../api/index';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
    const { offset , limit } = req.query;

    const offsetNum = parseInt(offset as string);
    const limitNum = parseInt(limit as string);

    const posts = getAllPosts().slice(limitNum - 1, limitNum + offsetNum - 1);

    res.setHeader("x-total-count", `${getAllPosts().length}`);

    res.status(200).json(posts);
}
