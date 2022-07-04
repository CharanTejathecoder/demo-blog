import {useEffect,useState} from 'react';

function useFetch (url){

    const [data,setData]=useState(null);
   const [isPending,setIsPending]=useState(true);
   const [error,setError]=useState(null);

    useEffect(
        function(){

                
            fetch(url)
            .then(function(res){
                if (!res.ok){
                    throw Error("cannot fetch any data");
                }
                return res.json();
            })
            .then(function(data1){
                   setError(null);
                    setData(data1);
                    setIsPending(false);
                    
                
            })
            .catch(function(error){
                setError(error.message);
                setIsPending(false);

            });   
        },[]
   )
   return {data,isPending,error};
}
export default useFetch;