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
        d="M11.1437 4.74152L12 5.59837L12.8563 4.74152C15.1768 2.4195 18.9393 2.41949 21.2599 4.74152C23.58 7.06318 23.58 10.8271 21.2599 13.1487L12.7073 21.7069C12.5197 21.8946 12.2653 22 12 22C11.7346 22 11.4802 21.8946 11.2926 21.7069C11.2926 21.7069 2.90912 13.3179 2.74007 13.1487C2.57102 12.9796 2.41403 12.8024 2.26922 12.6184C0.432567 10.2845 0.589008 6.89399 2.74006 4.74152C5.06058 2.4195 8.82314 2.41949 11.1437 4.74152Z"
        fill="#BBD1FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5964 13C2.48121 12.8766 2.37213 12.7492 2.2692 12.6184C1.87675 12.1197 1.5753 11.5728 1.36487 11H5.96475L7.66788 8.44531C7.86562 8.1487 8.20629 7.97979 8.56207 8.00194C8.91785 8.02409 9.23494 8.23396 9.39436 8.55279L11.6237 13.0115L12.6679 11.4453C12.8533 11.1671 13.1656 11 13.4999 11H14.4999C15.0522 11 15.4999 11.4477 15.4999 12C15.4999 12.5523 15.0522 13 14.4999 13H14.0351L12.332 15.5547C12.1342 15.8513 11.7936 16.0202 11.4378 15.9981C11.082 15.9759 10.7649 15.7661 10.6055 15.4472L8.37613 10.9885L7.33198 12.5547C7.14652 12.8329 6.83428 13 6.49993 13H2.5964Z"
        fill="#034AD8"
      />
    </svg>
  );
};