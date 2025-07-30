import type { productType } from "./api/productTypes";
import { useFetchProducts } from "./api/useProductsQueries";
import ProductItem from "./product-item";


function ProductsPage() {




    const { isLoading, data, isError } = useFetchProducts()

    return (
        <div className="p-4">
            {isLoading && <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1>loading products...</h1>
            </div>}
            {isError && <div className="flex items-center justify-center h-screen bg-gray-100">
                <h1>There is an error getting products details</h1>
            </div>}

            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">

                {data && data.products.map((e: productType) => (
                    <ProductItem e={e} key={e.id} />
                ))}
            </div>

        </div>
    )
}

export default ProductsPage
