import { useWeb3 } from "@components/provider";
import Link from "next/link";


export default function Navbar(){
    const { Connect } = useWeb3();
    return (
      <section>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative" aria-label="Global">
            <div className="flex justify-between">
              <div>
                <Link href={`/`}>
                  <a
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                    >
                    Product
                  </a>
                </Link>
                <Link href={`/`}>
                  <a
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                    >
                    Features
                  </a>
                </Link>
                <Link href={`/`}>
                  <a
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                    >
                    Marketplace
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/`}>
                  <a
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900"
                    >
                    Company
                  </a>
                </Link>
              
                  {/* <Link href={`#`}> */}
                    <span
                    onClick={Connect}
                      className="cursor-pointer rounded-md px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                      Connect
                    </span>
                  {/* </Link> */}
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
}