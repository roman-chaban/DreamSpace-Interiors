import { useCallback, useState } from 'react';

interface ItemCounterProps {
  productItem: number;
}

export const useProductItemCounter = ({ productItem }: ItemCounterProps) => {
  const [productItemNumber, setProductItemNumber] =
    useState<number>(productItem);

  const onAddProduct = useCallback(() => {
    setProductItemNumber((prevProductItem) => prevProductItem + 1);
  }, []);

  const onDeleteProduct = useCallback(() => {
    setProductItemNumber((prevProductItem) =>
      prevProductItem > 0 ? prevProductItem - 1 : prevProductItem
    );
  }, []);

  return {
    productItemNumber,
    onAddProduct,
    onDeleteProduct,
  };
};
