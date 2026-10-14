function Service (){
    const dataService = [
        {
            id: '1',
            title: "Colocation & White Space",
            deskripsi: "Ruang server aman dan berstandar global. Fasilitas dengan efisiensi daya tinggi, sistem pendingin presisi, dan ketersediaan tanpa henti (zero downtime).",
            tag : [
                "High-Density Racks & Custom Cages",
                "Carrier-Neutral Meet-Me Rooms",
                "Biometric Security & 24/7 CCTV",
                "Precision Cooling & N+1 Redundancy"
            ]
        },
        {
            id: '2',
            title: "Cloud & Hybrid Infrastructure",
            deskripsi: "Arsitektur cloud fleksibel yang dirancang untuk performa tinggi, menghubungkan private cloud, public cloud, dan server fisik dalam satu kendali.",
            tag : [
                "Privat & Enterprise Cloud Hosting",
                "Multi-Cloud Integration & Migration",
                "Scalable Compute & Storage Systems",
                "Infrastructure as a Service (IaaS)"
            ]
        },
        {
            id: '3',
            title: "Direct Interconnection & Peering",
            deskripsi: "Konektivitas berkecepatan tinggi dengan latensi ultra-rendah yang menghubungkan fasilitas Bandung dan Singapura secara langsung ke ekosistem global.",
            tag : [
                "Cross-Connect & Metro FiberT",
                "Direct Cloud Connect (AWS, Azure, GCP)",
                "Internet Exchange (IX) Peering",
                "Low-Latency Subsea Routes"
            ]
        },
        {
            id: '4',
            title: "Cybersecurity & Threat Protection",
            deskripsi: "Perlindungan berlapis untuk mengamankan data penting bisnis Anda dari serangan siber, kebocoran data, dan akses tanpa izin.",
            tag : [
                "Multi-Vector DDoS Mitigation",
                "Next-Gen Firewall & Intrusion Prevention",
                "Data Encryption & Access Governance",
                "24/7 Security Operations Center (SOC)",
                "Vulnerability Assessment & Auditing"
            ]
        },
        {
            id: '5',
            title: "Managed IT Services & Operations",
            deskripsi: "Dukungan teknisi ahli 24/7/365 yang menangani pemantauan, pemeliharaan, dan pemecahan masalah operasional infrastruktur Anda secara real-time.",
            tag : [
                "24/7 NOC Monitoring & Alerting",
                "Hardware Hands-On & Remote Support",
                "System Maintenance & Patching",
                "SLA Performance Analytics & Reporting"
            ]
        },
        {
            id: '6',
            title: "Disaster Recovery & Business Continuity",
            deskripsi: "Solusi cadangan data dan pemulihan bencara otomatis untuk memastikan operasional bisnis tetap berjalan tanpa gangguan saat terjadi krisis",
            tag : [
                "Automated Data Backup & Snapshots",
                "Disaster Recovery as a Service (DRaaS)",
                "Failover & Real-Time Data Replication",
                "RTO & RPO Optimization"
            ]
        },
        {
            id: '7',
            title: "Edge Computing & AI Readiness",
            deskripsi: "Infrastruktur masa depan yang dirancang khusus untuk memproses data lokal berkecepatan tinggi dan bebas kerja kecerdasan buatan (AI Workloads)",
            tag : [
                "Edge Node Deployment",
                "High-Power Density for AI Workloads",
                "Local Data Processing & Aanalytics",
                "Hybrid Infrastruktur Readiness"
            ]
        }
        
    ]


    return (
        <main>
            <section className="py-24 md:pt-40 px-4 md:px-30">
                <p className="text-base uppercase font-mono">01 / Contact me</p>
                <div>
                    <h1 className="py-8 md:pr-150 font-sans leading-[1.2] text-4xl md:text-7xl font-bold">
                        One infrastructure, one roof.
                    </h1>
                    <p className="text-xl text-gray-700 md:pr-128">
                        We pair mission-critical reliability with precision engineering across every discipline a modern enterprise needs, so your digital operations stay resilient everywhere they scale.
                    </p>
                </div>
            </section>

            <section className="py-24 md:pt-40 px-4 md:px-30">
                <div className="max-w-7xl mx-auto border-t border-gray-300 ">
                    {dataService.map((sD)=>(
                        <div key={sD.id} className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-gray-300 transition-colors duration-300 hover:bg-gray-50/50">
                            <div className="md:col-span-1">
                                <span className="font-mono text-xs text-gray-700 tracking-wider">
                                    {sD.id}
                                </span>
                            </div>

                            <div className="md:col-span-4 flex items-start gap-2 pr-4">
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black transition-colors duration-300 group-hover:text-black">
                                    {sD.title}
                                </h3>
                            </div>

                            <div className="md:col-span-4 pr-6">
                                <p className="text-base text-gray-400 ransition-colors duration-200 group-hover:text-gray-800 leading-relaxed">
                                    {sD.deskripsi}
                                </p>
                            </div>

                            <div className="md:col-span-3">
                                <ul className="space-y-2 font-mono text-[12px] text-gray-400 tracking-wider uppercase">
                                    {sD.tag.map((tag, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span className="text-lime-600">-</span>
                                        <span className="transition-colors duration-200 group-hover:text-gray-800">
                                        {tag}
                                        </span>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <section>

            </section>
        </main>
    )
}

export default Service;