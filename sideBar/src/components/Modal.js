import { useGlobalContext } from "../Context/Context"
import { FaTimes } from "react-icons/fa";
const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div className={`${isModalOpen ? "modalOverlay showModal" : "modalOverlay"}`}>
            <div className="modalContainer">
                <h3>Modal Content</h3>
                <button className="closeModalBtn" onClick={closeModal}><FaTimes /></button>
            </div>
        </div>
    );
};

export default Modal;
