import React from 'react';
import Image from "next/image";
import man from "@/app/team/man.jpg";

const TeamCardSub = ({name, position}) => {
    return (
        <div>
            <div className={'flex flex-col items-center text-center'}>
                <div className="relative w-20 h-20 mb-4">
                    <Image
                        src={man}
                        alt={'team'}
                        fill
                        className="rounded-full object-cover"
                    />
                </div>

                <h3 className="text-[18px] font-semibold mb-1 text-balance text-white">{name}</h3>
                <p className="text-[14px] font-medium text-white/60">{position}</p>
            </div>
        </div>
    );
};

export default TeamCardSub;
