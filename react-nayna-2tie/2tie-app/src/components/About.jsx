const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
          alt=""
          className="rounded-3xl"
        />

        <div>
          <h2 className="text-5xl font-bold">
            Tentang Foodies
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Foodies adalah platform pemesanan makanan modern yang menyediakan
            berbagai pilihan menu favorit dengan kualitas premium.
          </p>

          <div className="mt-10 space-y-5">
            <div className="bg-white shadow-lg p-5 rounded-2xl">
              <h3 className="font-bold text-xl">Tujuan Aplikasi</h3>
              <p className="text-gray-600 mt-2">
                Memberikan pengalaman pemesanan makanan yang cepat dan nyaman.
              </p>
            </div>

            <div className="bg-white shadow-lg p-5 rounded-2xl">
              <h3 className="font-bold text-xl">Layanan Utama</h3>
              <p className="text-gray-600 mt-2">
                Delivery cepat, menu premium, promo menarik.
              </p>
            </div>

            <div className="bg-white shadow-lg p-5 rounded-2xl">
              <h3 className="font-bold text-xl">Keunggulan</h3>
              <p className="text-gray-600 mt-2">
                Desain modern, user friendly, dan responsif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;