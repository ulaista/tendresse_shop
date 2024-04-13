import React from "react";
import PageHeader from "../components/ProductPageComponents/PageHeader";
import ReviewSelf from "../components/ProductPageComponents/Review";
import ProductList from "../components/ProductPageComponents/Product";
import ProductDetails from "../components/ProductPageComponents/Descrip";


import foto_1 from '../img/7.webp'
const ProductPage = () => {
    const productExample = {
        name: 'Пижама',
        sku: '17157857510',
        manufacturer: 'Agent Provocateur',
        manufacturerLink: '/rus/shop/filters/brand/brand-4/',
        isAvailable: false,
        colors: ['#000000', '#fffdf6'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        description:
          'Изысканный комплект Hypnose из нежного итальянского атласа — топ+шортики. Великолепный вариант для дома и для роскошного отдыха.',
      };

    return (
        <div className="pt-44">
        <PageHeader/>
        <div className="grid grid-cols-1 md:grid-cols-2 h-max">
            <div className="flex justify-end ">
                <div className="m-5 w-full md:w-8/12 h-max sticky top-4">
                    <img className="w-full object-cover" src={foto_1} alt="Product_ebalo" />
                </div>
            </div>
            <div className="border-b border-gray-400 mx-4  h-screen">
               <ProductDetails product={productExample} />
            </div>
        </div>
        <ReviewSelf/>
        <ProductList/>
        </div>
    );
} 
export default ProductPage;