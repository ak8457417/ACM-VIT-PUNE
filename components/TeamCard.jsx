// import TeamCardMain from "@/components/TeamCardMain";
// import TeamCardSub from "@/components/TeamCardSub";
//
// const TeamCard = ({ teamName }) => {
//     return (
//         <div className={'flex flex-col items-center w-full max-w-[350px] py-4'}>
//             <div className={'font-bold text-2xl mb-4 '}>{teamName}</div>
//             <div className={'bg-black/60  backdrop-blur-xl  border border-green-500/30  shadow-[0_0_80px_rgba(34,197,94,0.15)] flex flex-col items-center w-full p-6 rounded-xl hover:border-white/50 hover:shadow-xl transition duration-500 group'}>
//                 {/* Lead Member */}
//                 <div className={'mb-8'}>
//                     <TeamCardMain name={'Abhishek Kadu'} position={'Web Master'}/>
//                 </div>
//
//                 {/* Sub Members Grid */}
//                 <div className={'grid grid-cols-2 gap-x-4 gap-y-8'}>
//                     <TeamCardSub name={'Team Member'} position={'Developer'}/>
//                     <TeamCardSub name={'Team Member'} position={'Developer'}/>
//                     <TeamCardSub name={'Team Member'} position={'Developer'}/>
//                     <TeamCardSub name={'Team Member'} position={'Developer'}/>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TeamCard;


import TeamCardMain from "@/components/TeamCardMain";
import TeamCardSub from "@/components/TeamCardSub";

const TeamCard = ({ teamName }) => {
    return (
        <div className="flex flex-col items-center w-full max-w-[350px] py-4">
            {/* team title */}
            <div className="
        font-bold text-2xl mb-4 text-white
        transition-all duration-500
        group/title
      ">
        <span className="inline-block group-hover/title:tracking-wide group-hover/title:text-emerald-300">
          {teamName}
        </span>
            </div>

            <div
                className="
          group
          bg-black/60 backdrop-blur-xl
          border border-green-500/30
          shadow-[0_0_80px_rgba(34,197,94,0.15)]
          flex flex-col items-center w-full p-6 rounded-xl
          transition-all duration-500 ease-out
          hover:-translate-y-3 hover:scale-[1.015]
          hover:border-emerald-300/70 hover:shadow-lg
        "
            >
                {/* subtle corner glow */}
                <div className="
          pointer-events-none
          absolute inset-0 rounded-xl
          bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_55%)]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        " />

                {/* content wrapper to keep it above glow */}
                <div className="relative z-10 w-full">
                    {/* Lead Member */}
                    <div
                        className="
              mb-8
              transition-all duration-500 ease-out
              group-hover:-translate-y-1 group-hover:scale-[1.01]
            "
                    >
                        <TeamCardMain name="Abhishek Kadu" position="Web Master" />
                    </div>

                    {/* Sub Members Grid */}
                    <div
                        className="
              grid grid-cols-2 gap-x-4 gap-y-6
              transition-transform duration-500 ease-out
              group-hover:translate-y-1
            "
                    >
                        <div className="transition-all duration-500 delay-75 group-hover:-translate-y-1 group-hover:opacity-100 opacity-90">
                            <TeamCardSub name="Team Member" position="Developer" />
                        </div>
                        <div className="transition-all duration-500 delay-100 group-hover:-translate-y-1 group-hover:opacity-100 opacity-90">
                            <TeamCardSub name="Team Member" position="Developer" />
                        </div>
                        <div className="transition-all duration-500 delay-150 group-hover:-translate-y-1 group-hover:opacity-100 opacity-90">
                            <TeamCardSub name="Team Member" position="Developer" />
                        </div>
                        <div className="transition-all duration-500 delay-200 group-hover:-translate-y-1 group-hover:opacity-100 opacity-90">
                            <TeamCardSub name="Team Member" position="Developer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
