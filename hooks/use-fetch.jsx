import {useState} from 'react'
import { toast } from 'sonner';

    const usefetch = (cb) =>{
        const [data,setData] = useState(undefined);
        const [loading,setloading] = useState(null);
        const [error,SetError] = useState(null);

        const fn=async()=>{
            setloading(true);
            SetError(null);

            try {
                const response = await cb (...args);
                setData(response);
                SetError(null);

            } catch (error) {
                SetError(error);
                toast.error(error.message);
            }finally{
                setloading(false);
            }
        };
        return (data,loading,error,fn,setData);
    }

    export default usefetch;
