// import { Link } from 'react-router-dom'


const About = () => {
  const gridGrowth = [
    {
      id: 1,
      label: "100 MW",
      deskripsi: "Capacity",
      class: "text-4xl p-6 font-bold text-[#C8FF00]"
    },
    {
      id: 2,
      label: "10+",
      deskripsi: "Industries Served",
      class: "text-4xl p-6 font-bold text-white"
    },
    {
      id: 3,
      label: "3",
      deskripsi: "Branch Office",
      class: "text-4xl p-6 font-bold text-white"
    },
    {
      id: 4,
      label: "2026",
      deskripsi: "Founded in Bandung",
      class: "text-4xl p-6 font-bold text-white"
    }
  ]

  const faq = [
    {
      id: 1,
      question: "What does MTH do?",
      answer: "MTH is an integrated data center and digital infrastructure provider that operates across seven core disciplines under one roof: colocation & white space, cloud & hybrid infrastructure, direct interconnection & peering, cybersecurity & threat protection, managed IT services & operations, disaster recovery & business continuity, and edge computing for AI readiness. We work infrastructure-first: reliability and uptime shape every solution"
    },
    {
      id: 2,
      question: "Where is MTH based?",
      answer: "MTH is headquartered in Bandung, Indonesia, with a presence in Singapore, and serves enterprise clients across Southeast Asia.",
    },
    {
      id:3,
      question: "When was MTH founded?",
      answer: "MTH was founded in Bandung in 2026."
    },
    {
      id:4,
      question: "What kinds of clients does MTH work with?",
      answer: "We have empowered more than 100 enterprise clients across over 10 industries, from high-growth tech platforms to household names, including Daikin, Oracle, XL Axiata, Astra, Blibli, Siloam Hospitals, and Pluang"
    },
    {
      id:5,
      question: "How does MTH approach a deployment?",
      answer: "Every infrastructure engagement follows four steps (Assess, Architecture, Deploy, Optimize): we deep-dive into your operational requirements and workload demands, architect an optimal hybrid or colocation topology, deploy with precision-engineered redundancy, then monitor, secure, and fine-tune performance continuously"
    },
    {
      id:6,
      question: "How do I start a project with MTH?",
      answer: "Reach out via the contact page, email thareqhanne@gmail.com, or WhatsApp +62 8960-8789-829. Tell us about your infrastructure needs and your growth strategy"
    }
  ]

  return (
    <main>
      <section className="py-24 md:py-24 px-4 md:px-30">
        <div className="py-16 md:py-20">
          <p className="text-base uppercase font-mono">01 / About MTH</p>
          <h1 className="py-8 md:py-8 md:pr-180 font-sans leading-[1.2] text-4xl md:text-7xl font-bold"> 
            A facility built on one idea
          </h1>
          <p className="text-xl text-gray-700 md:pr-128">
            MTH is an integrated data center & digital infrastructure provider working across Southeast Asia, with facilities in Jakarta and Singapore. 
            Since 2026 we’ve believed the same thing: every business worth scaling is built on an infrastructure worth trusting
          </p>
        </div>
        <div className=" md:w-7xl h-px bg-gray-500 rounded-full"></div>
      </section>

      <section className="px-4 md:px-30">
        <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-[0.6fr_2fr]">
          <p className="text-base uppercase font-mono">
            our belief
          </p>
          <div>
            <p className="text-xl md:text-3xl font-semibold font-sans leading-[1.4] ">
              We build infrastructure that scales, 
              <span className="text-gray-400">
                {" "}treating uptime and business continuity 
                as our highest priority so that we earn the right to innovate.{" "}
              </span> 
              Rather than treating precision as a promise reserved only for pitch decks or 
              SLA contracts, we apply enterprise-grade operational
              <span className="bg-[#C8FF00] text-black">
                {" "} discipline to every system, every single day
              </span>
            </p>
            <p className="py-8 text-base md:text-xl text-gray-700 leading-normal">
              MTH is an integrated data center and digital infrastructure provider founded in Jakarta in 2014, 
              with modern facilities in Jakarta and Singapore that support critical digital ecosystems across Southeast Asia. 
              Under one unified roof, MTH seamlessly delivers seven core disciplines: colocation & white space, 
              cloud & hybrid infrastructure, direct interconnection & peering, cybersecurity & threat protection, managed IT services, 
              disaster recovery, and edge computing for AI readiness. Co-founded by Mohamad Thareq Hanne and Chairul Tanjung, 
              MTH has served as the trusted digital backbone for over 100 enterprise clients across more than 10 industries, 
              including Daikin, Oracle, XL Axiata, Astra, Blibli, Siloam Hospitals, and Pluang
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="bg-black">
          <div className="py-10 px-4 md:px-30">
            <div className="grid grid-cols-[1.5fr_1fr] md:grid-cols-4">
              {gridGrowth.map((gg)=>(
                <div key={gg.id} className="">
                  <p className={gg.class}>{gg.label}</p>
                  <p className="text-base px-6 pb-6 pt-2 font-mono uppercase text-white">{gg.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-30 py-20">
        <p className="text-base uppercase font-mono">02 / FAQ</p>
        <div className="">
          {faq.map((f)=>(
            <div key={f.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-gray-300 py-4 md:py-8 gap-6">
              <div>
                <p className="font-semibold font-mono text-lg">{f.question}</p>
              </div>
              <div>
                <p className="text-base text-gray-800">{f.answer}</p>
              </div>
            </div>

          ))}
        </div>
      </section>

    </main>
  )
}

export default About