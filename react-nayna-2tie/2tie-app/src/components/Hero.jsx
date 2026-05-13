const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-orange-50 to-yellow-50 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="bg-white-600 text-green-600 px-4 py-2 rounded-full">
            Delicious & Healthy
          </span>

          <h1 className="text-6xl font-bold leading-tight mt-6">
            Nikmati Makanan Lezat
            <span className="text-green-600"> Setiap Hari</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Foodies menghadirkan berbagai menu premium dengan kualitas terbaik
            dan pengiriman cepat langsung ke rumahmu.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg transition">
            Pesan Sekarang
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="food"
            className="rounded-[40px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;