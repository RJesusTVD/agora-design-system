import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 7.49335L13.5435 13.2402C12.5944 13.8096 11.4088 13.8102 10.4592 13.2418L1 7.64208V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V7.49335Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.06873 5.35857L11.4855 11.5251C11.8015 11.7147 12.1961 11.7151 12.5125 11.5263L12.5145 11.5251L22.8965 5.21589C22.5517 3.93931 21.3856 3 20 3H4C2.5633 3 1.36248 4.00992 1.06873 5.35857Z"
        fill="#034AD8"
      />
    </svg>
  );
};
