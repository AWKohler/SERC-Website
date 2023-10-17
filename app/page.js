import Image from 'next/image'
// import bgImage from '/gradient.png';

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-center p-24 bg-gray-700">
    <main className="flex flex-col items-center justify-center bg-primary">

        {/*<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>*/}
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/gradient.png")` }}>
        {/*<div className="hero min-h-screen" style={{backgroundImage: bgImage}}>*/}
        {/*    <div className="hero-overlay bg-opacity-60"></div>*/}
        {/*    <div className="hero-content text-center text-neutral-content">*/}
        {/*        <div className="max-w-md">*/}
        {/*            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>*/}
        {/*            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>*/}
        {/*            <button className="btn btn-primary">Get Started</button>*/}
        {/*        </div>*/}
        {/*    </div>*/}

            {/*<div className={"hero-content bg-[#00ffffffff] p-4 pr-16 "}>*/}
            <div className={"hero-content bg-[#00ffffffff] p-4 pr-16 flex flex-col items-center justify-center"}>
                {/*<div className={"flex flex-col text-[11rem] italic tracking-tighter"}>*/}
                <div className={"flex flex-col text-[11rem] italic tracking-tighter items-center justify-center"}>
                    {/*<div className="text-white absolute font-bold text-center z-10">*/}
                    <div className="text-white font-bold text-center z-10">
                        SERC
                    </div>

                    {/*<div className={"flex flex-col justify-center items-center text-center font-bold mt-28"}>*/}
                    {/*    <div className="tfixed">*/}
                    {/*        SERC*/}
                    {/*    </div>*/}
                    {/*    /!*<div className="text-gray-700 absolute">*!/*/}
                    {/*    <div className="bg-[#00ffffffff] absolute">*/}
                    {/*        SERC*/}
                    {/*    </div>*/}
                    {/*</div>*/}



                    <div className={"ml-32 mt-72"}>
                        <svg width="600" xmlns="http://www.w3.org/2000/svg">
                            <text y="135" fill="none" stroke="white" stroke-width="3" font-weight="800">
                                SERC
                            </text>
                        </svg>
                    </div>

                    {/*<svg width="600" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <text y="135" fill="none" stroke="white" stroke-width="3" font-weight="800">*/}
                    {/*        SERC*/}
                    {/*    </text>*/}
                    {/*</svg>*/}


                    {/*<svg width="308" height="104" viewBox="0 0 308 104" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <text x="0" y="120" fill="none" stroke="white" stroke-width="3" font-weight="800">SERC</text>*/}
                    {/*</svg>*/}

                </div>
            </div>
        </div>

        {/*<div className={"bg-red-500 p-4 pr-16"}>*/}
        {/*    <div className={"flex flex-col text-[11rem] italic tracking-tighter"}>*/}
        {/*        <div className="text-white absolute font-bold text-center z-10">*/}
        {/*            SERC*/}
        {/*        </div>*/}

        {/*        <div className={"flex flex-col justify-center items-center text-center font-bold mt-28"}>*/}
        {/*            <div className="tfixed">*/}
        {/*                SERC*/}
        {/*            </div>*/}
        {/*            /!*<div className="text-gray-700 absolute">*!/*/}
        {/*            <div className="text-red-500 absolute">*/}
        {/*                SERC*/}
        {/*            </div>*/}
        {/*        </div>*/}

        {/*        /!*<div className={"z-10"}>*!/*/}
        {/*        /!*    <svg width="308" height="104" viewBox="0 0 308 104" xmlns="http://www.w3.org/2000/svg">*!/*/}
        {/*        /!*        <text x="0" y="90" fill="none" stroke="white" stroke-width="3" font-weight="800">2022</text>*!/*/}
        {/*        /!*    </svg>*!/*/}
        {/*        /!*</div>*!/*/}
        {/*    </div>*/}

            {/*<svg width="308" height="104" viewBox="0 0 308 104" xmlns="http://www.w3.org/2000/svg">*/}
            {/*    /!*<text x="0" y="90" fill="none" stroke="white" stroke-width="3" font-family="Noto Sans" font-size="100px" font-weight="800">2022</text>*!/*/}
            {/*    <text x="0" y="90" fill="none" stroke="white" stroke-width="3" font-weight="800">2022</text>*/}
            {/*</svg>*/}

        {/*</div>*/}





    </main>
  )
}
