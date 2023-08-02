import React, { useEffect, useRef, useState } from 'react';

const FComp = () =>{
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const titleRef = useRef();
    const brandRef = useRef();
    const priceRef = useRef()

    const getDataProduct = async (val) =>{
        try{
            setLoading(true)
            const keyword = val ?  `/search?q=${val}` : '';
            const res = await fetch(`https://dummyjson.com/products${keyword}`);
            const resJson = await res.json();
            setProducts(resJson.products)
            setLoading(false)
        }
        catch(err){
            console.error(err)
        }
        
    }
    useEffect(()=>{
        getDataProduct()
    },[])


    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value)
    }

    const handleClickSearch = () => {
        getDataProduct(search);
        
    }

    const ListData = () => {
         if(loading) return <p>Loading...</p>

        if(!loading && products.length===0) return <p>Data not found!</p>

        return (
            <>
                {products.map((val, i)=>
                    <div key={i} style={{border:'1px solid black', marginBottom:'1rem', padding:'0.5rem'}}>
                              <p>Title : {val.title}</p>
                        <p>Brand : {val.brand}</p>
                        <p>Price : {val.price}</p>
                    </div>
                )}
            </>
        )
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        const title = titleRef.current.value;
        const brand = brandRef.current.value;
        const price = priceRef.current.value;

       const datas = {
        title:title,
        brand:brand,
        price:price,
       }

       createPost(datas)
    }
        
    const createPost = async (data) => {
        try{
            const requestOptions ={
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body:JSON.stringify(data)
            }
            const res = await fetch(`https://dummyjson.com/products/add`, requestOptions);
            const resJson = await res.json()
            if(resJson){
                getDataProduct('')
            }
        }
        catch(error){
            console.error(error)
        }
        
    }
       
    return(
        <div style={{width:'500px', margin:'0 auto'}}>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div style={{display:'flex', flexWrap:'wrap', margin:'20px 0'}}>
                        <label htmlFor='title' style={{marginRight:'10px', width:'3rem'}}>Title</label>
                        <input type='text' id='title' name='title' ref={titleRef} />
                    </div>
                    <div style={{display:'flex', flexWrap:'wrap', margin:'20px 0'}}>
                        <label htmlFor='brand' style={{marginRight:'10px', width:'3rem'}}>Brand</label>
                        <input type='text' id='brand' name='brand' ref={brandRef} />
                    </div>
                    <div style={{display:'flex', flexWrap:'wrap', margin:'20px 0'}}>
                        <label htmlFor='price' style={{marginRight:'10px', width:'3rem'}}>Price</label>
                        <input type='text' id='price' name='price' ref={priceRef} />
                    </div>
                    <button type='submit' style={{marginTop:'1rem', marginLeft:'3.6rem'}}>Submit</button>
                </form>
            </div>
            <hr />
            <div style={{marginTop:'2rem'}}>
                <input type='text' value={search} style={{marginRight:'0.5rem', padding:'10px'}} onChange={(e) => handleSearch(e)} />
                <button style={{padding:'10px', cursor:'pointer'}} onClick={handleClickSearch}>Search</button>
            </div>
            <br />
            <br />
            <ListData />
        </div>
    )
}

export default FComp;