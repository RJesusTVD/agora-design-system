import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M1 29.5858V1H23V29.5858L12.7071 19.2929L12 18.5858L11.2929 19.2929L1 29.5858Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
