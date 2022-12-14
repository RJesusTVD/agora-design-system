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
        d="M12 1C7.02944 1 3 5.02944 3 10C3 12.5262 4.14683 14.7402 5.70772 16.767C7.01205 18.4606 8.68146 20.1156 10.3492 21.7688L10.3492 21.7689L10.3499 21.7695C10.6651 22.082 10.9803 22.3945 11.2929 22.7071C11.6834 23.0976 12.3166 23.0976 12.7071 22.7071C13.0199 22.3943 13.3352 22.0817 13.6506 21.769L13.6508 21.7689L13.6508 21.7688C15.3185 20.1156 16.988 18.4606 18.2923 16.767C19.8532 14.7402 21 12.5262 21 10C21 5.02944 16.9706 1 12 1ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        fill="#034AD8"
      />
    </svg>
  );
};
