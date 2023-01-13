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
        d="M7.30415 4.30576C7.99444 2.37913 9.83529 1 12 1C14.1692 1 15.9979 2.3829 16.6932 4.30482C18.291 4.87989 19.4925 6.24246 19.8608 7.9236C21.1428 8.82127 22 10.2934 22 12C22 14.7623 19.7623 17 17 17C16.0755 17 15.2268 16.7376 14.5 16.3107C14.0442 16.5784 13.5404 16.7815 13 16.8957V21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H11V16.8957C10.4596 16.7815 9.95582 16.5784 9.5 16.3107C8.77324 16.7376 7.9245 17 7 17C4.23772 17 2 14.7623 2 12C2 10.2934 2.85717 8.82127 4.13917 7.9236C4.50734 6.24337 5.7077 4.88137 7.30415 4.30576Z"
        fill="#034AD8"
      />
    </svg>
  );
};
