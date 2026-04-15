function ResponsiveText() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Responsive Text ✨
      </h2>
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan
        menyesuaikan dengan ukuran layar.
        <br />
        Coba hapus class yang menggunakan prefix breakpoint
        <span className="font-semibold text-blue-500"> (md, lg, xl)</span> dan
        lihat perbedaannya!
      </p>
    </div>
  );
}

function ResponsiveWidth() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Responsive Width 📏
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Ubah ukuran layar dan lihat bagaimana dua kolom ini berubah posisi
        secara otomatis.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-gradient-to-r from-red-400 to-pink-400 text-white w-full md:w-1/2 p-6 rounded-xl shadow-md">
          Kolom 1
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-indigo-500 text-white w-full md:w-1/2 p-6 rounded-xl shadow-md">
          Kolom 2
        </div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Responsive Grid 🧩
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Jumlah kolom akan berubah sesuai ukuran layar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-gradient-to-br from-purple-500 to-pink-400 text-white p-6 rounded-xl shadow-md">
          Box 1
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-white-000 text-white p-6 rounded-xl shadow-md">
          Box 2
        </div>
        <div className="bg-gradient-to-br from-green-500 to-purple-400 text-white p-6 rounded-xl shadow-md">
          Box 3
        </div>
        <div className="bg-gradient-to-br from-red-500 to-orange-400 text-white p-6 rounded-xl shadow-md">
          Box 4
        </div>
      </div>
    </div>
  );
}

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Responsive Design Tailwind CSS 📱💻
          </h1>
          <p className="text-gray-600">
            Demo responsive text, width, dan grid layout yang lebih kece.
          </p>
        </div>

        <ResponsiveText />
        <ResponsiveWidth />
        <ResponsiveLayout />
      </div>
    </div>
  );
}