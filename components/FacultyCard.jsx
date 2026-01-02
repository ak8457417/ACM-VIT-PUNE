// import React from 'react';
// import Image from "next/image";
// import woman from '../app/team/women.jpg'
//
// const FacultyCard = ({name, position}) => {
//     return (
//         <div className="flex flex-col items-center w-full max-w-[350px] py-4">
//             <div className="bg-black/60  backdrop-blur-xl  border border-green-500/30  shadow-[0_0_80px_rgba(34,197,94,0.15)] flex flex-col items-center w-full p-6 rounded-xl hover:border-white/50 hover:shadow-xl transition duration-500 group">
//
//                 <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg border border-white/10">
//                     <Image
//                         src={woman}
//                         alt={name}
//                         fill
//                         sizes="(max-width: 350px) 100vw, 300px"
//                         className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     />
//                 </div>
//
//                 <h3 className="text-[20px] font-semibold mb-1 text-balance text-white">{name}</h3>
//                 <p className="text-[16px] font-medium text-white/60">{position}</p>
//             </div>
//         </div>
//
//     );
// };
//
// export default FacultyCard;


import React from 'react';
import Image from "next/image";
import woman from '../app/team/women.jpg'

const FacultyCard = ({ name, position }) => {
    return (
        <div className="flex flex-col items-center w-full max-w-[350px] py-4">
            <div
                className="
          group
          relative
          flex flex-col items-center w-full p-6 rounded-xl
          bg-black/60 backdrop-blur-xl border border-green-500/30
          shadow-[0_0_80px_rgba(34,197,94,0.15)]
          hover:border-white/50 hover:shadow-xl
          transition-all duration-500 ease-out
          hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg]
        "
            >
                {/* soft glow on hover */}
                <div className="
          pointer-events-none
          absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent
          blur-xl
          transition-opacity duration-500
        " />

                <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg border border-white/10">
                    <Image
                        src={woman}
                        alt={name}
                        fill
                        sizes="(max-width: 350px) 100vw, 300px"
                        className="
              object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105 group-hover:translate-y-1
            "
                    />
                </div>

                <h3
                    className="
            text-[20px] font-semibold mb-1 text-balance text-white
            transition-all duration-500
            group-hover:text-emerald-300 group-hover:tracking-wide
          "
                >
                    {name}
                </h3>

                <p
                    className="
            text-[16px] font-medium text-white/60
            transition-all duration-500
            group-hover:text-white/80 group-hover:translate-y-0.5
          "
                >
                    {position}
                </p>

                {/* bottom accent bar animation */}
                <span
                    className="
            mt-3 h-[2px] w-10 rounded-full bg-emerald-400/60
            origin-center
            transition-all duration-500
            group-hover:w-20 group-hover:bg-emerald-300
          "
                />
            </div>
        </div>
    );
};

export default FacultyCard;
