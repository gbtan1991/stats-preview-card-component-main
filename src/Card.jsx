import React from 'react'


const Card = () => {
  return (
    <div className='w-10/12 rounded-lg'>
    <div className='flex flex-col items-center bg-primaryDarkSaturatedBlue '>
    <div>
       <img src='./images/image-header-mobile.jpg' className='rounded-tr-lg rounded-tl-lg'/>
       <div className='bg-primarySoftViolet'></div>
    </div>
    <div className='flex'>
        <h2>Get insights that help your business grow.</h2>
<p>
Discover the benefits of data analytics and make better decisions regarding revenue, customer 
experience, and overall efficiency.
</p>
10k+ companies
314 templates
12m+ queries

        
           </div>
    </div>      
    </div>
  )
}

export default Card
