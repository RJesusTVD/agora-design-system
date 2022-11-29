import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path d="M3 7V17L12 22M3 7L12 2L21 7M3 7L12 12M12 22L21 17V7M12 22V12M21 7L12 12M16.5 9.5L7.5 4.5" stroke="#034AD8" strokeWidth="2" />
    </svg>
  );
};
