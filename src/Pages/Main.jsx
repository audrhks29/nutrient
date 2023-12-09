import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Main = memo(() => {

  return (
    <div>
      메인임
      <Link to={"/calendar"}>ddd</Link>

    </div>
  );
});

export default Main; 