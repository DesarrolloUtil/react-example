const CardItem = ({ name, image, type }) => {
  return (
    <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
      <img className="w-full" src={image} />
      <div className="desc p-4 text-gray-800">
        <h3 className="title font-bold block cursor-pointer hover:underline">
          {name}
        </h3>
        <p className="description text-sm block py-2 border-gray-400 mb-2">
          {type}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
