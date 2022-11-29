import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M5 20.7962V2H19V20.7962L12.6585 15.2474L12 14.6712L11.3415 15.2474L5 20.7962Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
