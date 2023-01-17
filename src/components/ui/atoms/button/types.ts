/**
 * Button Variants, this variants will define the background and border color
 * of the given Button.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'neutral' | 'white';
/**
 * Define the button Size.
 */
export type ButtonSizes = 'default' | 'small';
/**
 * Define the Button Shape.
 */
export type ButtonAppearence = 'solid' | 'outline' | 'link';

export type IconWrapperType = {
  icon: string;
  iconHover: string;
  iconAltText?: string;
};
