import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1L22 6.48379V17.5162L12 23L2 17.5162V6.48379L12 1ZM13 12.5808V20.1933L20 16.3546V8.74215L13 12.5808ZM18.9409 7.06459L16.5 8.40311L9.55913 4.59689L12 3.25836L18.9409 7.06459ZM7.5 5.72607L5.05913 7.06459L12 10.8708L14.4409 9.5323L7.5 5.72607Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 20.1933V12.5808L20 8.74215V16.3546L13 20.1933ZM16.5 8.40311L18.9408 7.06459L12 3.25836L9.55908 4.59688L16.5 8.40311ZM5.05908 7.06459L7.49996 5.72607L14.4408 9.53229L12 10.8708L5.05908 7.06459Z"
        fill="#034AD8"
      />
    </svg>
  );
};
