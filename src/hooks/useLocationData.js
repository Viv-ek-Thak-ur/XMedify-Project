import { useState, useEffect} from "react";

export default function useLocationData(){
    const [states , setStates] = useState([]);
    const [selectedState , setSelectedState] = useState("");
    const [cities , setCities] = useState([]);
    const [selectedCity , setSelectedCity] = useState("");
    const [loading, setLoading] = useState(true);

    //fetch states on first render/load

    useEffect(() => {
        const fetchStates = async () => {
            try{
                const result = await fetch("https://meddata-backend.onrender.com/states");
                const data = await result.json();
                setStates(data);
            } catch (err) {
        console.error("Error fetching states:", err);
      } finally {
        setLoading(false);
      }
        };
        fetchStates();
    }
    ,[]);


    //fetch cities when state selected

    useEffect(()=>{
        if (!selectedState) return;

        const fetchCities = async () => {
            try{
                const result = await fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
                const data = await result.json();
                setCities(data);
      } catch (err) {
        console.error("Error fetching cities:", err);
      }
        };
        fetchCities();
    },[selectedState]);

   

     return {
    states,
    selectedState,
    setSelectedState,
    cities,
    selectedCity,
    setSelectedCity,
    loading
  };
}