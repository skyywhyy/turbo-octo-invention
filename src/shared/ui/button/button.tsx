import styles from "./button.module.scss"
import type {ButtonHTMLAttributes, FC} from "react";
import {clsx} from "clsx";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

export const Button : FC<IButtonProps> = (
    {
        children,
        variant = "primary",
        className,
        style,
        ...rest
    }) => {
    return(
    <button className={clsx(styles.button, styles[variant], className)}
            style={style}
            {...rest}>
        {children}
    </button>
    )
}