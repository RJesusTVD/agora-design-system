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
        d="M4.22183 4.22183C8.51759 -0.0739417 15.4824 -0.0739417 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739412 15.4824 -0.0739422 8.51759 4.22183 4.22183Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6402 8.23177C17.0645 8.58534 17.1218 9.2159 16.7682 9.64018L11.7682 15.6402C11.5884 15.856 11.326 15.9862 11.0453 15.999C10.7646 16.0117 10.4916 15.9058 10.2929 15.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L10.9328 13.5186L15.2318 8.35981C15.5853 7.93553 16.2159 7.87821 16.6402 8.23177Z"
        fill="#034AD8"
      />
    </svg>
  );
};
