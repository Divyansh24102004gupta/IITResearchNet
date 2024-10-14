// import React from 'react'
// import { Link } from 'react-router-dom'

// const NotFound = () => {
//   return (
//     <>
//         <section className='page notfound'>
//           <div className="content">
//             <img src="/notfound.png" alt="notfound" />
//             <Link to={'/'}>RETURN TO HOME PAGE</Link>
//           </div>
//         </section>
//     </>
//   )
// }

// export default NotFound

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Layout/Footer';

const NotFound = () => {
  return (
    <div className='flex-col w-full'>
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center ">
        <Link 
          to="/" 
          className="text-black text-xl font-bold bg-blue-600 px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Oops! Page not found
        </Link>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default NotFound;
