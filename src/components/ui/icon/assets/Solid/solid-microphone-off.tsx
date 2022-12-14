import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8908 15.4765C17.5893 14.4957 18.0001 13.2958 18.0001 12V10C18.0001 9.44772 18.4478 9 19.0001 9C19.5523 9 20.0001 9.44772 20.0001 10V12C20.0001 13.8487 19.373 15.551 18.3199 16.9056L21.7072 20.2929C22.0977 20.6834 22.0977 21.3166 21.7072 21.7071C21.3166 22.0976 20.6835 22.0976 20.293 21.7071L16.9057 18.3199C15.7992 19.18 14.4608 19.756 13.0001 19.9381V21H16.0001C16.5523 21 17.0001 21.4477 17.0001 22C17.0001 22.5523 16.5523 23 16.0001 23H8.00006C7.44778 23 7.00006 22.5523 7.00006 22C7.00006 21.4477 7.44778 21 8.00006 21H11.0001V19.9381C7.05375 19.446 4.00006 16.0796 4.00006 12V10C4.00006 9.44772 4.44778 9 5.00006 9C5.55235 9 6.00006 9.44772 6.00006 10V12C6.00006 15.3137 8.68635 18 12.0001 18C13.2959 18 14.4958 17.5892 15.4766 16.8907L14.032 15.4462C13.4365 15.7981 12.7419 16 12.0001 16C9.79092 16 8.00006 14.2091 8.00006 12V9.41421L2.29295 3.70711C1.90243 3.31658 1.90243 2.68342 2.29295 2.29289C2.68348 1.90237 3.31664 1.90237 3.70717 2.29289C8.10427 6.69 12.494 11.0797 16.8908 15.4765Z"
        fill="#034AD8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.35349 3.3535L16 11V5C16 2.79086 14.2091 1 12 1C10.3778 1 8.98113 1.96566 8.35349 3.3535Z"
        fill="#034AD8"
      />
    </svg>
  );
};
