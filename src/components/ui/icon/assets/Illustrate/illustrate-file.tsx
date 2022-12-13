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
        d="M12.8052 1.0166C12.7456 1.00562 12.6851 1 12.624 1H5C4.46973 1 3.96094 1.21069 3.58594 1.58582C3.21094 1.96082 3 2.4696 3 3V21C3 21.5304 3.21094 22.0392 3.58594 22.4142C3.96094 22.7893 4.46973 23 5 23H19C19.5303 23 20.0391 22.7893 20.4141 22.4142C20.7891 22.0392 21 21.5304 21 21V8.45374C21 8.3822 20.9922 8.31152 20.9775 8.2428C20.9595 8.1582 20.9302 8.07666 20.8911 8C20.834 7.8877 20.7554 7.78601 20.6587 7.70117L13.2827 1.24744C13.1982 1.17346 13.1025 1.11487 13 1.07324C12.9375 1.04785 12.8721 1.02893 12.8052 1.0166Z"
        fill="#BBD1FD"
      />
      <path
        d="M21 9H12V1H12.624C12.6851 1 12.7456 1.00562 12.8052 1.0166C12.8721 1.02893 12.9375 1.04785 13 1.07324C13.1025 1.11487 13.1982 1.17346 13.2827 1.24744L20.6587 7.70117C20.7554 7.78601 20.834 7.8877 20.8911 8C20.9302 8.07666 20.9595 8.1582 20.9775 8.2428C20.9922 8.31152 21 8.3822 21 8.45374V9Z"
        fill="#034AD8"
      />
    </svg>
  );
};