import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M6.29134 9.99627C5.61466 9.20353 6.19209 8 7.24908 8L16.7509 8C17.8079 8 18.3853 9.20354 17.7087 9.99627L12.9577 15.5621C12.4593 16.146 11.5407 16.146 11.0423 15.5621L6.29134 9.99627Z"
        fill="#BBD1FD"
      />
    </svg>
  );
};
