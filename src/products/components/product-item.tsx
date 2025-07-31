import { Link } from "react-router";
import type { productType } from "../api/productTypes";

export default function ProductItem({ e }: { e: productType }) {

    const truncateText = (text: String, wordLimit = 10) => {
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    };

    return <Link to={`/product/${e.id}`} key={e.id} className=" flex flex-col w-full bg-cyan-50 items-center justify-around p-3 rounded-lg text-center gap-4 shadow-md hover:shadow-lg transition-shadow duration-300">


        <div className="flex h-min">
            <img className="w-min" src={e.images[0]} alt="" />

        </div>

        <h1 className="text-xl font-semibold text-center" >{e.title}</h1>

        <p className=" text-base text-center  overflow-ellipsis  " >  {truncateText(e.description)}
        </p>

        <div className="flex justify-between w-full items-center ">
            <h1 className="bg-teal-200 rounded-3xl p-2 " >$ {e.price.toString()} </h1>
            <h1 className="bg-teal-100 rounded-3xl p-2">{e.category}</h1>

        </div>


    </Link>
}