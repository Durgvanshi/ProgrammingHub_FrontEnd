import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { drawerWidth } from "./SideDrawer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "100%",
  },
  media: {
    height: 200,
  },
  gridContainer: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: "auto",
    marginTop: "1rem",
    marginRight: "0.2rem",
    paddingLeft: "1rem",
  },
  info: {
    marginTop: "0.75rem",
  },
});

const hackathonsInfo = [
  {
    id: 1,
    title: "Data Structures and Algorithms Coding Contest",
    startsOn: "Nov 13, 09:30 AM IST",
    endsOn: "Nov 13, 11:00 AM IST",
    duration: "1h 30m",
    path: "/DSA Hackerearth.png",
    url: "https://www.hackerearth.com/challenges/competitive/data-structures-and-algorithms-coding-contest-November/",
  },
  {
    id: 2,
    title: "Impact Analytics Front-End Developer Hiring Challenge",
    startsOn: "NOV 12, 06:00 PM IST",
    endsOn: "NOV 21, 11:55 PM IST",
    duration: "6H",
    path: "/impact analytics.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/impact-analytics-front-end-developer-hiring-challenge/",
  },
  {
    id: 3,
    title: "TIBCO LABS IoT and Sustainability Hack",
    startsOn: "Nov 15, 2021 11:30 PM IST",
    endsOn: "Jan 14, 2022 11:30 PM IST",
    duration: "30 Days",
    path: "/Tibco.png",
    url: "https://www.hackerearth.com/challenges/hackathon/tibco-labs-iot-and-sustainability-hack/",
  },
  {
    id: 4,
    title: "Code with SAP 2.0",
    startsOn: "NOV 19, 06:00 PM IST",
    endsOn: "NOV 24, 11:55 PM IST",
    duration: "1H 30M",
    path: "/SAP labs.png",
    url: "https://www.hackerearth.com/challenges/competitive/code-with-sap-2/",
  },
  {
    id: 5,
    title: "Kongsberg Digital Hiring Challenge",
    startsOn: "NOV 26, 06:00 PM IST",
    endsOn: "DEC 05, 11:55 PM IST",
    duration: "1H 30M",
    path: "/Kongsberg Digital.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/kongsberg-digital-hiring-challenge/",
  },
  {
    id: 6,
    title: "Mahindra Rise Data Engineer Hiring Challenge",
    startsOn: "NOV 26, 06:00 PM IST",
    endsOn: "DEC 05, 11:55 PM IST",
    duration: "3H",
    path: "/Mahindra.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/mahindra-rise-data-engineer-hiring-challenge/",
  },
  {
    id: 7,
    title: "Mahindra Rise Fullstack Engineer Hiring Challenge",
    startsOn: "NOV 26, 06:00 PM IST",
    endsOn: "DEC 05, 11:55 PM IST",
    duration: "3H",
    path: "/Mahindra.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/mahindra-rise-fullstack-engineer-hiring-challenge/",
  },
  {
    id: 8,
    title: "Juspay Developer Hiring Challenge November 2021",
    startsOn: " NOV 26, 06:00 PM IST",
    endsOn: "NOV 28, 11:55 PM IST",
    duration: "1H 30M",
    path: "/Juspay.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/juspay-developer-hiring-challenge-november-2021/",
  },
  {
    id: 9,
    title: "Monocept Software Engineer (.Net) Hiring Challenge",
    startsOn: "DEC 03, 06:00 PM IST",
    endsOn: "DEC 12, 11:55 PM IST",
    duration: "2H 30M",
    path: "/Monocept.jpg",
    url: "https://assessment.hackerearth.com/challenges/hiring/monocept-software-engineer-net-hiring-challenge/",
  },
  {
    id: 10,
    title: "Monocept Trainee Software Engineer Hiring Challenge",
    startsOn: "DEC 03, 06:00 PM IST",
    endsOn: "DEC 12, 11:55 PM IST",
    duration: "2H 30M",
    path: "/Monocept.jpg",
    url: "https://assessment.hackerearth.com/challenges/hiring/monocept-trainee-software-engineer-hiring-challenge/",
  },
  {
    id: 11,
    title: "Clootrack Software Engineer (Frontend) Hiring Challenge",
    startsOn: "NOV 26, 06:00 PM IST",
    endsOn: "DEC 05, 11:55 PM IST",
    duration: "3H",
    path: "/Clootrack.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/clootrack-software-engineer-frontend-hiring-challenge/",
  },
  {
    id: 12,
    title: "Clootrack Software Engineer (Backend) Hiring Challenge",
    startsOn: "DEC 03, 06:00 PM IST",
    endsOn: "DEC 12, 11:55 PM IST",
    duration: "3H",
    path: "/Clootrack.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/clootrack-software-engineer-backend-hiring-challenge/",
  },
  {
    id: 13,
    title: "November Circuits '21",
    startsOn: "Nov 20, 09:30 PM IST",
    endsOn: "Nov 27, 09:30 PM IST",
    duration: "7 days",
    path: "/Hackerearth.png",
    url: "https://www.hackerearth.com/challenges/competitive/nov-circuits-21/",
  },
  {
    id: 14,
    title: "Infinx Data Structure Hiring Challenge",
    startsOn: "NOV 19, 06:00 PM IST",
    endsOn: "NOV 28, 11:55 PM IST",
    duration: "2H 30M",
    path: "Infinx.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/infinx-data-structure-hiring-challenge/",
  },
  {
    id: 15,
    title: "JustAnswer Sr.Software Engineer Challenge",
    startsOn: "NOV 19, 06:00 PM IST",
    endsOn: "NOV 28, 11:55 PM IST",
    duration: "3H",
    path: "/JustAnswer.png",
    url: "https://assessment.hackerearth.com/challenges/hiring/justanswer-software-engineer-hiring-challenge/",
  },
];

const HackathonsPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      {hackathonsInfo.map((item) => {
        return (
          <Grid item sm={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.path}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">STARTS ON</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.startsOn}
                  </Typography>
                  <Typography variant="body1" className={classes.info}>
                    ENDS ON
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.endsOn}
                  </Typography>
                  <Typography variant="body1" className={classes.info}>
                    DURATION
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.duration}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary" href={item.url} target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HackathonsPage;
