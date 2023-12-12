import React, { memo } from 'react';

const Background = memo(({ borderRadius }) => {
  return (
    <div style={
      {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        zIndex: "10",
        borderRadius: borderRadius || 0
      }
    }
    >
    </div>
  );
});

export default Background;