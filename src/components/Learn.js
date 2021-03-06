import React from "react";
import SideDrawer from "./SideDrawer";
import { Route } from "react-router-dom";
import TopNavigationBar from "./TopNavigationBar";
import Courses from "./course/Courses";
import Calendar from "./calendar/Calender";
import Groups from "./Groups";
import ProgressPage from "./ProgressPage";
import DisplayCourse from "./course/DisplayCourse";
import { useSelector } from "react-redux";
import HackathonsPage from "./HackathonsPage";
import PracticePage from "./PracticePage";
import Problems from "./Problems";
import Leaderboard from "./Leaderboard.js";

const Learn = () => {
  const showModal = useSelector((state) => state.courses.showModal);
  return (
    <div>
      {showModal && <DisplayCourse />}
      <TopNavigationBar />
      <SideDrawer />
      <Route exact path="/" component={Courses} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/groups" component={Groups} />
      <Route path="/progress" component={ProgressPage} />
      <Route path="/hackathons" component={HackathonsPage} />
      <Route path="/practice" component={PracticePage} />
      <Route path="/practice:id" component={Problems} />
      <Route path="/leaderboard" component={Leaderboard} />
    </div>
  );
};

export default Learn;
