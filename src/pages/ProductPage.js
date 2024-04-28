import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PageHeader from "../components/ProductPageComponents/PageHeader";
import ReviewSelf from "../components/ProductPageComponents/Review";
import ProductList from "../components/ProductPageComponents/Product";
import ProductDetails from "../components/ProductPageComponents/Descrip";
import { getProductIdByProductName } from "../utils/getProductIdByProductName"
import instanceApi from '../hooks/axiosConfig';
import { serverURL } from "../hooks/axiosConfig";




// const ProductPage = () => {
//     const { productName } = useParams();
//     const [productId, setProductId] = useState(null);

//     useEffect(() => {
//         console.log(`Product name from URL: ${productName}`); // Добавьте для проверки
//         if (productName) {
//           getProductIdByProductName(productName)
//             .then(id => {
//               setProductId(id);
//             })
//             .catch(error => {
//               console.error(error);
//             });
//         }
//     }, [productName]);

//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         if (productId) {
//           instanceApi.get(`/product_by_id/${productId}/`)
//             .then((response) => {
//               setProduct(response.data);
//             })
//             .catch((error) => {
//               console.error("Ошибка при загрузке информации о продукте:", error);
//             });
//         }
//     }, [productId]);
//     const imageUrl = product ? `${serverURL}${product.main_photo}` : "";
//     return (
//         <div className="pt-44">
//         {product ? (
//         <PageHeader product={product}/>
//         ) : (
//           <p>Loading product details...</p> 
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-2 h-max">
//             <div className="flex justify-end ">
//                 <div className="m-5 w-full md:w-8/12 h-max sticky top-4">
//                     <img className="w-full object-cover" src={imageUrl} alt="Product_ebalo" />
//                 </div>
//             </div>
//             <div className="border-b border-gray-400 mx-4">
//             {product ? (
//                 <ProductDetails product={product} />
//             ) : (
//                 <p>Loading product details...</p> // Заглушка или индикатор загрузки
//             )}
//             </div>
//         </div>
//         {/* <ReviewSelf/> */}
//         <ProductList product={product}/>
//         </div>
//     );
// } 
// export default ProductPage;


const ProductPage = () => {
  const { productName } = useParams();
  const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState(null);
  const [categoryId, setCategoryId] = useState(null); // State to hold category ID

  useEffect(() => {
      if (productName) {
          getProductIdByProductName(productName)
              .then(id => {
                  setProductId(id);
              })
              .catch(error => {
                  console.error(error);
              });
      }
  }, [productName]);

  useEffect(() => {
      if (productId) {
          instanceApi.get(`/product_by_id/${productId}/`)
              .then((response) => {
                  setProduct(response.data);
                  if(response.data.categories && response.data.categories.length > 0) {
                      setCategoryId(response.data.categories[0].id); 
                  }
              })
              .catch((error) => {
                  console.error("Ошибка при загрузке информации о продукте:", error);
              });
      }
  }, [productId]);

  const imageUrl = product ? `${serverURL}${product.main_photo}` : "";
  
  return (
      <div className="pt-44">
          {product ? (
              <PageHeader product={product}/>
          ) : (
              <p>Loading product details...</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 h-max">
              <div className="flex justify-end">
                  <div className="m-5 w-full md:w-8/12 h-max sticky top-4">
                      <img className="w-full object-cover" src={imageUrl} alt="Product" />
                  </div>
              </div>
              <div className="border-b border-gray-400 mx-4">
                  {product ? (
                      <ProductDetails product={product} />
                  ) : (
                      <p>Loading product details...</p>
                  )}
              </div>
          </div>
          <ProductList categoryId={categoryId}/>
      </div>
  );
};

export default ProductPage;