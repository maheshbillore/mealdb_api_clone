import React, { useState, useEffect } from 'react'
import { movicesList } from './Data'
import MobicesBox from './MobicesBox';

const Movices = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [displayProduct, getDisplayProduct] = useState([]);
    const [counter , setCounter] = useState(0);

    useEffect(() => {
        document.title =`This is Title `; 
     }, [displayProduct])

     useEffect(() => { 
        document.title =`This is Title `; 
     }, [movies])

    const fetchProducts = async () => {
        try {
            const data = await movicesList(); 
            setMovies(data);
            getDisplayProduct(data);   
        } catch (err) {
            setError("Failed to fetch movies");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { 
        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    const styleObj = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        margin: 'auto',
        with: '1370px'
    }

   
    

    const onButtonClickHandler = (props) => {
        props == 'All' ? getDisplayProduct(movies) : getDisplayProduct(movies.filter((data) => data.category == props.toLowerCase()));
    }

    return (
        <div className='my-3' >
            <div className='mx-auto text-center' >
                <button type="button" onClick={() => { onButtonClickHandler('All') }} className="btn btn-outline-primary mx-3">All</button>
                <button type="button" onClick={() => { onButtonClickHandler('Beauty') }} className="btn btn-outline-secondary mx-3">Beauty</button>
                <button type="button" onClick={() => { onButtonClickHandler('Fragrances') }} className="btn btn-outline-success mx-3">Fragrances</button>
                <button type="button" onClick={() => { onButtonClickHandler('Furniture') }} className="btn btn-outline-danger mx-3">Furniture</button>
                <button type="button" onClick={() => { onButtonClickHandler('Groceries') }} className="btn btn-outline-warning mx-3">Groceries </button>
                <button type="button" onClick={() => { onButtonClickHandler('Info') }} className="btn btn-outline-info mx-3">Info</button>
                <button type="button" onClick={() => { onButtonClickHandler('Light') }} className="btn btn-outline-light mx-3">Light</button>
            </div>

            <div style={styleObj} >
                {displayProduct.map((movice) => (
                    <MobicesBox key={movice.id} props={movice} />
                ))}

                {   }
            </div>
        </div>
    )
}

export default Movices