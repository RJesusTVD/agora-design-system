import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M20 8.4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V8.4M2 10L12 2L22 10M15 22V14C15 13.4477 14.5523 13 14 13H10C9.44772 13 9 13.4477 9 14V22H15Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
