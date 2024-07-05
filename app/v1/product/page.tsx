import React from 'react';

const ProductTable: React.FC = () => {
  const products = [
    {
      id: 1,
      image: 'path/to/image1.png',
      name: 'Product 1',
      sku: '01279005',
      qty: 6,
      price: 19.00,
      rating: 3.5,
      status: 'Published'
    },
    {
      id: 2,
      image: 'path/to/image2.png',
      name: 'Product 2',
      sku: '02638005',
      qty: 40,
      price: 29.00,
      rating: 5,
      status: 'Scheduled'
    },
    {
      id: 3,
      image: 'path/to/image3.png',
      name: 'Product 3',
      sku: '01895005',
      qty: 36,
      price: 46.00,
      rating: 5,
      status: 'Scheduled'
    }
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          className="border rounded px-2 py-1"
        />
        <select className="border rounded px-2 py-1">
          <option value="Published">Published</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Draft">Draft</option>
        </select>
        <button className="bg-blue-500 text-white rounded px-4 py-2">
          Add Product
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b">PRODUCT</th>
            <th className="py-2 px-4 border-b">SKU</th>
            <th className="py-2 px-4 border-b">QTY</th>
            <th className="py-2 px-4 border-b">PRICE</th>
            <th className="py-2 px-4 border-b">RATING</th>
            <th className="py-2 px-4 border-b">STATUS</th>
            <th className="py-2 px-4 border-b">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b flex items-center">
                <img src={product.image} alt={product.name} className="w-12 h-12 mr-2" />
                {product.name}
              </td>
              <td className="py-2 px-4 border-b">{product.sku}</td>
              <td className="py-2 px-4 border-b">
                {product.qty <= 10 ? <span className="text-yellow-500">Low stock</span> : null}
                {product.qty}
              </td>
              <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </td>
              <td className="py-2 px-4 border-b">
                <span className={`px-2 py-1 rounded ${product.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {product.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="relative inline-block text-left">
                  <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Actions
                  </button>
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
