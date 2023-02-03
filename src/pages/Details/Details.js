import React from 'react';
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Details = () => {

    const allInfo = useLoaderData()

    const { id, name, company, address } = allInfo
    console.log(allInfo)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl my-6 pr-4">
                <div className='flex items-center'>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <div className='lg:w-8'>
                                <p className='font-semibold'>{company.name}</p>
                            </div>
                            <div className='lg:w-9'>
                                <p>Contact:</p>
                                <p>{name}</p>
                            </div>
                            <div className='lg:w-8 hidden lg:block'>
                                <p>Street:</p>
                                <p>{address.street}</p>
                            </div>
                            <div className='lg:w-8'>
                                <p>City:</p>
                                <p>{address.city}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end lg:ml-12">
                        <button className="btn btn-primary"><Link to='/'>Hide Details</Link></button>
                    </div>

                </div>
            </div>

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>

        </div>
    );
};

{/* <button><Link to='/'>Hide Details</Link></button> */ }
export default Details;