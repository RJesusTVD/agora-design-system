import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M14.8156 11.8464L9.32804 7.27336C9.19777 7.16481 9 7.25744 9 7.42701V16.573C9 16.7426 9.19777 16.8352 9.32804 16.7266L14.8156 12.1536C14.9116 12.0737 14.9116 11.9263 14.8156 11.8464Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
