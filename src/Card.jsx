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
      <div className="w-10/12 flex flex-col sm:flex-row bg-primaryDarkSaturatedBlue rounded-lg gap-8">
        <div className="relative sm:h-1/3 ">
          <img
            src={imgStyling.bgMobile}
            alt="working staff mobile"
            className="w-full h-full rounded-t-lg rounded-br-none object-cover object-center sm:hidden"
          />
          <img
            src={imgStyling.bgDesktop}
            alt="working staff desktop"
            className="hidden sm:block sm:w-full"
          />
          <div className="absolute inset-0 bg-primarySoftViolet mix-blend-multiply"></div>
        </div>

        <div className="flex flex-col">
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold font-fontInter">
              Get <span className="text-primarySoftViolet">insights</span> that
              help your business grow.
            </h1>
            <p className="text-xs/5 font-thin font-fontInter text-neutralTransparentWhiteStat px-7 sm:p-0">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>

          <div className="text-white text-center flex flex-col">
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
