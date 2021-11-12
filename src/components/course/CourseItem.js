import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modalHandler } from "../../Redux/Action/actions";
import { showSnackbar } from "../../Redux/Action/actions";

const useStyles = makeStyles({
  type: {
    fontWeight: "bold",
  },
  root: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  },
  button: {
    display: "flex",
    alignSelf: "center",
  },
});
const CourseItem = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const currentUser = useSelector((state) => state.user.currentUser);
  const selectedCourseHandler = async (selectedCourse) => {
    const userChoice = {
      ...selectedCourse,
      date: new Date().toDateString(),
      token: token,
      currentUser: currentUser,
    };
    await fetch(
      "https://programminghub-98a05-default-rtdb.asia-southeast1.firebasedatabase.app/userInfo.json",
      {
        method: "POST",
        body: JSON.stringify(userChoice),
      }
    );
    dispatch(
      modalHandler({
        items: [],
        heading: "null",
        courseType: null,
        filteredItems: [],
      })
    );
    dispatch(showSnackbar());
    console.log(userChoice);
  };
  const classes = useStyles();
  return (
    <li>
      <Card className={classes.root} elevation={0}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.heading}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.subheading}
            </Typography>
            <Typography variant="body1" className={classes.type}>
              {props.type}
            </Typography>
          </CardContent>
        </div>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          href={props.link}
          className={classes.button}
          target="_blank"
          onClick={selectedCourseHandler.bind(null, {
            heading: props.heading,
            type: props.type,
            link: props.link,
          })}
        >
          Start Course
        </Button>
      </Card>
    </li>
  );
};

export default CourseItem;
