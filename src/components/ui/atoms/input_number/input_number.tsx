import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { stringToBoolean } from '../../../utils';
import { Icon } from '../icon';
import './input_number.scss';

export interface InputNumberProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Input ID.
   * @default ''
   */
  id: string;
  /**
   * Input descriptive label.
   * @default 'Input Label'
   */
  label?: string;
  /**
   * Descritive attribute that labels the checkbox in terms of accessibility
   * @default null
   */
  ariaLabel?: string;
  /**
   * Decides if display/hide label.
   * @default false
   */
  hideLabel?: boolean | 'true' | 'false';
  /**
   * Text informative displayed below input text
   * @default null
   */
  feedbackText?: string;
  /**
   * Icon displayed inside the Input Text on left center corner
   * @default null
   */
  leadingIcon?: string;
  /**
   * Intial value
   * @default null
   */
  initialValue?: string;
  /**
   * Indicates the feedback state of feedback text.
   * This param will change the left feedback icon and dye it.
   */
  feedbackState?: 'info' | 'danger' | 'success' | 'warning';
  /**
   * Hightlight the input indicating some error
   * @default false
   */
  hasError?: boolean | 'true' | 'false';
  /**
   * Indicates that this input char length limitation.
   * @default -1
   */
  maxChars?: number;
  /**
   * Label text for increase button. Recommended for accessibility.
   * @default null
   */
  increaseButtonAltText?: string;
  /**
   *  Label text for descrease button. Recommended for accessibility.
   * @default null
   */
  decreaseButtonAltText?: string;
  /**
   * Allow to show/hide the char counter on right button corner.
   * @default false
   */
  showCharCounter?: boolean | 'true' | 'false';
  /**
   * Allow to show/hide the char counter on right button corner.
   * @default false
   */
  isOptional?: boolean | 'true' | 'false';
}

