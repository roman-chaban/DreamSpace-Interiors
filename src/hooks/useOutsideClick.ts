'use client';

import { RefObject, useEffect } from 'react';

interface useOutsideClickProps {
  ref: RefObject<HTMLElement | null>;
  onClose: () => void;
  isMenuOpen: boolean;
}

export const useOutsideClick = ({
  ref,
  onClose,
  isMenuOpen,
}: useOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, onClose, ref]);
};
