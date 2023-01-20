import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 5C20 5 22 12 22 12C22 12 21.8868 12.3962 21.6066 13M4 3L7.27508 5.99069M22 19L19.1494 16.3807M10.9361 9.19411C9.80442 9.62344 9 10.7178 9 12C9 13.6569 10.3431 15 12 15C13.4223 15 14.6134 14.0102 14.9222 12.6819M10.9361 9.19411L14.9222 12.6819M10.9361 9.19411L7.27508 5.99069M14.9222 12.6819L19.1494 16.3807M19.1494 16.3807C17.6101 17.7926 15.3225 19 12 19C4 19 2 12 2 12C2 12 3.16534 7.92132 7.27508 5.99069"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
