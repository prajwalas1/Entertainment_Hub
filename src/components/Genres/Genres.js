import axios from 'axios'
import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
const Genres = ({
        type, 
        selectedGenres ,
        setSelectedGenres,
        genres ,
        setGenres,
         setPage,

}) => {

    const handleAdd = (genre) => {
      setSelectedGenres([...selectedGenres, genre]);
      setGenres(genres.filter((g)=>g.id!==genre.id));
      setPage(1);
    };

    const handleRemove = (genre) => {
      setSelectedGenres(
        selectedGenres.filter((selected)=> selected.id!==genre.id)

      );
      setGenres([...genres,genre]);
      setPage(1);
    };


    const fetchGenres = async() => {
       const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
       );

       setGenres(data.genres);
    };
    console.log(genres);

    useEffect(() => {
        fetchGenres();

        return () => {
          setGenres([]);
        }// eslint-disable-next-line
    },[]);

  return (
    <div style={{padding: "6px 0"}}>
       {selectedGenres && selectedGenres.map((genre) => (
          <Chip
           label={genre.name} 
           color='secondary'
           size='small'
           key={genre.id}
           style={{margin: 2}}
           clickable
           onDelete={()=>handleRemove(genre)}
            />
      ))}
      {genres && genres.map((genre) => (
          <Chip
           label={genre.name} 
           color='primary'
           size='small'
           key={genre.id}
           style={{margin: 2}}
           clickable
             onClick={() => handleAdd(genre)}
            />
      ))}
    </div>
  )
}

export default Genres;