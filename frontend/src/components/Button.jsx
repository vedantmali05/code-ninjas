
import { forwardRef } from "react";

const Button = forwardRef(({
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

export default Button;