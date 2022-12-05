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
        d="M2 7C2 4.23858 4.23858 2 7 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM14 4C13.4477 4 13 3.55228 13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11C20.4477 11 20 10.5523 20 10V5.41421L13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929L18.5858 4H14Z"
        fill="#034AD8"
      />
    </svg>
  );
};
