import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M7.27336 14.672L11.8464 9.18437C11.9263 9.08842 12.0737 9.08842 12.1536 9.18437L16.7266 14.672C16.8352 14.8022 16.7426 15 16.573 15H7.42701C7.25744 15 7.16481 14.8022 7.27336 14.672Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
