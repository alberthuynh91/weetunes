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
import { customLoader } from '../utils/custom-image-loader';
import styles from '../styles/AlbumCard.module.scss';

const AlbumModal = dynamic(() => import('./AlbumModal'));

type HorizontalAlbumCardProps = {
  image: ImageType;
  artist: Artist;
  title: Title;
  name: Name;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};

const HorizontalAlbumCard = (props: HorizontalAlbumCardProps) => {
  const { onKeyDown, image, artist, title, name, onClick } = props;
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={styles.horizontal}
    >
      <div className={styles.left}>
        <Image
          src={image.label}
          alt={title.label}
          width={75}
          height={75}
          style={{ height: 'auto' }}
          loader={customLoader}
        />
      </div>
      <article className={styles.right}>
        <h1 className={styles.title}>{name.label}</h1>
        <p>{artist.label}</p>
      </article>
    </div>
  );
};

const AlbumCard = (props: AlbumType) => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < MOBILE_BREAKPOINT;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsModalOpen(true);
    }
  };

  const imageDimensions =
    parseInt(image[image.length - 1]?.attributes?.height) || 170;

  return (
    <>
      {isMobile ? (
        <HorizontalAlbumCard
          image={image[image.length - 1]}
          artist={artist}
          title={title}
          name={name}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <Card
          role="button"
          tabIndex={0}
          hoverable
          cover={
            <Image
              src={image[image.length - 1].label}
              alt={title.label}
              width={imageDimensions}
              height={imageDimensions}
              style={{ height: 'auto' }}
              loader={!error && customLoader}
              onError={() => setError(true)}
            />
          }
          onClick={handleClick}
          onKeyDown={handleKeyDown}
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
