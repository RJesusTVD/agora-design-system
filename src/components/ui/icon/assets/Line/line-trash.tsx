import React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement> | any) => {
  const newProps = { ...props };
  delete newProps.alt;
  delete newProps.title;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...newProps} role="img">
      {props.title && <title>{props.title}</title>}
      <path
        d="M15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11H15ZM13 17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17H13ZM11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11H11ZM9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17H9ZM4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6V4ZM20 6C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4V6ZM16.1506 5.52777C16.4421 5.99687 17.0587 6.14087 17.5278 5.84939C17.9969 5.55791 18.1409 4.94133 17.8494 4.47223L16.1506 5.52777ZM6.15517 4.46496C5.85968 4.93155 5.99838 5.54934 6.46496 5.84483C6.93155 6.14032 7.54934 6.00162 7.84483 5.53504L6.15517 4.46496ZM13 11V17H15V11H13ZM9 11L9 17H11L11 11H9ZM4 6H6V4H4V6ZM6 6H18V4H6V6ZM18 6H20V4H18V6ZM17 5V20H19V5H17ZM16 21H8V23H16V21ZM7 20V5H5V20H7ZM8 21C7.44772 21 7 20.5523 7 20H5C5 21.6569 6.34315 23 8 23V21ZM17 20C17 20.5523 16.5523 21 16 21V23C17.6569 23 19 21.6569 19 20H17ZM14 1H10V3H14V1ZM17.8494 4.47223C17.6863 4.2098 17.5349 3.92502 17.3259 3.55786C17.1302 3.21421 16.8992 2.82732 16.6255 2.46829C16.083 1.75679 15.2503 1 14 1V3C14.3353 3 14.6501 3.176 15.035 3.68089C15.225 3.93006 15.4027 4.22227 15.5878 4.54747C15.7596 4.84916 15.9612 5.22298 16.1506 5.52777L17.8494 4.47223ZM10 1C8.74894 1 7.91897 1.76045 7.37905 2.47073C7.10652 2.82924 6.87592 3.21569 6.68034 3.55763C6.47216 3.92159 6.31822 4.20751 6.15517 4.46496L7.84483 5.53504C8.0399 5.22701 8.24221 4.85519 8.41641 4.55062C8.60321 4.22404 8.78112 3.93117 8.97125 3.68105C9.35664 3.17407 9.66855 3 10 3V1Z"
        fill="#034AD8"
      />
    </svg>
  );
};
