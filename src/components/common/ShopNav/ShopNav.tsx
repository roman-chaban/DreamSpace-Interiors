import { ShopNavItem, ShopNavItems } from '@/constants/shopNav';
import { cloneElement, type FC } from 'react';
import styles from '@/styles/pagesStyles/Shop/Shop.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';

interface ShopNavProps {
  items: ShopNavItems;
  onSelectContent: (id: number) => void;
  selectedItemId: number;
  title?: string;
}

export const ShopNav: FC<ShopNavProps> = ({
  items,
  onSelectContent,
  selectedItemId,
  title
}) => {
  return (
    <div className={styles.shopProductsNav}>
      <h4 className={styles.navTitle}>{title}</h4>
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
  );
};
