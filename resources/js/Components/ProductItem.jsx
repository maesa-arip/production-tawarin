import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { numberFormat } from "@/Libs/helper";

export default function ProductItem({ product }) {
    return (
        // <div>
        //     <Link href={`/toko/products/${product.slug}`}>
        //         <img
        //             className="w-full rounded-lg"
        //             src={product.picture}
        //             alt=""
        //         />
        //     </Link>
        //     <div className="mt-4">
        //         <Link className="text-sm block mb-2 line-clamp-1" href={`/toko/products/${product.slug}`}>
        //             {product.name}
        //         </Link>
        //         <div className="flex items-center justify-between text-sm">
        //             <Link href={`/toko/products?category=${product.category.slug}`}>
        //                 {product.category.name}
        //             </Link>
        //             <div>
        //                 Rp {numberFormat(product.price)}
        //             </div>
        //         </div>
        //     </div>
        // </div>



            <div className="group relative">
            <Link href={`/toko/products/${product.slug}`}>
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                
              </div>
              </Link>
              <div className="mt-4 flex justify-between">
                <div>
                
                  <h3 className="text-sm text-gray-700">
                  <Link className="line-clamp-1" href={`/toko/products/${product.slug}`}>
                      
                      {product.name}
                      </Link>
                  </h3>
                
                <Link href={`/toko/products?category=${product.category.slug}`}>
                <div className="flex items-center justify-between text-sm">
                  <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
                  </div>
                </Link>
                </div>
                <p className="text-sm font-medium text-gray-900">Rp {numberFormat(product.price)}</p>
              </div>
            </div>
      

    );
}
