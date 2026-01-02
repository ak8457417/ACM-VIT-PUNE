import React from 'react';
import man from '../app/team/man.jpg'
import Image from "next/image";

const TeamCardMain = ({name, position}) => {
    return (
        <div>
            <div className={'flex flex-col items-center text-center'}>
                <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-2 border-white/20 group-hover:scale-105 transition-transform duration-500">
                    <Image
                        src={man}
                        alt={name}
                        fill
                        sizes="112px"
                        priority={true} // Improves LCP for team sections
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <h3 className="text-[20px] font-semibold mb-1 text-balance text-white">{name}</h3>
                <p className="text-[16px] font-medium text-white/60">{position}</p>
            </div>
        </div>
    );
};

export default TeamCardMain;
