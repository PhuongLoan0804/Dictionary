import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
import { MenuItem } from "@mui/material";
import React from 'react'
import "./Header.css";
import categories from "../../data/category";

const Header = ({setCategory, category, word, setWord}) => {

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main:"#fff",
            },
            type: 'dark',
        },
      });

    // clear
    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    {/* search word */}
                    <TextField 
                        className="search" 
                        label="Search a Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    {/* select language */}
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
