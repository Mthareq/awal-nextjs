import background from "../assets/bg.svg";
import { Link } from "react-router-dom";
import datacenter1 from "../assets/datacenter1.svg"

const Home = () => {
  const buttonView = [
    {
      id: 1,
      label: "See the work",
      to: "/service",
      className: "bg-[#C8FF00] text-black hover:bg-black hover:text-white"
    },
    {
      id: 2,
      label: "Let's talk",
      to: "/contact",
      className: "bg-white text-black border border-black hover:bg-black hover:text-white"
    }
  ];
  const gridGrowth = [
    {
      id: 1,
      label: "100 MW",
      deskripsi: "Capacity"
    },
    {
      id: 2,
      label: "10+",
      deskripsi: "Industries Served"
    },
    {
      id: 3,
      label: "3",
      deskripsi: "Branch Office"
    },
    {
      id: 4,
      label: "2026",
      deskripsi: "Founded in Bandung"
    }
  ]
  const gridData = [
    {
      id: 1,
      label: "data center1",
      Image: datacenter1,
      deskripsi: "Capacity"
    },
    {
      id: 2,
      label: "data center2",
      Image: datacenter1,
      deskripsi: "Industries Served"
    },
    {
      id: 3,
      label: "data center3",
      Image: datacenter1,
      deskripsi: "Branch Office"
    },
    {
      id: 4,
      label: "data center4",
      Image: datacenter1,
      deskripsi: "Founded in Bandung"
    }
  ]

  return (
    <main>
      <section className="relative min-h-screen object-cover flex flex-col items-center justify-center -mt-28 text-center px-4 pt-28 md:pt-0">
        <div className="grid place-items-center w-full max-w-5xl mx-auto">
          <img src={background} alt="background" className="-mt-32 md:mt-0 col-start-1 row-start-1 z-0 -mb-40 mx-auto w-full md:w-[90%] max-w-4xl h-auto opacity-5 pointer-events-none"/>
          <div className="col-start-1 row-start-1 z-10 w-full max-w-3xl mx-auto flex flex-col items-center gap-6 py-8">
            <h1 className="col-start-1 row-start-1 text-center w-full max-w-4xl mx-auto pt-32 md:pt-28">
              <div className="text-4xl md:text-7xl font-bold">
                <p>We build the digital</p>
                <p>Data Center</p>
              </div>
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl px-8">
              An integrated data center infrastructure provider in Southeast Asia,
              offering colocation, cloud, connectivity, and digital security
              services within a single ecosystem.
            </p>
            <div className="flex gap-6">
              {buttonView.map((btn)=>(
                <Link key={btn.id} to={btn.to} className={`px-5 md:px-7 py-2 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all flex items-center gap-2 ${btn.className}`}>
                  <p>{btn.label}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-30 px-4 md:px-30">
        <p className="text-base uppercase font-mono">00 / what MTH</p>
        <h2 className="text-xl md:text-3xl py-8 md:py-16 md:pr-72 font-semibold font-sans leading-[1.4]">We treat infrastructure as the foundation of continuity: finding the core of your digital operations, then making it impossible to fail.
          Data centers that don’t just stay online, they power scale. Behind every {" "}
          <span className="italic font-normal">
              transaction, query, and connection
          </span> is an ecosystem built to protect your data today while unlocking  
          <span className="bg-[#C8FF00] px-2 py-0.5 text-black">expansion across</span>Southeast Asia tomorrow.
        </h2>
        <div className="grid md:grid-cols-4">
          {gridGrowth.map((gg)=>(
            <div key={gg.id} className="border border-gray-500">
              <p className="text-4xl p-6 font-bold">{gg.label}</p>
              <p className="text-base px-6 pb-6 pt-2 font-mono uppercase">{gg.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-30 px-4 md:px-30">
        <p className="text-base uppercase font-mono">01 / types of data</p>
        <h2 className="text-xl md:text-3xl py-8 md:pr-72 font-semibold font-sans ">
          Types of data that exist in a data center
        </h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          {gridData.map((gd)=>(
            <div key={gd.id} className="group relative rounded-2xl p-3 flex flex-col justify-between">
              <div className="relative w-full h-64 rounded-xl bg-gray-100
                    transition-all duration-300 ease-out transform
                    group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] group-hover:z-10">
                <img src={gd.Image} alt={gd.label} className="w-full h-full object-cover rounded-xl"/>
              </div>
              <p className="text-base px-6 pb-6 pt-2 font-mono uppercase font-semibold">{gd.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className=" bg-gray-100">
        <div className="py-24 px-4 md:px-30">
          <p className="text-base uppercase font-mono">02 / Quotes</p>
          <h2 className="text-xl md:text-3xl py-8 md:py-16 md:pr-72  font-sans italic leading-[1.4]">"We treat infrastructure as the foundation of continuity: finding the core of your digital operations, then making it impossible to fail.
            Data centers that don’t just stay online, they power scale. Behind every"
          </h2>
          <div className="flex gap-4">
            <div className="w-5 md:w-8 h-px bg-black rounded-full"></div>
            <p className="-mt-3">Ceo MTH</p>
          </div>

        </div>
        
      </section>

    </main>

  );
};

export default Home;
