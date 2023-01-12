import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M0 32V4H24V32L12 20L0 32Z" fill="#BBD1FD" />
      <rect width="24" height="4" fill="#034AD8" />
    </svg>
  );
};
