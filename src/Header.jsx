import { useContext, useState } from "react";
import { Link } from "react-router";
import aloChayaCine from "./assets/alo-chaya-cine.svg";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import ring from "./assets/ring.svg";
import shoppingCart from "./assets/shopping-cart.svg";
import CartDetailsModal from "./components/CartDetailsModal";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleThemeChange = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <header>
      {showModal && <CartDetailsModal onClosed={handleCartModal} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link to="/">
          <img src={aloChayaCine} width="139" height="26" alt="logo" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleThemeChange}
            >
              <img
                src={darkMode ? sun : moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleCartModal}
            >
              <img
                src={shoppingCart}
                width="24"
                height="24"
                alt="shopping-cart"
              />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
