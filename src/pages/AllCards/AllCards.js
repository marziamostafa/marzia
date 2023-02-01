import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const AllCards = () => {
    const allData = useLoaderData();

    const { id } = allData

    return (
        <div className='px-10 '>
            {
                allData.map(data => <Card
                    key={id}
                ></Card>)
            }
        </div>
    );
};

export default AllCards;