import React from 'react';

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
        d="M8 4C8.55228 4 9 4.44772 9 5V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V5C7 4.44772 7.44772 4 8 4ZM16 10C16.5523 10 17 10.4477 17 11V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V11C15 10.4477 15.4477 10 16 10Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29289 4.29289C7.68342 3.90237 8.31658 3.90237 8.70711 4.29289L11.7071 7.29289C12.0976 7.68342 12.0976 8.31658 11.7071 8.70711C11.3166 9.09763 10.6834 9.09763 10.2929 8.70711L8 6.41421L5.70711 8.70711C5.31658 9.09763 4.68342 9.09763 4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289L7.29289 4.29289ZM12.2929 15.2929C12.6834 14.9024 13.3166 14.9024 13.7071 15.2929L16 17.5858L18.2929 15.2929C18.6834 14.9024 19.3166 14.9024 19.7071 15.2929C20.0976 15.6834 20.0976 16.3166 19.7071 16.7071L16.7071 19.7071C16.3166 20.0976 15.6834 20.0976 15.2929 19.7071L12.2929 16.7071C11.9024 16.3166 11.9024 15.6834 12.2929 15.2929Z"
        fill="#034AD8"
      />
    </svg>
  );
};