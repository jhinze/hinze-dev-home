import React, {useState} from 'react';
import {
  Box, Button,
  createStyles,
  Dialog, DialogActions,
  DialogContent,
  DialogTitle, Link,
  Theme,
  Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import {config} from "../config/api";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorIcon from '@material-ui/icons/Error';


type EmailDialogProps = {
  open: boolean
  setEmailDialogOpen: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogTitle: {
      textAlign: "center",
    },
    dialogContent: {
      textAlign: "center",
      height: "140px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  }),
);

const EmailDialog = ({open, setEmailDialogOpen}: EmailDialogProps) => {

  const [email, setEmail] = useState(undefined);
  const [error, setError] = useState(false);
  const classes = useStyles();
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY || "";

  const captchaVerifyCallback = (value: string | null) => {
    if(value) {
      axios.get(`/email?token=${value}`, config)
        .then((response) => {
          setEmail(response.data.email);
          setError(false);
        })
        .catch((error) => {
          setError(true);
          console.log(error)
        });
    }
  };

  const handleClose = () => {
    setEmailDialogOpen(false)
  };

  return(
    <Dialog open={open} onClose={handleClose} maxWidth={"sm"}>
      <DialogTitle className={classes.dialogTitle}>
        <Typography variant="h5">E-Mail</Typography>
      </DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
        <Box fontStyle="italic" display="flex" width={"350px"} justifyContent={"center"} alignItems={"center"}>
          {error
            ?
              <ErrorIcon fontSize={"large"}/>
            :
              <div>
                {email
                  ?
                    <Typography variant={"h6"}>
                      <Link href={`mailto:${email}`} color={"inherit"} underline={"none"}>
                        {`${email}`}
                      </Link>
                    </Typography>
                  :
                    <ReCAPTCHA
                      sitekey={recaptchaKey}
                      onChange={captchaVerifyCallback}
                      data-testid="recaptcha"
                    />
                }
              </div>
          }
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="inherit" data-testid="dismiss-email-dialog">
          Dismiss
        </Button>
      </DialogActions>
    </Dialog>
  )

};

export default EmailDialog