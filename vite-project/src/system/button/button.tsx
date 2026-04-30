import React from "react";

type Variant = "Brand" | "Black" | "White" | "LiteWhite" | "LiteBlack"
type Size = "small" | "medium" | "large";
type Tone =   "dark" | "light";
type ButtonType = "button" | "submit" | "reset";
type BorderRadius = "small" | "medium" | "large" | "none"


interface ButtonProps {
  backgroundColor?: Variant;
  size?: Size;
  color?: Tone;
  type?: ButtonType;
  padding?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  rounded?: BorderRadius;
}



const variantStyles: Record<Variant, { Choose: string }> = {
    Brand: { Choose: "var(--Brand)" },
    Black: { Choose: "var(--Black)" },
    White: { Choose: "var(--White)" },
    LiteWhite: { Choose: "var(--LiteWhite)" },
    LiteBlack: { Choose: "var(--LiteBlack)" },
}

const toneStyles: Record<Tone, { text: string }> = {
    light: { text: "white" },
    dark: { text: "black" }
};

const borderStyles: Record<BorderRadius, { border: string }> = {
    small: { border: "4px" },
    medium: {  border: "8px" },
    large: {  border: "50px" },
    none: {  border: "none" }
};

const sizeStyles: Record<Size, { padding: string; fontSize: string }> = {
    small: { padding: "6px 12px", fontSize: "12px" },
    medium: { padding: "10px 16px", fontSize: "14px" },
    large: { padding: "14px 20px", fontSize: "16px" }
};

const Button = ({
    backgroundColor = 'White',
    size = "medium",
    color = 'dark',
    type = "button",
    padding,
    children,
    onClick,
    disabled = false,
    className,
    rounded = 'none'
}: ButtonProps) => {



    const bgs = variantStyles[backgroundColor].Choose
    const textColor = toneStyles[color].text;
    const borderRounded = borderStyles[rounded].border

    const styles: React.CSSProperties = {
        backgroundColor: bgs,
        color: textColor,
        padding: padding ?? sizeStyles[size].padding,
        fontSize: sizeStyles[size].fontSize,
        border: "none",
        borderRadius: borderRounded,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1
    };

    return (
        <button
            type={type}
            style={styles}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;