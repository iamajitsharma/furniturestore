import Image from "next/image";
import React from "react";

const FeaturedCategory = () => {
  return (
    <div className="py-0 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-10 py-16 px-4">
        <div>
          <h6 className="uppercase py-4 text-xs font-semibold">Search For</h6>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-secondary">
              <span className="text-primary font-semibold">24000</span> <br />{" "}
              Products
            </h2>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-3 md:gap-6">
            <span>
              <Image
                src="/images/icon/furniturestore-sep2.svg"
                width={24}
                height={4}
                alt=""
              />
            </span>
            <div>
              <h4 className="font-bold text-secondary text-xl md:text-2xl">
                24000
              </h4>
              <span className="text-base">products</span>
            </div>

            <span>
              <Image
                src="/images/icon/furniturestore-sep2.svg"
                width={24}
                height={4}
                alt=""
              />
            </span>

            <div>
              <h4 className="font-bold text-secondary text-xl md:text-2xl">
                12
              </h4>
              <span className="text-base">years</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feature category icons  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        <div className="py-8 px-2 flex flex-col items-center justify-center bg-gray-100 text-xl text-secondary font-semibold rounded-3xl hover:bg-white hover:shadow-md">
          <Image
            src="/images/icon/furniturestore-category1.svg"
            alt=""
            width={84}
            height={84}
          />
          <span className="pt-4">Chair</span>
        </div>

        <div className="py-8 px-2 flex flex-col items-center justify-center bg-gray-100 text-xl text-secondary font-semibold rounded-3xl hover:bg-white hover:shadow-md">
          <Image
            src="/images/icon/furniturestore-category2.svg"
            alt=""
            width={84}
            height={84}
          />
          <span className="pt-4">Beds</span>
        </div>

        <div className="py-8 px-2 flex flex-col items-center justify-center bg-gray-100 text-xl text-secondary font-semibold rounded-3xl hover:bg-white hover:shadow-md">
          <Image
            src="/images/icon/furniturestore-category3.svg"
            alt=""
            width={84}
            height={84}
          />
          <span className="pt-4">Tables</span>
        </div>

        <div className="py-8 px-2 flex flex-col items-center justify-center bg-gray-100 text-xl text-secondary font-semibold rounded-3xl hover:bg-white hover:shadow-md">
          <Image
            src="/images/icon/furniturestore-category4.svg"
            alt=""
            width={84}
            height={84}
          />
          <span className="pt-4">Desks</span>
        </div>

        <div className="py-8 px-2 flex flex-col items-center justify-center bg-gray-100 text-xl text-secondary font-semibold rounded-3xl hover:bg-white hover:shadow-md">
          <Image
            src="/images/icon/furniturestore-category5.svg"
            alt=""
            width={84}
            height={84}
          />
          <span className="pt-4">Cabinets</span>
        </div>

        <div className="py-8 px-2 flex flex-col items-center justify-center bg-gray-100 text-xl text-secondary font-semibold rounded-3xl hover:bg-white hover:shadow-md">
          <Image
            src="/images/icon/furniturestore-category6.svg"
            alt=""
            width={84}
            height={84}
          />
          <span className="pt-4">Lighting</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
