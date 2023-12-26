import "./App.css";
import React, { useEffect } from "react";
import CommingSoon from "./components/CommingSoon/CommingSoon";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import Header from './components/SharedComponents/Header/Header';
import HomePage from "./Pages/HomePage";
import { RecruitPage } from "./Pages/RecruitPage";
import JoinUs from "./Pages/JoinUs";
import Resume from "./Pages/Resume";
import Login from "./Pages/Login";
import Verify from "./Pages/Verify";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import ApplyNewJob from "./Pages/ApplyNewJob";
import AppliedJobs from "./Pages/AppliedJobs";
import ResentJob from "./Pages/ResentJob";
import ProfileSetting from "./Pages/ProfileSetting";
import Notification from "./Pages/Notification";
import NotificationDetail from "./Pages/NotificationDetail";

import AdminDashboard from "./Pages/AdminDashboard";
// import Analytics from './Pages/Analytics';
// import Fintech from './Pages/Fintech';

import PageNotFound from "./Pages/utility/PageNotFound";
import Signin from "./Pages/Signin";
import Signups from "./Pages/Signups";

import MainWrapper from "./Pages/MainWrapper";
import { useSelector } from "react-redux";

import Jobs from "./Pages/Jobs/Jobs";
import CreateJob from "./Pages/Jobs/CreateJob";

import Candidate from "./Pages/candidates/candidates";
import CreateCandidate from "./Pages/candidates/CreateCandidate";
import Employers from "./Pages/employers/employers";
import CreateEmployer from "./Pages/employers/CreateEmployer";
import Department from "./Pages/department/departments";
import CreateDepartment from "./Pages/department/CreateDepartment";
import Designation from "./Pages/designation/designation";
import CreateDesignation from "./Pages/designation/CreateDesignation";
import Inspire from "./Pages/inspire/inspire";
import CreateInspire from "./Pages/inspire/CreateInspire";
import Ticker from "./Pages/ticker/ticker";
import CreateTicker from "./Pages/ticker/CreateTicker";
import FeedBack from "./Pages/feedback/feedback";
import CreateFeedback from "./Pages/feedback/CreateFeedback";
import UserFeedback from "./Pages/UserFeedback";
import Faqs from "./Pages/faqs/Faqs";
import CreateFaq from "./Pages/faqs/CreateFaq";
import Policy from "./Pages/policies/Policy";
import CreatePolicy from "./Pages/policies/CreatePolicy";

// import Locate from './Pages/locate/locate';
import CreateDoctor from "./Pages/locate/Doctors/CreateDoctor";
import CreateLawyer from "./Pages/locate/Lawyers/CreateLawyer";
import CreateServices from "./Pages/locate/Services/CreateServices";
import Permission from "./Pages/permission/permission";
import CreatePermission from "./Pages/permission/CreatePermission";
import CreateRole from "./Pages/role/Roles/CreateRole";
import Roles from "./Pages/role/Roles/roles";
import SinglePermission from "./Pages/role/Singlepermission/singlePermission";
import CreateSinglePermission from "./Pages/role/Singlepermission/CreatePermission";
import MutiplePermission from "./Pages/role/MultiplePermission/multiplepermission";
import CreateMultiplePermission from "./Pages/role/MultiplePermission/CreatePermission";

