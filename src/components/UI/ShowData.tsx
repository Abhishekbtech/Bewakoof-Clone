import React from "react";
import Image from "next/image";
import { Product } from "@/types/Product";

interface ShowDataProps {
    item: Product;
}

export const ShowData: React.FC<ShowDataProps> = ({ item }) => {
    return (
        <div className="p-2 mb-4 mt-4 relative">
            <div className="border rounded-md overflow-hidden cursor-pointer hover:shadow-md hover:scale-105 transition duration-300">
                <div>
                    <Image src={item.displayImage} alt={item.name} width={200} height={200} className="w-full h-35 object-cover" />
                </div>
                <h3 className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {item.name}
                </h3>
                <p className="text-gray-700 ml-2">₹ {item.price}</p>
                <p className="text-gray-500 mb-2 ml-2">
                    Rating: {parseFloat(String(item.ratings)).toFixed(1)}
                </p>
            </div>
        </div>
    );
};
