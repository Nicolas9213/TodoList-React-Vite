import {  } from "react";
import './ToDoList.css';
import '../Theme';
import Theme from "../Theme";
import DeliveryStatus from "../DeliveryStatus";

function ToDoList() {
    return (
        <div className="TodoList">
            <div className="Header">
                <h1 className="title">Lista de Tarefas</h1>
                <Theme/>
            </div>
            <div className="Task">
                <input type="text" placeholder="Adicionar tarefa"/>
                <button className="button">Add</button>
            </div>
            <DeliveryStatus/>
        </div>
    )
}

export default ToDoList;