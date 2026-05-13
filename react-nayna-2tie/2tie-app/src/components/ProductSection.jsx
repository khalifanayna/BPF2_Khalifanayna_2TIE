import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section id="menu" className="py-28 px-6 bg-orange-50">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Menu Favorit
          </h2>

          <p className="text-gray-600 mt-4">
            Pilihan menu terbaik dan paling populer.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;