import React, { ReactNode } from 'react';
import { Icon } from '../icon';
import { ButtonAppearence, ButtonSizes, ButtonVariant, IconWrapperType } from './types';
import './button.scss';

/**
 *
 * @param icon
 * @param iconHover
 * @param iconAltText
 * @returns React.FC
 */
const IconWrapper: React.FC<IconWrapperType> = ({ icon, iconHover, iconAltText }) => {
  // preventing using illustrate family icons on buttons
  if (icon.indexOf('agora-illustrate') >= 0 || iconHover?.indexOf('agora-illustrate') >= 0) {
    return null;
  }
  return (
    <div className="icon-wrapper">
      <Icon icon={icon} alt={iconAltText} />
      <Icon icon={(iconHover ?? icon).replace('line', 'solid')} alt={iconAltText} />
    </div>
  );
};

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * The Button appearence.
   * @defaultValue 'solid'
   */
  appearence: ButtonAppearence;
  /**
   * The variant of the button.
   * @defaultValue 'primary'
   */
  variant: ButtonVariant;
  /**
   * Indicates if this Button should be fluid.
   * @defaultValue 'false'
   */
  fullWidth?: boolean | 'true' | 'false';
  /**
   * Indicates the size of the Button.
   * @defaultValue 'default'
   */
  size?: ButtonSizes;
  /**
   * Indicates if this Button will have any icon.
   * @defaultValue false
   */
  hasIcon?: boolean | 'true' | 'false';
  /**
   * Indicates Icon for this button.
   * @defaultValue null
   */
  icon?: string;
  /**
   * Indicates Icon displayed when mouse hover this Button. If not specified
   * icon field will used as replacement.
   * @defaultValue null
   */
  iconHover?: string;
  /**
   * If given will render only the Icon
   */
  iconOnly?: boolean | 'true' | 'false';
  /**
   * Indicates Icon position for this button.
   * @defaultValue leading
   */
  iconPosition?: 'leading' | 'trailing';
  /**
   * Alternative text for Icon
   * @defaultValue null
   */
  iconAltText?: string;
  /**
   * The children component
   *  @defaultValue ReactNode
   */
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  appearence = 'solid',
  variant = 'primary',
  fullWidth = false,
  size = 'default',
  disabled = false,
  hasIcon = false,
  icon = '',
  iconHover = '',
  iconOnly = false,
  iconPosition = 'leading',
  iconAltText = '',
  children,
  className = '',
  ...props
}) => {
  /**
   * Detects default icon in case hasIcon var is set true.
   * @type {string|false}
   */
  let defaultIcon: string | false = false;
  if (hasIcon || iconOnly) {
    defaultIcon = iconPosition === 'leading' ? 'agora-line-arrow-left-circle' : 'agora-line-arrow-right-circle';
  }

  let defaultAnimation = '';

  if (defaultIcon) {
    if (icon) {
      defaultAnimation = 'default';
      // if icon contains "arrow" or "chevron" word check for direction left/right and override the
      // default animation to preserve armony
      // this will code below will prevent arrow/chevron icon left/right direction perform default animation(up/down)
      const regex = /arrow|chevron/g;
      if (icon && regex.test(icon)) {
        if (icon.indexOf('left') >= 0) {
          defaultAnimation = 'backward';
        } else if (icon.indexOf('right') >= 0) {
          defaultAnimation = 'forward';
        }
      }
    } else if (!icon && iconPosition === 'leading') {
      defaultAnimation = 'backward';
    } else if (!icon && iconPosition === 'trailing') {
      defaultAnimation = 'forward';
    }
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`btn btn-${size} btn-${appearence}--${variant} ${defaultAnimation && `animate-icon--${defaultAnimation}`} ${
        hasIcon ? `btn-with-icon--${iconPosition}` : ''
      } ${fullWidth ? `btn-block` : ''} ${iconOnly ? `is-icon-only` : ''} ${className}`}
      {...props}
    >
      {iconOnly ? (
        <IconWrapper icon={icon ?? defaultIcon} iconHover={iconHover} iconAltText={iconAltText} />
      ) : (
        <>
          {hasIcon && <IconWrapper icon={icon ?? defaultIcon} iconHover={iconHover} iconAltText={iconAltText} />}
          <span className="children-wrapper">{children}</span>
        </>
      )}
    </button>
  );
};

const MemoButton = React.memo(Button);

MemoButton.displayName = 'Button';

export default MemoButton;
