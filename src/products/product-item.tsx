import type { productType } from "./api/productTypes";

export default function ProductItem({ e }: { e: productType }) {

    return <div  key={e.id} className=" flex flex-col w-full bg-cyan-50 items-center justify-center p-3 rounded-lg text-center gap-4 shadow-md hover:shadow-lg transition-shadow duration-300">

        <h1 className="text-xl font-semibold" >{e.title}</h1>

        <p className=" text-base text-center  " >{e.description}</p>

        <h1>Category : {e.category}</h1>

        <h1>Price : {e.price.toString()} </h1>
    </div>
}