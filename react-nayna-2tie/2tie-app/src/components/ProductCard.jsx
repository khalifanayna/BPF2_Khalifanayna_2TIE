const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 transition">

      <img
        src={product.image}
        alt=""
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {product.name}
        </h3>

        <p className="text-green-600 font-semibold mt-2">
          {product.price}
        </p>

        <button className="mt-5 bg-green-600 text-white px-5 py-3 rounded-full w-full">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;