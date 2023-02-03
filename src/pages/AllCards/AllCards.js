import React, { useEffect, useState } from 'react';
import './AllCards.css'

import Card from '../Card/Card';

const AllCards = () => {

    const [allData, setAllData] = useState([])
    const [count, setCount] = useState(0);

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(4);
    const pages = Math.ceil(10 / size);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    // const limitData = allData.skip(page * size).limit(size).toArray()
    const limitData = allData.slice(count * size, page * size)



    // console.log(page)
    // console.log(size)
    // console.log(limitData)


    return (
        <div className='lg:px-10 bg-slate-100'>
            {
                limitData?.map(data => <Card
                    key={data.id}
                    data={data}


                ></Card>)
            }

            <div className="btn-group flex justify-center pagination ">
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}

                        onClick={() => { setPage(number + 1); setCount(number) }}
                        className={page === number + 1 ? "btn btn-primary" : "btn"}>{number + 1}</button>)

                }

            </div>
        </div >
    );
};

export default AllCards;