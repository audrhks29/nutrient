import React, { memo } from 'react';
import { Link } from 'react-router-dom';


const Main = memo(() => {

  return (
    <div>
      <Link to={"/calendar"}>클릭</Link>
    </div>
  );
});

export default Main; 