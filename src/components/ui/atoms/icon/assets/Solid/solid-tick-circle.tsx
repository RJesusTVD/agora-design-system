import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739422 8.51759 -0.0739412 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM16.7682 9.64021C17.1218 9.21593 17.0645 8.58537 16.6402 8.2318C16.2159 7.87824 15.5853 7.93556 15.2318 8.35984L10.9328 13.5186L8.70711 11.2929C8.31658 10.9024 7.68342 10.9024 7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.4916 15.9058 10.7646 16.0117 11.0453 15.999C11.326 15.9863 11.5884 15.856 11.7682 15.6402L16.7682 9.64021Z"
        fill="#034AD8"
      />
    </svg>
  );
};
