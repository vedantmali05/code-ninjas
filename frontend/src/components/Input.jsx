import { useEffect, useState } from "react";


const Input = ({
    // Core Input Attributes
    label = "",
    type = "text",
    name,
    id,
    value,
    defaultValue = "",
    placeholder = "",
    autoComplete = "off",
    autoFocus = false,
    required = true,
    disabled = false,
    readOnly = false,
    showPasswordButton = false,

    // Validation
    maxLength,
    minLength,
    pattern,
    maxNumber,
    minNumber,
    step,

    // Formatting & Behavior
    allowOnlyNumbers = false,
    numberFormat = "default",
    transformText,
    spellCheck = false,

    // Events
    onChange,

    // UI Enhancements
    className = "",
    multiline = false,
    clearable = false,

    // Icons & Buttons
    leftElem,
    rightElem,

    // Messaging
    helpText,
    errorMessage,
    warningMessage,
    successMessage,

}) => {

    const [inputValue, setInputValue] = useState(value || "");
    const [inputType, setInputType] = useState(type);

    leftElem = leftElem ? (<span className="left-elem">{leftElem}</span>) : null;

    return (
        <div className={`input-box ${inputValue.length > 0 ? "filled" : ""} ${(leftElem) ? "has-trail-item" : ""}`}>

            {
                label &&
                <label
                    htmlFor={`${id}`}
                >
                    {label} {!required && "(optional)"}
                </label>
            }

            <div className="input-frame text-input">
                {/* Left Icon or Button */}
                {leftElem}
                {/* Input */}
                <input
                    type={inputType}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    readOnly={readOnly}

                    // Validation
                    required={required}
                    pattern={pattern}

                    // Events
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        if (onChange) onChange(e)
                    }}

                />
                {/* Right Icon or Button */}
                {rightElem}
            </div>
            <p className="help-text text-muted">{helpText}</p>
        </div>
    );
};

export default Input;
