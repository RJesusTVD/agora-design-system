import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M12 21C12 21 11 18 8 18C5 18 2 18 2 18V3H7C10 3 12 5 12 8M12 21C12 21 13 18 16 18H22V3H17C14 3 12 5 12 8M12 21V8M6 9H8M6 13H8M16 9H18"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
