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
import EmployerUpdate from './../pages/EmployerUpdate';
import FavoriteJobPostingLayout from './FavotireJobPostingLayout';
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
      <Route exact path="/candidates/candidate/:id/favoriteJobPostings" component={FavoriteJobPostingLayout} />
      <Route exact path="/candidate/add" component={CandidateAdd} />
      <Route exact path="/employers" component={EmployerLayout} />
      <Route exact path="/employers/employer/:id" component={EmployerDetail} />
      <Route exact path="/employers/employer/:id/update" component={EmployerUpdate} />
      <Route exact path="/employer/add" component={EmployerAdd} />
      <Route exact path="/aboutUs" component={AboutUsLayout} />
      <Route exact path="/resumeDetails/resume/:id/edit" component={ResumeDetailsEdit} />
      <Route exact path="/resumeDetails/resume/:id/link/add" component={LinkAdd} />
      <Route exact path="/resumeDetails/resume/:id/link/delete" component={LinkDelete} />
      <Route exact path="/resumeDetails/resume/candidate/:id/coverLetter/add" component={CoverLetterAdd} />
      <Route exact path="/resumeDetails/resume/candidate/:id/coverLetter/edit" component={CoverLetterEdit} />
      <Route exact path="/resumeDetails/resume/:id/education/add" component={EducationAdd} />
      <Route exact path="/resumeDetails/resume/:id/education/delete" component={EducationDelete} />
      <Route exact path="/resumeDetails/resume/:id/experience/add" component={ExperienceAdd} />
      <Route exact path="/resumeDetails/resume/:id/experience/delete" component={ExperienceDelete} />
      <Route exact path="/resumeDetails/resume/:id/languageLevel/add" component={LanguageLevelAdd} />
      <Route exact path="/resumeDetails/resume/:id/languageLevel/delete" component={LanguageLevelDelete} />
      <Route exact path="/resumeDetails/resume/:id/skill/add" component={SkillAdd} />
      <Route exact path="/resumeDetails/resume/:id/skill/delete" component={SkillDelete} />

      <Footer />
    </Container>
  );
}
