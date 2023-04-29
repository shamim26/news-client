import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://dragon-news-server-sigma-nine.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h5>All Category</h5>
            <div className='ms-3 my-4'>
                {
                    categories.map(category =>
                    <p key={category.id}> 
                        <Link className='text-secondary text-decoration-none fs-5 fw-semibold' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;