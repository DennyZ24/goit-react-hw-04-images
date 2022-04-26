import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "components/Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ srcImg, altImg, onCloseModal}) => { 
  useEffect(() => {
    function handleKeydownClick (e) { 
    if (e.code==='Escape') {
      onCloseModal();
    }
    };
    
    window.addEventListener('keydown', handleKeydownClick)
    
    return function removeEventListener() {
      window.removeEventListener('keydown', handleKeydownClick);
    } 
  }, [onCloseModal]);

  

  const handleBackdropClick = (e) => { 
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={srcImg} alt={altImg} />
      </div>
    </div>,
    modalRoot
  );
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydownClick)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydownClick)
//   }

//   handleKeydownClick = (evt) => {
    // if (evt.code==='Escape') {
    //   this.props.onCloseModal();
    // }
//   }

//   handleBackdropClick = (evt) => {
    // if (evt.currentTarget === evt.target) {
    //   this.props.onCloseModal();
    // }
//   }
  
//   render() {
//     const { modalImg } = this.props;
//     return createPortal(
//       <div className={s.Overlay} onClick={this.handleBackdropClick}>
//         <div className={s.Modal}>
//           <img src={modalImg.src} alt={modalImg.alt} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

export default Modal;