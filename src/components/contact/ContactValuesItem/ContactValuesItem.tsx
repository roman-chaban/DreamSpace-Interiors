import { FC } from 'react';
import { Value, ThemedIcon } from '@/constants/valuesItems';
import styles from '@/components/contact/ContactValues/ContactValues.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { getValueStyle } from '@/components/themeStyles/contactValuesStyles/contactValuesStyles';

interface ValueItemProps {
  item: Value;
}

export const ContactValuesItem: FC<ValueItemProps> = ({ item }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <ThemedIcon icon={item.icon} />
        <div className={styles.itemTitles} style={getValueStyle(theme)}>
          <h4 className={styles.itemTitle} style={getValueStyle(theme)}>
            {item.title}
          </h4>
          <p className={styles.itemSubTitle} style={getValueStyle(theme)}>
            {item.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
