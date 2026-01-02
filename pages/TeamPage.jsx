import React from 'react';
import TeamCard from "@/components/TeamCard";
import FacultyCard from "@/components/FacultyCard";

const TeamPage = () => {
    return (
        <div className={'bg-linear-to-br from-black via-slate-900 to-black text-white flex-col gap-12 px-4 py-4 justify-center text-center'}>
            <div>
                <div>
                    <h1 className="text-[38px] font-bold mb-4 text-balance">
                        Our Faculty Coordinators
                    </h1>

                    <div
                        className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                        aria-hidden="true"
                    />

                    <div className={'flex flex-wrap justify-center gap-8'}>
                        <FacultyCard name={'Mona Lisa'} position={'Faculty Coordinator'} />
                        <FacultyCard name={'Mona Lisa'} position={'Faculty Coordinator'} />
                    </div>
                </div>
            </div>
            <div className={'pt-4'}>
                <div>
                    <h1 className="text-[38px] font-bold mb-4 text-balance">
                        Meet Our Team
                    </h1>

                    <div className={'flex flex-wrap justify-center gap-8'}>
                        <TeamCard teamName={'Web Team'}/>
                        <TeamCard teamName={'Web Team'}/>
                        <TeamCard teamName={'Web Team'}/>
                        <TeamCard teamName={'Web Team'}/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default TeamPage;
