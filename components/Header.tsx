import React from 'react';
import { Input } from 'antd';
import styles from '../styles/Header.module.scss';

type HeaderProps = {
  handleSearch: (string: string) => void;
};

const Header = (props: HeaderProps) => {
  const { handleSearch } = props;
  return (
    <header className={styles.header}>
      <h1>WeeTunes</h1>
      <h2>Browse the top trending music at WeeCare!</h2>
      <div className={styles.searchContainer}>
        <Input.Search
          aria-label="Search for album or artist"
          type="text"
          allowClear
          placeholder="Search for album or artist"
          onSearch={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
