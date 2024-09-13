import { ShopNavItem, ShopNavItems } from '@/constants/shopNav';
import { type FC } from 'react';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { CustomSelect } from '@/components/ui/Select/Select';
import { SelectClassNames } from '@/types/select-options';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

interface ShopNavProps {
  items: ShopNavItems;
  onSelectContent: (id: number) => void;
  selectedItemId: number;
  title?: string;
  onSortChange: (option: string) => void;
}

const options = [
  { label: 'lowest price', value: 'Lowest price' },
  { label: 'highest price', value: 'Highest price' },
  { label: 'popularity', value: 'Popularity' },
  { label: 'rating', value: 'Rating' },
];

const classNames: SelectClassNames = {
  label: styles.customSelect,
  select: styles.select,
  defaultOption: styles.selectDefaultOption,
  option: styles.selectOption,
  optionsContainer: styles.optionsContainer,
  selectContainer: styles.selectContainer,
};

export const ShopNav: FC<ShopNavProps> = ({
  items,
  onSelectContent,
  selectedItemId,
  title,
  onSortChange,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const handleSortChange = (selectedOption: string) => {
    onSortChange(selectedOption);
  };

  return (
    <div className={styles.shopProductsNav}>
      <h4
        className={styles.navTitle}
        style={{ color: theme === 'dark' ? colors.black : colors.white }}
      >
        {title}
      </h4>
      <div className={styles.navSelectFeatures}>
        <CustomSelect
          defaultValue="Sort by"
          options={options}
          classNames={classNames}
          onChange={(selectedValue) => handleSortChange(selectedValue)}
        />
        <div className={styles.selectedOptions}>
          {items.map((item: ShopNavItem) => (
            <Button
              type="button"
              className={`${styles.shopNavItem} ${
                item.id === selectedItemId ? styles.active : ''
              }`}
              key={item.id}
              onClick={() => onSelectContent(item.id)}
            >
              <Icon item={item} selectedItemId={selectedItemId} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
