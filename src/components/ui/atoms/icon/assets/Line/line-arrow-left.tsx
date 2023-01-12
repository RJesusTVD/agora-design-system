import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M9.18437 11.8464L14.672 7.27336C14.8022 7.16481 15 7.25744 15 7.42701V16.573C15 16.7426 14.8022 16.8352 14.672 16.7266L9.18437 12.1536C9.08842 12.0737 9.08842 11.9263 9.18437 11.8464Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
