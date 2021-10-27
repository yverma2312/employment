import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Css/Custom1.css";
import Header from "./LayOut/Header";
import Footer from "./LayOut/Footer";
import EmploymentPortal from "./Component/EmploymentPortal";
import CheckForExistingUsers from "./Component/CheckForExistingUsers";
import ValidatingExistingData from "./Component/ValidatingExistingData";
import InstructionsNewRegistration from "./Component/InstructionsNewRegistration";
import RegistrationForm from "./Component/RegistrationForm";
import LoginForm from "./Component/LoginForm";
import CandidateList from "./Component/CandidateList";
import InstructionsRequestSubmission from "./Component/InstructionsRequestSubmission";
import RequestforSponsoringSuitableCandidates from "./Component/RequestforSponsoringSuitableCandidates";
import InstructionsRequestSubmissionUnderCNVAct1959 from "./Component/InstructionsRequestSubmissionUnderCNVAct1959";
import RequestforSponsoringSuitableCandidates1959 from "./Component/RequestforSponsoringSuitableCandidates1959";
import StatusofNotifiedVacancies from "./Component/StatusofNotifiedVacancies";
import AnswerToReportedProblems from "./Component/AnswerToReportedProblems";
import ResetPassword from "./Component/ResetPassword";
import ValidatedExistingCandidateList from "./Component/ValidatedExistingCandidateList";
import NewlyRegisteredCandidateList from "./Component/NewlyRegisteredCandidateList";
import CoveredNonCNVAct1959 from "./Component/CoveredNonCNVAct1959";
 // import from './Component/'
// import from './Component/'
// import from './Component/'
// import from './Component/'
// import from './Component/'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={EmploymentPortal} />
        <Route
          exact
          path="/ValidatingExistingData"
          component={ValidatingExistingData}
        />
        <Route
          exact
          path="/CheckForExistingUsers"
          component={CheckForExistingUsers}
        />
        <Route exact path="/InstructionsNewRegistration" component={InstructionsNewRegistration} />
        <Route exact path="/RegistrationForm" component={RegistrationForm} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route exact path="/CandidateList" component={CandidateList} />
        <Route exact path="/InstructionsRequestSubmission" component={InstructionsRequestSubmission} />
        <Route
          exact
          path="/RequestforSponsoringSuitableCandidates"
          component={RequestforSponsoringSuitableCandidates}
        />
        <Route
          exact
          path="/InstructionsRequestSubmissionUnderCNVAct1959"
          component={InstructionsRequestSubmissionUnderCNVAct1959}
        />
        <Route
          exact
          path="/RequestforSponsoringSuitableCandidates1959"
          component={RequestforSponsoringSuitableCandidates1959}
        />
        <Route
          exact
          path="/StatusofNotifiedVacancies"
          component={StatusofNotifiedVacancies}
        />
        
        <Route
          exact
          path="/AnswerToReportedProblems "
          component={AnswerToReportedProblems}
        />
        <Route exact path="/ResetPassword" component={ResetPassword} />
        <Route
          exact
          path="/ValidatedExistingCandidateList"
          component={ValidatedExistingCandidateList}
        />
        <Route
          exact
          path="/NewlyRegisteredCandidateList"
          component={NewlyRegisteredCandidateList}
        />
        <Route
          exact
          path="/CoveredNonCNVAct1959/:id"
          component={CoveredNonCNVAct1959}
        />
       
        {/*<Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/>
        <Route exact path="/" component={ }/> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
