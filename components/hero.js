
export default function Hero() {
    return (
        // <div className="hero h-full" style={{ backgroundImage: `url("/gradient2.png")` }}>
        // <div className="hero h-full py-32" style={{ backgroundImage: `url("/gradient2.png")` }}>
        <div className="hero h-full py-32" style={{ backgroundImage: `url("/daisys.jpg")` }}>
            {/*<div className="hero-overlay bg-opacity-60 h-full"></div>*/}

            {/*<div className={"hero-content bg-[#00ffffffff] flex flex-col items-center justify-center border-4 border-white overflow-clip"}>*/}
            {/*<div className={"hero-content flex flex-col items-center justify-center border-4 border-white overflow-clip"}>*/}
                <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>
                    <div className="text-white font-bold text-center z-10">
                        SERC
                    </div>

                    <div className={"ml-6 -mt-14"}>
                        <svg width="628" height={"184"} xmlns="http://www.w3.org/2000/svg">
                            <text x={"-5"} y="179" fill="none" stroke="white" stroke-width="3" font-weight="800">
                                SERC
                            </text>
                        </svg>
                    </div>

                </div>
            {/*</div>*/}

            {/*<div className="mockup-code">*/}
            {/*    <pre data-prefix="$"><code>npm i daisyui</code></pre>*/}
            {/*    <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>*/}
            {/*    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>*/}
            {/*</div>*/}

        </div>
    )
}



/*
<div className={"hero-content flex flex-col items-center justify-center border-4 border-white overflow-clip"}>
                <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>
                    <div className="text-white font-bold text-center z-10">
                        SERC
                    </div>

                    <div className={"ml-6 -mt-14"}>
                        <svg width="628" height={"184"} xmlns="http://www.w3.org/2000/svg">
                            <text x={"-5"} y="179" fill="none" stroke="white" stroke-width="3" font-weight="800">
                                SERC
                            </text>
                        </svg>
                    </div>

                </div>
            </div>
 */
