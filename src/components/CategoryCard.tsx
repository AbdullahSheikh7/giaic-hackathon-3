import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
};

const CategoryCard = ({ imageUrl }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden w-[380px] h-[380px]">
      <Image
        alt="chair"
        width={380}
        height={380}
        className="object-cover object-center"
        src={imageUrl}
      />
    </div>
  );
};

export default CategoryCard;
