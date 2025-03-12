import { FC } from 'react';
import { Image } from '../../types';
import css from './ImageCard.module.css'


export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps>= ({image, onClick}) => {
  return (
      <div className={css.imageCard} >
          
      <img className={css.image} onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
