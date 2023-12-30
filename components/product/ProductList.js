import React from "react";
import ProductCard from "./ProductCard";
import Container from "components/common/Container";
import Image from "next/image";
import { Star } from "react-feather";
import { Button } from "components/common/Button";

const ProductList = ({ products, itemSize }) => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        {products.slice(0, itemSize).map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
      <div className="w-full text-center pt-16">
        <Button variant="outline" size="sm">
          Go To Shop
        </Button>
      </div>
    </Container>
  );
};

export default ProductList;
