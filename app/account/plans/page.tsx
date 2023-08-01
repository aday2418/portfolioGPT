import Pricing from "@/components/Pricing";
import PageInfo from "../PageInfo";

export default function Page(){
    return(
        <PageInfo title="Plans"> 
            <div className="relative w-full flex py-[90px] justify-center">
                <Pricing/>
            </div>  
        </PageInfo>
    )
}