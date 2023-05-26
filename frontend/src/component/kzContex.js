import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const Contex = createContext(null);

const Provider = ({children})=>{
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [banner, setBanner] = useState([]);
    const [service, setService] = useState([]);

    const getDataProduct = async () => {
        const response = await axios.get('https://kozshop.raxelf.repl.co/product');
        setProduct(response.data);
    }
    const getDataCategory = async () => {
        const response = await axios.get('https://kozshop.raxelf.repl.co/category');
        setCategory(response.data);
    }
    const getDataBanner = async () => {
        const response = await axios.get('https://kozshop.raxelf.repl.co/banner');
        setBanner(response.data);
    }
    const getDataService = async () => {
        const response = await axios.get('https://kozshop.raxelf.repl.co/service');
        setService(response.data);
    }

    useEffect(() => {
        getDataProduct();
        getDataCategory();
        getDataBanner();
        getDataService();
    },[])

    return (
        <Contex.Provider value={{product, category, banner, service}}>
            {children}
        </Contex.Provider>
    )
}

export {Contex, Provider}