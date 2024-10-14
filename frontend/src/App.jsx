import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home1 from './pages/home/Home1'
import {Navigate, Route, Routes , BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext'
import Navbar from './Layout/Navbar'
import NotFound from './components/NotFound/NotFound'
import Jobs from './components/Job/Jobs'
import JobDetails from './components/Job/JobDetails'
import PostJob from './components/Job/PostJob'
import MyJobs from './components/Job/MyJobs';
import Application from './components/Application/Application'
import MyApplications from './components/Application/MyApplications'
import Home from './components/Home/Home'

function App() {

  const {authUser} = useAuthContext();
  return (
    <div className='p-0 h-screen flex flex-grow items-center justify-center m-0 overflow-auto' >
      <Navbar/>
      <Routes>
        <Route path='/chat' element={authUser ? <Home1/> : <Navigate to={"/login"} />}/>
        <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp/>}/>
        <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login/>}/>
        <Route path="/job/getall" element={authUser ? <Jobs/> : <Navigate to={"/login"} />} />
        <Route path="/job/:id" element={authUser ? <JobDetails/> : <Navigate to={"/login"} />} />
        <Route path="/job/post" element={(authUser && authUser.role === "Faculty") ? <PostJob/> : <Navigate to={"/login"} />} />
        <Route path="/job/me" element={(authUser && authUser.role === "Faculty")? <MyJobs/> : <Navigate to={"/login"} />} />
        <Route path="/application/:id" element={<Application />} />
        <Route path="/applications/me" element={<MyApplications />} />
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"} />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Login from './pages/login/Login';
// import SignUp from './pages/signup/SignUp';
// import Home1 from './pages/home/Home1';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { useAuthContext } from './context/AuthContext';
// import Navbar from './Layout/Navbar';
// import NotFound from './components/NotFound/NotFound';
// import Jobs from './components/Job/Jobs';
// import JobDetails from './components/Job/JobDetails';
// import PostJob from './components/Job/PostJob';
// import MyJobs from './components/Job/MyJobs';
// import Application from './components/Application/Application';
// import MyApplications from './components/Application/MyApplications';
// import Home from './components/Home/Home';

// function App() {
//   const { authUser } = useAuthContext();
//   const location = useLocation();
//   const [isAppCssLoaded, setIsAppCssLoaded] = useState(true);

//   // Conditionally load or unload App.css based on the current route
//   useEffect(() => {
//     if (location.pathname === '/chat') {
//       setIsAppCssLoaded(false); // Do not load App.css for /chat
//     } else {
//       setIsAppCssLoaded(true); // Load App.css for other routes
//     }
//   }, [location.pathname]);

//   // Dynamically import App.css based on the condition
//   useEffect(() => {
//     if (isAppCssLoaded) {
//       import('./App.css'); // Import App.css dynamically when needed
//     }
//   }, [isAppCssLoaded]);

//   return (
//     <div className='p-0 h-screen flex flex-grow items-center justify-center m-0'>
//       <Navbar />
//       <Routes>
//         <Route path='/chat' element={authUser ? <Home1 /> : <Navigate to={"/login"} />} />
//         <Route path='/signup' element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
//         <Route path='/login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
//         <Route path='/job/getall' element={authUser ? <Jobs /> : <Navigate to={"/login"} />} />
//         <Route path='/job/:id' element={authUser ? <JobDetails /> : <Navigate to={"/login"} />} />
//         <Route path='/job/post' element={(authUser && authUser.role === 'Faculty') ? <PostJob /> : <Navigate to={"/login"} />} />
//         <Route path='/job/me' element={(authUser && authUser.role === 'Faculty') ? <MyJobs /> : <Navigate to={"/login"} />} />
//         <Route path='/application/:id' element={<Application />} />
//         <Route path='/applications/me' element={<MyApplications />} />
//         <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// }

// export default App;
