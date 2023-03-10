import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M20 10V20.1818C20 20.664 19.8127 21.1265 19.4793 21.4675C19.1459 21.8084 18.6937 22 18.2222 22H5.77778C5.30628 22 4.8541 21.8084 4.5207 21.4675C4.1873 21.1265 4 20.664 4 20.1818V3.81818C4 3.33597 4.1873 2.87351 4.5207 2.53253C4.8541 2.19156 5.30628 2 5.77778 2H12M20 10V9.16845C20 8.65203 19.8002 8.15563 19.4425 7.78315L14.4792 2.6147C14.1021 2.22198 13.5811 2 13.0366 2H12M20 10H14C12.8954 10 12 9.10457 12 8V2"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
