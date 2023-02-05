export default function Filter() {
  return (
    <div className="bg-custom-brown-light rounded-md p-4 text-custom-white">
      <h2 className="text-xl font-semibold">Color</h2>
      <div className="flex flex-col mb-2 mt-2 ml-10 gap-2 font-semibold">
        <label className="">
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Negro
        </label>
        <label>
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Blanco
        </label>
        <label>
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Marron
        </label>
      </div>
      <h2 className="text-xl font-semibold">Material</h2>
      <div className="flex flex-col mb-2 mt-2 ml-10 gap-2 font-semibold">
        <label className="">
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Calabaza Forrada
        </label>
        <label>
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Calabaza
        </label>
        <label>
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Vidrio
        </label>
      </div>
      <h2 className="text-xl font-semibold">Tamaño</h2>
      <div className="flex flex-col mb-2 mt-2 ml-10 gap-2 font-semibold">
        <label className="">
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Chico
        </label>
        <label>
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Mediano
        </label>
        <label>
          <input type="checkbox" className="accent-custom-brown-dark/30" />{" "}
          Grande
        </label>
      </div>
    </div>
  );
}
