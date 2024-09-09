import { FC } from 'react';
import { Value, ThemedIcon } from '@/constants/valuesItems';
import styles from '@/components/contact/ContactValues/ContactValues.module.scss';
import { colors } from '@/theme/theme-variables';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';

interface ValueItemProps {
  item: Value;
}

export const ContactValuesItem: FC<ValueItemProps> = ({ item }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <ThemedIcon icon={item.icon} />
        <div
          className={styles.itemTitles}
          style={{ color: theme === 'dark' ? colors.black : colors.white }}
        >
          <h4
            className={styles.itemTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            {item.title}
          </h4>
          <p
            className={styles.itemSubTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            {item.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
