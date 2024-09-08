import { ShopNavItem, ShopNavItems } from '@/constants/shopNav';
import { type FC } from 'react';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { CustomSelect } from '@/components/ui/Select/Select';
import { SelectClassNames } from '@/types/select-options';

interface ShopNavProps {
  items: ShopNavItems;
  onSelectContent: (id: number) => void;
  selectedItemId: number;
  title?: string;
}

const options = [
  { label: 'lowest price', value: 'priceAsc' },
  { label: 'highest price', value: 'priceDesc' },
  { label: 'popularity', value: 'popularity' },
  { label: 'rating', value: 'rating' },
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
}) => {
  return (
    <div className={styles.shopProductsNav}>
      <h4 className={styles.navTitle}>{title}</h4>
      <div className={styles.navSelectFeatures}>
        <CustomSelect
          defaultValue="Sort by"
          options={options}
          classNames={classNames}
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
