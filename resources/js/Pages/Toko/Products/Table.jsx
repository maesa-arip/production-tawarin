import React, { useState, useEffect, useCallback } from 'react';
import { Link } from '@inertiajs/inertia-react';
import Pagination from '@/Components/Pagination';
import { debounce, pickBy } from 'lodash';
import { Inertia } from '@inertiajs/inertia';
import Filter from '@/Components/Filter';
import { Menu } from '@headlessui/react';
import App from '@/Layouts/App';
import Container from '@/Components/Container';
import clsx from 'clsx';
const menus = [
    { label: 'latest', value: 'latest' },
    { label: 'oldest', value: 'oldest' },
];


export default function Index(props) {
    const { filter, categories} = props;
    const { data: products, meta } = props.products;
    const [keyword, setKeyword] = useState(filter.search);


    const reload =  useCallback(
        debounce((q) => {
            Inertia.get('/toko/products/table', {...pickBy({ search: q, page: filter.page, filtered: filter.filtered, category: filter.category })}, { preserveState: true });
        }, 500),
      [],
    )

useEffect(() => reload(keyword), [keyword]);
    return (
        <Container>
        <div className="space-y-4">
            <div className="flex flex-col w-full gap-2 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                    <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center justify-between w-full px-4 py-2 capitalize bg-white rounded-lg shadow focus:outline-none lg:w-52">
                            {filter.filtered == 'popular-this-week' ? 'Popular This Week' : filter.filtered == 'no-replies' ? 'No Replies' : !filter.filtered ? 'Filter' : filter.filtered}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute mt-1 w-52 z-50 bg-white shadow rounded-lg overflow-hidden py-0.5">
                            {menus.map((menu, key) => {
                                return menu.label == 'line' ? <div key={key} className="h-px bg-gray-200 my-0.5 w-full" /> :
                                    <Menu.Item key={key}>
                                        <Link
                                            preserveState
                                            className={`block px-4 py-2 hover:bg-gray-100 font-medium capitalize text-sm`}
                                            href={`/toko/products/table?filtered=${menu.value}`}
                                        >
                                            {menu.label}
                                        </Link>
                                    </Menu.Item>
                            })}
                        </Menu.Items>
                    </Menu>
                    <Filter categories={categories} initialState={filter.category} />
                </div>
                <div className="flex items-center px-2 overflow-hidden bg-white rounded-lg shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="h-10 p-0 border-0 focus:outline-none focus:ring-transparent focus:border-transparent" type="text" placeholder="Search..." name="search" id="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </div>
            {products.length ? products.map(product => (
                <div className="flex p-4 bg-white rounded-lg shadow gap-x-4" key={product.id}>
                    <div className="flex-shrink-0">
                        <img className="w-10 h-10 rounded-full" src={product.picture} alt={product.name} />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <Link href={route('products.show', product.slug)}>
                                <h1>{product.name}</h1>
                            </Link>

                        </div>
                        <div className="mb-3 text-sm leading-relaxed text-gray-500">
                            {product.teaser}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm gap-x-4">
                                {/* <div className="font-semibold text-blue-500">{product.user.name}</div> */}
                                <Link href={`/toko/products/table?category=${product.category.slug}`} className="hidden text-sm font-semibold text-gray-500 md:block">{product.category.name}</Link>
                                <span className="hidden text-gray-500 md:block">{product.created_at}</span>
                            </div>
                            <div className="flex items-center text-sm gap-x-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-1">{product.likes_count}</span>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span className="ml-1">{product.replies_count}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )) :
                <div className="p-10 text-center text-gray-800 bg-white border border-dashed rounded-2xl">
                    No products.
                </div>
            }
            <Pagination meta={meta} />
            {/* <ul className="flex items-center mt-10 gap-x-1">
                        {meta.links.map((item, index) => (
                            <button
                                key={index}
                                disabled={item.url == null ? true : false}
                                className={`${
                                    item.url == null
                                        ? "text-gray-500"
                                        : "text-gray-800"
                                } w-12 h-9 rounded-lg flex items-center justify-center border bg-white`}
                                onClick={() =>
                                    setKeyword({
                                        ...keyword,
                                        page: new URL(
                                            item.url
                                        ).searchKeyword.get("page"),
                                    })
                                }
                            >
                                {item.label}
                            </button>
                            
                        ))}
                    </ul> */}
        </div>
        </Container>
    );
}
Index.layout = (page) => <App children={page} />;
// Index.layout = page => <Forum children={page} title="products" />;
