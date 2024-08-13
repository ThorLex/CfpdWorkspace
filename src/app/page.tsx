import Image from "next/image";
import { ImageLinks } from "../../tools/constants/index";
import ImageCard from "../../tools/constants/components/ImageCard";

export default function Home() {
  return (
    <div className="mr-8 max-w-screen-xl mx-auto px-4">
      <div className="mt-[158px] mb-[158px] text-[#000000] ">
        <h1 className="text-xl font-bold">Le Groupe universitaire DEUTOU</h1>
        <p className="text-sm text-gray-900 mt-2">
          Composé du Centre de Formation Professionnelle Deutou(CFPD) qui a vu
          le jour en 2001 et de l‘Institut Supérieur de Gestion et du
          Design(ISGD) crée en 2016, le Groupe universitaire DEUTOU s’est
          positionné au fil des années comme leader dans la formation des
          métiers de la mode et du design. Doté de formations théoriquement
          riches et fortement pratiques, le groupe universitaire DEUTOU a su
          donner une dimension humaine à sa pédagogie.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ImageLinks.map((link) => (
          <div key={link.label}>
            <div className="relative cursor-pointer">
              <h2
                className="absolute p-4 w-[343px]
           h-[191px] flex justify-end items-end text-end  bottom-0 font-bold text-white"
              >
                {link.label}
              </h2>
              <div className="">
                <ImageCard
                  src={link.imgURL}
                  alt={link.label}
                  text={link.label}
                  className="mb-[90px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
