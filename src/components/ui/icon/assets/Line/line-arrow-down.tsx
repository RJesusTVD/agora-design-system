 import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M16.573 9L7.42701 9C7.25744 9 7.16481 9.19777 7.27336 9.32804L11.8464 14.8156C11.9263 14.9116 12.0737 14.9116 12.1536 14.8156L16.7266 9.32804C16.8352 9.19777 16.7426 9 16.573 9Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
