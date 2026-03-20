import { useEffect, useState } from "react";
import { toast } from "sonner";


const useErrors = (errors = [])=>{
    useEffect(()=>{
        errors.forEach(({isError, error, fallback})=>{
            if(isError){
                if(fallback){
                    fallback();
                }
                else{
                    toast.error(error?.data?.message || "Error in fetching conversations");
                }
            }
        })
    },[])
}


const useAsyncMutation = (mutationHook)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const [mutate] = mutationHook();

    const executeMutation = async (toastMessage, ...args)=>{
        setIsLoading(true);

        try {
            
            const res = await mutate(...args);
            
            if(res.data){
                setData(res.data);
            }
           else if (res.error) {
            toast.error(res.error.data?.message || "Something went wrong");
            }
            return res;
        } catch (error) {
            console.log(error);
            toast.error(error?.data?.message || error?.message ||"Something went wrong")
        }
        finally{
            setIsLoading(false);
        }
    }
    return [executeMutation, isLoading ,data]
}


export {useErrors, useAsyncMutation};