import Doctors from "./Pages/locate/Doctors/Doctors";
import Lawyers from "./Pages/locate/Lawyers/Lawyers";
import Services from "./Pages/locate/Services/Services";
import CreatePhoneBook from "./Pages/phoneBook/CreatePhoneBook";
import PhoneBooks from "./Pages/phoneBook/phoneBooks";
import TermsConditions from "./Pages/termsCondition/termsCondition";
import CreateTermsCondition from "./Pages/termsCondition/CreateTerms";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CreateAboutUs from "./Pages/AboutUs/CreateAboutUs";
import AssignRole from "./Pages/user/AssignRole";
import Users from "./Pages/user/users";
import CreateUsers from "./Pages/user/CreateUser";
import Lexicon from "./Pages/lexicon/Lexicon";
import PublicBetaLogin from "./Pages/PublicBetaLogin";
import CreateLexicon from "./Pages/adminLexicon/CreateLexicon";
import Lexicons from "./Pages/adminLexicon/Lexicon";
import DasSignupPage from "./Pages/DasSignupPage";
import DasSignInPage from "./Pages/DasSignInPage";
import LandingPage from "./Pages/LandingPages/Home/Home";
import MainPage from "./Pages/LandingPages/MainPage/MainPage";
import Stocks from "./Pages/LandingPages/Stock/Stock";
import LocatehomePage from "./components/LandingPageComponents/LocaterPage/LocatehomePage";
import Detail from "./components/LandingPageComponents/LayerDetail/Detail";
import Appointments from "./Pages/AdminPages/Appointment/Appointments";
import CreateAppointment from "./Pages/AdminPages/Appointment/CreateAppointment";
import NewDashboardPage from "./Pages/NewDashboardPage";
import Support from "./components/NewDashboardComponents/Support";
import NewDashboard from "./components/NewDashboardComponents/NewDashboard";
import NewServices from "./components/NewDashboardComponents/NewServices";
import Inbox from "./components/NewDashboardComponents/Inbox";
import Orders from "./components/NewDashboardComponents/Orders";
import Categories from "./Pages/AdminPages/Ecome/Category/Categories";
import CreateCategory from "./Pages/AdminPages/Ecome/Category/CreateCategory";
import Products from "./Pages/AdminPages/Ecome/Product/Products";
import CreateProduct from "./Pages/AdminPages/Ecome/Product/CreateProduct";
import CreateStore from "./Pages/AdminPages/Ecome/Store/CreateStore";
import Stores from "./Pages/AdminPages/Ecome/Store/Stores";
import Notifications from "./components/NewDashboardComponents/Notifications";
// import Table from './components/GlobalComponents/TableComponent';
import Diseases from "./Pages/AdminPages/Disease/Diseases";
import CreateDisease from "./Pages/AdminPages/Disease/CreateDisease";
import TableComponent from "./components/GlobalComponents/table";
import OrderList from "./components/NewDashboardComponents/OrderList";
import MedicalLandingPage from "./Pages/Medical/LandingPage";
import Invoice from "./components/NewDashboardComponents/Invoice";
import Message from './Pages/message/Message'
import Sidebar from "./Pages/Medical/Layout/Sidebar";

import OrderDetails from './components/NewDashboardComponents/OrderDetails';
import InvoiceInformation from './components/NewDashboardComponents/InvoiceInformation';
import NewInvoice from './components/NewDashboardComponents/NewInvoice';
import BrandAdvertisement from './Pages/Advertisement/BrandAdvertisement/BrandAdvertisement';
import CreateBrandAdvertisement from './Pages/Advertisement/BrandAdvertisement/CreateBrandAdvertisement';
import BusinessAdvertisement from './Pages/Advertisement/BusinessAdvertisement/BusinessAdvertisement';
import OrganizationAdvertisement from './Pages/Advertisement/OrganizationAdvertisement/OrganizationAdvertisement';
import CreateOrganizationAdvertisement from './Pages/Advertisement/OrganizationAdvertisement/CreateOrganizationAdvertisement';
import CreateBusinessAdvertisement from './Pages/Advertisement/BusinessAdvertisement/CreateBusinessAdvertisement';