export const InputNumber: React.FC<InputNumberProps> = ({
  label = 'Input Label',
  ariaLabel,
  hideLabel,
  hasError,
  maxChars = -1,
  increaseButtonAltText,
  decreaseButtonAltText,
  showCharCounter,
  disabled,
  readOnly,
  feedbackText,
  feedbackState = 'info',
  leadingIcon,
  initialValue,
  className = '',
  isOptional,
  id,
  ...props
}) => {
  const propsClone = { ...props };

  const { onChange, min, max } = propsClone;

  const inputRef = useRef<HTMLInputElement>(null);

  const [currentValue, setCurrentValue] = useState(initialValue);

  /**
   * Local onChange event handler. This functions enforces the max char limit.
   * @param evt Event
   */
  const handleChangeEvent = (evt) => {
    const { value } = evt.currentTarget;
    if (maxChars === -1 || value?.length <= maxChars) {
      setCurrentValue(value);
    }
    onChange?.(evt);
  };

  /**
   * Dictionary of possible icons feedback.
   * @var
   */
  const feedbackStateIconsMap = {
    info: 'agora-solid-info',
    danger: 'agora-solid-danger',
    success: 'agora-solid-tick-circle',
    warning: 'agora-solid-alert'
  };

  const [isHovered, setIsHovered] = useState(false);

  /**
   * Builds main Classes for whole component
   * @returns Object
   */
  const inputClassBuilder = () => {
    return {
      // main wrapper class
      inputWrapperClasses: classNames('agora-input-number-wrapper', {
        'input-disabled': disabled,
        'input-has-error': stringToBoolean(hasError),
        'is-hovered': isHovered
      }),
      // classes for above input sections [label and hint icon]
      labelSectionClasses: classNames('input-label-wrapper', 'flex', 'items-end', {
        'mb-8': label && !stringToBoolean(hideLabel),
        'justify-end': !label || stringToBoolean(hideLabel),
        'justify-between': label && !stringToBoolean(hideLabel)
      }),
      // text input component classes
      inputClasses: classNames(
        'agora-input-number',
        'flex-1',
        {
          'has-leading-icon': leadingIcon && leadingIcon.indexOf('agora-line') === 0, // allowing only line family icon
          'has-value': currentValue && currentValue.length > 0
        },
        className
      ),
      leadigIconWrapperClasses: classNames('input-icon', 'input-leading--icon', {
        'dye-as-solid': leadingIcon?.indexOf('agora-solid') === 0,
        'dye-as-line': leadingIcon?.indexOf('agora-solid') !== 0
      })
    };
  };

  const { inputWrapperClasses, labelSectionClasses, inputClasses, leadigIconWrapperClasses } = inputClassBuilder();

  /**
   * Update real input value
   */
  const updateValue = () => {
    if (inputRef) {
      const value = inputRef.current?.value ?? '';
      if (maxChars === -1 || value?.length <= maxChars) setCurrentValue(value);
    }
  };

  /**
   * Execute stepUp localy and execute update value
   */
  const handleStepUp = () => {
    inputRef.current?.stepUp();
    updateValue();
  };

  /**
   * Execute stepDown localy and execute update value
   */
  const handleStepDown = () => {
    inputRef.current?.stepDown();
    updateValue();
  };

  /**
   * Sets the correct houvering state of the component
   */
  const handleMouseHouvering = (isHover: boolean) => {
    setIsHovered(isHover);
  };

  if (stringToBoolean(isOptional)) {
    delete propsClone.required;
  } else {
    propsClone.required = true;
  }

  return (
    <div className={inputWrapperClasses}>
      {/* Label & Hint Text Wrapper */}
      <div className={labelSectionClasses}>
        <label hidden={hideLabel && hideLabel !== 'true'} htmlFor={id} className="text-primary-900 text-interaction-input-label">
          {label}
        </label>
      </div>

      {/* Text input wrapper */}
      <div className="input-wrapper flex relative items-center">
        <input
          type="number"
          id={id}
          value={currentValue}
          className={inputClasses}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={stringToBoolean(hasError)}
          aria-label={ariaLabel || label}
          aria-required={!stringToBoolean(isOptional)}
          ref={inputRef}
          onChange={handleChangeEvent}
          {...propsClone}
        />

        {/* Input Leading Icon [only line family icon] */}
        {leadingIcon && leadingIcon.indexOf('agora-line') === 0 && (
          <div className={leadigIconWrapperClasses}>
            <Icon icon={leadingIcon} ariaHidden />
          </div>
        )}

        {/* Steps controls */}
        <div
          className="input-number-controls"
          onFocus={() => null}
          onMouseOver={() => handleMouseHouvering(true)}
          onMouseLeave={() => handleMouseHouvering(false)}
        >
          <button
            disabled={min === parseFloat(currentValue ?? '0')}
            type="button"
            onClick={handleStepDown}
            aria-label={decreaseButtonAltText}
          >
            <Icon icon="agora-line-minus-circle" ariaHidden className="icon-step icon-step--default" />
            <Icon icon="agora-solid-minus-circle" ariaHidden className="icon-step icon-step--hover" />
          </button>
          <button
            disabled={max === parseFloat(currentValue ?? '0')}
            type="button"
            onClick={handleStepUp}
            aria-label={increaseButtonAltText}
          >
            <Icon icon="agora-line-plus-circle" ariaHidden className="icon-step icon-step--default" />
            <Icon icon="agora-solid-plus-circle" ariaHidden className="icon-step icon-step--hover" />
          </button>
        </div>
      </div>

      {/* Feedback & Char Counter Wrapper */}
      <div className="flex items-center justify-between">
        <div className="flex items-center input-feedback mt-8">
          {feedbackText && (
            <span className={`mr-8 feedback-icon-wrapper feedback-icon-wrapper--${feedbackState}`}>
              {!hasError ? (
                <Icon icon={feedbackStateIconsMap[feedbackState]} size="s" alt={feedbackText} />
              ) : (
                <Icon icon="agora-solid-danger" size="s" alt={feedbackText} />
              )}
            </span>
          )}
          <p className="text-type-specs-caption text-neutral-700">{feedbackText}</p>
        </div>
        {stringToBoolean(showCharCounter) && (
          <div className="text-type-specs-caption text-neutral-700 mt-8 pl-16">
            {currentValue?.length} {maxChars !== -1 ? `/${maxChars}` : ''}
          </div>
        )}
      </div>
    </div>
  );
};
