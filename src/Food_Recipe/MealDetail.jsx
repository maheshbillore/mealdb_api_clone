import React, { useEffect, useState } from 'react'
import { FetchData, getSearchApiData } from './server';
import MealBox from './MealBox';
import './meal.css';

const MealDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const fetchMealProduct = async (props) => {
        try {
            const data = await FetchData(props); 
            setLoading(false);
            setData(data);
        } catch (err) {
            setError("Failed to fetch movies");
        } finally {
            setLoading(false);
        }
    };

    const getSearchData = async (searchValue) => {

        try {
            const result = await getSearchApiData(searchValue);
            setLoading(false);
            setData(result);
        } catch (error) {
            setError(error);
        }
    }


    useEffect(() => {
        fetchMealProduct();
    }, [])

    if (loading) {
        return <p>Food Product is Loading ...!</p>
    }

    if (error) {
        return <p>Something went wrong ...!</p>
    }

    const mealStyle = {
        display: 'flex',
        justifyContent: 'center',
        with: '1370px',
        flexWrap: 'wrap',
        textAlign: 'center',
        margin: 'auto',
        alignItems: 'center',
    }

    const onButtonClickHandler = (props) => {
        fetchMealProduct(props);
    }

    const onSubmithandler = (e) => {
        setLoading(true);
        e.preventDefault();
        getSearchData(searchValue)
    }

    const onInputHandler = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <>
            <div className='mx-auto text-center' >
                <button type="button" onClick={() => { onButtonClickHandler('All') }} className="btn btn-outline-primary mx-3">All</button>
                <button type="button" onClick={() => { onButtonClickHandler('Canadian') }} className="btn btn-outline-secondary mx-3">Canadian</button>
                <button type="button" onClick={() => { onButtonClickHandler('Indian') }} className="btn btn-outline-success mx-3">Indian</button>
                <button type="button" onClick={() => { onButtonClickHandler('american') }} className="btn btn-outline-danger mx-3">American</button>
                <button type="button" onClick={() => { onButtonClickHandler('thai') }} className="btn btn-outline-warning mx-3">Thai </button>
                <button type="button" onClick={() => { onButtonClickHandler('chinese') }} className="btn btn-outline-info mx-3">Chinese</button>
                <button type="button" onClick={() => { onButtonClickHandler('japanese') }} className="btn btn-outline-light mx-3">Japanese</button>
            </div>
            <form onSubmit={onSubmithandler} className='mx-auto text-center' >
                <input type={'text'} name={'searchValue'} className='searchInput' value={searchValue} onChange={onInputHandler} placeholder={'Search by Name'} />
            </form>
            <div style={mealStyle} >
                {
                    data.map((meal, index) => {
                        return <MealBox key={index} data={meal} />
                    })
                }
            </div>
        </>
    )
}

export default MealDetail