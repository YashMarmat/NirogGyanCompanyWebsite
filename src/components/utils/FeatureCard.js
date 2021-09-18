
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/nunito-sans";
import "@fontsource/open-sans";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
        borderRadius: "10px",
    },
    
    card: {
        border: "1px solid #B8BBBD",
        marginBottom: "2rem",
        borderRadius: "10px",
    }, imageBox: {
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#E9F5FF",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",

        "&>img": {
            margin: "auto",
            maxHeight: "100%",
            maxWidth: "auto",

        }
    },
    textBox: {

        "&>*": {
            textAlign: "left",
            fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
            padding: "1rem",
            textWrap: "word-break"
        }
    },
}));

export default function FeatureCard({ imagePath, textThin, textBold }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.card}  >
            <Grid item xs={4} className={classes.imageBox}>
                <img src={imagePath} alt="feature" />
            </Grid>
            <Grid item xs={8} className={classes.textBox}>
                <Typography component="div">
                    <Box fontWeight="fontWeightLight" m={1}>
                        {textThin}
                    </Box>
                    <Box fontWeight="fontWeightBold" m={1}>
                        {textBold}
                    </Box>
                </Typography>
            </Grid>
        </Grid>
    )
}