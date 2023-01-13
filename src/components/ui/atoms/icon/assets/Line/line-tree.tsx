import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 16C11.05 16 10.19 15.65 9.5 15.1C8.81 15.65 7.95 16 7 16C4.79 16 3 14.21 3 12C3 10.5 3.83 9.22 5.05 8.53C5.25 6.84 6.48 5.48 8.11 5.11C8.51 3.33 10.1 2 12 2C13.9 2 15.48 3.33 15.89 5.11C17.52 5.48 18.75 6.84 18.95 8.53C20.17 9.22 21 10.5 21 12C21 14.21 19.21 16 17 16C16.05 16 15.19 15.65 14.5 15.1C13.81 15.65 12.95 16 12 16ZM12 16V22M12 22H16M12 22H8"
        stroke="#034AD8"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
