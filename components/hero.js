
export default function Hero() {
    return (
        <div className="hero h-full" style={{ backgroundImage: `url("/gradient2.png")` }}>

            {/*<div className={"hero-content bg-[#00ffffffff] flex flex-col items-center justify-center max-w-xl pr-16 bg-orange-500 border-4 border-white"}>*/}
            <div className={"hero-content bg-[#00ffffffff] flex flex-col items-center justify-center border-4 border-white overflow-clip"}>
                {/*<div className={"flex flex-col text-[11rem] italic tracking-tighter items-center justify-center -mt-20 mb-20"}>*/}
                <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>
                    <div className="text-white font-bold text-center z-10">
                        SERC
                    </div>

                    {/*<div className={"ml-32 -mt-14"}>*/}
                    <div className={"ml-6 -mt-14"}>
                        <svg width="628" height={"184"} xmlns="http://www.w3.org/2000/svg">
                            <text x={"-5"} y="179" fill="none" stroke="white" stroke-width="3" font-weight="800">
                                SERC
                            </text>
                        </svg>
                    </div>

                </div>
            </div>

        </div>
    )
}
