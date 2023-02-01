import React from 'react';

const Card = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl my-6 pr-4">
            <div className='flex items-center'>
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;