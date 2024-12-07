import React from "react";
import { Product } from "../models/interfaces";

export default function Card({
  title,
  category,
  price,
  description,
  image,
  rating,
}: Product) {
  return (
    <div className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      {/* Imagem do Produto */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-contain"
        />
      </div>

      {/* Corpo do Card */}
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-sm text-gray-500 italic">{category}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Rodapé do Card */}
      <div className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold text-blue-600">
          {price.toFixed(2)}€
        </span>
        <div className="text-sm text-yellow-500 flex items-center">
          {rating.rate}⭐{" "}
          <span className="text-gray-400 ml-2">({rating.count})</span>
        </div>
      </div>
    </div>
  );
}
