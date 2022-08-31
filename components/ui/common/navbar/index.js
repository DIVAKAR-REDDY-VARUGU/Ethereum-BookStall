// import { useWeb3 } from "@components/provider";
// import Link from "next/link";


// export default function Navbar(){
//     const { connect, isLoading,web3 } = useWeb3();
//     return (
//       <section>
//         <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
//           <nav className="relative" aria-label="Global">
//             <div className="flex justify-between items-center">
//               <div>
//                 <Link href={`/`}>
//                   <a
//                     className="font-medium mr-8 text-gray-500 hover:text-gray-900"
//                     >
//                     Product
//                   </a>
//                 </Link>
//                 <Link href={`/`}>
//                   <a
//                     className="font-medium mr-8 text-gray-500 hover:text-gray-900"
//                     >
//                     Features
//                   </a>
//                 </Link>
//                 <Link href={`/`}>
//                   <a
//                     className="font-medium mr-8 text-gray-500 hover:text-gray-900"
//                     >
//                     Marketplace
//                   </a>
//                 </Link>
//               </div>
//               <div>
//                 <Link href={`/`}>
//                   <a
//                     className="font-medium mr-8 text-gray-500 hover:text-gray-900"
//                     >
//                     Company
//                   </a>
//                 </Link>
              
//                   {
//                     (!isLoading&&web3)?
//                     <span
//                     onClick={connect}
//                       className="cursor-pointer rounded-md px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                       >
//                       connect
//                     </span>
//                     :
//                     <span
//                     onClick={()=>{window.open("https://metamask.io/download/","_blank");}}
//                       className="cursor-pointer rounded-md px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                       >
//                       install Metamask
//                     </span>
//                   }
                  
//               </div>
//             </div>
//           </nav>
//         </div>
//       </section>
//     );
// }




import { useWeb3 } from "@components/provider";
import Link from "next/link";
import { Button } from "@components/ui/common";

export default function Footer() {
  const { connect, isLoading, isWeb3Loaded, hooks } = useWeb3();
  const { account } = hooks.useAccount();

  return (
    <section>
      {account}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>
              {isLoading ? (
                <Button disabled={true} onClick={connect}>
                  Loading...
                </Button>
              ) : isWeb3Loaded ? (
                <Button onClick={connect}>Connect</Button>
              ) : (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}