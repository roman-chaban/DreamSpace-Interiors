'use client';

import React, { useState } from 'react';
import styles from '@/styles/ui/DropDown.module.scss';

interface Option {
  label: string;
  value: string;
}

interface DropDownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue
          ? options.find((option) => option.value === selectedValue)?.label
          : placeholder || 'Select an option'}
      </div>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdownListItem}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
