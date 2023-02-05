import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-custom-white/95  px-2 sm:px-4 py-2.5 rounded dark:bg-brown-light-2 shadow-sm backdrop-opacity-10 drop-shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto ">
        <p className="block text-3xl font-bold  hover:cursor-pointer text-custom-brown-dark rounded md:bg-transparen md:p-0">
          Mateando
        </p>
        <div className="justify-center">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-custom-brown-dark text-custom-brown-light rounded md:bg-transparen md:p-0"
              >
                Bombillas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-custom-brown-dark text-custom-brown-light rounded md:bg-transparen md:p-0"
              >
                Mates
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-xl hover:text-custom-brown-dark text-custom-brown-light rounded md:bg-transparen md:p-0"
              >
                Termos
              </a>
            </li>
          </ul>
        </div>
        <div className="justify-end">
          <ul className="flex flex-row border justify-center text-center items-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#"
                className=" hover:text-custom-brown-dark text-custom-brown-light rounded"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-custom-brown-dark text-custom-brown-light rounded "
              >
                Contacto
              </a>
            </li>
            <li>
              <div className="flex flex-row bg-custom-brown-light rounded-md justify-center text-center mx-auto p-2 gap-2 hover:bg-blend-hard-light shadow-sm hover:bg-custom-brown-light/70">
                <button className="flex flex-row text-custom-white rounded ">
                  Carrito
                  <AiOutlineShoppingCart
                    className="align-center justify-center text-xl  "
                    color=""
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
