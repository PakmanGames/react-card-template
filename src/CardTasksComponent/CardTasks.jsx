import { useContext } from "react";
import { ItemsList } from '../InputComponent/Input'
import './CardTasks.css'

function CardTasks() {
    const itemList = useContext(ItemsList);

    console.log(itemList);

    if (itemList.length === 0) {
        return;
    }

    return (
        <div className="card-container">
            {itemList.map((item, index) => {
                return <div key={index}>
                    <div style={{backgroundColor: item.color}} className="card">
                        <div></div>
                        <div className="info">
                            <p className="card-title">{item.title}</p>
                            <p className="card-description">{item.description}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
}

export default CardTasks;