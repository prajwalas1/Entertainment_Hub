import { ThemeProvider, createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import React from 'react';

const theme = createTheme(); // Create a default theme

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div
            style={{
                width: "100%",
                display: 'flex',
                justifyContent: "center",
                marginTop: 10,
                color: "black",
            }}
        >
            <ThemeProvider theme={theme}> {/* Provide the theme object to ThemeProvider */}
                <Pagination
                    count={numOfPages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    style={{ color: "white" }}
                    hideNextButton
                    hidePrevButton
                    color='primary'
                />
            </ThemeProvider>
        </div>
    );
}

export default CustomPagination;
