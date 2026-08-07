export default function Staffing() {
  const staffingOptions = [
    {
      type: 'Temporary Staffing',
      desc: 'We provide skilled employees for both short and long-term project assignments.',
    },
    {
      type: 'Direct Hire',
      desc: 'Recruiting and placing full-time professionals within your organization on a contingency or retained basis.',
    },
    {
      type: 'Temp-To-Hire',
      desc: 'Supplying employees for projects with the option to hire them full-time, ensuring a cost-effective transition.',
    },
    {
      type: 'Contract Consulting',
      desc: 'Providing professionals to perform project-based work with a clearly defined scope and term.',
    },
    {
      type: 'Executive Search',
      desc: 'Sourcing high-level executives through our extensive relationships and global database.',
    },
  ];

  return (
    <section
      id="staffing"
      className="py-20 px-6 md:px-12 lg:px-24 bg-slate-900 text-slate-50"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Staffing Solutions
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            As a leading provider across the US region, we offer flexible,
            value-added outsourcing of staff augmentation services. Our global
            database connects clients with highly qualified people at the most
            cost-efficient price.
          </p>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {staffingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700"
            >
              <h4 className="text-lg font-bold text-blue-400 mb-2">
                {option.type}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {option.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
