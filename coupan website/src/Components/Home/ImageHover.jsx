import React from 'react';
import './ImageHover.css';
import bild from '../../assets/hoverImg/bild.webp'
import diewelt from '../../assets/hoverImg/diewelt.webp'
import chip from '../../assets/hoverImg/chip.webp'
import stern from '../../assets/hoverImg/stern.webp'
import { useTranslation } from 'react-i18next';
const ImageHover = () => {
  const images = [
    { src: bild , alt: 'Bild', className: 'bild-logo'},
    { src: diewelt, alt: 'Die Welt', className: 'die-welt-logo'},
    { src: chip, alt: 'Chip', className: 'chip-logo'},
    { src: stern, alt: 'Stern', className: 'stern-logo'},
  ];

  const { t } = useTranslation();
  return (
    <div className="image-hover-container">
      <h2 className='pb-5'>{t('known_from')}</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`hover-image ${image.className}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageHover;
