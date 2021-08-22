import React from "react";
import { Route } from "react-router-dom";
import Navi from "./Navi";
import Footer from "./Footer";
import HomeLayout from "./HomeLayout";
import JobPostingLayout from "./JobPostingLayout";
import CandidateLayout from "./CandidateLayout";
import EmployerLayout from "./EmployerLayout";
import AboutUsLayout from "./AboutUsLayout";
import JobPostingDetail from "./../pages/JobPostingDetail";
import CandidateDetail from "./../pages/CandidateDetail";
import EmployerDetail from "./../pages/EmployerDetail";
import JobPostingAdd from "./../pages/JobPostingAdd";
import CandidateAdd from './../pages/CandidateAdd';
import EmployerAdd from './../pages/EmployerAdd';
import ResumeDetailsEdit from './../pages/ResumeDetailsEdit';
import LinkAdd from './../pages/LinkAdd';
import CoverLetterAdd from './../pages/CoverLetterAdd';
import EducationAdd from './../pages/EducationAdd';
import ExperienceAdd from './../pages/ExperienceAdd';
import LanguageLevelAdd from './../pages/LanguageLevelAdd';
import SkillAdd from './../pages/SkillAdd';
import LinkDelete from './../pages/LinkDelete';
import CoverLetterEdit from './../pages/CoverLetterEdit';
import EducationDelete from './../pages/EducationDelete';
import ExperienceDelete from './../pages/ExperienceDelete';
import LanguageLevelDelete from './../pages/LanguageLevelDelete';
import SkillDelete from './../pages/SkillDelete';
import { Container } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <Container className="dashboard">
      <Navi />

      <Route exact path="/" component={HomeLayout} />
      <Route exact path="/home" component={HomeLayout} />
      <Route exact path="/jobPostings" component={JobPostingLayout} />
      <Route exact path="/jobPostings/jobPosting/:id" component={JobPostingDetail} />
      <Route exact path="/jobPosting/add" component={JobPostingAdd} />
      <Route exact path="/candidates" component={CandidateLayout} />
      <Route exact path="/candidates/candidate/:id" component={CandidateDetail} />
      <Route exact path="/candidate/add" component={CandidateAdd} />
      <Route exact path="/employers" component={EmployerLayout} />
      <Route exact path="/employers/employer/:id" component={EmployerDetail} />
      <Route exact path="/employer/add" component={EmployerAdd} />
      <Route exact path="/aboutUs" component={AboutUsLayout} />
      <Route exact path="/resumeDetails/edit/:id" component={ResumeDetailsEdit} />
      <Route exact path="/link/add/:id" component={LinkAdd} />
      <Route exact path="/link/delete/:id" component={LinkDelete} />
      <Route exact path="/coverLetter/add/:id" component={CoverLetterAdd} />
      <Route exact path="/coverLetter/edit/:id" component={CoverLetterEdit} />
      <Route exact path="/education/add/:id" component={EducationAdd} />
      <Route exact path="/education/delete/:id" component={EducationDelete} />
      <Route exact path="/experience/add/:id" component={ExperienceAdd} />
      <Route exact path="/experience/delete/:id" component={ExperienceDelete} />
      <Route exact path="/languageLevel/add/:id" component={LanguageLevelAdd} />
      <Route exact path="/languageLevel/delete/:id" component={LanguageLevelDelete} />
      <Route exact path="/skill/add/:id" component={SkillAdd} />
      <Route exact path="/skill/delete/:id" component={SkillDelete} />

      <Footer />
    </Container>
  );
}
