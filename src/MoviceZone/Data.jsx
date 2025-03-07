const movicesList=async()=>{
    const API = 'https://dummyjson.com/products';
    try {
        const response =await fetch(API);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();  
        return result.products;
    } catch (error) {  
        return [];
    }
}


export {movicesList}; 