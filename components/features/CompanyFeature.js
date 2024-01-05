"use client";
import React from "react";
import Container from "components/common/Container";
import { Button } from "components/common/Button";
import Image from "next/image";
import CountUp from "react-countup";

const CompanyFeature = () => {
  return (
    <div className=" bg-secondary py-12 my-6 md:py-24">
      <Container>
        <div
          className="
        flex
        flex-col
        flex-wrap
        items-center
        justify-between
        gap-8
        w-full
        h-full
        md:gap-0
        md:flex-row
       
        "
        >
          <div className="w-full order-last md:order-none md:w-1/2 md:pr-12">
            <p className="text-white text-sm md:text-xl font-semibold">
              Consequat ornare ipsum eget vel tincidunt. Quis nunc, nulla ac ut
              arcu orci porttitor proin pulvinar. Pulvinar arcu, habitant eget
              gravida amet at volutpat vehicula. Elit, phasellus facilisis sit
              amet, felis, lacus. Dui a, ut pulvinar sit pellentesque amet urna
              posuere.
            </p>
            <div className="py-8 flex gap-6 justify-center md:justify-start items-center">
              <span className="text-primary">Et congue ultricies</span>
              <Button>About Us</Button>
            </div>
          </div>
          <div className="w-full md:w-auto z-20 self-end -mt-24 md:-mr-48">
            <div
              className="
          md:w-44
          flex
          flex-col
          items-center
          justify-center
        bg-sky-600/40
          rounded-3xl
          py-12
          px-4
          max-h-fit
          h-full
          z-50
          "
            >
              <Image
                src="/images/icon/furniturestore-home-icon1.svg"
                alt=""
                width={50}
                height={50}
                className="pb-8"
              />
              <h4 className="text-primary text-3xl md:text-5xl font-semibold">
                20
              </h4>
              <span className="text-white text-sm text-center pt-4">
                YEARS IN THE FURNITURE BUSINESS
              </span>
            </div>
          </div>
          <div className="md:-mt-48 order-first md:order-none">
            <div className="p-4 w-72 sm:w-96 h-auto relative cover">
              <Image
                src="/images/furniturestore-home-pic6.webp"
                alt=""
                className="rounded-full"
                width={350}
                height={500}
              />
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              <div className="flex items-center gap-6">
                <span className="border border-primary w-6" />
                <div className="flex flex-col justify-start items-start gap-2">
                  <CountUp
                    end={1300}
                    separator=""
                    duration={5}
                    className="
                      text-2xl
                      text-white
                      font-bold
                      sm:text-3xl
                      md:text-5xl
                      "
                  />
                  <span className="uppercase text-xs text-white">
                    Search For
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="border border-primary w-6" />
                <div className="flex flex-col justify-start items-start gap-2">
                  <CountUp
                    end={88}
                    separator=""
                    duration={5}
                    className="
                      text-2xl
                      text-white
                      font-bold
                      sm:text-3xl
                      md:text-5xl
                      "
                  />
                  <span className="uppercase text-xs text-white">
                    Search For
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="border border-primary w-6" />
                <div className="flex flex-col justify-start items-start gap-2">
                  <CountUp
                    end={30}
                    separator=""
                    suffix="K"
                    duration={5}
                    className="
                      text-2xl
                      text-white
                      font-bold
                      sm:text-3xl
                      md:text-5xl
                      "
                  />
                  <span className="uppercase text-xs text-white">
                    Search For
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="border border-primary w-6" />
                <div className="flex flex-col justify-start items-start gap-2">
                  <CountUp
                    end={5}
                    separator=""
                    prefix="$"
                    suffix="M"
                    duration={5}
                    className="
                      text-2xl
                      text-white
                      font-bold
                      sm:text-3xl
                      md:text-5xl
                      "
                  />
                  <span className="uppercase text-xs text-white">
                    Search For
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyFeature;
