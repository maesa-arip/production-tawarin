import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/inertia-react";
import ProductItem from "@/Components/ProductItem";
import { numberFormat } from "@/Libs/helper";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import { Inertia } from "@inertiajs/inertia";
import { toast } from 'react-hot-toast'

export default function Show({ product }) {
    function addToCartHandler() {
        Inertia.post(route('tokocart.store',product),{},{
            onSuccess : ()=> toast.success('Added to cart'),
        });
    }
    const token = (document.querySelector('meta[name="_token"]'));
  console.log(token);
    return (
        <div>
            <Head title={ProductItem.name} />
            <Container>
                <div className="flex gap-10">
                    <div className="w-1/3">
                        <img
                            className="w-full rounded-lg shadow-sm"
                            src={product.picture}
                            alt=""
                        />
                    </div>
                    <div className="w-2/3 min-h-full flex flex-col justify-between">
                        <div className="flex-1">
                            <Link
                                className="text-xs font-semibold px-2 py-1 inline-flex bg-blue-500 text-white rounded"
                                href={`/toko/products?category=${product.category.slug}`}
                            >
                                {product.category.name}
                            </Link>
                            <h1 className="font-semibold text-3xl">
                                {product.name}
                            </h1>
                            <div className="leading-relaxed text-gray-500 my-4">
                                {product.description}
                            </div>
                            <div className="font-semibold text-4xl"><sup>Rp </sup>{numberFormat(product.price)}</div>
                        </div>
                        <Button color="teal" onClick={addToCartHandler}>Add to cart</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
