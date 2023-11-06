interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-1/2 top-5 w-60">
      <div className="bg-white p-4 rounded-md shadow-lg w-72 flex flex-col items-center text-sm">
        <p>El documento fue creado en tu escritorio!</p>
        <button
          onClick={onClose}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
