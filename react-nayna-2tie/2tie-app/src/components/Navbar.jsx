import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-green-600">
          Foodies
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">Tentang</a>
          <a href="#testimonial">Review</a>
          <a href="#footer">Kontak</a>
        </nav>

        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-full bg-green-600 text-white hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;