// Ecommerace
import Landingpage from './Pages/EcomePages/Landingpage';
import EDashboard from './Pages/EcomePages/Dashboard';
import Setting from './Pages/EcomePages/Setting';
import Purchase from './Pages/EcomePages/Purchase';
import Credit from './Pages/EcomePages/Credit';
import NewFaqs from "./components/NewDashboardComponents/NewFaqs";
import SingleGig from "./components/NewDashboardComponents/SingleGig";
import Cart from "./Pages/Cart";
import ProductInfo from "./Pages/ProductInfo";
import Store from "./Pages/EcomePages/Store";
import PublicBetaSignUp from "./Pages/PublicBetaSignUp";
import Product from "./Pages/products/products";
import Wishlist from "./Pages/EcomePages/Wishlist";
import Statement from "./Pages/EcomePages/Statement";
import UpItmes from "./Pages/EcomePages/UpItmes";
import Withdrawals from "./Pages/EcomePages/Withdrawals";
import MangItems from "./Pages/EcomePages/MangItems";
import Portable from "./components/LandingPageComponents/Homepage/Portable/Portable";
import Cultivate from "./Pages/LandingPages/ConstuctionPages/Cultivate";
import Chillum from "./components/LandingPageComponents/Homepage/Chillums/Chillums";
import Diaganose from "./components/LandingPageComponents/Homepage/Diagnose/Diaganose";
import Prescribe from "./Pages/LandingPages/ConstuctionPages/Prescribe";
import SavedJobs from "./Pages/SavedJob";
import AppliedAllJobs from "./Pages/Jobs/AppliedJobs";
import TaskCategories from "./Pages/taskcategory/TaskCategories";
import CreateTaskCategory from "./Pages/taskcategory/CreateTaskCategory";
import JobCategories from "./Pages/jobcategory/JobCategories";
import CreateJobCategory from "./Pages/jobcategory/CreateJobCategory";
import UserMessage from "./Pages/UserMessages";
import VideoTutorial from './Pages/videoTutorial/VideoTutorial'
import CreateVideo from "./Pages/videoTutorial/CreateVideo";
import Questions from "./Pages/questions/Questions";
import CreateQuestion from "./Pages/questions/CreateQuestion";
import Industries from "./Pages/industry/Industries";
import CreateIndustry from "./Pages/industry/CreateIndustry";
import Task from "./Pages/task/Task";
import CreateTask from "./Pages/task/CreateTask";
import BuyerLandig from "./Pages/buyerPages/BuyerLanding/BuyerLandig";
import ProjectBrife from "./Pages/buyerPages/Brife/Brife";
import BuyerWrapper from "./components/BuyerDashboard/Layout";
import BuyerDashboard from "./components/BuyerDashboard/Dashboard";
import MessageBox from "./components/BuyerDashboard/MessageBox";
import Profile from "./components/BuyerDashboard/Profile";
import BuyerNotification from "./components/BuyerDashboard/BuyerNotification";
// import Agency from "./Pages/LandingPages/Agency/Agency";


// Buyer imports



const RequireAuth = ({ children }) => {
  const token = useSelector((state) => state.userAuth.loginInfo.token);
  let location = useLocation();
  if (!token) {
    return <Navigate to="/adminsignin" state={{ from: location }} replace />;
  }
  return children;
};

const RecruitAuthUser = ({ children }) => {
  const token = useSelector((state) => state.recruitAuth.loginInfo.token);
  let location = useLocation();
  if (!token) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};



