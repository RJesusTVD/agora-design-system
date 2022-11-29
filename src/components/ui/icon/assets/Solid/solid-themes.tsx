import * as React from 'react';

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
        d="M1 4.18C1 2.42373 2.42373 1 4.18 1H19.82C21.5763 1 23 2.42373 23 4.18V19.82C23 21.5763 21.5763 23 19.82 23H4.18C2.42373 23 1 21.5763 1 19.82V4.18ZM4.18 3C3.52831 3 3 3.52829 3 4.17999V6H6V3H4.18ZM8 3V11H16V3H8ZM18 3V6H21V4.17999C21 3.52829 20.4717 3 19.82 3H18ZM21 8H18V11H21V8ZM21 13H18V16H21V13ZM21 18H18V21H19.82C20.4717 21 21 20.4717 21 19.82V18ZM16 21V13H8V21H16ZM6 21V18H3V19.82C3 20.4717 3.52831 21 4.18 21H6ZM3 16H6V13H3V16ZM3 11H6V8H3V11Z"
        fill="#034AD8"
      />
    </svg>
  );
};
