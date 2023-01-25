import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { Icon } from '../icon';
import './input_text.scss';

export interface InputTextProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Input descriptive label.
   * @default 'Input Label'
   */
  label: string;
  /**
   * Decides if display/hide label.
   * @default false
   */
  hideLabel: boolean | 'true' | 'false';
  /**
   * Text informative displayed below input text
   * @default null
   */
  feedbackText: string;
  /**
   * Icon displayed inside the Input Text on left center corner
   * @default null
   */
  leadingIcon: string;
  /**
   * Intial value
   * @default null
   */
  initialValue: string;
  /**
   * Indicates the feedback state of feedback text.
   * This param will change the left feedback icon and dye it.
   */
  feedbackState?: 'info' | 'danger' | 'success' | 'warning';
  /**
   * Hightlight the input indicating some error
   * @default false
   */
  hasError: boolean | 'true' | 'false';
  /**
   * Indicates that this input char length limitation.
   * @default -1
   */
  maxChars: number;
  /**
   * Allow to show/hide the char counter on right button corner.
   * @default false
   */
  showCharCounter: boolean | 'true' | 'false';
}

export const InputText: React.FC<InputTextProps> = ({
  label = 'Input Label',
  hideLabel,
  hasError,
  maxChars = -1,
  showCharCounter,
  disabled,
  readOnly,
  feedbackText,
  feedbackState = 'info',
  leadingIcon,
  initialValue,
  className = '',
  id,
  ...props
}) => {
  const { onChange } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [currentValue, setCurrentValue] = useState(initialValue);

  /**
   * Local onChange event handler. This functions allow us
   * set a limit for chars amount
   * @param evt Event
   */
  const handleChangeEvent = (evt) => {
    const { value } = evt.currentTarget;
    if (maxChars === -1 || value?.length <= maxChars) setCurrentValue(value);
    onChange?.(evt);
  };

  /**
   * Diccionary of possible icons feedback.
   * @var
   */
  const feedbackStateIconsMap = {
    info: 'agora-solid-info',
    danger: 'agora-solid-danger',
    success: 'agora-solid-tick-circle',
    warning: 'agora-solid-alert'
  };

  /**
   * Builds main Classes for whole component
   * @returns Object
   */
  const inputClassBuilder = () => {
    const classes = {
      // main wrapper class
      inputWrapperClasses: classNames('agora-input-text--wrapper', {
        'input-disabled': disabled,
        'input-has-error': hasError
      }),
      // classes for above input sections [label and hint icon]
      labelSectionClasses: classNames('input-label-wrapper', 'flex', 'items-end', {
        'mb-8': label && !hideLabel,
        'justify-end': !label || hideLabel,
        'justify-between': label && !hideLabel
      }),
      // text input component classes
      inputClasses: classNames(
        'agora-input-text',
        'flex-1',
        {
          'has-leading-icon': leadingIcon,
          'has-value': currentValue.length > 0
        },
        className
      ),
      leadigIconWrapperClasses: classNames('input-icon', 'input-leading--icon', {
        'dye-as-solid': leadingIcon?.indexOf('agora-solid') === 0,
        'dye-as-line': leadingIcon?.indexOf('agora-solid') !== 0
      })
    };
    return classes;
  };

  const { inputWrapperClasses, labelSectionClasses, inputClasses, leadigIconWrapperClasses } = inputClassBuilder();

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
          type="text"
          id={id}
          value={currentValue}
          className={inputClasses}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={hasError}
          aria-label={label}
          ref={inputRef}
          onChange={handleChangeEvent}
          {...props}
        />

        {/* Input Leading Icon */}
        {leadingIcon && (
          <div className={leadigIconWrapperClasses}>
            <Icon icon={leadingIcon} ariaHidden />
          </div>
        )}
      </div>

      {/* Feedback & Char Counter Wrapper */}
      <div className="flex items-center justify-between">
        <div className="flex items-center input-feedback mt-8">
          {feedbackText && (
            <span className={`mr-8 feedback-icon-wrapper feedback-icon-wrapper--${feedbackState}`}>
              {!hasError ? (
                <Icon icon={feedbackStateIconsMap[feedbackState]} size="sm" alt={feedbackText} />
              ) : (
                <Icon icon="agora-solid-danger" size="sm" alt={feedbackText} />
              )}
            </span>
          )}
          <p className="text-type-specs-caption text-neutral-700">{feedbackText}</p>
        </div>
        {showCharCounter && (
          <div className="text-type-specs-caption text-neutral-700 mt-8 pl-16">
            {currentValue.length} {maxChars !== -1 ? `/${maxChars}` : ''}
          </div>
        )}
      </div>
    </div>
  );
};
