import React, { useState, useEffect } from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import "./MainNav.css";
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if(value===1) navigate("/movies");
    else if(value===2) navigate("/series");
    else if(value===3) navigate("/search");
  }, [value,navigate]);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="root"
    >
      <BottomNavigationAction
        label="Trending" icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        label="Movies" icon={<MovieIcon />}
      />
      <BottomNavigationAction
        label="TV Series" icon={<LiveTvIcon />}
      />
      <BottomNavigationAction
        label="Search" icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
