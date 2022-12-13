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
        d="M18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6ZM14.126 7C14.5701 5.27477 16.1362 4 18 4C20.2091 4 22 5.79086 22 8C22 10.2091 20.2091 12 18 12C16.1362 12 14.5701 10.7252 14.126 9L3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7L14.126 7ZM6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14ZM2 16C2 13.7909 3.79086 12 6 12C7.86384 12 9.42994 13.2748 9.87398 15L21 15C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L9.87398 17C9.42994 18.7252 7.86384 20 6 20C3.79086 20 2 18.2091 2 16Z"
        fill="#034AD8"
      />
    </svg>
  );
};