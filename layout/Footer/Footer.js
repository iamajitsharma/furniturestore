import React from "react";
import Image from "next/image";
import { Button } from "components";

const Footer = () => {
  return (
    <footer className="hidden md:block relative w-full h-full pt-20">
      <div className="grid grid-cols-4 gap-10 px-24 p-4 absolute ">
        <div className="">
          <div className="flex flex-col justify-between h-fit gap-8">
            <div>
              <Image src="/images/logo.svg" alt="" width={175} height={100} />
              <p className="py-4">
                Quam pulvinar leo euismod id eu ultricies. Placerat proin
                rhoncus sit.
              </p>
            </div>

            <Button variant="ghost">Contact Us</Button>
            <div className="flex items-center gap-1">
              <Image
                src="/images/icon/Visa.svg"
                alt=""
                width={50}
                height={25}
                className="border-2"
              />
              <Image
                src="/images/icon/Mastercard.svg"
                alt=""
                width={50}
                height={25}
                className="border-2"
              />
              <Image
                src="/images/icon/PayPal.svg"
                alt=""
                width={50}
                height={25}
                className="border-2"
              />
              <Image
                src="/images/icon/GooglePay.svg"
                alt=""
                width={50}
                height={25}
                className="border-2"
              />

              <Image
                src="/images/icon/ApplePay.svg"
                alt=""
                width={50}
                height={25}
                className="border-2"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="uppercase text-xs text-slate-700 font-semibold">
            <h4>Useful Links</h4>
            <ul className="text-[11px] leading-7 py-4">
              <li>Home</li>
              <li>Shop</li>
              <li>Collections</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="uppercase text-xs text-slate-700 font-semibold py-4">
            <h4>Delivery</h4>
            <ul className="text-[11px] leading-7 py-4">
              <li>How it Works</li>
              <li>Free Delivery</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="uppercase text-xs text-slate-700 font-semibold">
            <h4>Customer Service</h4>
            <ul className="text-[11px] leading-7 py-4">
              <li>Orders</li>
              <li>Downloads</li>
              <li>Addresses</li>
              <li>Account Details</li>
              <li>Lost Password</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h4 className="uppercase text-xs text-slate-700 font-semibold">
              Need Help
            </h4>
            <div className="text-primary flex flex-col py-4">
              <span>+91 8420563702</span>
              <span>+91 9038764817</span>
            </div>
            <div className="flex flex-col uppercase text-xs text-slate-700 font-semibold py-4">
              <span>Monday - Friday</span>
              <span>8AM - 5PM</span>
            </div>
            <div className="flex flex-col uppercase text-xs text-slate-700 font-semibold py-4">
              <span>Saturday - Sunday</span>
              <span>10AM - 2PM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
