import React from "react";

const Pricingcard = ({pricing}) =>{
        console.log(pricing);
        return(
           <div className="">
             <div className="p-4 rounded-md min-w-[300px] h-[300px] bg-amber-500 text-black shadow flex flex-col justify-center">
                
                <div>
                    <h1 className="text-4xl font-bold">{pricing.name}</h1>
                    <p className="text-white text-xl font-bold bg-amber-600 rounded-md p-2 mt-2 ">{pricing.price} {pricing.currency}</p>
                </div>

                <div className="mt-3 ">
                    <p className="text-xl mt-2 font-semibold">{pricing.features[0]}</p>
                    <p className="text-xl mt-2 font-semibold">{pricing.features[1]}</p>
                    <p className="text-xl mt-2 font-semibold">{pricing.features[2]}</p>
                </div>
                
            </div>
           
           </div>
        )
};
 
export default Pricingcard;