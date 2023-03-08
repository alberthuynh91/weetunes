import React from 'react';
import { Button, Empty } from 'antd';
import AlbumsGrid from './AlbumsGrid';
import { Album } from '../interfaces';
import styles from '../styles/Body.module.scss';

type BodyProps = {
  isLoading: boolean;
  filteredData: Album[];
  setFilteredData: (any) => void;
  data: Album[];
};

const Body = (props: BodyProps) => {
  const { isLoading, filteredData, setFilteredData, data } = props;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.body}>
      {filteredData?.length === 0 ? (
        <div className={styles.empty}>
          <Empty description={false} />
          <p>Sorry, we did not find what you searched. Try again.</p>
          <Button onClick={() => setFilteredData(undefined)}>
            Clear search
          </Button>
        </div>
      ) : (
        <AlbumsGrid
          data={filteredData?.length > 0 ? filteredData : data}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Body;
