import React, { memo, useEffect } from 'react';

import useAppState from '../state/test-state';

const Test = memo(() => {
  const { data, fetchData } = useAppState(state => state);

  useEffect(() => {
    fetchData()
  }, []);

  console.log(data);
  return (
    <div>
      {
        data && data.body && data.body.items ? (
          data.body.items.map((item, index) => (
            <div key={index}>
              <span>{item.DESC_KOR}</span>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )
      }
    </div>
  );
});

export default Test;