import PropTypes from "prop-types";
import { forwardRef } from "react";

const CTAButton = forwardRef(({
    label,
    className = "",
    iconName,
    iconType = "icon",
    rightIcon = false,
    ...rest
}, ref) => {

    let iconElem = <i className={`bi bi-${iconName} icon`}></i>

    return (
        <button className={className} {...rest}>
            {!rightIcon && iconName && iconElem}
            {label}
            {rightIcon && iconName && iconElem}
        </button>
    )
})

CTAButton.propTypes = {
    icon: PropTypes.string,
    rightIcon: PropTypes.bool,
    iconType: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};


export default CTAButton;