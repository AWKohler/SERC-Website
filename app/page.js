import Image from 'next/image'
import Hero from "@/components/hero";
// import bgImage from '/gradient.png';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-primary">

        <Hero className={"h-5/6"}></Hero>

        {/*<Hero></Hero>*/}

        {/*/!*<div className="hero min-h-screen" style={{ backgroundImage: `url("/gradient2.png")` }}>*!/*/}
        {/*<div className="hero h-screen" style={{ backgroundImage: `url("/gradient2.png")` }}>*/}

        {/*    /!*<div className="relative p-16 w-1/2 flex items-center justify-center">*!/*/}
        {/*    /!*    /!*<div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-2xl rounded-lg p-10 flex flex-col items-center justify-center">*!/*!/*/}
        {/*    /!*    <div className="absolute inset-0 bg-[rgba(240,240,240,240.2)] backdrop-blur-sm p-10 flex flex-col items-center justify-center">*!/*/}
        {/*    /!*        <div className="text-9xl font-bold text-white text-center z-10">*!/*/}
        {/*    /!*            SERC*!/*/}
        {/*    /!*        </div>*!/*/}
        {/*    /!*    </div>*!/*/}
        {/*    /!*</div>*!/*/}


        {/*    /!*<div className={"hero-content bg-[#00ffffffff] flex flex-col items-center justify-center max-w-xl pr-16 bg-orange-500 border-4 border-white"}>*!/*/}
        {/*    <div className={"hero-content bg-[#00ffffffff] flex flex-col items-center justify-center border-4 border-white overflow-clip"}>*/}
        {/*        /!*<div className={"flex flex-col text-[11rem] italic tracking-tighter items-center justify-center -mt-20 mb-20"}>*!/*/}
        {/*        <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>*/}
        {/*            <div className="text-white font-bold text-center z-10">*/}
        {/*                SERC*/}
        {/*            </div>*/}

        {/*            /!*<div className={"ml-32 -mt-14"}>*!/*/}
        {/*            <div className={"ml-6 -mt-14"}>*/}
        {/*                <svg width="628" height={"184"} xmlns="http://www.w3.org/2000/svg">*/}
        {/*                    <text x={"-5"} y="179" fill="none" stroke="white" stroke-width="3" font-weight="800">*/}
        {/*                        SERC*/}
        {/*                    </text>*/}
        {/*                </svg>*/}
        {/*            </div>*/}

        {/*        </div>*/}
        {/*    </div>*/}

        {/*</div>*/}

    </main>
  )
}
