import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  // Masukkan data ke useState agar bisa ditambah secara dinamis
  const [allCustomers, setAllCustomers] = useState([
    { id: "C001", name: "Khalifa Nayna", email: "nayna@example.com", phone: "0812345678", loyalty: "Gold" },
    { id: "C002", name: "Budi Santoso", email: "budi@example.com", phone: "0899876543", loyalty: "Silver" },
    { id: "C003", name: "Siti Aminah", email: "siti@example.com", phone: "0855443322", loyalty: "Bronze" },
    { id: "C004", name: "Andi Wijaya", email: "andi@mail.com", phone: "0811223344", loyalty: "Gold" },
    { id: "C005", name: "Dewi Lestari", email: "dewi@mail.com", phone: "0822334455", loyalty: "Silver" },
    { id: "C015", name: "Oki Setiana", email: "oki@mail.com", phone: "0832333435", loyalty: "Bronze" },
  ]);

  // State untuk Modal dan Form Input
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", loyalty: "Bronze" });

  // LOGIKA PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5;
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const currentData = allCustomers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(allCustomers.length / dataPerPage);

  // Fungsi Tambah Customer
  const handleAddCustomer = (e) => {
    e.preventDefault();
    
    const newCustomer = {
      id: `C0${allCustomers.length + 1}`,
      ...formData
    };

    setAllCustomers([newCustomer, ...allCustomers]); // Tambah ke atas list
    setShowModal(false); // Tutup modal
    setFormData({ name: "", email: "", phone: "", loyalty: "Bronze" }); // Reset form
    setCurrentPage(1); // Balik ke hal 1 biar kelihatan
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <PageHeader />
      
      <div className="max-w-5xl mx-auto px-6 mt-10">
        {/* Header dengan Tombol Add */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800 border-l-4 border-green-500 pl-4">
            Data Pelanggan
          </h1>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#00b894] hover:bg-[#00a383] text-white px-5 py-2 rounded-xl font-semibold shadow-md transition-all active:scale-95"
          >
            + Add Customer
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Kontak</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Loyalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentData.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-purple-400">{customer.id}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{customer.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="font-medium">{customer.email}</div>
                      <div className="text-xs text-gray-400">{customer.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        customer.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' : 
                        customer.loyalty === 'Silver' ? 'bg-slate-100 text-slate-600' : 
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {customer.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CONTROLS PAGINATION */}
          <div className="mt-6 flex items-center justify-between border-t pt-4">
            <p className="text-sm text-gray-500">
              Halaman <b>{currentPage}</b> dari <b>{totalPages}</b>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transition-all">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Tambah Customer Baru</h2>
            <form onSubmit={handleAddCustomer} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan nama..."
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="email@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Loyalty</label>
                  <select 
                    className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.loyalty}
                    onChange={(e) => setFormData({...formData, loyalty: e.target.value})}
                  >
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nomor Telepon</label>
                <input 
                  type="text" 
                  className="w-full border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="0812..."
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border rounded-xl font-semibold hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 shadow-md"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}