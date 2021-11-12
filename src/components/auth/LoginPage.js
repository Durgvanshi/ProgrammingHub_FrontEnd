import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link as MUILink from "@mui/material/Link";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import GitHubIcon from "@material-ui/icons/GitHub";
import useInput from "../../hooks/use-input";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { loginHandler } from "../../Redux/Action/actions";
import { makeStyles } from "@material-ui/core";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const theme = createTheme();
const useStyles = makeStyles({
  progress: {
    color: "#FFFFFF",
  },
});
const buttonStyle = {
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderColor: "#000000",
  borderRadius: "10rem",
  color: "#000000",
  fontSize: "15px",
  letterSpacing: "0",
};

function LoginPage() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    hasError: emailHasError,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    blurChangeHandler: passwordBlurHandler,
    hasError: passwordHasError,
  } = useInput((value) => value.trim() !== "");
  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem("token", token);

        const user = result.user;
        console.log(user);
        localStorage.setItem("user", user.displayName);
        dispatch(
          loginHandler({
            token: token,
            email: user.displayName,
            expirationTime: null,
          })
        );

        history.replace("/");
        console.log("successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const GitHubAuth = () => {
    signInWithPopup(auth, providerGitHub)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem("token", token);
        const user = result.user;
        console.log(user);
        localStorage.setItem("user", user.displayName);
        dispatch(
          loginHandler({
            token: token,
            email: user.displayName,
            expirationTime: null,
          })
        );
        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        alert(errorMessage);
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbNNUGqurVX37l7L_lm6v9FbyaBT4f-q0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            console.log(data);
            if (data && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", data.email);
        dispatch(
          loginHandler({
            token: data.idToken,
            email: data.email,
            expirationTime: expirationTime.toISOString(),
          })
        );
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("/image 1.png")',
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            style={{ marginTop: "12px" }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                error={emailHasError}
                helperText={emailHasError && "Please enter a valid email."}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="filled"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                type="email"
              />
              <TextField
                error={passwordHasError}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
                helperText={passwordHasError && "Please enter your password."}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="filled"
              />
              <Button
                type="submit"
                fullWidth
                disabled={!formIsValid}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? (
                  <CircularProgress className={classes.progress} size={20} />
                ) : (
                  "Login"
                )}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={3} style={{ padding: "8px" }} mt={1}>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  startIcon={<GTranslateIcon />}
                  style={buttonStyle}
                  fullWidth
                  onClick={googleAuth}
                >
                  Continue with Google
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  style={buttonStyle}
                  fullWidth
                  onClick={GitHubAuth}
                >
                  Continue with GitHub
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;
// url(https://source.unsplash.com/random)
