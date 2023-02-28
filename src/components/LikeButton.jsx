import React, { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [actualLikes, setActualLikes] = useState(0);

  const addLikes = () => {
    setActualLikes(actualLikes + 1);

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        onClick={addLikes}
      >
        {actualLikes} Likes
      </button>
    </div>
  );
}

export default LikeButton;
