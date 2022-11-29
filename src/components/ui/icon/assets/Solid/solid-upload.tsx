import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12.7071 1.29289C12.3166 0.902369 11.6834 0.902369 11.2929 1.29289L7.29289 5.29289C6.90237 5.68342 6.90237 6.31658 7.29289 6.70711C7.68342 7.09763 8.31658 7.09763 8.70711 6.70711L11 4.41421V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V4.41421L15.2929 6.70711C15.6834 7.09763 16.3166 7.09763 16.7071 6.70711C17.0976 6.31658 17.0976 5.68342 16.7071 5.29289L12.7071 1.29289Z"
        fill="#034AD8"
      />
      <path
        d="M3 16H9C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16H21C21.5523 16 22 16.4477 22 17V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V17C2 16.4477 2.44772 16 3 16Z"
        fill="#034AD8"
      />
    </svg>
  );
};
