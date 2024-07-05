'use client';

import { useEffect, useState } from 'react';
import Card from './ui/dashboard/Card';
import { API_CALL } from '@/config/API_CALL';
import { ProductInterFace } from '@/config/dataInterface/Product';

export default function DashBoard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('color-theme', 'dark');
    }

    const fetchItems = async () => {
      let resItems = await fetch(API_CALL.getAllProduct, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      if (resItems.status === 200) {
        let data = await resItems.json();
        const fetchedItems = data.map((item: ProductInterFace) => ({
          name: item.name,
          description: item.description,
          image: item.image,
          id: item.id,
        }));
        setItems(fetchedItems);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-wrap -mx-4 justify-center dark:">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
