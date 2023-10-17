import Image from 'next/image'
import Hero from "@/components/hero";
// import bgImage from '/gradient.png';

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center bg-blue-500">

          <div className="navbar bg-base-100">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost btn-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          <li><a>Homepage</a></li>
                          <li><a>Portfolio</a></li>
                          <li><a>About</a></li>
                      </ul>
                  </div>
              </div>
              <div className="navbar-center">
                  <a className="btn btn-ghost normal-case text-xl">Software engineering readiness club</a>
              </div>
              <div className="navbar-end">
                  <button className="btn btn-ghost btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                  <button className="btn btn-ghost btn-circle">
                      <div className="indicator">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                          <span className="badge badge-xs badge-primary indicator-item"></span>
                      </div>
                  </button>
              </div>
          </div>

          <div className="w-full">

              <Hero className={"min-h-screen h-full"}></Hero>
              {/*<div className={"bg-white h-[250rem] w-full flex justify-center py-32"}>*/}
              <div className={"bg-white w-full flex justify-center py-32"}>

                  <div className={"w-11/12 max-w-[1500px] grid grid-rows-3 gap-3.5"}>
                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Person
                                  </h1>

                                  <p>
                                      This is a person who is in the club
                                  </p>
                              </div>

                          </div>
                      </div>

                      <div className={"row-start-2"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Person
                                  </h1>

                                  <p>
                                      This is a person who is in the club
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-3"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img src="https://v2.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Person
                                  </h1>

                                  <p>
                                      This is a person who is in the club
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>




              </div>
          </div>


      </main>
  )
}