function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change
  return (
    <>
      <Routes>
        {/* main beta page  */}
        {/* <Route path="/" element={<PublicBetaLogin />} /> */}
        <Route path="/betaSignup" element={<PublicBetaSignUp />} />
        {/* Landing pages  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/locator" element={<LocatehomePage />} />
        <Route path="/userDetail" element={<Detail />} />
        <Route path="/homepage" element={<MainPage />} />
        <Route path="/portable" element={<Portable />} />
        <Route path="/cultivate" element={<Cultivate />} />
        <Route path="/chillum" element={<Chillum />} />
        <Route path="/diagnose" element={<Diaganose />} />
        <Route path="/prescribe" element={<Prescribe />} />
        {/* <Route path="/agency" element={<Agency />} /> */}
        <Route path="/stock" element={<Stocks />} />
        <Route path="/providerDashboard" element={<NewDashboardPage />} />
        {/* Recuit Pages  */}
        <Route path="/recruitLanding" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/detail/:id" element={<Resume />} />
        <Route path="/lexicon" element={<Lexicon />} />

        <Route path="/verify" element={<Verify />} />
        <Route
          path="/recruit"
        // element={
        //   <RecruitAuthUser>
        //     <Dashboard />
        //   </RecruitAuthUser>
        // }
        >
          <Route index element={<RecruitPage type="recuit" />} />

        </Route>

        <Route
          path="/candidateDashboard"
          element={
            <RecruitAuthUser>
              <Dashboard />
            </RecruitAuthUser>
          }
        >
          <Route index element={<ApplyNewJob />} />
          <Route index path="new-job" element={<ApplyNewJob />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="recent-jobs" element={<ResentJob />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="notification" element={<Notification />} />
          <Route path="notification-detail" element={<NotificationDetail />} />
          <Route path="inbox" element={<UserMessage />} />
        </Route>

        {/* Das pages  */}
        <Route path="/das" element={<DasSignupPage />} />
        {/* <Route path="/das-signup" element={<DASAccountSignup />} /> */}
        <Route path="/das-signin" element={<DasSignInPage />} />


        {/* New Dashboardx */}

        <Route path="/providerDashboard" element={<NewDashboardPage />}>
          <Route index element={<NewDashboard />} />
          <Route index path="services" element={<NewServices />} />
          <Route index path="inbox" element={<Inbox />} />
          <Route index path="orders" element={<Orders />} />
          <Route index path="ordersList" element={<OrderList />} />
          <Route index path="ordersTable" element={<TableComponent />} />
          <Route index path="support" element={<Support />} />
          <Route index path="notifications" element={<Notifications />} />
          <Route index path="invoice" element={<Invoice />} />
          <Route index path="faqs" element={<NewFaqs />} />
          <Route index path="gig" element={<SingleGig />} />
          <Route index path="orderdetails" element={<OrderDetails />} />
          <Route index path="invoiceinfo" element={<InvoiceInformation />} />
          <Route index path="newinvoice" element={<NewInvoice />} />
        </Route>

        {/* Medical and Customer Module */}
        <Route path="/medical" element={<MedicalLandingPage />}>
          {/* <Route index element={<MedicalLandingPage />} /> */}
        </Route>
        <Route index path='customer-dashboard' element={<Sidebar />} />

        {/* E-commerace landing page  */}
        <Route path="/e-landing" element={<Landingpage />} />
        <Route path="/e-dashboard" element={<EDashboard />} />
        <Route path="/e-setting" element={<Setting />} />
        <Route path="/e-purchase" element={<Purchase />} />
        <Route path="/e-credit" element={<Credit />} />
        <Route path="/e-cart" element={<Cart />} />
        <Route path="/e-product-info" element={<ProductInfo />} />
        <Route path="/fairman-online" element={<Store />} />
        <Route path="/e-whishlist" element={<Wishlist />} />
        <Route path="/e-statement" element={<Statement />} />
        <Route path="/e-uploaditem" element={<UpItmes />} />
        <Route path="/e-manageitem" element={<MangItems />} />
        <Route path="/e-withdrawal" element={<Withdrawals />} />

        {/* <Route index path="customer-dashboard" element={<Sidebar />} /> */}


        {/* Buyer Routes */}

        <Route path="/buyerLanding" element={<BuyerLandig />} />
        <Route path="/projectBrife" element={<ProjectBrife />} />
        {/* Buyer Dashboard */}

        <Route path="/buyerDashboard" element={<BuyerWrapper />}>
        <Route index element={<BuyerDashboard />} />
        <Route path="buyernotification" element={<BuyerNotification />} />
        <Route path="message" element={<MessageBox />} />
        <Route path="profile" element={<Profile />} />

        </Route>




        {/* Admin Dashboard */}
        <Route path="/comingsoon" element={<CommingSoon />} />
        <Route path="/user-feedback" element={<UserFeedback />} />
        <Route path="/adminsignin" element={<Signin />} />
        <Route path="/adminsignup" element={<Signups />} />
        <Route
          path="/admindashboard"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
          {/* <Route path='analytics' element={<Analytics />} /> */}
          {/* <Route path='fintech' element={<Fintech />} /> */}
        </Route>

        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Appointments />} />
          <Route path="create-appointment" element={<CreateAppointment />} />
        </Route>

        {/* <Route
          path='/customer'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<AllCustomers />} />
          <Route path='create-customer' element={<CreateCustomer />} />
        </Route> */}

        <Route
          path="/ecome/"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route path="products" element={<Products />} />
          <Route path="category" element={<Categories />} />
          <Route path="store" element={<Stores />} />
          <Route path="products/create-products" element={<CreateProduct />} />
          <Route path="category/create-category" element={<CreateCategory />} />
          <Route path="store/create-store" element={<CreateStore />} />
        </Route>

        <Route
          path="/disease"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Diseases />} />
          <Route path="create-disease" element={<CreateDisease />} />
        </Route>

        <Route
          path="/department"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Department />} />
          <Route path="create-department" element={<CreateDepartment />} />
        </Route>
        <Route
          path="/designation"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Designation />} />
          <Route path="create-designation" element={<CreateDesignation />} />
        </Route>

        <Route
          path="/message"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Message />} />
        </Route>

        <Route
          path="/jobs"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Jobs />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="applied-jobs" element={<AppliedAllJobs />} />
        </Route>

        <Route
          path="/jobcategory"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<JobCategories />} />
          <Route path="create-jobcategory" element={<CreateJobCategory />} />
        </Route>

        <Route
          path="/candidates"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Candidate />} />
          <Route path="create-candidate" element={<CreateCandidate />} />
        </Route>

        <Route
          path="/tutorial"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<VideoTutorial />} />
          <Route path="create-tutorial" element={<CreateVideo />} />
        </Route>

        <Route
          path="/question"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Questions />} />
          <Route path="create-question" element={<CreateQuestion />} />
        </Route>

        <Route
          path="/employers"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Employers />} />
          <Route path="create-employers" element={<CreateEmployer />} />
        </Route>
        <Route
          path="/inspire"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Inspire />} />
          <Route path="create-inspire" element={<CreateInspire />} />
        </Route>

        <Route
          path="/ticker"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Ticker />} />
          <Route path="create-ticker" element={<CreateTicker />} />
        </Route>

        <Route
          path="/phonebook"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<PhoneBooks />} />
          <Route path="create-phonebook" element={<CreatePhoneBook />} />
        </Route>


        <Route
          path="/product"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Product />} />
          <Route path="create-product" element={<CreateFeedback />} />
        </Route>

        <Route
          path="/feedback"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<FeedBack />} />
          <Route path="create-feedback" element={<CreateFeedback />} />
        </Route>


        <Route path='/brand-advertisement' element={<RequireAuth><MainWrapper /></RequireAuth>}    >
          <Route index element={<BrandAdvertisement />} />
          <Route path='create-brand-advertisement' element={<CreateBrandAdvertisement />} />
        </Route>

        <Route path='/business-advertisement' element={<RequireAuth><MainWrapper /></RequireAuth>}    >
          <Route index element={<BusinessAdvertisement />} />
          <Route path='create-business-advertisement' element={<CreateBusinessAdvertisement />} />
        </Route>

        <Route path='/organization-advertisement' element={<RequireAuth><MainWrapper /></RequireAuth>}    >
          <Route index element={<OrganizationAdvertisement />} />
          <Route path='create-organization-advertisement' element={<CreateOrganizationAdvertisement />} />
        </Route>

        <Route
          path="/locate/"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route path="doctor" element={<Doctors />} />
          <Route path="lawyer" element={<Lawyers />} />
          <Route path="services" element={<Services />} />
          <Route path="doctor/create-doctor" element={<CreateDoctor />} />
          <Route path="lawyer/create-lawyer" element={<CreateLawyer />} />
          <Route path="services/create-service" element={<CreateServices />} />
        </Route>

        <Route
          path="/faq"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Faqs />} />
          <Route path="create-faq" element={<CreateFaq />} />
        </Route>

        <Route
          path="/task"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Task />} />
          <Route path="create-task" element={<CreateTask />} />
        </Route>

        <Route
          path="/industry"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Industries />} />
          <Route path="create-industry" element={<CreateIndustry />} />
        </Route>

        <Route
          path="/policy"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Policy />} />
          <Route path="create-policy" element={<CreatePolicy />} />
        </Route>

        <Route
          path="/permission"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Permission />} />
          <Route path="create-permission" element={<CreatePermission />} />
        </Route>

        <Route
          path="/roles"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Roles />} />
          <Route path="create-roles" element={<CreateRole />} />
        </Route>

        <Route
          path="/singlePermission"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<SinglePermission />} />
          <Route
            path="create-permission/:id"
            element={<CreateSinglePermission />}
          />
        </Route>

        <Route
          path="/multiplePermission"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<MutiplePermission />} />
          <Route
            path="create-permission/:id"
            element={<CreateMultiplePermission />}
          />
        </Route>

        <Route
          path="/terms"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<TermsConditions />} />
          <Route path="create-terms" element={<CreateTermsCondition />} />
        </Route>

        <Route
          path="/tasks"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<TermsConditions />} />
          <Route path="create-tasks" element={<CreateTermsCondition />} />
        </Route>

        <Route
          path="/taskcategory"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<TaskCategories />} />
          <Route path="create-taskcategory" element={<CreateTaskCategory />} />
        </Route>
        <Route
          path="/aboutus"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<AboutUs />} />
          <Route path="create-aboutus" element={<CreateAboutUs />} />
        </Route>

        <Route
          path="/lexicons"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Lexicons />} />
          <Route path="create-lexicon" element={<CreateLexicon />} />
        </Route>

        <Route
          path="/user"
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Roles />} />
          <Route path="assign-role" element={<AssignRole />} />
          <Route path="list" element={<Users />} />
          <Route path="list/create-user" element={<CreateUsers />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
