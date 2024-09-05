import { Typography } from "@mui/material";

interface TextProps {
    children: React.ReactNode;
    color?: | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning' ;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1';
    justify?: boolean;
}

const mappedColors = {
    'primary' : "#27374D",
    'secondary': "#DDE6ED",
    'success': "#76ABAE",
    'error': "red",
    'info': "yellow",
    'warning': "orange",
}

export default function Text({ justify = false, children, color = 'primary', variant = 'h1' }: TextProps) {

    return (
        <>
            <Typography className={justify ? "justify-text" : ""} variant={variant} color={mappedColors[color]} gutterBottom>
                {children}
            </Typography>
        </>
    )

}