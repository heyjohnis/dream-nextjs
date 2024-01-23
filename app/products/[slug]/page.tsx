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
  const products = [""];
}
