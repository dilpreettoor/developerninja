import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            className={classes.svgHover}
        ><path d="M300,250a50,50,0,0,1-50-50V150a50,50,0,0,1,50-50h100a50,50,0,0,1,50,50v100a50,50,0,0,1-50,50h-100Z" transform="translate(-50 -50)"></path>

<path d="M400,382.13a199.13,199.13,0,0,0,50-131.35h0c0-.26,0-.52,0-.78a199.11,199.11,0,0,0-50-132.11V250c0,82.71-67.29,150-150,150S100,332.71,100,250s67.29-150,150-150V50C139.72,50,50,139.72,50,250s89.72,200,200,200a199.56,199.56,0,0,0,150-67.87Z" transform="translate(-50 -50)"></path>
            <path d="M100,249.22h0V250C100,249.74,100,249.48,100,249.22Z" transform="translate(-50 -50)"></path>
        </svg>
    );
};
