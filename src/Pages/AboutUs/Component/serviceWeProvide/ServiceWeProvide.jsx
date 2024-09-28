const ServiceWeProvide = () => {
    let serviceData = [
      "Digital Marketing",
      "Data Science",
      "Design",
      "Cloud & DevOPs",
      "Development",
      "Cyber Security",
      "AI & ML",
      "Testing",
    ];
  
    return (
      <div className="w-screen  box-border py-8">
        <div className="w-[95%] lg:w-[85%] container mx-auto">
          <div className="my-6">
            <h1 className="lg:mb-3 text-2xl md:text-2xl lg:text-[1.7rem] 2xl:text-4xl text-[#3970F0] font-bold">
              Service we provide
            </h1>
            <p className="text-start my-2 lg:my-5 md:font-normal text-sm  md:text-base lg:text-base 2xl:text-[1.2rem] tracking-normal lg:leading-7">
              With expertise in Digital, Engineering and Cloud, we deliver
              solutions that fulfill the traditional, transformational and future
              needs of clients across the globe.
            </p>
          </div>
          <div className="w-full md:w-[90%] my-10 mx-auto flex flex-wrap md:gap-7 gap-y-5  gap-x-4">
            {serviceData.map((pd, index) => {
              return (
                <div
                  key={index}
                  className="md:px-10 md:py-3 px-4 2xl:px-16 2xl:py-6 py-3 rounded-md text-gray-600 bg-[#C8E5FF] md:mb-4"
                >
                  <p className="font-semibold text-xs md:text-lg lg:text-lg 2xl:text-[1.35rem]">{pd}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceWeProvide;
  