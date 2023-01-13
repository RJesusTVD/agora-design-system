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
        d="M2 7C2 5.89543 2.89543 5 4 5H6C7.10457 5 8 5.89543 8 7V9C8 10.1046 7.10457 11 6 11H4C2.89543 11 2 10.1046 2 9V7ZM9 6C9 5.44772 9.44772 5 10 5H16C16.5523 5 17 5.44772 17 6C17 6.55228 16.5523 7 16 7H10C9.44772 7 9 6.55228 9 6ZM9 10C9 9.44772 9.44772 9 10 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H10C9.44772 11 9 10.5523 9 10ZM2 15C2 13.8954 2.89543 13 4 13H6C7.10457 13 8 13.8954 8 15V17C8 18.1046 7.10457 19 6 19H4C2.89543 19 2 18.1046 2 17V15ZM9 14C9 13.4477 9.44772 13 10 13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H10C9.44772 15 9 14.5523 9 14ZM9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18Z"
        fill="#034AD8"
      />
    </svg>
  );
};
