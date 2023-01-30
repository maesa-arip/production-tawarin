import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import ProductItem from "@/Components/ProductItem";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";

export default function Index(props) {
    const { data: products, meta, links } = props.products;
    return (
        <div>
            <Head title="Products" />
            <Container>
                <Header
                    title="Our Product"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium quam sint repudiandae aliquam rerum nisi eum repellendus minima optio, delectus expedita enim tempore. Aliquam omnis eligendi velit laboriosam suscipit."
                />
                {products.length ? (
                    <div className="bg-white">
                        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 md:px-0 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Products
                            </h2>
                            <div className="grid grid-cols-2 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                                {products.map((product) => (
                                    <ProductItem
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </div>
                            <Pagination meta={meta} links={links} />
                        </div>
                    </div>
                ) : null}
                
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page}></App>;
