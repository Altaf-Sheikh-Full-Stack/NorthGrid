
type BorderRadius = "full" | "half" | "none"
type Padding = "full" | "half" | "none"
type BackgroundColor = "Brand" | "Black" | "White" | "LiteWhite" | "LiteBlack"

interface BoxProps  {
    borderRadius?:BorderRadius
    children?:React.ReactNode
    className?:string
    padding?:Padding
    backgroundColor?:BackgroundColor
}

const borderStyle:Record<BorderRadius, {choose : string}> = {
    full:{choose:"50px"},
    half:{choose:"7px"},
    none:{choose: "none"}
}

const paddingStyle:Record<BorderRadius, {choose : string}> = {
    full:{choose:"50px"},
    half:{choose:"20px"},
    none:{choose: "none"}
}



const backgroundColorStyle: Record<BackgroundColor, { Choose: string }> = {
    Brand: { Choose: "var(--Brand)" },
    Black: { Choose: "var(--Black)" },
    White: { Choose: "var(--White)" },
    LiteWhite: { Choose: "var(--LiteWhite)" },
    LiteBlack: { Choose: "var(--LiteBlack)" },
}


const Box = ({backgroundColor='White', padding='none' ,borderRadius = 'none', children, className}: BoxProps) => {

    const styles: React.CSSProperties = {
        borderRadius:borderStyle[borderRadius].choose,
        padding:paddingStyle[padding].choose,
        backgroundColor:backgroundColorStyle[backgroundColor].Choose
    }

    return(
        <div className={className} style={styles}>{children}</div>
    )
}

export default Box