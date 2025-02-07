import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { MouseEvent } from "react";
import { IoTrashOutline } from "react-icons/io5";

type Props = {
  id: string;
  imgSrc: string;
  name: string;
  tag: string;
  quantity: number;
  mrp: number;
  oldPrice: number;
  unit: string;
};

const CartProductCatalog = ({
  id,
  imgSrc,
  name,
  quantity,
  mrp,
  unit,
  tag,
  oldPrice,
}: Props) => {
  const { dispatch } = useCart();

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  const handleRemoveByOneFromCart = () => {
    dispatch({ type: "REMOVE_ITEM_BY_ONE", payload: { id: id } });
  };

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, tag, imageUrl: imgSrc, oldPrice, price: mrp, unit },
    });
  };

  return (
    <div className="flex gap-4 p-4 rounded-lg">
      <Image
        alt="Image not found"
        src={imgSrc}
        width={150}
        height={150}
        className="rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            <h3 className="font-medium">{name}</h3>
            <div className="mt-2 space-y-1 flex sm:gap-3 sm:items-center">
              <p className="text-md">Quantity</p>
              <span className="flex gap-2">
                <button
                  className="px-2 bg-neutral-200 rounded-md"
                  onClick={handleAddToCart}
                >
                  +
                </button>
                <p>{quantity}</p>
                <button
                  disabled={quantity === 0}
                  className="px-2 bg-neutral-200 rounded-md"
                  onClick={handleRemoveByOneFromCart}
                >
                  -
                </button>
              </span>
            </div>
          </div>
          <p className="font-medium mt-5 md:mt-0">
            MRP: {unit}
            {mrp * quantity}
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={handleRemoveFromCart}>
            <IoTrashOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCatalog;
