import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAppState from '../state/test-state';

const Main = memo(() => {
  const { testData, fetchData } = useAppState(state => state);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      메인임
      <Link to={"/calendar"}>ddd</Link>
      <ul>
        {testData && testData.body && testData.body.items.map(item => {
          return (
            <li key={item.id}>
              {item.DESC_KOR}
            </li>
          )
        })}

      </ul>
    </div>
  );
});

export default Main; 