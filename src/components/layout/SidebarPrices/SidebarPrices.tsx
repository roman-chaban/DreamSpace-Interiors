import { FC } from 'react';
import styles from './SidebarPrices.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { getTitleStyle } from '@/components/themeStyles/sidebarStyles/sidebarStyles';
import { PriceItem, priceItems } from '@/fixtures/allPrice/allPrice';
import { useAppDispatch } from '@/hooks/redux-hooks/useAppDispatch';
import { setSelectedPrices } from '@/store/slices/FilterSlice';

export const SideBarPrices: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const selectedPrices = useAppSelector((state) => state.filter.selectedPrices);
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (id: number) => {
    const updatePrices = selectedPrices.includes(id)
      ? selectedPrices.filter((priceId) => priceId !== id)
      : [...selectedPrices, id];

    console.log('Updated Selected Prices:', updatePrices);

    dispatch(setSelectedPrices(updatePrices));
  };

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
              <input
                type="checkbox"
                id={`price${item.id}`}
                checked={selectedPrices.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                className={styles.checkboxPrice}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
