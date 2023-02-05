import IMate from "@/interfaces/mate.interface";
import Image from "next/image";

interface CardProps {
  mate: IMate;
}

export default function Card({ mate }: CardProps) {
  return (
    <div className=" bg-custom-white rounded-lg shadow-xl p-4 m-2">
      <div className="flex flex-col justify-center items-center">
        <div className="justify-center items-center w-70 h-60">
          <Image
            src={mate.url}
            alt={mate.name}
            width={150}
            height={150}
            className="items-center justify-center object-fill"
          ></Image>
        </div>
        <div className="grid grid-cols-3 mt-2 divide-x-2 divide-custom-brown-dark">
          <div className=" mr-10 col-span-2 items-start">
            <h1 className="text-xl font-bold text-custom-black">{mate.name}</h1>
            <h2 className="text-custom-brown-dark">{mate.description}</h2>
          </div>
          <div className="text-center justify-center pt-2 col-span-1">
            <h1 className="text-2xl font-bold text-custom-black">
              ${mate.price}
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <button className="bg-custom-brown-light text-white font-bold py-2 px-4 mr-2 rounded hover:bg-custom-brown-light/90">
            Agregar al carrito
          </button>
          <button className="bg-custom-brown-dark text-white font-bold py-2 px-2 rounded hover:bg-custom-brown-dark/90">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
