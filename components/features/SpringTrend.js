import React from "react";
import Container from "components/common/Container";
import { Button } from "components/common/Button";
import Image from "next/image";

const SpringTrend = () => {
  return (
    <Container className="py-16">
      <div
        className="
      relative
      h-full
      bg-gradient-to-r 
      from-[#F19E20]
      to-primary
       rounded-3xl"
      >
        <div
          className="
      flex
      flex-col
      md:flex-row
      md:justify-end
      md:items-start
      p-8"
        >
          <div className="absolute -top-10 left-12 w-1/2">
            <Image
              src="/images/furniturestore-home-pic5.webp"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h6 className="uppercase py-4 text-xs text-white font-semibold">
                Our Magazine
              </h6>
              <h2 className="text-3xl md:text-5xl font-bold uppercase text-white">
                Spring
                <br />
                Trends 2023
              </h2>

              <Button variant="ghost" size="sm">
                Download
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center px-8 pt-24 pb-6 text-white relative">
          <div className="flex gap-4 w-full md:w-1/3 px-2 md:px-6 py-3">
            <span className="text-3xl font-semibold">01</span>
            <div className="flex flex-col justify-between gap-4 md:gap-8">
              <h4 className="text-lg md:text-xl font-semibold">
                Lectus libero nibh adipiscing blandit.
              </h4>
              <span className="text-gray-300/80">03 - 12</span>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-1/3 px-2 md:px-6 py-3">
            <span className="text-3xl font-semibold">02</span>
            <div className="flex flex-col justify-between gap-4 md:gap-8">
              <h4 className="text-lg md:text-xl font-semibold">
                Lectus libero nibh adipiscing blandit.
              </h4>
              <span className="text-gray-300/80">03 - 12</span>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-1/3 px-2 md:px-6 py-3">
            <span className="text-3xl font-semibold">03</span>
            <div className="flex flex-col justify-between gap-4 md:gap-8">
              <h4 className="text-lg md:text-xl font-semibold">
                Lectus libero nibh adipiscing blandit.
              </h4>
              <span className="text-gray-300/80">03 - 12</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SpringTrend;
