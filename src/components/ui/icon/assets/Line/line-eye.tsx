import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 5C4 5 2 12 2 12C2 12 4 19 12 19C20 19 22 12 22 12C22 12 20 5 12 5Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
