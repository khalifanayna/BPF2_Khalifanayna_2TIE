import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  // Gunakan useState untuk allOrders agar bisa ditambah
  const [allOrders, setAllOrders] = useState([
    { id: "ORD-01", name: "Khalifa Nayna", status: "Completed", price: 150000 },
    { id: "ORD-02", name: "Budi Santoso", status: "Pending", price: 75000 },
    { id: "ORD-03", name: "Siti Aminah", status: "Cancelled", price: 200000 },
    { id: "ORD-04", name: "Andi Wijaya", status: "Completed", price: 320000 },
    { id: "ORD-05", name: "Dewi Lestari", status: "Pending", price: 45000 },
  ]);

  // State untuk Modal dan Form
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // Logic Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = allOrders.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(allOrders.length / dataPerPage);

  // Fungsi Tambah Data
  const handleAddOrder = (e) => {
    e.preventDefault();
    if (!newName || !newPrice) return;

    const newOrder = {
      id: `ORD-0${allOrders.length + 1}`, // ID otomatis sederhana
      name: newName,
      status: "Pending", // Default status untuk pesanan baru
      price: parseInt(newPrice),
    };

    setAllOrders([newOrder, ...allOrders]); // Tambah ke urutan paling atas
    setShowModal(false); // Tutup modal
    setNewName(""); // Reset field
    setNewPrice("");
    setCurrentPage(1); // Kembali ke halaman 1 agar data baru terlihat
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <PageHeader />

      <div className="max-w-5xl mx-auto px-6 mt-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Dashboard</h1>
            <p className="text-gray-500 text-sm">Dashboard / Order List</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#00b894] hover:bg-[#00a383] text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg transition-all active:scale-95"
          >
            Add Button
          </button>
        </div>

        {/* Tabel Pesanan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold mb-6 text-gray-700">Riwayat Pesanan</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="px-6 py-4 text-left font-semibold">ID</th>
                  <th className="px-6 py-4 text-left font-semibold">Customer</th>
                  <th className="px-6 py-4 text-center font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {currentData.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-purple-400">{o.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{o.name}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider ${
                        o.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                        o.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {o.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-800 text-right">
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(o.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm text-gray-500">Halaman <b>{currentPage}</b> dari <b>{totalPages}</b></span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-5 py-2 text-sm font-semibold border rounded-xl hover:bg-gray-50 disabled:opacity-30 transition-all"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-5 py-2 text-sm font-bold border-2 border-gray-800 rounded-xl hover:bg-gray-800 hover:text-white disabled:opacity-30 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FORM TAMBAH DATA */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all scale-100">
            <h2 className="text-xl font-bold mb-4">Tambah Pesanan Baru</h2>
            <form onSubmit={handleAddOrder} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Customer</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Contoh: Nayna"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Harga (Rp)</label>
                <input 
                  type="number" 
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                  placeholder="Contoh: 150000"
                  required
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-[#00b894] text-white rounded-xl font-semibold hover:bg-[#00a383]"
                >
                  Simpan Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}