import React from 'react';

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
        d="M12.8247 1.02039C12.8848 1.03271 12.9434 1.05042 13 1.07324C13.1025 1.11487 13.1982 1.17346 13.2827 1.24744L20.6587 7.70117C20.7554 7.78601 20.834 7.8877 20.8911 8C20.9619 8.13904 21 8.29419 21 8.45374V21C21 21.5304 20.7891 22.0392 20.4141 22.4142C20.0391 22.7893 19.5303 23 19 23H5C4.66406 23 4.33643 22.9153 4.0459 22.7577C4.01562 22.7412 3.98584 22.724 3.95654 22.7059C3.82275 22.6243 3.69824 22.5266 3.58594 22.4142C3.21094 22.0392 3 21.5304 3 21V3C3 2.4696 3.21094 1.96082 3.58594 1.58582C3.96094 1.21069 4.46973 1 5 1H12.624C12.6919 1 12.7593 1.00684 12.8247 1.02039ZM12 9H17.9629L12 3.65759V9Z"
        fill="#034AD8"
      />
    </svg>
  );
};
