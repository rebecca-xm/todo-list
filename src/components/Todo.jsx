import { useState } from "react";
import Modal from "./Modal";

const Todo = ({ text, todo, todos, setTodos }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModalHandler = () => {
        // console.log('funziona!');
        setModalIsOpen(true);
    };

    const closeModalHandler = () => {
        setModalIsOpen(false);
    };

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        );
    };

    return (
        <div className="todo">
            <li className={`todoItem ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className="completeBtn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={openModalHandler} className="trashBtn">
                <i className="fas fa-trash"></i>
            </button>
            {modalIsOpen ? <Modal
                onCancel={closeModalHandler}
                onConfirm={deleteHandler} /> : null}
        </div>
    );
};

export default Todo;