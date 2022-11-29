import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M3 16H8.17157L10.5858 18.4142C11.3668 19.1953 12.6332 19.1953 13.4142 18.4142L15.8284 16H21C21.5523 16 22 16.4477 22 17V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V17C2 16.4477 2.44772 16 3 16Z"
        fill="#BBD1FD"
      />
      <path
        d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2L11 13.5858L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929C16.3166 10.9024 15.6834 10.9024 15.2929 11.2929L13 13.5858L13 2Z"
        fill="#034AD8"
      />
    </svg>
  );
};
