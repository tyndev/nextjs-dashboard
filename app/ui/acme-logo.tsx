// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

// export default function AcmeLogo() {
//   return (
//     <div
//       className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p className="text-[44px]">Acme</p>
//     </div>
//   );
// }

import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white `}>
      <div className="flex flex-col items-center">
          <span className="text-[62px] transform rotate-[185deg]">🗸🗸</span>
          <p className="text-[32px] pt-2">VectorSearch</p>
      </div>
    </div>
  );
}


// import { lusitana } from '@/app/ui/fonts';

// export default function AcmeLogo() {
//   return (
//     <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
//       <div className="transform rotate-[15deg]">
//         <span className="text-[32px]">⤛</span>
//       </div>
//       <p className="text-[44px] mx-2">Acme</p>
//       <div className="transform -rotate-[15deg]">
//         <span className="text-[32px]">⤜</span>
//       </div>
//     </div>
//   );
// }