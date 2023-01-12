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
        d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 12.5262 19.8532 14.7402 18.2923 16.767C16.988 18.4607 15.3185 20.1156 13.6508 21.7689C13.3354 22.0816 13.02 22.3943 12.7071 22.7071C12.3166 23.0976 11.6834 23.0976 11.2929 22.7071C10.98 22.3943 10.6646 22.0816 10.3492 21.7689C8.68147 20.1156 7.01205 18.4607 5.70772 16.767C4.14683 14.7402 3 12.5262 3 10Z"
        fill="#BBD1FD"
      />
      <circle cx="12" cy="10" r="3" fill="#034AD8" />
    </svg>
  );
};
