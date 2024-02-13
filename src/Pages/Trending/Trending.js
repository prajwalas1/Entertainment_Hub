import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import SingleContent from '../../components/SingleContent/SingleContent';
import "./Trending.css";
import CustomPagination from '../../components/Pagination/CustomPagination';
const Trending = () => {
  const [page , setPage] = useState(1);
  const [content , setContent] = useState([]);

  const fetchTrending = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
      // console.log(data.results);
      setContent(data.results);
      
    } catch (error) {
      console.error('Error fetching trending data:', error);
    }
  };

  useEffect(() => {
    fetchTrending(); 
    // eslint-disable-next-line
  }, [page]); 

  return (
    <div>
      <span className='pageTitle'>Today's Trending</span>
      <div className='trending'>
        {
          content && content.map((c) => (
             <SingleContent key={c.id} id={c.id}
              poster = {c.poster_path} title={c.title || c.name } date={c.first_air_date || c.release_date}
              media_type = {c.media_type}
              vote_average = {c.vote_average}

               />
          ))
        }

      </div>
      <CustomPagination setPage = {setPage}
        numOfPages={10}
      />
    </div>
  );
};

export default Trending;


