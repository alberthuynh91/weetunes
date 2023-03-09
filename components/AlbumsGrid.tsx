import React from 'react';
import { Row, Col } from 'antd';
import AlbumCard from './AlbumCard';
import { Album as AlbumType } from '../interfaces';
import { MOBILE_BREAKPOINT } from '../constants';
import useWindowDimensions from '../utils/useWindowDimension';

type AlbumsGridProps = {
  data: AlbumType[];
  isLoading: boolean;
};

const AlbumsGrid = (props: AlbumsGridProps) => {
  const { data, isLoading } = props;
  const { width } = useWindowDimensions();
  const isMobile = width <= MOBILE_BREAKPOINT;

  return (
    <Row gutter={isMobile ? [2, 2] : [8, 8]}>
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
        return (
          <Col
            key={item?.id?.attributes['im:id']}
            xs={24}
            sm={8}
            md={6}
            lg={4}
            xl={3}
          >
            <AlbumCard {...albumCardProps} />
          </Col>
        );
      })}
    </Row>
  );
};

export default AlbumsGrid;
