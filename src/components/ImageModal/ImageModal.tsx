import Modal from 'react-modal'
import css from './ImageModal.module.css'
import { Image } from '../../types';
import { FC } from 'react';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none'
  },
  overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
};

export interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({image, isOpen, onClose}) => {
   
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
    >
    {image && (
        <img className={css.modalImg} src={image?.urls.regular}
        alt={image?.alt_description} />
    )}
    </Modal>
  )
}

export default ImageModal