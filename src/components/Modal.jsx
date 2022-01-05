const Modal = ({ onConfirm, onCancel }) => {
    const confirmHandler = () => {
        onConfirm();
    };

    const cancelHandler = () => {
        onCancel();
    };

    return (
        <div className='modal'>
            <p>Are you sure you want to delete this task?</p>
            <button
                className='btn'
                onClick={confirmHandler}>
                Yes
            </button>
            <button
                className='btn del'
                onClick={cancelHandler}>
                No
            </button>
        </div>
    );
};

export default Modal;