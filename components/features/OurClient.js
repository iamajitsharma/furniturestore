"use client";
import React from "react";
import Container from "components/common/Container";
import Image from "next/image";
import { clientListData } from "data/clientListData";

const OurClient = () => {
  return (
    <Container className="py-16">
      <div className="flex gap-4 justify-between items-center flex-wrap py-8 px-12">
        {clientListData.map((client) => (
          <div key={client.id} className="w-24 h-auto">
            <Image
              src={client.logo}
              alt={client.company}
              width={150}
              height={75}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurClient;
