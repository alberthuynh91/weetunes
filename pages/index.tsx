import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Body from '../components/Body';
import { searchData } from '../utils/search-data';
import useWindowDimensions from '../utils/useWindowDimension';

const IndexPage = () => {
  const { width, height } = useWindowDimensions();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  const handleSearch = (searchValue: string) => {
    if (searchValue === '') {
      // Clear button in search bar pressed
      setFilteredData(undefined);
    } else {
      const filtered = searchData(data, searchValue);
      if (filtered.length > 0) {
        setFilteredData(filtered);
      } else {
        // No results
        setFilteredData([]);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then((res) => res.json())
      .then((res) => {
        const data = res?.feed?.entry || [];
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout title="WeeTunes - Home">
      <Header handleSearch={handleSearch} />
      <Body
        isLoading={isLoading}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        data={data}
      />
    </Layout>
  );
};

export default IndexPage;
