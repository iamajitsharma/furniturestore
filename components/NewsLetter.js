import React from "react";
import { Button } from "./common/Button";
import Container from "./common/Container";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <Container>
      <div
        className="
      w-full
      h-full
      rounded-3xl
      flex
      flex-col
      items-center
      overflow-hidden
      md:flex-row
      md:h-40
      "
      >
        <div
          className="
        bg-primary 
        w-full
        h-full
        md:w-2/5
        "
        >
          <div className="flex items-center h-full px-4  py-4 md:py-0">
            <h4 className="text-white text-xl">
              Subscribe to our newsletter and grab{" "}
              <span className="text-secondary font-semibold">30% OFF!</span>
            </h4>

            {/* Images */}
            <Image
              src="/images/furniturestore-newsletter-pic1.webp"
              alt=""
              width={80}
              height={80}
              className="hidden md:block -mr-14 self-end z-20"
            />
          </div>
        </div>
        <div
          className="
        w-full
        md:w-3/5
        h-full
      bg-secondary
        
        "
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-end
            w-full
            h-full
            gap-4
            px-8
            py-8

            "
          >
            <div
              className="
            bg-slate-600/70
            w-full
            rounded-sm
            "
            >
              <input
                type="text"
                className="
              w-full
              border-none 
              outline-none 
              py-2 
              px-1
              bg-transparent
              
              "
                placeholder="Your e-mail address..."
              />
            </div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
