import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M15 12H14L12 15L9 9L7 12H3.0551M3.0551 12C3.17557 12.1531 3.30635 12.3007 3.44744 12.4419L12 21L20.5526 12.4419C22.4825 10.5107 22.4825 7.37959 20.5526 5.44839C18.6226 3.5172 15.4936 3.5172 13.5636 5.44839L12 7.01305L10.4364 5.44839C8.50642 3.5172 5.37739 3.5172 3.44744 5.44839C1.65861 7.2384 1.52783 10.0593 3.0551 12Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
