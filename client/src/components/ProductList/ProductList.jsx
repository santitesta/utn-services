/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const ruta = '/Fotos';

const products = [
  {
    id_UTN: 1,
    instituto: 'I.N.E.I',
    departamento: 'Bacteriología',
    servicio: 'Clínica',
    equipo: 'Centrífuga Refrigerada',
    marca: 'Arctiko',
    modelo: 'SC-3610',
    estado: '-',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    href: '#',
  },
]

export default function Example() {

  return (
    <div className="bg-white">
        <div className="px-5 mt-6 grid grid-cols-1 gap-y-10 gap-x-20 xl:gap-x-5 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-7 ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-slate-300 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:w-40 lg:h-80 lg:aspect-auto">
                <img
                  src={product.imageSrc}
                  alt={product.estado}
                  className="px-2 mt-2 w-full h-full object-center object-cover lg:w-40 lg:h-40"
                />
                  <p className="ml-2 mt-1 text-sm text-slate-800">{product.instituto}</p>
                  <p className="ml-2 mt-1 text-sm text-slate-600">{product.departamento}</p>
                  <p className="ml-2 mt-1 text-sm text-slate-800">{product.servicio}</p>
                  <p className="ml-2 mt-1 text-sm text-slate-600">{product.equipo}</p>
                  <p className="ml-2 mt-1 text-sm text-slate-800">{product.marca}</p>
                  <p className="ml-2 mt-1 text-sm text-slate-600">{product.modelo}</p>
                  <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                  </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
