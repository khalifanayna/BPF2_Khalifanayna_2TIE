import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      {/* Bagian Visual dengan Gradasi dan Animasi */}
      <div className="relative group">
        <h1 className="text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-green-600 to-green-400 leading-none select-none animate-pulse">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center -z-10 blur-3xl opacity-20 bg-green-500 rounded-full scale-150"></div>
      </div>

      {/* Pesan Teks */}
      <div className="mt-4 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Kamu Nyasar Ya?
        </h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Halaman yang kamu cari sepertinya sedang bersembunyi atau sudah pindah alamat. 
          Tenang saja, navigasi kami siap mengantarmu kembali ke jalur yang benar.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-xl shadow-green-200 active:scale-95"
          >
            🚀 Kembali ke Beranda
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 hover:scale-105 transition-all shadow-xl shadow-green-200 active:scale-95"
          >
            ⬅️ Halaman Sebelumnya
          </button>
        </div>
      </div>

      {/* Footer / Quote */}
      <div className="mt-20 border-t border-gray-100 pt-8">
        <p className="text-gray-400 text-sm font-medium tracking-widest uppercase italic">
          "Lost but not forgotten"
        </p>
      </div>
    </div>
  );
}