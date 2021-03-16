import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { EnumMemberStatus } from "../../interfaces/IMember";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const PlaceGamePage = () => {
    const pixelArray = Array.from({ length: 150 })
    const [selectedColor, setSelectedColor] = useState('blue')
    const SelectButtonDiv = ({ color }) => {
        const selectArea = {
            display: 'inline-block'
        }
        const root = {
            boxShadow: 'none',
            textTransform: 'none',
            backgroundColor: color,
            borderColor: color,
            height: '100px',
            width: '250px',
            '&:hover': {
                backgroundColor: color,
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#0062cc',
                borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        }
        const SelectButton = withStyles({
            root,
        })(Button);
        const onClickBtn = () => {
            setSelectedColor(color);
            console.log('selectedColor:', color);
        }
        return (
            <div style={selectArea} onClick={onClickBtn}>
                <SelectButton variant="contained" color="primary"  > </SelectButton>
            </div >
        )
    }
    const PixelButtonDiv = ({ color }) => {
        const [selectedPixelColor, setPixelColor] = useState('blue')
        const selectArea = {
            display: 'inline-block'
        }
        const root = {
            boxShadow: 'none',
            textTransform: 'none',
            backgroundColor: selectedPixelColor,
            borderColor: 'black',
            height: '30px',
            width: '10px',
            '&:hover': {
                backgroundColor: selectedPixelColor,
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#0062cc',
                borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        }
        const SelectButton = withStyles({
            root,
        })(Button);
        const onClickPixelBtn = () => {
            let c = selectedColor
            setPixelColor(c)
            console.log('setPixelColor:', c);

        }
        return (
            <div style={selectArea} onClick={onClickPixelBtn}>
                <SelectButton variant="contained" color="primary"  > </SelectButton>
            </div >
        )
    }



    return (
        <div className="container">
            <div>
                <SelectButtonDiv color='blue' />
                <SelectButtonDiv color='red' />
                <SelectButtonDiv color='orange' />
                <SelectButtonDiv color='green' />
                <SelectButtonDiv color='purple' />
            </div>
            <div>
                {
                    pixelArray.map((value, index) => {
                        return (
                            <PixelButtonDiv key={index} color={selectedColor} />

                        )

                    })
                }

            </div>
        </div>
    );
};

export default PlaceGamePage;
