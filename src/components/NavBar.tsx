import React from 'react';
import {AppBar, Box, createStyles, Link, Theme, Toolbar, Tooltip, Typography} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import WebIcon from '@material-ui/icons/Web';
import {makeStyles} from "@material-ui/core/styles";
import EmailDialog from "./EmailDialog";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarIconsRight: {
      marginLeft: 'auto',
    }
  }),
);

const NavBar = () => {

  const classes = useStyles();
  const [emailDialog, setEmailDialogOpen] = React.useState(false);

  return(
    <AppBar position={"sticky"} color="default" data-testid={"navbar"}>
      <Toolbar>
        <Typography variant="h6">
            Justin Hinze
        </Typography>
        <Box className={classes.toolbarIconsRight}>
            <Link aria-label="email" underline={"none"} href="#" color="inherit" onClick={() => setEmailDialogOpen(true)} data-testid={"email-link"}>
              <Tooltip title={"E-Mail"}>
                <EmailIcon data-testid="email-icon"/>
              </Tooltip>
            </Link>
        </Box>
        <Box pl={2}>
          <Link aria-label="blog" color={"inherit"} href={"https://www.justinhinze.com"} target="_blank">
            <Tooltip title={"Blog"}>
              <WebIcon data-testid="blog-icon"/>
            </Tooltip>
          </Link>
        </Box>
        <Box pl={2}>
          <Link aria-label="github" color={"inherit"} href={"https://github.com/jhinze"} target="_blank">
            <Tooltip title={"GitHub"}>
              <GitHubIcon data-testid="github-icon"/>
            </Tooltip>
          </Link>
        </Box>
        <Box pl={2}>
          <Link aria-label="linkedin" color={"inherit"} href={"https://www.linkedin.com/in/justin-h-577a3b108"} target="_blank">
            <Tooltip title={"LinkedIn"}>
            <LinkedInIcon data-testid="linkedin-icon"/>
            </Tooltip>
          </Link>
        </Box>
      </Toolbar>
      <EmailDialog open={emailDialog} setEmailDialogOpen={setEmailDialogOpen} data-testid="email-dialog"/>
    </AppBar>
  )

};

export default NavBar