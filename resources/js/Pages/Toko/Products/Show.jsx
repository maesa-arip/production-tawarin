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
                
            </Container>

<div className="bg-white">
  <div className="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div className="flex items-center">
            <a href="#" className="mr-2 text-sm font-medium text-gray-900">Product</a>
            <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <a href="#" className="mr-2 text-sm font-medium text-gray-900">Category</a>
            <svg width={16} height={20} viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li className="text-sm">
        <Link
                                className="inline-flex px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded"
                                href={`/toko/products?category=${product.category.slug}`}
                            >
                                {product.category.name}
                            </Link>
        </li>
      </ol>
    </nav>
    {/* Image gallery */}
    <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="hidden overflow-hidden rounded-lg aspect-w-3 aspect-h-4 lg:block">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="object-cover object-center w-full h-full" />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="object-cover object-center w-full h-full" />
        </div>
        <div className="overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="object-cover object-center w-full h-full" />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="object-cover object-center w-full h-full" />
      </div>
    </div>
    {/* Product info */}
    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
      </div>
      {/* Options */}
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        {/* <div className="text-4xl font-semibold"><sup>Rp </sup>{numberFormat(product.price)}</div> */}
        <p className="text-3xl tracking-tight text-gray-900"><sup>Rp </sup>{numberFormat(product.price)}</p>
        {/* Reviews */}
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {/*
          Heroicon name: mini/star

          Active: "text-gray-900", Default: "text-gray-200"
        */}
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              {/* Heroicon name: mini/star */}
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              {/* Heroicon name: mini/star */}
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              {/* Heroicon name: mini/star */}
              <svg className="flex-shrink-0 w-5 h-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
              {/* Heroicon name: mini/star */}
              <svg className="flex-shrink-0 w-5 h-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="sr-only">4 out of 5 stars</p>
            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
          </div>
        </div>
          {/* Colors */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <fieldset className="mt-4">
              <legend className="sr-only">Choose a color</legend>
              <div className="flex items-center space-x-3">
                {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" defaultValue="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                  <span id="color-choice-0-label" className="sr-only"> White </span>
                  <span aria-hidden="true" className="w-8 h-8 bg-white border border-black rounded-full border-opacity-10" />
                </label>
                {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" defaultValue="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                  <span id="color-choice-1-label" className="sr-only"> Gray </span>
                  <span aria-hidden="true" className="w-8 h-8 bg-gray-200 border border-black rounded-full border-opacity-10" />
                </label>
                {/*
            Active and Checked: "ring ring-offset-1"
            Not Active and Checked: "ring-2"
          */}
                <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                  <input type="radio" name="color-choice" defaultValue="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                  <span id="color-choice-2-label" className="sr-only"> Black </span>
                  <span aria-hidden="true" className="w-8 h-8 bg-gray-900 border border-black rounded-full border-opacity-10" />
                </label>
              </div>
            </fieldset>
          </div>
          {/* Sizes */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>
            <fieldset className="mt-4">
              <legend className="sr-only">Choose a size</legend>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-200 uppercase border rounded-md cursor-not-allowed group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50">
                  <input type="radio" name="size-choice" defaultValue="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label" />
                  <span id="size-choice-0-label">XXS</span>
                  <span aria-hidden="true" className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px">
                    <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                  <span id="size-choice-1-label">XS</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                  <span id="size-choice-2-label">S</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                  <span id="size-choice-3-label">M</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                  <span id="size-choice-4-label">L</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                  <span id="size-choice-5-label">XL</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="2XL" className="sr-only" aria-labelledby="size-choice-6-label" />
                  <span id="size-choice-6-label">2XL</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" defaultValue="3XL" className="sr-only" aria-labelledby="size-choice-7-label" />
                  <span id="size-choice-7-label">3XL</span>
                  {/*
              Active: "border", Not Active: "border-2"
              Checked: "border-indigo-500", Not Checked: "border-transparent"
            */}
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true" />
                </label>
              </div>
            </fieldset>
          </div>
          <div className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium ">
          <Button onClick={addToCartHandler}>Add to cart</Button>
          </div>
          
          
      </div>
      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        {/* Description and details */}
        <div>
          <h3 className="sr-only">Description</h3>
          <div className="space-y-6">
            <p className="text-base text-gray-900">{product.description}</p>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
          <div className="mt-4">
            <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
              <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Details</h2>
          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

Show.layout = (page) => <App children={page}></App>;
