// import React,{useEffect, useState} from 'react'
// import { useParams } from 'react-router-dom'
// import { fetchdata } from "../../utils/RapidAPI/Rapidapi.js";

// function Search() {

//   const [result, setResult] = useState()
//   const {searchQuery} = useParams()
  
//   useEffect(() => {
//     fetchSearchResults();
//   }, [searchQuery])

//   const fetchSearchResults = () => {
//     fetchdata(`/search/?q=${searchQuery}`).then(({contents}) => {
//       // Handle the results here
//       console.log(contents)
//       setResult(contents)
//     })
//   }

//   return (
//     <div className='mt-32'>
//       search
//     </div>
//   )
// }

// export default Search


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchdata } from "../../utils/RapidAPI/Rapidapi.js";

// function Search() {
//   const [result, setResult] = useState([]);
//   const { searchQuery } = useParams();
  
//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const data = await fetchdata(`/search/?q=${searchQuery}`)
//         setResult(data);
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//       }
//     };

//     if (searchQuery) {
//       fetchSearchResults();
//     }
//   }, [searchQuery]);

//   return (
//     <div className='mt-32'>
//       {result.length > 0 ? (
//         <div>
//           {result.map((item, index) => (
//             <div key={index}>
//               {/* Render search result item here */}
//               <p>{item.title}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No results found</p>
//       )}
//     </div>
//   );
// }

// export default Search;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchdata } from "../../utils/RapidAPI/Rapidapi.js";

function Search() {
  const [result, setResult] = useState([]); // Initialize with an empty array
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchdata(`/search/?q=${searchQuery}`)
      .then(({ contents }) => {
        console.log(contents);
        setResult(contents);
      })
      .catch(error => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className='mt-32'>
      search
      {/* Render search results here */}
    </div>
  );
}

export default Search;


