import axios from "axios";
const Api = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const FetchData = async (props) => {


    const contryName= props == undefined? "Canadian":props; 
    const MyApi = Api + contryName; 
    try {
        const response = await axios.get(MyApi);  
        return response.data.meals;  
    } catch (error) {
        return error;
    } 
};

const getSearchApiData =async (searchText)=>{
    const searchApi =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    try {
        const response = await axios(searchApi);  
        return response.data.meals?response.data.meals:[]; 
    } catch (error) {
        
    }
    return []; 
}

const getMealDetails = async (id)=>{ 
    const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`; 
    try {
        const response = await axios(api);
        if(response.status==200){
            return response.data.meals;
        } 
        return []; 
        
    } catch (error) {
        return error;
    }
}

export {FetchData , getSearchApiData ,getMealDetails};
