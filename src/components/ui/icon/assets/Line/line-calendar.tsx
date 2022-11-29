import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M16 2V5M8 2V5M4 9H20M6 21H18C19.1046 21 20 20.1046 20 19V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V19C4 20.1046 4.89543 21 6 21Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
