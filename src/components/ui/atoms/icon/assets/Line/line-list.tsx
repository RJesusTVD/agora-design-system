import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M10 6H16M10 14H16M10 10H21M10 18H21M4 10H6C6.55228 10 7 9.55228 7 9V7C7 6.44772 6.55228 6 6 6H4C3.44772 6 3 6.44772 3 7V9C3 9.55228 3.44772 10 4 10ZM4 18H6C6.55228 18 7 17.5523 7 17V15C7 14.4477 6.55228 14 6 14H4C3.44772 14 3 14.4477 3 15V17C3 17.5523 3.44772 18 4 18Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
