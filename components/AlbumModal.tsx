import React from 'react';
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
          <Image
            src={image[image.length - 1].label}
            alt={title.label}
            width={170}
            height={170}
            style={{ height: 'auto' }}
            loader={customLoader}
          />
        </div>
        <div className={styles.right}>
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
