import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.32 4.27C19.61 4.01 20.04 3.94 20.4 4.1C20.76 4.27 21 4.61 21 5V17C21 17.27 20.9 17.52 20.71 17.71C20.49 17.92 19.25 19 16 19C14.31 19 12.95 18.46 11.63 17.93C10.44 17.45 9.31 17 8 17C6.13 17 5.28 17.91 5 18.29V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V6V4C3 3.44772 3.44772 3 4 3C4.46193 3 4.8507 3.3132 4.96555 3.73882C5.70676 3.32279 6.70055 3 8 3C9.69 3 11.05 3.54 12.37 4.07L12.3836 4.07545C13.5785 4.5534 14.695 5 16 5C18.45 5 19.32 4.27 19.32 4.27Z"
        fill="#034AD8"
      />
    </svg>
  );
};
