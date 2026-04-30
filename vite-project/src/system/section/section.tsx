

type Size = "full" | "half"
type BackgroundColor = "Brand" | "Black" | "White" | "LiteWhite" | "LiteBlack"


interface SectionProps {
    width?: Size
    children: React.ReactNode
    backgroundColor?: BackgroundColor
    className?: string
}



const sizeStyles: Record<Size, { size: string }> = {
    full: { size: "100%" },
    half: { size: "1550px" },
}

const bgStyles: Record<BackgroundColor, { Choose: string }> = {
    Brand: { Choose: "var(--Brand)" },
    Black: { Choose: "var(--Black)" },
    White: { Choose: "var(--White)" },
    LiteWhite: { Choose: "var(--LiteWhite)" },
    LiteBlack: { Choose: "var(--LiteBlack)" },
}

const Section = ({
    width = 'half',
    children,
    backgroundColor = 'White',
    className,
 

}: SectionProps) => {

    const styles: React.CSSProperties = {
        width: "100%",
        maxWidth: sizeStyles[width].size,
        backgroundColor: bgStyles[backgroundColor].Choose,
        margin: "auto",
    }

    return (
        <section className={className} style={styles}>
            {children}
        </section>
    )
}


export default Section