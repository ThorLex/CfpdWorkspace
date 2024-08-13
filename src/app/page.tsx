import Link from "next/link";
import Image from "next/image";
import "./styleFooter.css";
import logo from "./../../public/Image/logogpe2.png";
import logod from "./../../public/Image/uni-dschang.png";
import facebook from "./../../public/Image/facebook.svg";
import instagram from "./../../public/Image/social-instagram.svg";
import youtube from "./../../public/Image/youtube.svg";

interface linkInterface {
  title: String;
  links: LinkThinginterface[];
}
interface LinkThinginterface {
  label: string;
  redirectTo?: string | undefined; // Optional redirection URL
}

export default function Footer() {
  return (
    <footer className="w-full text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5">
        {/* Section 1: Logo et Infos */}
        <div className="space-y-4 centerreduised ">
          <Image src={logo} alt="logo" width={200} height={50} />
          <div className="text-sm ">
            <p>Makepe Conteneur Rouge</p>
            <p>BP: 4338 Douala</p>
            <p>Tel: 069 01 02 03</p>
            <p>Email: info@cfpd-isgd.com</p>
          </div>
        </div>

        {/* Section 2: Liens rapides */}
        <div className=" centerreduised grid grid-cols-2 gap-4">
          <FooterColumn
            title="CFPD"
            links={[
              {
                label: "Stylisme Modelisme",
                redirectTo: "/stylisme-modelisme",
              },
              { label: "Modélisme", redirectTo: "/modelisme" },
              { label: "Décoration", redirectTo: "/decoration" },
              {
                label: "Développement d'Applications",
                redirectTo: "/developpement-applications",
              },
            ]}
          />
          <FooterColumn
            title="ISGD"
            links={[
              { label: "Design de Mode", redirectTo: "/design-mode" },
              { label: "Design d'Intérieur", redirectTo: "/design-interieur" },
            ]}
          />
          <FooterColumn
            title="Admission"
            links={[
              {
                label: "Demande d'Admission",
                redirectTo: "/demande-admission",
              },
              { label: "Tarifs", redirectTo: "/tarifs" },
              { label: "FAQ", redirectTo: "/faq" },
            ]}
          />
          <FooterColumn
            title="Carrière"
            links={[
              { label: "Débouchés", redirectTo: "/debouches" },
              { label: "Nos Anciens", redirectTo: "/nos-anciens" },
              { label: "Offres d'Emplois", redirectTo: "/offres-emplois" },
            ]}
          />
        </div>

        {/* Section 3: Autres Infos */}
        <div className=" rediused space-y-8 flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-center p-4 bg-gray-950 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Nos partenaires</h3>
            <Image src={logod} alt="partenaire" width={80} height={80} />
          </div>
          <div className="w-full flex flex-col items-center justify-center p-4 bg-gray-950 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Rejoignez-nous</h3>
            <div className="flex gap-4">
              <Image src={youtube} alt="youtube" width={35} height={35} />
              <Image src={instagram} alt="instagram" width={35} height={35} />
              <Image src={facebook} alt="facebook" width={35} height={35} />
            </div>
          </div>
        </div>
      </div>
      {/*  cas responsive taille inferieur Link 768px apparution voir styleFooter.css dans les medias*/}{" "}
      <div className="   rediusedd text-white py-1">
        <div className="container mx-auto px-4 text-center">
          <hr className="my-3" />
          <div className="mb-3">
            <span className="block text-sm mt-2">
              CFPD-ISGD © 2024 . All Rights Reserved.
            </span>
          </div>
          <div className="flex justify-center gap-4 ">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 256 180"
              >
                <path
                  fill="currentColor"
                  d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                />
                <path
                  fill="black"
                  d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                />
              </svg>
              <span className="sr-only">Youtube</span>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <span className="  rediused flex justify-center items-center text-center h-full  text-sm mt-5">
        <br /> <br />
        CFPD-ISGD © 2024 . All Rights Reserved.
      </span>
    </footer>
  );
}

// Composant pour chaque colonne de liens rapides, facilitera l'ajout de nouveau elements
function FooterColumn({ title, links }: linkInterface) {
  return (
    <div>
      <h3 className="font-semibold mb-2 title">{title}</h3>
      <ul className="space-y-1">
        {links.map((link: LinkThinginterface, index: number) => (
          <li key={index} className="text-sm">
            <Link href={link.redirectTo !== undefined ? link.redirectTo : ""}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
