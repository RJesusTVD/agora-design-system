import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 6C20 6 22 13 22 13C22 13 21.8868 13.3962 21.6066 14M4 4L7.27508 6.99069M22 20L19.1494 17.3807M10.9361 10.1941C9.80442 10.6234 9 11.7178 9 13C9 14.6569 10.3431 16 12 16C13.4223 16 14.6134 15.0102 14.9222 13.6819M10.9361 10.1941L14.9222 13.6819M10.9361 10.1941L7.27508 6.99069M14.9222 13.6819L19.1494 17.3807M19.1494 17.3807C17.6101 18.7926 15.3225 20 12 20C4 20 2 13 2 13C2 13 3.16534 8.92132 7.27508 6.99069"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
