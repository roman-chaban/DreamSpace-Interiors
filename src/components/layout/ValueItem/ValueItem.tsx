import { getItemContainerStyles, getValueItemTitleStyle } from '@/components/themeStyles/valueItemStyles/valueItemStyles';
import { ThemedIcon } from '@/constants/valuesItems';
import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
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
        style={getItemContainerStyles(theme)}
      >
        <ThemedIcon icon={item.icon} />
        <div className={classNames.itemTitles}>
          <h4
            className={classNames.itemTitle}
            style={getValueItemTitleStyle(theme)}
          >
            {item.title}
          </h4>
          <p
            className={classNames.itemSubTitle}
            style={getValueItemTitleStyle(theme)}
          >
            {item.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
