import React from 'react';
import {createStyles, Paper, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from '../img/jh233xa8.png';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: "#000000",
      backgroundColor: "rgb(255,255,255,.3)",
      borderRadius: "2em",
      textAlign: "center",
      padding: theme.spacing(2),
      top: "25%",
      position: "absolute",
      fontSize: "4vw"
    },
    paperContainer: {
      height: "calc(100vh - 56px)",
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }),
);

const Content = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.paperContainer} data-testid={"content"}>
      <Typography variant={"h4"} className={classes.title}>
        <code>
          Software Engineer && Dog Lover
        </code>
      </Typography>
    </Paper>
  )

};

export default Content