export interface PostMeta{
    excerpt: string;
    slug: string;
    title:string;
    date: string;
}

export interface Post {
    content: string;
    meta: PostMeta;
}