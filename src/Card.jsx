import React from "react";

const Card = () => {
  const companyDetails = {
    company: 10234,
    templates: 314,
    queries: 12456789,
  };

  const formatNumber = (number) =>
    number >= 1000000
      ? `${Math.floor(number / 1000000).toFixed()}M+`
      : number >= 1000
      ? `${Math.floor(number / 1000).toFixed()}k+`
      : number;

  console.log(formatNumber(12456789));

  const imgStyling = {
    bgMobile: `./images/image-header-mobile.jpg`,
    bgDesktop: `./images/image-header-desktop.jpg`,
  };

  return (
    <div className="bg-primaryVeryDarkBlue h-screen grid place-items-center">
      <div className="w-10/12 flex flex-col sm:flex-row-reverse bg-primaryDarkSaturatedBlue rounded-lg gap-8 sm:gap-0">
        <div className="relative sm:sm-full sm:w-1/2">
          <img
            src={imgStyling.bgMobile}
            alt="working staff mobile"
            className="w-full h-full rounded-t-lg rounded-br-none object-cover object-center sm:hidden"
          />
          <img
            src={imgStyling.bgDesktop}
            alt="working staff desktop"
            className="hidden sm:block sm:w-full sm:h-full sm:rounded-r-lg"
          />
          <div className="absolute inset-0 bg-primarySoftViolet mix-blend-multiply"></div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-col sm:justify-center sm:items-start px-6 sm:p-0 sm:w-1/2">
          <div className="text-white text-center sm:text-left sm:p-16 sm:pb-4">
            <h1 className="text-2xl font-bold font-fontInter p-4 sm:p-0 sm:text-4xl sm:pb-8" >
              Get <span className="text-primarySoftViolet">insights</span> that
              help your business grow.
            </h1>
            <p className="text-sm/5 font-thin font-fontInter text-neutralTransparentWhiteStat px-4 sm:px-0 sm:pb-12 sm:text-base">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>

          <div className="text-white text-center flex flex-col sm:flex-row gap-5 sm:gap-0 pb-4 sm:w-full sm:justify-evenly sm:-0">
            <div>
              <h3 className="text-2xl font-bold">
                {formatNumber(companyDetails.company)}
              </h3>
              <p className="text-neutralTransparentWhiteStat text-xs/5 uppercase font-fontLexend">
                companies
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {formatNumber(companyDetails.templates)}
              </h3>
              <p className="text-neutralTransparentWhiteStat text-xs/5 uppercase font-fontLexend">
                templates
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {formatNumber(companyDetails.queries)}
              </h3>
              <p className="text-neutralTransparentWhiteStat text-xs/5 uppercase font-fontLexend">
                queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
