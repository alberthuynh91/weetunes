import React, { useState } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import {
  Image as ImageType,
  Artist,
  Title,
  Rights,
  Link,
  ReleaseDate,
  Category,
  Price,
  Name,
} from '../interfaces';
import { customLoader } from '../utils/custom-image-loader';
import styles from '../styles/AlbumModal.module.scss';

type AlbumModalProps = {
  image: ImageType[];
  artist: Artist;
  price: Price;
  rights: Rights;
  link: Link;
  releaseDate: ReleaseDate;
  title: Title;
  name: Name;
  category: Category;
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
};

const AlbumModal = (props: AlbumModalProps) => {
  const [error, setError] = useState(false);

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
    isModalOpen,
    setIsModalOpen,
  } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const imageDimensions =
    parseInt(image[image.length - 1]?.attributes?.height) || 170;

  return (
    <Modal
      width={650}
      centered
      title={artist.label}
      open={isModalOpen}
      onOk={handleOk}
      okButtonProps={{
        danger: true,
        target: '_blank',
        href: link?.attributes?.href || 'https://music.apple.com/',
      }}
      okText="Open in Apple Music"
      onCancel={handleCancel}
      cancelText="Close"
    >
      <div className={styles.modalContainer}>
        <div className={styles.media}>
          <Image
            src={image[image.length - 1].label}
            alt={title.label}
            width={imageDimensions}
            height={imageDimensions}
            style={{ height: 'auto' }}
            loader={!error && customLoader}
            onError={() => setError(true)}
          />
        </div>
        <div className={styles.content}>
          <p>
            <b>Album:</b> {name.label}
          </p>
          <p>
            <b>Genre:</b> {category.attributes.label}
          </p>
          <p>
            <b>Release Date:</b> {releaseDate.attributes.label}
          </p>
          <p>
            <b>Price:</b> {price.label}
          </p>
          <p>
            <b>Rights:</b> {rights.label}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AlbumModal;
