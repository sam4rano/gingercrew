import React from "react";

const ImageCard = ({ imageUrl, headline, body }) => {
  return (
    <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt="card" className="w-full h-40 object-cover" />
      <div className="px-4 py-2 opacity-2 text-center h-[100px]">
        <div className="font-bold text-xl mb-2">{headline}</div>
        <div className="font-bold text-xl mb-2">{body}</div>
      </div>
    </div>
  );
};

export default ImageCard;
