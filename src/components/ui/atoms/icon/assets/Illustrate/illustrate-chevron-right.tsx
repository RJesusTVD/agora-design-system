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
        d="M9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071Z"
        fill="#034AD8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071C14.3166 13.0976 13.6834 13.0976 13.2929 12.7071L9.29289 8.70711C8.90237 8.31658 8.90237 7.68342 9.29289 7.29289Z"
        fill="#BBD1FD"
      />
    </svg>
  );
};
