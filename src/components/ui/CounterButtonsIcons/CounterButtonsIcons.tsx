import styles from '@/components/product/ProductInfo/ProductInfo.module.scss';

interface CounterButtonIcon {
  minusIcon: JSX.Element;
  plusIcon: JSX.Element;
}

export const counterButtonIcons: CounterButtonIcon = {
  minusIcon: (
    <svg
      className={styles.counterIcon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.03613 10H15.7028"
        stroke="#121212"
        strokeWidth="0.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plusIcon: (
    <svg
      className={styles.counterIcon}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.46918 1.16663C7.46918 0.907743 7.25931 0.697876 7.00043 0.697876C6.74154 0.697876 6.53168 0.907743 6.53168 1.16663V6.53123H1.16699C0.908109 6.53123 0.698242 6.7411 0.698242 6.99998C0.698242 7.25887 0.908109 7.46873 1.16699 7.46873H6.53168V12.8333C6.53168 13.0922 6.74154 13.302 7.00043 13.302C7.25931 13.302 7.46918 13.0922 7.46918 12.8333V7.46873H12.8337C13.0925 7.46873 13.3024 7.25887 13.3024 6.99998C13.3024 6.7411 13.0925 6.53123 12.8337 6.53123H7.46918V1.16663Z"
        fill="#121212"
      />
    </svg>
  ),
};
