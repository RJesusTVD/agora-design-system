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
        d="M13 2V4.06189C16.6187 4.51314 19.4869 7.38128 19.9381 11H22V13H19.9381C19.4869 16.6187 16.6187 19.4869 13 19.9381V22H11V19.9381C7.38128 19.4869 4.51314 16.6187 4.06189 13H2V11H4.06189C4.51314 7.38128 7.38128 4.51314 11 4.06189V2H13ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
        fill="#034AD8"
      />
    </svg>
  );
};
