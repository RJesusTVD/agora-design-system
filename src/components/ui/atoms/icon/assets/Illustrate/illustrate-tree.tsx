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
        d="M7.30415 4.30576C7.99444 2.37913 9.83529 1 12 1C14.1692 1 15.9979 2.3829 16.6932 4.30482C18.291 4.87989 19.4925 6.24246 19.8608 7.9236C21.1428 8.82127 22 10.2934 22 12C22 14.7623 19.7623 17 17 17C16.0744 17 15.2248 16.737 14.4975 16.3092C12.949 17.205 11.051 17.205 9.50251 16.3092C8.77519 16.737 7.92556 17 7 17C4.23772 17 2 14.7623 2 12C2 10.2934 2.85717 8.82127 4.13917 7.9236C4.50734 6.24337 5.7077 4.88137 7.30415 4.30576Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16.8795V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V16.8795C12.3402 17.0149 11.6598 17.0149 11 16.8795Z"
        fill="#034AD8"
      />
    </svg>
  );
};
