import { useParams } from "react-router"
import { useFetchProductsbyId } from "./api/useProductsQueries";
import type { review } from "./api/productTypes";

export default function ProductPage() {
    const param = useParams();
    console.log(param.productId);

    const { isLoading, data, isError } = useFetchProductsbyId(param.productId!);
    console.log(data);

    return (
        <>
            {isLoading && (
                <h1 className="flex h-screen justify-center items-center">
                    Loading product details...
                </h1>
            )}
            {isError && <h1>There is an error getting product details</h1>}

            {data && (
                <div className="flex h-screen flex-col items-center justify-center gap-4 bg-cyan-50 lg:w-[50%] mx-auto p-4">
                    <div className="w-full flex flex-col">
                        <div className="flex gap-2 overflow-x-auto py-2 px-1 mx-auto">
                            {data.images.map((e: string, idx: number) => (
                                <div
                                    key={idx}
                                    className=" w-[150px] h-[150px] bg-white rounded-md shadow-sm flex items-center justify-center"
                                >
                                    <img
                                        className="max-h-full max-w-full object-contain"
                                        src={e}
                                        alt={`product image ${idx + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2 p-4">
                            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                            <p className="text-gray-700 mb-4">{data.description}</p>
                        </div>
                     
                    </div>

                    <div className=" flex flex-col items-start self-start justify-start">
                        <h1 className="text-3xl font-bold  " >Reviews</h1>
                        {data.reviews.map((e: review, id: number) => (
                            <div key={id} className="flex flex-col gap-1 my-3">
                                <h1 className="text-lg font-semibold">{e.reviewerName}</h1>
                                <p className="text-sm">{e.comment}</p>
                                <span className="text-xs text-gray-500">
                                    {new Date(e.date).toLocaleDateString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );

}