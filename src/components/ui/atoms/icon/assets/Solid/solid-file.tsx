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
        d="M3.80569 1.83342C4.32481 1.3025 5.03372 1 5.77778 1H13.0366C13.8534 1 14.6348 1.33297 15.2005 1.92205L20.1638 7.0905C20.7004 7.64922 21 8.39382 21 9.16845V20.1818C21 20.9221 20.7127 21.6364 20.1943 22.1666C19.6752 22.6975 18.9663 23 18.2222 23H5.77778C5.03372 23 4.32481 22.6975 3.80569 22.1666C3.28732 21.6364 3 20.9221 3 20.1818V3.81818C3 3.07791 3.28732 2.36356 3.80569 1.83342ZM13 3V8C13 8.55228 13.4477 9 14 9H18.9857C18.9522 8.80401 18.8608 8.62106 18.7213 8.4758L13.7579 3.30735C13.5694 3.11099 13.3089 3 13.0366 3H13Z"
        fill="#034AD8"
      />
    </svg>
  );
};
