import Link from "next/link";
import Image from "next/image";
import logogpe from "../../../../public/img/logogpe.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full bg-white px-10">
      <ul className="flex md:flex-row flex-col h-20 md:items-center md:gap-[4vw] gap-8">
        <li>
          <Link className="hover:text-red-500 text-black " href="/Le_Groupe">
            Le Groupe
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500 text-black" href="/Nuit_stylisme">
            La Nuit du Stylisme
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 text-black"
            href="/Travail_etudiant"
          >
            Travail des Etudiants
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500 text-black" href="/">
            <Image
              className="w-20  hover:scale-110 transition-transform"
              alt=""
              src={logogpe}
            ></Image>
          </Link>
        </li>

        <li>
          <Link className="hover:text-red-500 text-black" href="/">
            Admission
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500 text-black" href="/">
            Carrière
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500 text-black" href="/">
            Actualités
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500 text-black" href="/">
            Atelier
          </Link>
        </li>
      </ul>
    </nav>
  );
}
