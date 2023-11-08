import React from "react";

const Card = () => {

  const companyDetails = 
    {
      'company' : 10234,
      'templates' : 314,
      'queries' : 12456789
    }

  
   const formatNumber = (number) => 
   number >= 1000000 ? `${Math.floor(number/1000000).toFixed()}M+` :
   number >= 1000 ? `${Math.floor(number/1000).toFixed()}K+` : number

   
  console.log(formatNumber(12456789))



  const imgStyling = {
    bgMobile: `./images/image-header-mobile.jpg`,
  };

  return (
    <div className="bg-primaryVeryDarkBlue h-screen grid place-items-center">
      <div className="w-10/12 bg-primaryDarkSaturatedBlue">
        <div className="relative">
          <img
            src={imgStyling.bgMobile}
            alt=""
            className="w-full h-full rounded-t-lg object-cover object-center "
          />
          <div className="absolute inset-0 bg-primarySoftViolet mix-blend-multiply"></div>
        </div>

        <div className="text-white text-center px-5 py-6">
          <h1 className="text-2xl font-bold font-fontInter px-8 pb-4">Get <span className="text-primarySoftViolet">insights</span> that help your business grow.</h1>
          <p className="text-xs/5 font-thin font-fontInter text-neutralTransparentWhiteStat px-7">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        <div>
          <div>
            <h3>{formatNumber(companyDetails.company)}</h3>
            <p>companies</p>          
          </div>

          <div>
            <h3>{formatNumber(companyDetails.templates)}</h3>
            <p>templates</p>          
          </div>

          <div>
            <h3>{formatNumber(companyDetails.queries)}</h3>
            <p>queries</p>          
          
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default Card;
