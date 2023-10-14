import { Fragment } from 'react';
import './App.css';
import Home from './Pages/Home';

import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Explore from './Pages/Explore';
import Team from './Pages/Team';
import OTP from './Pages/OTP';
import TestCategories from './Pages/TestCategories';
import TestListPage from './Pages/TestListPage';
import TestQuestionsPage from './Pages/TestQuestionsPage';
import TestThankYou from './Pages/TestThankYou';
import ParentalVerification from './Pages/ParentalVerification';
import ChatbotPage from './Pages/ChatBot';
import JournelPage from './Pages/JournelPage';
import CoursesPage from './Pages/CoursesPage';
import MeditationPage from './Pages/MeditationPage';
import SleepMed from './Pages/SleepMed';
import AddResume from './Pages/AddResume';
import MHP from './Pages/MHP';
import Appointment from './Pages/Appointment';
import MhpProfile from './Pages/MhpProfile';
import Dashboard from './Pages/Dashboard';
import Payment from './Pages/Payment';
import VideoCall from './Pages/VideoCall';
import ProfileForm from './Pages/ProfileForm';
import ClientDashboard from './Pages/Client_dash';




const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='/OTP' element={<OTP/>}/>
    <Route index path ='/home' element={<Home />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/Login' element={<Login />}/>
    <Route path='/explore' element={<Explore/>}/>
    <Route path='/team' element={<Team/>}/>
    <Route path='/ChatBotPage' element={<ChatbotPage/>}/>
    <Route path='/JournelPage' element={<JournelPage/>}/>
    <Route path='/CoursesPage' element={<CoursesPage/>}/>
    <Route path='/MeditationPage' element={<MeditationPage/>}/>
    <Route path= '/test-categories' element={<TestCategories/>}/>
    <Route path='/tests/:categoryId' element={<TestListPage/>}/>
    <Route path='/tests/:testId/questions' element={<TestQuestionsPage/>}/>
    <Route path='/thank-you' element={<TestThankYou/>}/>
    <Route path='/parent-verify' element={<ParentalVerification/>}/>
    <Route path='/SleepMedPage' element={<SleepMed/>}/>
    <Route path='/verify-resume' element={<AddResume/>}/>
    <Route path='/book' element={<MHP/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    <Route path='/MhpProfile' element={<MhpProfile/>}/>
    <Route path='/ProfileForm' element={<ProfileForm/>}/>
    <Route path='/Client_dash' element={<ClientDashboard/>}/>
   
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/video-call/:slug' element={<VideoCall/>}/>
  </Route>
))
const App = () => {
  return (
  
    <Fragment>
      <RouterProvider router={routes} />      
    </Fragment>
  );
}


export default App;
