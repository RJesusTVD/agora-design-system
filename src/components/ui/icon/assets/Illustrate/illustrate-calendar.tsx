import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10H3V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V10Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V3H6C4.34315 3 3 4.34315 3 6V10H21V6C21 4.34315 19.6569 3 18 3H17V2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2Z"
        fill="#034AD8"
      />
    </svg>
  );
};
