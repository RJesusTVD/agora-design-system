import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M3.58579 3.58579C3.94772 3.22386 4.44772 3 5 3H19C19.5523 3 20.0523 3.22386 20.4142 3.58579M3.58579 3.58579C3.22386 3.94772 3 4.44772 3 5V19C3 19.5523 3.22386 20.0523 3.58579 20.4142M3.58579 3.58579L20.4142 20.4142M20.4142 3.58579C20.7761 3.94772 21 4.44772 21 5V19C21 19.5523 20.7761 20.0523 20.4142 20.4142M20.4142 3.58579L3.58579 20.4142M20.4142 20.4142C20.0523 20.7761 19.5523 21 19 21H5C4.44772 21 3.94772 20.7761 3.58579 20.4142"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
