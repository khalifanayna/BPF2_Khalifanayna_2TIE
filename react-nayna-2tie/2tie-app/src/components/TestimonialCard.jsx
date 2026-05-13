const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">

      <div className="flex items-center gap-4">

        <img
          src={item.avatar}
          alt=""
          className="w-16 h-16 rounded-full"
        />

        <div>
          <h3 className="font-bold text-lg">
            {item.name}
          </h3>
        </div>
      </div>

      <p className="mt-6 text-gray-600">
        "{item.review}"
      </p>
    </div>
  );
};

export default TestimonialCard;