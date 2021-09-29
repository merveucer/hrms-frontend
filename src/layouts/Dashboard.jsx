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
import CandidateAdd from "./../pages/CandidateAdd";
import EmployerAdd from "./../pages/EmployerAdd";
import ResumeDetailsEdit from "./../pages/ResumeDetailsEdit";
import LinkAdd from "./../pages/LinkAdd";
import CoverLetterAdd from "./../pages/CoverLetterAdd";
import EducationAdd from "./../pages/EducationAdd";
import ExperienceAdd from "./../pages/ExperienceAdd";
import LanguageLevelAdd from "./../pages/LanguageLevelAdd";
import SkillAdd from "./../pages/SkillAdd";
import LinkDelete from "./../pages/LinkDelete";
import CoverLetterEdit from "./../pages/CoverLetterEdit";
import EducationDelete from "./../pages/EducationDelete";
import ExperienceDelete from "./../pages/ExperienceDelete";
import LanguageLevelDelete from "./../pages/LanguageLevelDelete";
import SkillDelete from "./../pages/SkillDelete";
import CandidateUpdate from "./../pages/CandidateUpdate";
import EmployerUpdate from "./../pages/EmployerUpdate";
import FavoriteJobPostingLayout from "./FavotireJobPostingLayout";
import AdminLayout from "./adminLayouts/AdminLayout";
import CompanyStaffAdd from "./../pages/adminPages/CompanyStaffAdd";
import CompanyStaffUpdate from "./../pages/adminPages/CompanyStaffUpdate";
import AppDetailsEdit from "./../pages/adminPages/AppDetailsEdit";
import CityAdd from "./../pages/adminPages/CityAdd";
import CityUpdate from "./../pages/adminPages/CityUpdate";
import JobTitleAdd from "./../pages/adminPages/JobTitleAdd";
import JobTitleUpdate from "./../pages/adminPages/JobTitleUpdate";
import LanguageAdd from "./../pages/adminPages/LanguageAdd";
import LanguageUpdate from "./../pages/adminPages/LanguageUpdate";
import LevelAdd from "./../pages/adminPages/LevelAdd";
import LevelUpdate from "./../pages/adminPages/LevelUpdate";
import LinkNameAdd from "./../pages/adminPages/LinkNameAdd";
import LinkNameUpdate from "./../pages/adminPages/LinkNameUpdate";
import WorkingTimeAdd from "./../pages/adminPages/WorkingTimeAdd";
import WorkingTimeUpdate from "./../pages/adminPages/WorkingTimeUpdate";
import WorkingTypeAdd from "./../pages/adminPages/WorkingTypeAdd";
import WorkingTypeUpdate from "./../pages/adminPages/WorkingTypeUpdate";
import Confirm from "./../pages/adminPages/Confirm";
import { Container } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <Container className="dashboard">
      <Navi />

      <Route exact path="/" component={HomeLayout} />
      <Route exact path="/home" component={HomeLayout} />
      <Route exact path="/jobPostings" component={JobPostingLayout} />
      <Route exact path="/jobPostings/jobPosting/:id" component={JobPostingDetail} />
      <Route exact path="/candidate/add" component={CandidateAdd} />
      <Route exact path="/candidates" component={CandidateLayout} />
      <Route exact path="/candidates/candidate/:id" component={CandidateDetail} />
      <Route exact path="/candidates/candidate/:id/update" component={CandidateUpdate} />
      <Route exact path="/candidates/candidate/:id/favoriteJobPostings" component={FavoriteJobPostingLayout} />
      <Route exact path="/candidates/resume/:id/edit" component={ResumeDetailsEdit} />
      <Route exact path="/candidates/resume/:id/link/add" component={LinkAdd} />
      <Route exact path="/candidates/resume/:id/link/delete" component={LinkDelete} />
      <Route exact path="/candidates/candidate/:id/coverLetter/add" component={CoverLetterAdd} />
      <Route exact path="/candidates/candidate/:id/coverLetter/edit" component={CoverLetterEdit} />
      <Route exact path="/candidates/resume/:id/education/add" component={EducationAdd} />
      <Route exact path="/candidates/resume/:id/education/delete" component={EducationDelete} />
      <Route exact path="/candidates/resume/:id/experience/add" component={ExperienceAdd} />
      <Route exact path="/candidates/resume/:id/experience/delete" component={ExperienceDelete} />
      <Route exact path="/candidates/resume/:id/languageLevel/add" component={LanguageLevelAdd} />
      <Route exact path="/candidates/resume/:id/languageLevel/delete" component={LanguageLevelDelete} />
      <Route exact path="/candidates/resume/:id/skill/add" component={SkillAdd} />
      <Route exact path="/candidates/resume/:id/skill/delete" component={SkillDelete} />
      <Route exact path="/employer/add" component={EmployerAdd} />
      <Route exact path="/employers" component={EmployerLayout} />
      <Route exact path="/employers/:type/:id/" component={EmployerDetail} />
      <Route exact path="/employers/employer/:id/update" component={EmployerUpdate} />
      <Route exact path="/employers/employer/:id/jobPosting/add" component={JobPostingAdd} />
      <Route exact path="/aboutUs" component={AboutUsLayout} />

      <Route exact path="/adminPanel" component={AdminLayout} />
      <Route exact path="/adminPanel/companyStaff/add" component={CompanyStaffAdd} />
      <Route exact path="/adminPanel/companyStaff/:id/update" component={CompanyStaffUpdate} />
      <Route exact path="/adminPanel/companyStaff/:id/confirm" component={Confirm} />
      <Route exact path="/adminPanel/edit" component={AppDetailsEdit} />
      <Route exact path="/adminPanel/edit/city/add" component={CityAdd} />
      <Route exact path="/adminPanel/edit/city/update" component={CityUpdate} />
      <Route exact path="/adminPanel/edit/jobTitle/add" component={JobTitleAdd} />
      <Route exact path="/adminPanel/edit/jobTitle/update" component={JobTitleUpdate} />
      <Route exact path="/adminPanel/edit/language/add" component={LanguageAdd} />
      <Route exact path="/adminPanel/edit/language/update" component={LanguageUpdate} />
      <Route exact path="/adminPanel/edit/level/add" component={LevelAdd} />
      <Route exact path="/adminPanel/edit/level/update" component={LevelUpdate} />
      <Route exact path="/adminPanel/edit/linkName/add" component={LinkNameAdd} />
      <Route exact path="/adminPanel/edit/linkName/update" component={LinkNameUpdate} />
      <Route exact path="/adminPanel/edit/workingTime/add" component={WorkingTimeAdd} />
      <Route exact path="/adminPanel/edit/workingTime/update" component={WorkingTimeUpdate} />
      <Route exact path="/adminPanel/edit/workingType/add" component={WorkingTypeAdd} />
      <Route exact path="/adminPanel/edit/workingType/update" component={WorkingTypeUpdate} />

      <Footer />
    </Container>
  );
}
