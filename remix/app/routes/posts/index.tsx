import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = () => {
  return getPosts();
};

// ...