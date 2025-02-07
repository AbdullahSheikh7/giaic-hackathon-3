import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

type Props = {
  name: string;
  imageUrl: string;
  price: string;
};

const Catalog = ({ name, imageUrl, price }: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden cursor-pointer">
      <Image
        alt="ecommerce"
        className="object-cover object-center rounded-lg"
        src={imageUrl}
        height={180}
        width={180}
      />
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-[16px] text-primary">{name}</h2>
        <span className="font-bold">{price}</span>
      </div>
    </div>
  );
};

export default Catalog;
