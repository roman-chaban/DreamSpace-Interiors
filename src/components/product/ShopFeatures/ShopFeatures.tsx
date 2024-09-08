import { CustomSelect } from '@/components/ui/Select/Select';
import { Option, SelectClassNames } from '@/types/select-options';
import type { FC } from 'react';
import styles from './ShopFeatures.module.scss';

export const options: Option[] = [
  { label: 'Living Room', value: 'living-room' },
  { label: 'Bedroom', value: 'bedroom-room' },
  { label: 'Bathroom', value: 'bathroom-room' },
  { label: 'Dining', value: 'dining' },
  { label: 'Outdoor', value: 'outdoor' },
];

export const priceOptions: Option[] = [
  { label: 'Before $50', value: '0-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: '$100 - $200', value: '100-200' },
  { label: 'More $200', value: '200+' },
];

const classNames: SelectClassNames = {
  label: styles.customSelect,
  select: styles.select,
  defaultOption: styles.selectDefaultOption,
  option: styles.selectOption,
  optionsContainer: styles.optionsContainer,
  selectContainer: styles.selectContainer,
};

export const ShopFeatures: FC = () => {
  return (
    <div className={styles.features}>
      <CustomSelect
        options={options}
        selectLabel="CATEGORIES"
        classNames={classNames}
        defaultValue="All Rooms"
      />
      <CustomSelect
        options={priceOptions}
        selectLabel="PRICE"
        classNames={classNames}
        defaultValue="All Price"
      />
    </div>
  );
};
