import React, { useEffect, useState } from 'react';
import './AllCards.css'

import Card from '../Card/Card';

const AllCards = () => {

    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    const count = 10;
    const perPage = 4;

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);
    const pages = Math.ceil(count / size);


    return (
        <div className='px-10 '>
            {
                allData?.map(data => <Card
                    key={data.id}
                    allData={data}
                ></Card>)
            }

            <div className="btn-group flex justify-center pagination">
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}

                        onClick={() => setPage(number + 1)}
                        className="btn">{number + 1}</button>)

                }

            </div>
        </div >
    );
};

export default AllCards;