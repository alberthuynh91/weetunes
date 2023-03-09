import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from 'antd';
import dynamic from 'next/dynamic';
import { MOBILE_BREAKPOINT } from '../constants';
import {
  Image as ImageType,
  Artist,
  Title,
  Name,
  Album as AlbumType,
} from '../interfaces';
import useWindowDimensions from '../utils/useWindowDimension';
import styles from '../styles/AlbumCard.module.scss';

const AlbumModal = dynamic(() => import('./AlbumModal'));

type HorizontalAlbumCardProps = {
  image: ImageType[];
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
          <Image
            src={image[2].label}
            alt={title.label}
            width={75}
            height={75}
            layout="instrinsic"
          />
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
  const isMobile = width <= MOBILE_BREAKPOINT;

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
          cover={
            <Image
              src={image[2].label}
              alt={title.label}
              width={170}
              height={170}
              layout="responsive"
            />
          }
          onClick={handleClick}
        >
          <Card.Meta
            title={name.label}
            description={artist.label}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          />
        </Card>
      )}
      <AlbumModal
        artist={artist}
        title={title}
        name={name}
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
