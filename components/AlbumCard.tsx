import React, { useState } from 'react';
import { Card } from 'antd';
import AlbumModal from './AlbumModal';
import { Image, Artist, Title, Name, Album as AlbumType } from '../interfaces';
import useWindowDimensions from '../utils/useWindowDimension';
import styles from '../styles/AlbumCard.module.scss';

type HorizontalAlbumCardProps = {
  image: Image[];
  artist: Artist;
  title: Title;
  name: Name;
  handleClick: () => void;
};

const HorizontalAlbumCard = (props: HorizontalAlbumCardProps) => {
  const { image, artist, title, name, handleClick } = props;
  return (
    <>
      <div onClick={handleClick} className={styles.horizontal}>
        <div className={styles.left}>
          <img alt={title.label} src={image[2].label} />
        </div>
        <div className={styles.right}>
          <h4>{name.label}</h4>
          <p>{artist.label}</p>
        </div>
      </div>
    </>
  );
};

const AlbumCard = (props: AlbumType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const {
    image,
    artist,
    price,
    rights,
    link,
    releaseDate,
    title,
    name,
    category,
  } = props;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isMobile ? (
        <HorizontalAlbumCard
          image={image}
          artist={artist}
          title={title}
          name={name}
          handleClick={handleClick}
        />
      ) : (
        <Card
          hoverable
          cover={<img alt={title.label} src={image[2].label} />}
          onClick={handleClick}
        >
          <Card.Meta title={name.label} description={artist.label} />
        </Card>
      )}
      <AlbumModal
        artist={artist}
        title={title}
        category={category}
        releaseDate={releaseDate}
        price={price}
        rights={rights}
        link={link}
        image={image}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default AlbumCard;
