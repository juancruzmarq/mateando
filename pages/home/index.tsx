import BreadCrumb from "@/components/breadcrumb";
import Card from "@/components/card";
import Filter from "@/components/filter";
import Image from "next/image";

interface MateProps {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
  stock: number;
  category: string;
}
// define as a type of array of MateProps
export const API_MATES: MateProps[] = [
  {
    id: 1,
    name: "Imperial",
    description: "Calabaza Forrada",
    price: 240,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 2,
    name: "Camionero",
    description: "Calabaza Forrada",
    price: 515,
    url: "https://m.media-amazon.com/images/I/41udhoeOV8L._AC_.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 3,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 250,
    url: "https://d2r9epyceweg5n.cloudfront.net/stores/001/417/626/products/mate-con-bombilla-png11-386ad06b4597ce5dc616190416125741-1024-1024.png",
    stock: 10,
    category: "Mates",
  },
  {
    id: 4,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 290,
    url: "https://www.manos.com.uy/pub/media/catalog/product/cache/3d69dbca84ad4934c1e7d3950f287a6d/0/5/0539032f.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 5,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 300,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 6,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 521,
    url: "https://m.media-amazon.com/images/I/41udhoeOV8L._AC_.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 7,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 521,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 8,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 521,
    url: "https://www.manos.com.uy/pub/media/catalog/product/cache/3d69dbca84ad4934c1e7d3950f287a6d/0/5/0539032f.jpg",
    stock: 10,
    category: "Mates",
  },
  {
    id: 9,
    name: "Torpedo",
    description: "Calabaza Forrada",
    price: 521,
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mate_en_calabaza.jpg",
    stock: 10,
    category: "Mates",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto ">
      <div
        className="
        bg-custom-brown-dark
        text-custom-white
        px-4
        py-3
        rounded
        relative
        mb-4
        mt-4
        
      "
      >
        <BreadCrumb />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 rounded-lg">
          <Filter />
        </div>
        <div className="container mx-auto col-span-10">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 bg-custom-brown-light p-5 rounded-md">
            {API_MATES.map((mate) => (
              <Card mate={mate} key={mate.id}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
