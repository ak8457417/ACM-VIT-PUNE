import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
import BlurText from "./BlurText";

export default function HeroSection() {
    return (
        <div className="w-full min-h-screen bg-linear-to-br from-blue-200 to-blue-400 font-sans dark:bg-black">
            <Navbar />
            <div className="flex items-center flex-row ">
                <Spline
                    className="z-10 pb-10"
                    scene="https://prod.spline.design/5bx7runDgMCS437l/scene.splinecode"
                />
            </div>
            <BlurText
                text="Welcome to Association of computer Machinery"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-6xl font-bold tracking-tighter w-[40vw] ml-3 -mt-[20.5vw]"
            />
            <p className="text-right w-[40vw] mx-[58vw] -mt-[7vw]" >So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.
            </p>
        </div>
    )
}