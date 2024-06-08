import React, { useEffect, useState } from 'react';
import { getKaraokeStores } from '../api';

const KaraokeStoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getKaraokeStores();
      setStores(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Karaoke Stores</h1>
      <ul>
        {stores.map(store => (
          <li key={store.id}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KaraokeStoreList;
