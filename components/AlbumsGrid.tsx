import React from 'react';
import { Row, Col } from 'antd';
import AlbumCard from './AlbumCard';
import { Album as AlbumType } from '../interfaces';
import useWindowDimensions from '../utils/useWindowDimension';

type AlbumsGridProps = {
  data: AlbumType[];
  isLoading: boolean;
};

const AlbumsGrid = (props: AlbumsGridProps) => {
  const { data, isLoading } = props;
  const { width } = useWindowDimensions();
  const colSpan = width > 992 ? 6 : 8;
  return (
    <Row gutter={width > 768 ? [8, 8] : [0, 0]}>
      {data.map((item) => {
        const albumCardProps = {
          id: item?.id,
          image: item['im:image'],
          artist: item['im:artist'],
          price: item['im:price'],
          rights: item.rights,
          link: item.link,
          releaseDate: item['im:releaseDate'],
          title: item.title,
          name: item['im:name'],
          category: item['category'],
          isLoading: isLoading,
        };
        if (width <= 768) {
          return (
            <AlbumCard
              key={item?.id?.attributes['im:id']}
              {...albumCardProps}
            />
          );
        }
        return (
          <Col key={item?.id?.attributes['im:id']} span={colSpan}>
            <AlbumCard {...albumCardProps} />
          </Col>
        );
      })}
    </Row>
  );
};

export default AlbumsGrid;
