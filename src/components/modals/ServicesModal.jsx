import "./servicesModal.scss";

const ServicesModal = ({ isOpen, onRequestClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {service && (
          <>
            <span className="close-button" onClick={onRequestClose}>
              &times;
            </span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {/* <button onClick={onRequestClose}>Close</button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesModal;
