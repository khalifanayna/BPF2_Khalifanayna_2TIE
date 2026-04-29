import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    // Data dummy untuk tabel dashboard
    const recentOrders = [
        { id: "ORD-01", name: "Khalifa Nayna", status: "Completed", price: "Rp 150.000" },
        { id: "ORD-02", name: "Budi Santoso", status: "Pending", price: "Rp 75.000" },
        { id: "ORD-03", name: "Siti Aminah", status: "Cancelled", price: "Rp 200.000" },
        { id: "ORD-04", name: "Andi Wijaya", status: "Completed", price: "Rp 320.000" },
        { id: "ORD-05", name: "Dewi Lestari", status: "Pending", price: "Rp 45.000" },
    ];

    return (
        <div id="dashboard-container" className="min-h-screen bg-gray-50 pb-10">
            <PageHeader /> 
            
            {/* STATISTIC CARDS */}
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="bg-green-100 text-green-600 rounded-full p-4">
                        <FaShoppingCart size={20} />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold">75</span>
                        <span id="orders-text" className="text-gray-400 text-sm">Total Orders</span>
                    </div>
                </div>

                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="bg-blue-100 text-blue-600 rounded-full p-4">
                        <FaTruck size={20} />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold">175</span>
                        <span id="delivered-text" className="text-gray-400 text-sm">Total Delivered</span>
                    </div>
                </div>

                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-red-100 text-red-600 rounded-full p-4">
                        <FaBan size={20} />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold">40</span>
                        <span id="canceled-text" className="text-gray-400 text-sm">Total Canceled</span>
                    </div>
                </div>

                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-yellow-100 text-yellow-600 rounded-full p-4">
                        <FaDollarSign size={20} />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold text-gray-800">Rp.128M</span>
                        <span id="revenue-text" className="text-gray-400 text-sm">Total Revenue</span>
                    </div>
                </div>
            </div>

            {/* RECENT ORDERS TABLE SECTION */}
            <div className="px-5 mt-4">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                        <button className="text-blue-600 hover:underline text-sm font-medium">View All</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase">
                                    <th className="px-4 py-3 text-left">Order ID</th>
                                    <th className="px-4 py-3 text-left">Customer</th>
                                    <th className="px-4 py-3 text-center">Status</th>
                                    <th className="px-4 py-3 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-4 text-sm font-medium text-purple-500">{order.id}</td>
                                        <td className="px-4 py-4 text-sm text-gray-700 font-semibold">{order.name}</td>
                                        <td className="px-4 py-4 text-center">
                                            <span className={`px-3 py-1 rounded-md text-[10px] font-bold tracking-wider ${
                                                order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                                                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                                                'bg-red-100 text-red-600'
                                            }`}>
                                                {order.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-bold text-gray-800 text-right">{order.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}