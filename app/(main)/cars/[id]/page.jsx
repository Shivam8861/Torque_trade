import React from 'react'

const CarPage = async ({params}) => {
 
    const {id } = await params;

    return (
    <div>
         Carpage :{id}
    </div>
  )
}

export default CarPage;
