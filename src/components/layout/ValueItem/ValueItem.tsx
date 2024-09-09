import { ThemedIcon } from '@/constants/valuesItems';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import { colors } from '@/theme/theme-variables';
import { ClassNames, ValueItemProps } from '@/types/value-item';
import type { FC } from 'react';

export const ValueItem: FC<ValueItemProps & ClassNames> = ({
  item,
  classNames,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={classNames.item}>
      <div
        className={classNames.itemContainer}
        style={{
          backgroundColor: theme === 'dark' ? '' : colors.globalBackground,
        }}
      >
        <ThemedIcon icon={item.icon} />
        <div className={classNames.itemTitles}>
          <h4
            className={classNames.itemTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            {item.title}
          </h4>
          <p
            className={classNames.itemSubTitle}
            style={{ color: theme === 'dark' ? colors.black : colors.white }}
          >
            {item.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
