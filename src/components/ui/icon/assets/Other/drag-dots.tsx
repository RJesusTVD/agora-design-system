import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M11 8C11 8.55231 10.5527 9 10 9C9.44727 9 9 8.55231 9 8C9 7.44769 9.44727 7 10 7C10.5527 7 11 7.44769 11 8Z"
        fill="#034AD8"
      />
      <path
        d="M11 12C11 12.5523 10.5527 13 10 13C9.44727 13 9 12.5523 9 12C9 11.4477 9.44727 11 10 11C10.5527 11 11 11.4477 11 12Z"
        fill="#034AD8"
      />
      <path
        d="M10 17C10.5527 17 11 16.5523 11 16C11 15.4477 10.5527 15 10 15C9.44727 15 9 15.4477 9 16C9 16.5523 9.44727 17 10 17Z"
        fill="#034AD8"
      />
      <path
        d="M15 8C15 8.55231 14.5527 9 14 9C13.4473 9 13 8.55231 13 8C13 7.44769 13.4473 7 14 7C14.5527 7 15 7.44769 15 8Z"
        fill="#034AD8"
      />
      <path
        d="M14 13C14.5527 13 15 12.5523 15 12C15 11.4477 14.5527 11 14 11C13.4473 11 13 11.4477 13 12C13 12.5523 13.4473 13 14 13Z"
        fill="#034AD8"
      />
      <path
        d="M15 16C15 16.5523 14.5527 17 14 17C13.4473 17 13 16.5523 13 16C13 15.4477 13.4473 15 14 15C14.5527 15 15 15.4477 15 16Z"
        fill="#034AD8"
      />
    </svg>
  );
};
