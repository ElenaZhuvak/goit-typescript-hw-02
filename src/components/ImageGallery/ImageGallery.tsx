import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

interface ImageGalleryProps {
  images: Image[]; 
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, onImageClick}) => {
  return (
    <div className={css.container}>
        <ul className={css.gallery}>
            {images.map(image => 
            <li className={css.galleryItem} key={image.id}>
                <ImageCard image={image} onClick={onImageClick}/>
            </li>)}
        </ul>
    </div>
  )
}

export default ImageGallery