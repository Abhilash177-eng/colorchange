import React, { useState } from 'react'
import Select from 'react-select'
import './App.css';
function Colorchange() {
    var colourList = [
        {
            id: 1,
            color: "red",
            label: "Red"
        },
        {
            id: 2,
            color: "green",
            label: "Green"
        },
        {
            id: 3,
            color: "blue",
            label: "Blue"
        },
        {
            id: 4,
            color: "black",
            label: "Black"
        }
    ];
    var [setcolor,handlevalue]=useState(colourList.color);
     let changeBoxColor = (co) => {
        handlevalue(co.color) ;
        console.log(colourList.color)
    }

    return (
        <div>
            <p className='title'>Color Changer App</p>
            <Select options={colourList}  onChange={changeBoxColor} className="select"></Select>
            <div className='colorContainer' style={{backgroundColor:setcolor}}>
            </div>
        </div>

    )
}

export default Colorchange
