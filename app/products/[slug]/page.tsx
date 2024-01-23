import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
// export const metadata = {
//   title: "제품 판매 ",
//   description: "제품 판매 ",
// };
// link: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} 제품 판매`,
    description: `${params.slug} 제품 판매`,
  };
}

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
