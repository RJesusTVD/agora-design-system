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
        d="M17.8787 2C17.0509 2 16.257 2.32885 15.6716 2.91421L3.29291 15.2929C3.16476 15.4211 3.07384 15.5816 3.02988 15.7575L2.02988 19.7575C1.94468 20.0982 2.04453 20.4587 2.29291 20.7071C2.54129 20.9555 2.90178 21.0553 3.24256 20.9701L7.24256 19.9701C7.41839 19.9262 7.57897 19.8353 7.70713 19.7071L20.0858 7.32843C20.3756 7.03859 20.6056 6.69449 20.7624 6.3158C20.9193 5.9371 21 5.53122 21 5.12132C21 4.71142 20.9193 4.30554 20.7624 3.92684C20.6056 3.54815 20.3756 3.20405 20.0858 2.91421C19.796 2.62437 19.4519 2.39446 19.0732 2.2376C18.6945 2.08074 18.2886 2 17.8787 2Z"
        fill="#034AD8"
      />
      <path
        d="M12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H12Z"
        fill="#034AD8"
      />
    </svg>
  );
};
