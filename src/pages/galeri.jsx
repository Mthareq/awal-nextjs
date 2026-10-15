
import galeri1 from "../assets/galeri1.jpg"
import galeri2 from "../assets/galeri2.png"
import galeri3 from "../assets/galeri3.jpg"
import galeri4 from "../assets/galeri4.jpg"

import daikin from "../assets/daikin.png"
import pluang from "../assets/pluang.png"
import blibli from "../assets/blibli.svg"
import haier from "../assets/haier.svg"
import xl from "../assets/xl-axiata.png"
import astra from "../assets/astra.png"
import oracle from "../assets/oracle.svg"
import smbc from "../assets/smbc.png"
import nature from "../assets/naturebridge.png"
import siloam from "../assets/siloam.png"
import american from "../assets/american-tourister.svg"
import bybit from "../assets/bybit.svg"


function Galeri() {
  const fotoProject = [
    {
      id: "1",
      label: "room server 1",
      Image: galeri2,
      deskripsi: "Room Server 1"
    },
    {
      id: "2",
      label: "room server 2",
      Image: galeri4,
      deskripsi: "Room Server 2"
    },
    {
      id: "3",
      label: "server",
      Image: galeri1,
      deskripsi: "Server"
    },
    {
      id: "4",
      label: "room",
      Image: galeri3,
      deskripsi: "Maintenance"
    }
  ]

  const client = [
    {
      id: "1",
      Image: daikin
    },
    {
      id: "2",
      Image: pluang
    },
    {
      id: "3",
      Image: blibli
    },
    {
      id: "4",
      Image: haier
    },
    {
      id: "5",
      Image: xl
    },
    {
      id: "6",
      Image: astra
    },
    {
      id: "7",
      Image: oracle
    },
    {
      id: "8",
      Image: smbc
    },
    {
      id: "9",
      Image: nature
    },
    {
      id: "10",
      Image: siloam
    },
    {
      id: "11",
      Image: american
    },
    {
      id: "12",
      Image: bybit
    }
  ]

  return (
    <main>
      <section className="py-24 px-4 md:px-30">
        <div className="py-16 md:py-20">
          <p className="text-base uppercase font-mono">01 / Gallery</p>
          <h1 className="py-8 md:pr-180 font-sans leading-[1.2] text-4xl md:text-7xl font-bold"> 
            A facility designed for a single purpose.
          </h1>
          <p className="text-xl text-gray-700 md:pr-128">
            From high-density infrastructure space (white space) to a 24/7 Security Operations Center, see how our infrastructure keeps your business connected and protected.
          </p>
        </div>
        <div className=" md:w-7xl h-px bg-gray-500 rounded-full"></div>
      </section>

      <section className="py-24 px-4 md:px-30">
        <p className="text-base uppercase font-mono">02 / types of data</p>
        <h2 className="text-xl md:text-3xl py-8 md:pr-72 font-semibold font-sans ">
          superiority facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-6 ">
          {fotoProject.map((fP)=>(
            <div key={fP.id} className="group relative rounded-2xl p-3 flex flex-col justify-between">
              <div className="w-full h-88 overflow-hidden bg-gray-100">
                <img src={fP.Image} alt={fP.label} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"/>
              </div>
              <p className="text-base px-6 pb-6 pt-2 font-mono uppercase font-semibold">{fP.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 md:px-30">
        <p className="text-base uppercase font-mono py-8">03 / Selected clients</p>
        <div className="grid grid-cols-2 md:grid-cols-4  items-center justify-items-center">
          {client.map((c)=>(
            <div key={c.id} className="border border-gray-400 p-4 h-28 w-full">
              <img src={c.Image} alt="p" className="h-full w-full max-h-12 object-contain filter  hover:grayscale-0 transition-all duration-300"/>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Galeri