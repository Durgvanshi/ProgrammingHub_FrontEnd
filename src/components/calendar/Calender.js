import * as React from "react";
import { Paper, Grid } from "@mui/material";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@material-ui/core";
import { drawerWidth } from "../SideDrawer";

const useStyles = makeStyles({
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
  },
});

const appointments = [
  {
    title: "okay",
    startDate: new Date(2021, 9, 29, 12, 0),
    endDate: new Date(2021, 9, 29, 13, 0),
  },
  {
    title: "Clootrack Software Engineer (Frontend) Hiring Challenge",
    startDate: new Date(2021, 10, 26, 0),
    endDate: new Date(2021, 11, 5, 0),
  },
  {
    title: "Data Structures and Algorithms Coding Contest",
    startDate: new Date(2021, 10, 13, 9, 30),
    endDate: new Date(2021, 10, 13, 11),
  },
  {
    title: "Code with SAP 2.0",
    startDate: new Date(2021, 10, 19, 0),
    endDate: new Date(2021, 10, 24, 0),
  },
  {
    title: "Kongsberg Digital Hiring Challenge",
    startDate: new Date(2021, 10, 26, 0),
    endDate: new Date(2021, 11, 5, 23, 55),
  },
  {
    title: "Monocept Trainee Software Engineer Hiring Challenge",
    startDate: new Date(2021, 11, 3, 18, 0),
    endDate: new Date(2121, 11, 12, 23, 55),
  },
  {
    title: "November Circuits '21",
    startDate: new Date(2021, 10, 20, 21, 30),
    endDate: new Date(2121, 10, 27, 21, 30),
  },
  {
    title: "JustAnswer Sr.Software Engineer Challenge",
    startDate: new Date(2021, 10, 19, 18, 0),
    endDate: new Date(2121, 10, 28, 23, 55),
  },
];

const currentDate = new Date();

const Calendar = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer}>
      <Paper>
        <Scheduler data={appointments}>
          <ViewState defaultCurrentDate={currentDate} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </Grid>
  );
};
export default Calendar;
