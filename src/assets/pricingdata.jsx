import React,{use} from "react";
import Pricingcard from "./pricingcard";

const Pdata  = ({pricingPromise})=>{
    
    const prData = use(pricingPromise);

    console.log(prData);
    return(
        <div>
            <h2 className="text-5xl text-center mt-40">Get Our MemberShip</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {
                    prData.map(pricing => <Pricingcard
                        key={pricing.id}
                        pricing={pricing}
                    >

                    </Pricingcard>)
                }
            </div>
        </div>
    )
};

export default Pdata;