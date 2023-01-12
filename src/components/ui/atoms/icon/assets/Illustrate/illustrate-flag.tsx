import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M5 18.29C5.28 17.91 6.13 17 8 17C9.31 17 10.44 17.45 11.63 17.93C12.95 18.46 14.31 19 16 19C19.25 19 20.49 17.92 20.71 17.71C20.9 17.52 21 17.27 21 17V5C21 4.61 20.76 4.27 20.4 4.1C20.04 3.94 19.61 4.01 19.32 4.27C19.32 4.27 18.45 5 16 5C14.695 5 13.5785 4.5534 12.3836 4.07545L12.37 4.07C11.05 3.54 9.69 3 8 3C6.72058 3 5.73746 3.31292 5 3.71965V18.29Z"
        fill="#BBD1FD"
      />
      <path
        d="M5 3.71965C4.98846 3.72602 4.97697 3.73241 4.96555 3.73882C4.8507 3.3132 4.46193 3 4 3C3.44772 3 3 3.44772 3 4V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V3.71965Z"
        fill="#034AD8"
      />
    </svg>
  );
};
