//import node module libraries
import Image from "next/image";
import { Fragment } from "react";

//import custom components
import {
  Container,
  Button,
  FeaturedCategory,
  ProductList,
  SpringTrend,
} from "components";

import CoverImage from "public/images/furniturestore-slider-pic1.webp";
import { products } from "data/product";
import CompanyFeature from "components/features/CompanyFeature";
import OurClient from "components/features/OurClient";
import NewsLetter from "components/NewsLetter";

export default function Home() {
  return (
    <Fragment>
      <Container>
        <div className="w-full h-[400px] md:h-[740px] overflow-visible pt-2 md:pt-8">
          <div className="relative w-full h-full bg-transparent md:bg-secondary rounded-3xl">
            <div className="rounded-3xl px-3 md:px-12 absolute top-2 md:top-12 w-full h-full ">
              <Image
                src={CoverImage}
                alt=""
                className="w-full h-full rounded-3xl object-cover"
              />
              <div className=" absolute left-8 md:left-24 top-10">
                <span className="text-xs md:text-lg uppercase text-white">
                  Be Furniture
                </span>
                <h2 className="text-3xl md:text-7xl uppercase font-bold md:font-semibold py-4 text-white">
                  Luxury <br /> Furniture
                </h2>
                <div className="flex gap-4">
                  <Button className="text-xs">Go To Shop</Button>
                  <Button className="text-xs" variant="secondary" size="sm">
                    See Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Category */}
        <FeaturedCategory />
      </Container>
      {/* Feature Category Image */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full px-2 md:px-4 lg:px-7 gap-6 py-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-category1 bg-no-repeat bg-center bg-cover h-[350px] md:h-[400px] lg:h-[600px] rounded-3xl flex items-end pb-10 pl-10">
          <div className="mb-8">
            <span className="text-white">Time to</span>
            <div className="pt-6">
              <h2 className="uppercase text-white text-5xl font-bold mb-6">
                Bedroom
              </h2>
              <Image
                src="/images/icon/furniturestore-sep2.svg"
                alt=""
                width={30}
                height={2}
              />
            </div>
          </div>
        </div>

        <div className="bg-category2 bg-no-repeat bg-center bg-cover h-[350px] md:h-[400px] lg:h-[600px] rounded-3xl flex items-end pb-10 pl-10">
          <div className="mb-8">
            <span className="text-white">Time to</span>
            <div className="pt-6">
              <h2 className="uppercase text-white text-5xl font-bold mb-6">
                Office
              </h2>
              <Image
                src="/images/icon/furniturestore-sep2.svg"
                alt=""
                width={30}
                height={2}
              />
            </div>
          </div>
        </div>

        <div className="bg-category3 bg-no-repeat bg-center bg-cover h-[350px] md:h-[400px] lg:h-[600px] rounded-3xl flex items-end pb-10 pl-10">
          <div className="mb-8">
            <span className="text-white">Time to</span>
            <div className="pt-6">
              <h2 className="uppercase text-white text-5xl font-bold mb-6">
                Kitchen
              </h2>
              <Image
                src="/images/icon/furniturestore-sep2.svg"
                alt=""
                width={30}
                height={2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Get Ready For a Spring */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 py-14">
        <div>
          <Image
            src="/images/furniturestore-home-pic4.webp"
            alt=""
            width={600}
            height={600}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="py-6">
            <h6 className="uppercase py-4 text-xs font-semibold">Search For</h6>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-5xl font-bold uppercase text-secondary">
                Get Ready <br /> For a Spring
              </h2>
              <p>Metus ultricies curabitur sodales ipsum elit cubilia.</p>
              <Button>Actual Trends</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <ProductList products={products} itemSize={6} />

      {/* Spring Trend */}
      <SpringTrend />

      {/* Company Feature */}
      <CompanyFeature />

      {/* Our Client */}
      <OurClient />

      {/* Newletter */}
      <NewsLetter />
    </Fragment>
  );
}
