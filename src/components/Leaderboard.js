import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "./SideDrawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
  },
});

const sample = [
  { x: 2, y: 1000, label: "Aryan-1000" },
  { x: 3, y: 2000, label: "Taha-2000" },
];
const Leaderboard = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [open, setOpen] = useState(true);
  const [first, setFirst] = useState(false);
  const [rating, setRating] = useState();

  const handleSubmit = () => {
    handleClose();
    fetch(`https://codeforces.com/api/user.rating?handle=${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(user);
        let { result } = data;
        console.log(result);
        result = result[result.length - 1];
        const { newRating } = result;
        setRating(newRating);
        sample.push({
          x: 1,
          y: newRating,
          label: `${user}-${newRating}`,
        });
        setFirst(true);
        console.log(sample);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    console.log(1);
    setUser(event.target.value);
    console.log(user);
  };
  return (
    <Grid container className={classes.gridContainer}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Your CodeForces Username</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Get Rank
          </Button>
        </DialogActions>
      </Dialog>
      {first && (
        <Grid container className={classes.gridContainer}>
          <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15 }}>
            <VictoryAxis dependentAxis />
            <VictoryBar
              style={{
                data: {
                  stroke: "black",
                  fill: "#c43a31",
                  width: 25,
                },
              }}
              data={sample}
            />
          </VictoryChart>
        </Grid>
      )}
    </Grid>
  );
};

export default Leaderboard;
