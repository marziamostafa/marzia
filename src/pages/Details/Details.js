import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Details = () => {

    const allInfo = useLoaderData()


    const { name, company, address, username, email, phone } = allInfo
    console.log(allInfo)
    return (
        <div>
            <div className="card w-full bg-slate-100 shadow-xl my-6 pr-4">
                <div className='flex items-center'>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <div className='lg:w-8'>
                                <p className='font-semibold'>{company.name}</p>
                            </div>
                            <div className='lg:w-9'>
                                <p className='font-semibold'>Contact:</p>
                                <p>{name}</p>
                            </div>
                            <div className='lg:w-8 hidden lg:block'>
                                <p className='font-semibold'>Street:</p>
                                <p>{address.street}</p>
                            </div>
                            <div className='lg:w-8'>
                                <p className='font-semibold'>City:</p>
                                <p>{address.city}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-end lg:ml-14">
                        <button className="btn btn-info rounded-3xl"><Link to='/'>Hide Details</Link></button>
                    </div>

                </div>
                <div className="card w-full bg-base-100 shadow-xl mb-10">
                    <div className="card-body">
                        <p className='font-semibold'>Description</p>
                        <p>{company.catchPhrase} {company.bs}</p>
                        <div className='lg:flex gap-28'>
                            <div>
                                <p className='mb-3'><span className='font-semibold'>Contact Person:</span>
                                    <br />
                                    {name}
                                </p>
                                <p className='mb-3'><span className='font-semibold'>User Name:</span>
                                    <br />
                                    {username}
                                </p>
                                <p className='mb-3'><span className='font-semibold'>Email:</span>
                                    <br />
                                    {email}
                                </p>
                                <p className='mb-3'><span className='font-semibold'>Phone:</span>
                                    <br />
                                    {phone}
                                </p>

                            </div>
                            <div>
                                <p className='mb-3'><span className='font-semibold'>Address:</span>
                                    <br />
                                    {address.street}
                                </p>

                                <p className='mb-3'><span className='font-semibold'>Suite:</span>
                                    <br />
                                    {address.suite}
                                </p>

                                <p className='mb-3'><span className='font-semibold'>City:</span>
                                    <br />
                                    {address.city}
                                </p>
                                <p className='mb-3'><span className='font-semibold'>Zipcode:</span>
                                    <br />
                                    {address.zipcode}
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};


export default Details;