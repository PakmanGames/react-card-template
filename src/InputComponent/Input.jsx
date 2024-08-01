import { useState } from 'react';
import './Input.css'

function Input() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("#000000");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleAddItem = () => {
        if (title.trim() === "" || description.trim() === "") {
            return;
        }

        //work in progress
    }

    return (
        <div className='main-body'>
            <div className='input-bar'>
                <div className='input-container'>
                    <div className='title'>
                        <p>Title:</p>
                        <input id='title' type="text" placeholder='Enter a title' value={title} onChange={(e) => handleTitleChange(e)}/>
                    </div>
                    <div className='description'>
                        <p>Description:</p>
                        <input id='description' type="text" placeholder='Enter a description' value={description} onChange={(e) => handleDescriptionChange(e)}/>
                    </div>
                    <div className='color'>
                        <div className='color-container' style={{color: color}}>
                            <p>Selected Color: {color}</p>
                        </div>
                        <input type="color" value={color} onChange={(e) => handleColorChange(e)}/>
                    </div>
                </div>
            </div>
            <button className='add-button' onClick={() => handleAddItem()}>Add</button>
        </div>
    );
}

export default Input