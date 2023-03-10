import React from 'react';
import { Button, Empty, Skeleton } from 'antd';
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

  if (isLoading) return <Skeleton active />;

  return (
    <main className={styles.body}>
      {filteredData?.length === 0 ? (
        <div className={styles.empty}>
          <Empty description={false} />
          <p>Sorry, we couldn't find your search. Try again.</p>
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
    </main>
  );
};

export default Body;
