import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/ui/DropDown.module.scss';

interface Option {
  label: string;
  value: string;
  href?: string;
}

interface DropDownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  classNames: {
    container: string;
    header: string;
    list: string;
    listItem: string;
    icon?: string;
    link: string;
  };
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  onSelect,
  placeholder = 'Select an option',
  icon,
  classNames,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string, href?: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
    if (href) {
      window.location.href = href;
    }
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={classNames.container}>
      <button
        type="button"
        className={classNames.header}
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : placeholder}
        </span>
        {icon && (
          <span
            className={`${classNames.icon} ${isOpen ? styles.open : ''}`}
            aria-hidden="true"
            style={{ height: 24 }}
          >
            {icon}
          </span>
        )}
      </button>
      {isOpen && (
        <ul className={classNames.list} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={classNames.listItem}
              role="option"
              aria-selected={selectedValue === option.value}
              onClick={() => handleSelect(option.value, option.href)}
              tabIndex={0}
              onKeyUp={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(option.value, option.href);
                }
              }}
            >
              {option.href ? (
                <Link className={classNames.link} href={option.href}>
                  {option.label}
                </Link>
              ) : (
                option.label
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
