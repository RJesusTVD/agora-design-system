import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.18 1C2.42373 1 1 2.42373 1 4.18V19.82C1 21.5763 2.42373 23 4.18 23H19.82C21.5763 23 23 21.5763 23 19.82V4.18C23 2.42373 21.5763 1 19.82 1H4.18Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.17999C3 3.52829 3.52831 3 4.18 3H6V6H3V4.17999ZM8 11V3H16V11H8ZM18 6V3H19.82C20.4717 3 21 3.52829 21 4.17999V6H18ZM18 8H21V11H18V8ZM18 13H21V16H18V13ZM18 18H21V19.82C21 20.4717 20.4717 21 19.82 21H18V18ZM16 13V21H8V13H16ZM6 18V21H4.18C3.52831 21 3 20.4717 3 19.82V18H6ZM6 16H3V13H6V16ZM6 11H3V8H6V11Z"
        fill="#034AD8"
      />
    </svg>
  );
};
