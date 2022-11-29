import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M14.9728 5.33151H17V2.00016H13.9623C13.9623 2.00016 12.0525 1.95052 10.8396 3.60574C10.8396 3.60574 10.0102 4.42355 9.99775 6.8182V9.31736H7V12.8551H9.99775V22H13.4614V12.8551H16.4342L16.8489 9.31736H13.4552V6.8182C13.4627 6.53863 13.5813 5.30668 14.9728 5.33151Z"
        fill="white"
      />
    </svg>
  );
};
