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
        d="M6 13C3.23858 13 1 15.2386 1 18V21C1 22.1046 1.89543 23 3 23H16C16.5523 23 17 22.5523 17 22V18C17 15.2386 14.7614 13 12 13H6ZM23 21C23 22.1046 22.1046 23 21 23H20C19.4477 23 19 22.5523 19 22V18C19 16.4371 18.4878 14.9938 17.6221 13.8288C17.3819 13.5056 17.5973 13 18 13C20.7614 13 23 15.2386 23 18V21Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 3.23858 6.23858 1 9 1C11.7614 1 14 3.23858 14 6C14 8.76142 11.7614 11 9 11C6.23858 11 4 8.76142 4 6ZM16 6C16 7.27377 15.6598 8.46808 15.0653 9.49702C14.7145 10.104 14.9278 10.9347 15.6269 10.9863C15.7501 10.9954 15.8745 11 16 11C18.7614 11 21 8.76142 21 6C21 3.23858 18.7614 1 16 1C15.8745 1 15.7501 1.00462 15.6269 1.01371C14.9278 1.06528 14.7145 1.89598 15.0653 2.50298C15.6598 3.53192 16 4.72623 16 6Z"
        fill="#034AD8"
      />
    </svg>
  );
};
