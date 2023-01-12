import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M22 7L13.029 12.3826C12.3956 12.7626 11.6044 12.7626 10.971 12.3826L2 7M4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
