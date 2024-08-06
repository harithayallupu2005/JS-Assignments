// Q.11:Implement a React component that displays a list of items with infinite scrolling.
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const fetchItems = async (page) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Array.from({ length: 10 }, (_, index) => `Item ${page * 10 + index + 1}`);
};

export const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadMoreItems = async () => {
    const newItems = await fetchItems(page);
    setItems((prevItems) => [...prevItems, ...newItems]);
    if (newItems.length === 0) setHasMore(false);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMoreItems}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more items</p>}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;


