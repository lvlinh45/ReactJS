import React from "react";
import { useGallery } from "../../contexts/gallery-context";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos, cartItems } = useGallery();
  // console.log("TCL: PhotoList -> photos", photos);
  // console.log("TCL: PhotoList -> cartItems", cartItems);
  return (
    <div className="px-5 py-10">
      <div className="grid grid-cols-4 gap-10">
        {photos.length > 0 &&
          photos.map((item) => (
            <PhotoItem key={item.id} info={item}></PhotoItem>
          ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const PhotoItem = ({ info: { url, isFavorite, id } }) => {
  // console.log("TCL: PhotoItem -> isFavorite", isFavorite);
  const { toggleFavorite, addToCart } = useGallery();
  const item = { url, isFavorite, id };
  return (
    <div className="relative h-[300px] cursor-pointer group">
      <img src={url} alt="" className="object-cover w-full h-full" />
      <span
        className="absolute z-10 invisible w-8 opacity-0 cursor-pointer right-5 top-5 group-hover:opacity-100 group-hover:visible"
        onClick={() => toggleFavorite(id)}
      >
        <svg
          width="42"
          height="38"
          viewBox="0 0 42 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full"
        >
          <path
            d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
            fill={`${isFavorite ? "red" : "#fff"}`}
          />
        </svg>
      </span>
      <button
        className="absolute invisible px-6 py-3 text-sm font-medium text-black transition-all bg-white rounded-lg opacity-0 bottom-5 left-2/4 -translate-x-2/4 group-hover:opacity-100 group-hover:visible"
        onClick={() => addToCart(item)}
      >
        Add to car
      </button>
    </div>
  );
};

PhotoItem.prototype = {
  url: PropTypes.string,
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default PhotoList;
