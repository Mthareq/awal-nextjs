import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    story: ''
  });

  const classGrid = {
    lbl: "font-mono text-xs text-gray-800 tracking-widest uppercase",
    inp: "w-full py-2 bg-transparent border-b border-gray-200 focus:border-black focus:outline-none text-base text-black placeholder-gray-400 transition-colors"
    };
  

  const [selectedServices, setSelectedServices] = useState('');

  const [selectedBudget, setSelectedBudget] = useState('');

  const servicesList = ['STRATEGY', 'BRAND', 'CONTENT', 'PR', 'DIGITAL', 'PERFORMANCE'];

  const budgetList = ['< RP 100M', 'RP 100-250M', 'RP 250-500M', 'RP 500M+'];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      services: selectedServices,
      budget: selectedBudget,
    };
    console.log('Form Submitted Data:', payload);
    alert('Brief submitted successfully!');
  };

  return (
    <main>
      <section className="py-24 md:pt-40 px-4 md:px-30">
        <p className="text-base uppercase font-mono">01 / Contact me</p>
        <div>
          <h1 className="py-8 md:pr-180 font-sans leading-[1.2] text-4xl md:text-7xl font-bold">
            Tell us the story <span className="italic font-mono font-normal">worth telling</span>
          </h1>
        </div>

      </section>

      <section className="py-4 px-4 pb-16 md:pb-24 md:px-30">
        <div className="w-full bg-white text-black font-sans min-h-screen ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex flex-col gap-2">
                  <label className={classGrid.lbl}>
                      YOUR NAME
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Thoriq" required className={classGrid.inp}/>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={classGrid.lbl}>
                    EMAIL
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="thareqhanne@gmail" required className={classGrid.inp}/>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={classGrid.lbl}>
                    COMPANY
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Organization Name" required className={classGrid.inp}/>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={classGrid.lbl}>
                    PHONE
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+62 ..." required className={classGrid.inp} />
                </div>
              </div>

              <div>
                <label className={classGrid.lbl}>
                  WHAT DO YOU NEED?
                </label>
                <div className="flex flex-wrap gap-2 py-4">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button key={service} type="button" onClick={() => toggleService(service)}
                        className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 border 
                          ${ isSelected ? 'bg-[#C8FF00] border-[#C8FF00] text-black font-semibold' : 'bg-transparent border-gray-300 text-gray-600 hover:border-black'
                        }`}>
                          
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className={classGrid.lbl}>
                  ROUGH BUDGET
                </label>
                <div className="flex flex-wrap gap-2 py-4">
                  {budgetList.map((budget) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button key={budget} type="button" onClick={() => setSelectedBudget(budget)}
                        className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-200 border 
                          ${ isSelected ? 'bg-black border-black text-white font-semibold' : 'bg-transparent border-gray-300 text-gray-600 hover:border-black'
                        }`}>
                          
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={classGrid.lbl}>
                  TELL US THE STORY
                </label>
                <textarea name="story" rows={3} placeholder="What are you building, and what would success look like?" value={formData.story} onChange={handleChange} 
                className="w-full py-2 bg-transparent border-b border-gray-300 focus:border-black focus:outline-none text-base text-black placeholder-gray-400 resize-none transition-colors"></textarea>
              </div>
              
              <div>
                <button type="submit" className="px-6 py-3 bg-[#C8FF00] text-black font-sans text-lg tracking-wider rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-semibold">
                  Sent Form
                </button>
              </div>
            </form>
              
          </div>
          <div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact