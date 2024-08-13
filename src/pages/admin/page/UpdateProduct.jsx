// import React, { useContext } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import myContext from '../../../context/data/myContext';

// // Example URL for background image
// const backgroundImageUrl = 'https://img.freepik.com/free-photo/smartphone-with-headphones_23-2147735024.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user';

// function UpdateProduct() {
//     const context = useContext(myContext);
//     const { products, setProducts, updateProduct } = context;

//     const goBack = () => {
//         window.history.back(); // Navigate back
//     };

//     return (
//         <div className='flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//             <div className='bg-gray-800 px-10 py-10 rounded-xl w-full max-w-md relative'>
//                 <FaTimes className='text-white cursor-pointer text-3xl absolute top-4 right-4' onClick={goBack} />
//                 <div>
//                     <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         value={products.title}
//                         onChange={(e) => setProducts({ ...products, title: e.target.value })}
//                         name='title'
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product title'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         value={products.price}
//                         onChange={(e) => setProducts({ ...products, price: e.target.value })}
//                         name='price'
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product price'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         value={products.salePrice}
//                         onChange={(e) => setProducts({ ...products, salePrice: e.target.value })}
//                         name='salePrice'
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product sale price'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         value={products.brandName}
//                         onChange={(e) => setProducts({ ...products, brandName: e.target.value })}
//                         name='brandName'
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product brand name'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         value={products.imageUrl}
//                         onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}
//                         name='imageurl'
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product imageUrl'
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type='text'
//                         value={products.category}
//                         onChange={(e) => setProducts({ ...products, category: e.target.value })}
//                         name='category'
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product category'
//                     />
//                 </div>
//                 <div>
//                     <textarea
//                         cols='30'
//                         rows='10'
//                         name='description'
//                         value={products.description}
//                         onChange={(e) => setProducts({ ...products, description: e.target.value })}
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
//                         placeholder='Product description'
//                     ></textarea>
//                 </div>
//                 <div>
//                     <select
//                         name='stockStatus'
//                         value={products.stockStatus}
//                         onChange={(e) => setProducts({ ...products, stockStatus: e.target.value })}
//                         className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none'
//                     >
//                         <option value='' disabled>
//                             Select Stock Status
//                         </option>
//                         <option value='In Stock'>In Stock</option>
//                         <option value='Out of Stock'>Out of Stock</option>
//                     </select>
//                 </div>
//                 <div className='flex justify-center mb-3'>
//                     <button
//                         onClick={updateProduct}
//                         className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'
//                     >
//                         Update Product
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UpdateProduct;
import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';

const backgroundImageUrl =
  'https://img.freepik.com/free-photo/smartphone-with-headphones_23-2147735024.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user';

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct } = context;

  const [error, setError] = useState(null);

  const goBack = () => {
    window.history.back();
  };

  const handleUpdateProduct = () => {
    if (!products.title || !products.price || !products.category || !products.stockStatus) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      updateProduct();
      setError(null);
    } catch (e) {
      setError("Failed to update product. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-gray-800 px-6 py-6 md:px-10 md:py-10 rounded-xl w-full max-w-md relative">
        <FaTimes
          className="text-white cursor-pointer text-3xl absolute top-4 right-4"
          onClick={goBack}
        />
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Update Product
          </h1>
        </div>
        
        {error && (
          <div className="bg-red-500 text-white text-center mb-4 p-2 rounded">
            {error}
          </div>
        )}

        <div>
          <input
            type="text"
            value={products.title || ''}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
            name="title"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product title"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.price || ''}
            onChange={(e) =>
              setProducts({ ...products, price: e.target.value })
            }
            name="price"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product price"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.salePrice || ''}
            onChange={(e) =>
              setProducts({ ...products, salePrice: e.target.value })
            }
            name="salePrice"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product sale price"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.brandName || ''}
            onChange={(e) =>
              setProducts({ ...products, brandName: e.target.value })
            }
            name="brandName"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product brand name"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.imageUrl || ''}
            onChange={(e) =>
              setProducts({ ...products, imageUrl: e.target.value })
            }
            name="imageurl"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product image URL"
          />
        </div>
        <div>
          <input
            type="text"
            value={products.category || ''}
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
            name="category"
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product category"
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            name="description"
            value={products.description || ''}
            onChange={(e) =>
              setProducts({ ...products, description: e.target.value })
            }
            className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product description"
          ></textarea>
        </div>
        <div>
        <select
  name="stockStatus"
  value={products.stockStatus}
  onChange={(e) =>
    setProducts({ ...products, stockStatus: e.target.value })
  }
  className="bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white outline-none"
>
  <option value="">Select Stock Status</option>
  <option value="In Stock">In Stock</option>
  <option value="Out of Stock">Out of Stock</option>
</select>

        </div>
        <div className="flex justify-center mb-3">
          <button
            onClick={handleUpdateProduct}
            className="bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
