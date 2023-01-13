import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M14 11V17M10 11L10 17M4 5H6M6 5H18M6 5V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V5M18 5H20M17 5C16.2951 3.86558 15.5855 2 14 2H10C8.41749 2 7.71624 3.86904 7 5"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
