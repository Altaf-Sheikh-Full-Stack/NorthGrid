

type Size = "small" | "medium" | "large" | "semiLarge"
type TextType = "heading" | "subHeading" | "text"
type Font = "sharp" | "playful"
type Color = "black" | "white" | "lite"

interface TextProb {
    size?: Size
    className?: string
    type?: TextType
    children?: React.ReactNode
    font?: Font,
    color?: Color
}


const sizeStyles: Record<Size, { calc: string }> = {
    small: { calc: "18px" },
    medium: { calc: "22px" },
    semiLarge: { calc: "clamp(1rem, 1.2rem + min(100vw, 1920px) / 50, 3rem)" },
    large: { calc: "clamp(2rem, 1.2rem + min(100vw, 1920px) / 50, 15rem)" }
}

const fontStyles: Record<Font, { family: string }> = {
    sharp: { family: "Roboto" },
    playful: { family: "Momo Trust Display" }
}

const typeStyles: Record<TextType, { typesof: keyof React.JSX.IntrinsicElements }> = {
    heading: { typesof: "h1" },
    subHeading: { typesof: "h2" },
    text: { typesof: "p" }
}


const colorStyles: Record<Color, { pick: string }> = {
    black: { pick: "black" },
    white: { pick: "white" },
    lite: { pick: "whitesmoke" }
}


const Text = ({ size = "medium", type = 'text', children, className, font = 'sharp', color = 'black' }: TextProb) => {

    const Component = typeStyles[type].typesof

    const styles: React.CSSProperties = {
        fontSize: sizeStyles[size].calc,
        fontFamily: fontStyles[font].family,
        color: colorStyles[color].pick
    }


    return (
        <Component style={styles} className={className}>
            {children}
        </Component>
    )
}

export default Text