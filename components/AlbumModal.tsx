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

  const handleModalClose = () => {
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
      onOk={handleModalClose}
      okButtonProps={{
        danger: true,
        target: '_blank',
        href: link?.attributes?.href || 'https://music.apple.com/',
      }}
      okText="Open in Apple Music"
      onCancel={handleModalClose}
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
          <ul>
            <li>
              <b>Album:</b> {name.label}
            </li>
            <li>
              <b>Genre:</b> {category.attributes.label}
            </li>
            <li>
              <b>Release Date:</b> {releaseDate.attributes.label}
            </li>
            <li>
              <b>Price:</b> {price.label}
            </li>
            <li>
              <b>Rights:</b> {rights.label}
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default AlbumModal;
