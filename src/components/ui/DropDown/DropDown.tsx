import Link from 'next/link';
import { useEffect, useState, useRef, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormUp } from 'grommet-icons';
import {
  iconRotation,
  dropdownMenuAnimation,
  listItemHoverTap,
} from '@/animations/dropDown/dropDown';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { DropDownType } from '@/types/drop-down';

export const DropDown: FC<DropDownType> = ({
  options = [],
  classNames,
  buttonLabel,
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useOutsideClick({
    ref: dropDownRef,
    onClose: () => setIsOpenDropDown(false),
    isMenuOpen: isOpenDropDown,
  });

  const handleToggleMenu = () => {
    setIsOpenDropDown((previousOpen) => !previousOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpenDropDown(false);
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const currentIndex = listItemsRef.current.findIndex(
          (item) => item === document.activeElement
        );
        if (event.key === 'ArrowDown' && currentIndex < options.length - 1) {
          listItemsRef.current[currentIndex + 1]?.focus();
        } else if (event.key === 'ArrowUp' && currentIndex > 0) {
          listItemsRef.current[currentIndex - 1]?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [options.length]);

  return (
    <div className={classNames.container} ref={dropDownRef}>
      <motion.button
        className={classNames.button}
        onClick={handleToggleMenu}
        aria-expanded={isOpenDropDown}
        aria-haspopup="true"
      >
        {buttonLabel}{' '}
        <motion.span
          animate={iconRotation(isOpenDropDown)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormUp />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpenDropDown && (
          <motion.ul
            className={classNames.menu}
            role="menu"
            {...dropdownMenuAnimation}
            style={{ position: 'absolute' }}
          >
            {options.length > 0
              ? options.map((option, index) => (
                  <motion.li
                    className={classNames.listItem}
                    key={index}
                    role="menuitem"
                    tabIndex={0}
                    ref={(el) => {
                      listItemsRef.current[index] = el;
                    }}
                    {...listItemHoverTap}
                    onClick={() => {
                      setIsOpenDropDown(false);
                    }}
                  >
                    <Link className={classNames.link} href={option.href}>
                      {option.label}
                    </Link>
                  </motion.li>
                ))
              : 'No options available'}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
