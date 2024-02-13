import React, { FC } from "react";

type Props = {
  classNames?: string;
};

const EyeEmpty: FC<Props> = ({ classNames }) => {
  return (
    <svg
      className={classNames}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.83656 10.3433C3.96374 9.70883 3.20017 8.88025 2.61897 8.03127C4.11404 6.20369 5.71971 4.5 8.00001 4.5C10.2803 4.5 11.886 6.20367 13.381 8.03127C12.7998 8.88025 12.0363 9.70883 11.1635 10.3433C10.1876 11.0527 9.10333 11.5 8.00001 11.5C6.89669 11.5 5.81238 11.0527 4.83656 10.3433ZM8.00001 3.5C5.05325 3.5 3.11432 5.82728 1.61125 7.68556C1.47657 7.85207 1.46289 8.08587 1.57723 8.26695C2.23586 9.31005 3.15787 10.3593 4.24857 11.1522C5.33828 11.9443 6.62445 12.5 8.00001 12.5C9.37557 12.5 10.6617 11.9443 11.7514 11.1522C12.8421 10.3593 13.7641 9.31005 14.4228 8.26695C14.5371 8.08587 14.5234 7.85208 14.3888 7.68557C12.8857 5.82725 10.9468 3.5 8.00001 3.5ZM7.16667 8C7.16667 7.53976 7.53976 7.16667 8 7.16667C8.46024 7.16667 8.83333 7.53976 8.83333 8C8.83333 8.46024 8.46024 8.83333 8 8.83333C7.53976 8.83333 7.16667 8.46024 7.16667 8ZM8 6.16667C6.98748 6.16667 6.16667 6.98748 6.16667 8C6.16667 9.01252 6.98748 9.83333 8 9.83333C9.01252 9.83333 9.83333 9.01252 9.83333 8C9.83333 6.98748 9.01252 6.16667 8 6.16667Z"
      />
    </svg>
  );
};

export default EyeEmpty;