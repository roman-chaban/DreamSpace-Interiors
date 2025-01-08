import type { FC } from 'react';

import { useAppSelector } from '@/hooks/redux-hooks/useAppSelector';
import {
  getItemContainerStyles,
  getValueItemTitleStyle,
} from '@/components/themeStyles/valueItemStyles/valueItemStyles';

import { ThemedIcon } from '@/fixtures/valuesItems/valuesItems';

import { ClassNames, ValueItemProps } from '@/types/value-item';

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
