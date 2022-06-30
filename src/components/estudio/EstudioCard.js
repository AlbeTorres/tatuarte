import React from 'react';

const EstudioCard = ()=>{

    return(
        <div className='flex items-center shadow-lg h-auto lg:max-w-fit p-3 max-h-25 border-2'>

            <div className='bg-blue-500  rounded-full w-1/4 relative shadow-lg'>
                <img src='img/1.jpg' alt=''/>

                
            </div>
            
            <div className=' w-full grid grid-cols-2 ml-2'>
                <div className='col-span-2 ml-2'>
                    <h1 className='font-bold text-lg'>Nemesis Ink Studios</h1>
                    <div className='mt-2 truncate hover:text-clip text-left indent-0 text-sm mb-2'>
                        <p className=''><span className='mr-1 font-semibold'>P:</span>Santiago de Cuba</p>
                        <p className=''><span className='mr-1 font-semibold'>M:</span>Santiago de Cuba</p>

                    </div>   
                </div>
                <div className='grid grid-cols-9 grid-flow-col col-start-2'>
                    <button className='btn col-start-4 col-span-7'>ver</button>
                </div>
            </div>
        </div>
    );
}

export default EstudioCard;