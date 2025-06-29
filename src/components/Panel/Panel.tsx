import axios from "axios";
import { useEffect, useState } from "react";
import CustomCursor from "../CustomCursor/CustomCursor";
interface IData{
    name:string;
    email:string;
    message:string;
}
const Panel = () => {
    const [data,setData]=useState<IData[]>([]);
    useEffect(()=>{
        axios('https://portfolio.sarirniroo.ir/apis/api.php').then((result)=>setData(result.data));
    },[])
    return ( 
        <div className="bg-gray-900  text-white h-screen">
            <CustomCursor/>
        <div className="w-[80%] mx-auto p-6">
            <p className="text-2xl font-semibold">لیست پیام ها</p>
            {
                data.map((item,index)=>{
                    return <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg mt-5">
                        <p>نام : {item.name}</p>
                        <p>ایمیل : {item.email}</p>
                        <p>پیام : {item.message}</p>
                    </div>
                })
            }
        </div>
        </div>
     );
}
 
export default Panel;