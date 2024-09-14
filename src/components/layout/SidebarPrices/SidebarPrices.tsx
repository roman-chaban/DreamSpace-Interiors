import { FC } from 'react';
import styles from './SidebarPrices.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { getTitleStyle } from '@/components/themeStyles/sidebarStyles/sidebarStyles';
import { PriceItem, priceItems } from '@/fixtures/allPrice/allPrice';

export const SideBarPrices: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={styles.price}>
      <h5 className={styles.priceTitle} style={getTitleStyle(theme)}>
        PRICE
      </h5>
      <div className={styles.priceTitles}>
        {priceItems.map((item: PriceItem) => (
          <div className={styles.priceTitle} key={item.id}>
            <span
              className={styles.title}
              style={{
                color: theme === 'dark' ? colors.darkGray : colors.white,
              }}
            >
              {item.title}
            </span>
            <label htmlFor={`price${item.id}`} className={styles.checkboxLabel}>
              {item.checkbox}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
