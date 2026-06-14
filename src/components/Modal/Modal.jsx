import './Modal.scss';

const Modal = ({ img, video, title, subTitle, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  return (
    <div
      className="modal show fade bd-example-modal-lg"
      style={modalStyle}
      onClick={modalClose}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              {video ? (
                <video
                  className="st-modal-media"
                  src={video}
                  poster={img}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img className="st-modal-media" src={img} alt={title} />
              )}
            </div>
            <p className="modal-subtitle">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
