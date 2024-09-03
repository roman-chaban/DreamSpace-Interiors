'use client';

import products from '@/services/products/products.json';

interface Params {
  params: {
    title: string;
  };
}

export default function Product({ params: { title } }: Params) {
  const findCurrentProduct = products.find(
    (product) => product.title === title.replaceAll('-', ' ')
  );

  return (
    <section>
      <h1>{findCurrentProduct?.title}</h1>
    </section>
  );
}
