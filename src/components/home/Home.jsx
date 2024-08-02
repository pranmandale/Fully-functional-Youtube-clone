import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Video from '../video/Video';
import ListItems from '../listitems/ListItems'
import { useAuth } from '../../context/AuthProvider';

function Home() {
  // Destructure `data` from `useAuth` to access the data fetched from the API
  const { data, loading } = useAuth();
  
  // Log the data to the console for debugging purposes
  console.log(data);
  
  return (
    <div className='flex mt-20'>
      <Sidebar />
      
     <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-y-scroll'>
     <ListItems/>
     {/* here before applying the scrolling class when we scroll the page full page was scrolling including sidebar
     so thats why we are applying scroll seperate to the video */}
     <div className='grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-4'>
        {
          // Map through the data array to render `Video` components
          !loading && 
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



