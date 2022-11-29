import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}

      <path
        d="M4.17965 4.59148C3.71053 3.89843 4.219 3 4.98521 3H19.0148C19.781 3 20.2895 3.89843 19.8204 4.59147L14.5418 11.8893C14.1718 12.4009 13.9726 13.0161 13.9726 13.6475V17.4675L13.9727 17.4675C13.9727 17.4675 13.9727 17.4675 13.9727 17.4675C13.9703 17.4694 13.9669 17.4721 13.9627 17.4754C13.9317 17.4998 13.8546 17.5605 13.7861 17.6249L10.2043 20.9958C10.191 21 10.1791 21.0012 10.1679 21.0009C10.1465 21.0004 10.1211 20.994 10.0964 20.9797C10.0719 20.9656 10.0548 20.9475 10.0445 20.9305C10.036 20.9162 10.0274 20.8952 10.0274 20.859V13.6475C10.0274 13.0161 9.82817 12.4009 9.45815 11.8893L4.17965 4.59148Z"
        stroke="#034AD8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
