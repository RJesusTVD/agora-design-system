import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M7.16224 12.2L12 0H8.00001L3.13779 12.2L1.68888 15.8L0 20H4L5.72223 15.8L14.4467 15.8L16.0889 20H20L12.8889 1.47727L10.9333 6.47727L13.0378 12.2L7.16224 12.2Z"
        fill="#034AD8"
      />
    </svg>
  );
};
