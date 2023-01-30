import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Icon } from '../icon';
import { ButtonAppearence, ButtonSizes, ButtonVariant, IconWrapperType } from './types';
import './button.scss';
import { stringToBoolean } from '../../../utils';

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
  appearence?: ButtonAppearence;
  /**
   * The variant of the button.
   * @defaultValue 'primary'
   */
  variant?: ButtonVariant;
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
/**
 * Return icon default animation class according icon name and default position.
 * @param icon string
 * @param iconPosition leading|trailing
 * @returns string
 */
function getDefaultIconAnimation(icon: string, iconPosition: 'leading' | 'trailing'): string {
  let defaultAnimation = 'default';
  if (icon) {
    // if icon contains "arrow" or "chevron" word check for direction left/right and override the
    // default animation to preserve armony
    // this will code below will prevent arrow/chevron icon left/right direction perform default animation(up/down)
    const regex = /arrow|chevron/g;
    if (regex.test(icon)) {
      if (icon.indexOf('left') >= 0) {
        defaultAnimation = 'backward';
      } else if (icon.indexOf('right') >= 0) {
        defaultAnimation = 'forward';
      }
    }
  } else if (iconPosition === 'leading') {
    defaultAnimation = 'backward';
  } else if (iconPosition === 'trailing') {
    defaultAnimation = 'forward';
  }
  return defaultAnimation;
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
  let defaultIcon = '';
  let defaultAnimation = '';
  if (stringToBoolean(hasIcon) || stringToBoolean(iconOnly)) {
    /**
     * Detects default icon in case hasIcon/iconOnly params be true.
     * @type string
     */
    defaultIcon = iconPosition === 'leading' ? 'agora-line-arrow-left-circle' : 'agora-line-arrow-right-circle';
    defaultAnimation = getDefaultIconAnimation(icon, iconPosition);
  }

  /**
   * Building button classname dynamically according parameters.
   */
  const buttonClassName = classNames(
    `btn btn-${size} btn-${appearence}--${variant}`,
    {
      [`animate-icon--${defaultAnimation}`]: defaultAnimation !== '',
      [`btn-with-icon--${iconPosition}`]: stringToBoolean(hasIcon),
      'btn-block': stringToBoolean(fullWidth),
      'is-icon-only': stringToBoolean(iconOnly)
    },
    className
  );

  return (
    <button type="button" disabled={disabled} className={buttonClassName} {...props}>
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
