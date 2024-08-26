import { cloneElement, ReactNode } from 'react';
import { ShopNavItem } from '@/constants/shopNav';

interface IconProps {
  item: ShopNavItem;
  selectedItemId: number;
}

export const Icon: React.FC<IconProps> = ({ item, selectedItemId }) => (
  <div
    style={{
      color: selectedItemId === item.id ? '#141718' : '#6C7275',
    }}
  >
    {cloneElement(item.icon, {
      style: { fill: 'currentColor' },
    })}
  </div>
);
