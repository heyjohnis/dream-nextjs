import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  return <div>{params.slug} page</div>;
}

export function generateStaticParams() {
  const products = ["pants", "shirts", "socks"];
  return products.map((product) => ({ slug: product }));
}

/* 
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
*/
