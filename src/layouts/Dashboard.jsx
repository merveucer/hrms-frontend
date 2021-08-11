import React from "react";
import { Route } from "react-router-dom";
import Navi from "./Navi";
import Footer from "./Footer";
import HomeLayout from "./HomeLayout";
import JobPostingLayout from './JobPostingLayout';
import CandidateLayout from './CandidateLayout';
import EmployerLayout from './EmployerLayout';
import AboutUsLayout from './AboutUsLayout';
import { Container } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Container className="dashboard">
        <Navi />

        <Route exact path="/" component={HomeLayout} />
        <Route exact path="/home" component={HomeLayout} />
        <Route exact path="/jobPostings" component={JobPostingLayout} />
        <Route exact path="/candidates" component={CandidateLayout} />
        <Route exact path="/employers" component={EmployerLayout} />
        <Route exact path="/aboutUs" component={AboutUsLayout} />

        <Footer />
      </Container>
    </div>
  );
}
