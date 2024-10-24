import { useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GetAPICustomHook = (url:string) =>{

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProducts();
    },[])

const getProducts = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      await AsyncStorage.setItem('apiData', JSON.stringify(json));
      setData(json);
      console.log("Fetched From API: ",json)
    } catch (error) {
      console.error(error);
      const storedData = await AsyncStorage.getItem('apiData');
      if (storedData) {
        setData(JSON.parse(storedData));
        console.log("Stored in AsyncStorage: ", storedData)
      }
      // else{
      //   const response = await fetch(url);
      //   const json = await response.json();
      //   await AsyncStorage.setItem('apiData', JSON.stringify(json));
      //   setData(json);
      //   console.log("Fetched From API: ", json)
      // }
      
    
    } finally {
       setLoading(false);
    }
  };

  return {data}

}

export default GetAPICustomHook