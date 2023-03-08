import React from 'react';
import { Modal } from 'antd';
import {
  Image,
  Artist,
  Title,
  Rights,
  Link,
  ReleaseDate,
  Category,
  Price,
} from '../interfaces';
import styles from '../styles/AlbumModal.module.scss';

type AlbumModalProps = {
  image: Image[];
  artist: Artist;
  price: Price;
  rights: Rights;
  link: Link;
  releaseDate: ReleaseDate;
  title: Title;
  category: Category;
  isModalOpen: boolean;
  setIsModalOpen: (boolean) => void;
};

const AlbumModal = (props: AlbumModalProps) => {
  const {
    image,
    artist,
    price,
    rights,
    link,
    releaseDate,
    title,
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
        <div className={styles.left}>
          <img alt={title.label} src={image[image.length - 1].label} />
        </div>
        <div className={styles.right}>
          <p>
            <b>Album Title:</b> {title.label}
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
