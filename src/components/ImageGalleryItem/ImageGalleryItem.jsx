import { useState } from "react";
import Modal from 'components/Modal/Modal';
import s from "components/ImageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({images}) => { 
  const [srcImg, setSrcImg] = useState('');
  const [altImg, setAltImg] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => { 
    setShowModal((state)=>!state)
  };

  const handleItemClick = (e) => { 
    if (e.target.nodeName === 'IMG') {
      toggleModal();
      setSrcImg(e.target.src);
      setAltImg(e.target.alt);
     }
  };

  return (
    <>
        {showModal && <Modal
          onCloseModal={toggleModal}
          srcImg={srcImg}
          altImg={altImg}
          />}

        {images.map(image =>
            <li key={image.id} onClick={handleItemClick} className={s.ImageGalleryItem}>
              <img src={image.webformatURL} alt={image.tags} className={s.Image} />
            </li>
          )
        }
    </>
  )
};



// class ImageGalleryItem extends Component{
//   state = {
//     showModal: false,
//     currentImg: {src:'',alt:''},
//   };

//    toggleModal = () => {
//     this.setState(({showModal})=>({showModal: !showModal}))
//   }


//   handleItemClick = (evt) => {
  //  if (evt.target.nodeName === 'IMG') {
  //    this.toggleModal();
  //    this.setState({currentImg:{src: evt.target.src,alt: evt.target.alt}})
  //    }
//   }

//   render() {
//     const images = this.props.images;
//     const { showModal } = this.state;
    
//     return (
    //   <>
    //     {showModal && <Modal
    //       onCloseModal={this.toggleModal}
    //       modalImg={this.state.currentImg} 
    //       />}

    //     {images.map(image =>
    //         <li key={image.id} onClick={this.handleItemClick} className={s.ImageGalleryItem}>
    //           <img src={image.webformatURL} alt={image.tags} className={s.Image} />
    //         </li>
    //       )
    //     }
    // </>)
//   }
// }

export default ImageGalleryItem;