
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const NFTFetcher = () => {
//   const [nFTs, setNFTs] = useState([]);

//   useEffect(() => {
//     const fetchNFTs = async () => {
//       const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           'x-api-key': 'd3c57c8b628247f9abf5cfe1bf4e143c'
//         }
//       };

//       //'https://api.opensea.io/api/v2/chain/matic/contract/0x473989BF6409D21f8A7Fdd7133a40F9251cC1839/nfts', options)
//       try {
//         const response = await fetch('https://api.opensea.io/api/v2/chain/matic/contract/0x473989BF6409D21f8A7Fdd7133a40F9251cC1839/nfts', options);
//         const data = await response.json();
//         setNFTs(data.nfts);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchNFTs();
//   }, []);
//   function  redirectweb(){
//     <Link href="https://opensea.io/collection/anichess-orbs-of-power"/>
//   }


//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">NFT Fetcher</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {nFTs.map((nft) => (
//           <div key={nft.token_id} className="border p-4">
//             <img
//               src={nft.image_url}
//               alt={`NFT ${nft.name}`}
//               className="w-full h-40 object-cover mb-2"
//             />
//             <button className="text-sm font-medium" onClick={redirectweb}>{nft.name}</button>
//             {/* You can add more information about the NFT here if needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NFTFetcher;
// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scrollbars } from 'react-custom-scrollbars-2';

const NFTFetcher = () => {
  const [nFTs, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': 'd3c57c8b628247f9abf5cfe1bf4e143c'
        }
      };

      try {
        const response = await fetch('https://api.opensea.io/api/v2/chain/matic/contract/0x473989BF6409D21f8A7Fdd7133a40F9251cC1839/nfts', options);
        const data = await response.json();
        setNFTs(data.nfts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNFTs();
  }, []);

  function redirectWeb(url) {
    // Open the link in a new tab
    window.open(url, '_blank');
  }

  return (
    <Scrollbars class="w-auto h-300">
   
    <div className="p-4 ">
      <h1 className="text-4xl  text-center underline decoration-sky-500 underline-offset-8">NFT Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 overflow-hidden ">
        {nFTs.map((nft) => (
          <div className="max-w-md mx-auto rounded-xl shadow-lg p-6 border-8 border-dashed mb-16">
      {/* NFT Image */}
      <img  onClick={() => redirectWeb(`${nft.opensea_url}`)}
      src={nft.image_url}  // Replace with your actual NFT image source
        alt={`NFT ${nft.name}`}
        className="w-full object-cover mb-2 cursor-pointer"
      />

      {/* NFT Name */}
      <h2 className="text-2xl font-bold mb-4 ">{nft.name}</h2>

      {/* Owner */}
      <div className="mb-4">
        <span className="text-textColor font-poppins">Owner:</span>
        <span className="ml-2">{nft.collection}</span>
      </div>

      {/* Contributors */}
      <div className="mb-4">
        <span className="text-textColor">Contributors:</span>
        <span className="ml-2">Alice, Bob, Charlie</span>
      </div>

      {/* ETH Information */}
      <div className="mb-4">
        <span className="text-textColor">ETH:</span>
        <span className="ml-2">Updating..</span>
      </div>

      {/* Place Bid Section */}
      <div>
      <div className="mb-1">
        <span className="text-textColor">Category:</span>
        <span className="ml-2">Gaming (Chess) </span>
      </div>
        <form>
          <label className="block text-gray-600 text-sm mb-1" htmlFor="bidAmount">
            Bid Amount (ETH)
          </label>
          <input
            type="number"
            id="bidAmount"
            name="bidAmount"
            className="border rounded-md py-2 px-3 mb-5 cursor-text"
            placeholder="Enter your bid amount"
          />

          <button
            
            className=" text-white py-2 px-4 rounded-md bg-bgcolor cursor-pointer " onClick={() => redirectWeb(`${nft.opensea_url}`)}
          >
            Place Bid
          </button>
        </form>
      </div>
    </div>
        ))}
      </div>
    </div>
    </Scrollbars>
  );
};
















export default NFTFetcher;

