import { Link } from "react-router-dom";
import leaf from "../../assets/leaf.jpg"

function Footer() {
  return (
    <footer className="bg-[url('/src/assets/scroll-bg.jpg')] bg-cover bg-center text-gray-100 border-t-4 border-orange-500">
      <div className="bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            
            {/* Section 1: Logo + Motto */}
            <div>
              <Link to="/" className="flex flex-col items-center sm:items-start">
                <img
                  src={leaf}
                  alt="Konoha Symbol"
                  className="h-16 w-16 mb-3"
                />
                <h2 className="text-2xl font-bold text-orange-400">Hidden Leaf Village</h2>
                <p className="text-sm text-gray-300 mt-2 italic">
                  “Believe it! Every ninja has a dream to chase.” 🌀
                </p>
              </Link>
            </div>

            {/* Section 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                Ninja Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-orange-300 transition duration-200">
                    🏠 Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-orange-300 transition duration-200">
                    📜 About Village
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-orange-300 transition duration-200">
                    🪶 Send a Scroll
                  </Link>
                </li>
                <li>
                  <Link to="/github" className="hover:text-orange-300 transition duration-200">
                    💻 GitHub (Ninja Network)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3: Socials */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                Follow the Hokage
              </h3>
              <div className="flex justify-center sm:justify-start space-x-4 text-xl">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-orange-300">
                  🐙
                </a>
                <a href="#" className="hover:text-orange-300">
                  🐦
                </a>
                <a href="#" className="hover:text-orange-300">
                  🌀
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-3 italic">
                “A true ninja never quits.”
              </p>
            </div>
          </div>

          <hr className="my-8 border-gray-500/50" />

          <p className="text-center text-gray-400 text-sm">
            © 2025 Hidden Leaf Village | Built by Ninjas ⚔️ | Inspired by Naruto Universe
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
