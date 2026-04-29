import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-24 text-center">
      {/* Bagian Visual */}
      <div className="relative">
        <h1 className="text-9xl font-black text-gray-200 select-none">404</h1>
      </div>

      {/* Pesan Teks */}
      <div className="mt-8 max-w-md">
        <p className="text-gray-600 mb-8">
          Halaman yang kamu cari tidak ditemukan atau mungkin sudah pindah ke "planet" lain. 
          Jangan khawatir, mari kita antar kamu pulang.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Kembali ke Beranda
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Kembali ke Sebelumnya
          </button>
        </div>
      </div>

      {/* Dekorasi Tambahan */}
      <div className="mt-16 text-gray-400">
        <p className="text-sm italic">"Not all those who wander are lost... but you probably are."</p>
      </div>
    </div>
  );
}