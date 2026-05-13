import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-14 px-6"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-3xl font-bold text-green-600">
            Foodies
          </h1>

          <p className="mt-4 text-gray-400">
            Platform makanan modern dengan berbagai menu premium.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Kontak
          </h3>

          <p className="mt-4">foodies@gmail.com</p>
          <p>+62 812 3456 7890</p>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Sosial Media
          </h3>

          <div className="flex gap-4 mt-4 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xl">
            Partner
          </h3>

          <p className="mt-4 text-gray-400">
            Food Delivery Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;