// import React from 'react';
// import Sidebar from '../sidebar/Sidebar';
// import Video from '../video/Video';
// import { useAuth } from '../../context/AuthProvider';

// function Home() {
//   // here we are importing data from api
//   const {data} = useAuth()
//   console.log(data)
//   // now we have to show this data to video section so we are passing this data
//     return (
//         <div className='flex'>
//             <Sidebar />
//             <div>
//               {
//                 data.map({item} => {
//                   <Video key={item.id} video= {item} />
//                 })
//               }
//             </div>
//         </div>
//     );
// }

// export default Home;


import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Video from '../video/Video';
import { useAuth } from '../../context/AuthProvider';

function Home() {
  // Destructure `data` from `useAuth` to access the data fetched from the API
  const { data } = useAuth();
  
  // Log the data to the console for debugging purposes
  console.log(data);
  
  return (
    <div className='flex mt-20'>
      <Sidebar />
     <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-y-scroll'>
     {/* here before applying the scrolling class when we scroll the page full page was scrolling including sidebar
     so thats why we are applying scroll seperate to the video */}
     <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-5'>
        {
          // Map through the data array to render `Video` components
          data.map(item => (
            item.type === "video" ? (
              <Video key={item.id} video={item.video} />
            ) : null
          ))
        }
      </div>
     </div>
    </div>
  );
}

export default Home;
