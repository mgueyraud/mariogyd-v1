import { Post } from "@interface/Post";
import { sync } from "glob";
import path from "path";
import fs from 'fs';
import matter from "gray-matter";

const POST_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (): string[] => {
    const paths = sync(`${POST_PATH}/*.mdx`);
    
    return paths.map(path => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        const [slug] = fileName.split(".");
        return slug;
    });
};

export const getPostFromSlug = (slug:string): Post => {
    const postPath = path.join(POST_PATH, `${slug}.mdx`);
    const sourceContent = fs.readFileSync(postPath);
    const {content, data} = matter(sourceContent);

    return {
        content,
        meta: {
            excerpt: data.excerpt ?? "",
            slug,
            title: data.title ?? slug,
            date: `${data.date}`,
        }
    }
};

export const getAllPosts = () => {
    const posts = getSlugs()
        .map(slug => getPostFromSlug(slug))
        .sort((postOne, postTwo) => {
            if(postOne.meta.date > postTwo.meta.date) return 1;
            if(postOne.meta.date < postTwo.meta.date) return -1;
            return 0;
        })
        .reverse();
    
    return posts;
};