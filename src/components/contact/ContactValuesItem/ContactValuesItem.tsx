import { FC } from 'react';
import { Value, ThemedIcon } from '@/constants/valuesItems';
import styles from '@/components/contact/ContactValues/ContactValues.module.scss';
import { useTheme } from '@/hooks/useTheme';
import { colors } from '@/theme/theme-variables';

interface ValueItemProps {
  item: Value;
}

export const ContactValuesItem: FC<ValueItemProps> = ({ item }) => {
  const { theme } = useTheme();
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
