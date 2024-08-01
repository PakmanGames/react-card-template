import { useState, createContext } from 'react';
import CardTasks from '../CardTasksComponent/CardTasks'
import './Input.css'

export const ItemsList = createContext()

function Input() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("#000000");

    const testData = [
        {title: "Black", description: "A neutral colour", color: "#000000"},
        {title: "Red", description: "BRIGHT AS FIRE!", color: "#d81313"},
        {title: "Calming", description: "Relaxing colour", color: "#80dfff"},
        {title: "Pink", description: "It's pink", color: "#f0c1c1"},
        {title: "Grass?", description: "Never seen grass before maybe this is the colour?", color: "#37d27a"},
        {title: "ugly red", description: "I dont like this", color: "#850000"},
        {title: "purple", description: "im running out of ideas", color: "#8b4dff"},
        {title: "Snow white", description: "white as snow", color: "#ffffff"},
        {title: "navy", description: "blue", color: "#001052"},
        {title: "brighter PINK!", description: "aaaa", color: "#d7609a"}
    ]

    const [tasks, setTasks] = useState(testData);
    // const [tasks, setTasks] = useState([]);

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

        const taskTitle = title.trim();
        const taskDescription = description.trim();
        const taskColor = color;

        setTasks(prevTasks => [...prevTasks, {title: taskTitle, description: taskDescription, color: taskColor}]);
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
            <ItemsList.Provider value={tasks}>
                <CardTasks />
            </ItemsList.Provider>
        </div>
    );
}

export default Input