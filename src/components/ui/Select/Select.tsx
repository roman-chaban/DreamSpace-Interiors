'use client';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SelectProps } from '@/types/select-options';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';

export const CustomSelect: FC<SelectProps> = ({
  options,
  defaultValue,
  onChange,
  selectLabel,
  classNames,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');
  const theme = useAppSelector((state) => state.theme.theme);

  const handleSelectOption = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const isSortBy = defaultValue === 'Sort by';

  const style = {
    color: isSortBy ? (theme === 'dark' ? colors.black : colors.white) : '',
  };

  return (
    <div className={classNames.selectContainer}>
      <label
        htmlFor="customSelect"
        className={classNames.label}
        style={{ color: theme === 'dark' ? colors.black : colors.white }}
      >
        {selectLabel}
      </label>

      <div
        id="customSelect"
        className={classNames.select}
        onClick={() => setIsOpen((prev) => !prev)}
        style={style}
      >
        {selectedValue || defaultValue || 'Choose an option'}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={classNames.optionsContainer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <motion.li
                key={option.value}
                className={classNames.option}
                onClick={() => handleSelectOption(option.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
