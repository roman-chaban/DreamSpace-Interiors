import { useEffect, useState } from 'react';

export const useScreenResize = (pxValue: number) => {
  const [isResize, setIsResize] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResize(window.innerWidth <= pxValue);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pxValue]);
  return { isResize };
};
