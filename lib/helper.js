export const serializercarData = (car,wishlisted = false)=>{
    return{
        ...car,
        price:car.price?parseFloat(car.price.tostring()):0,
        createdAt:car.createdAt?.toISOstring(),
        updatedAt:car.createdAt?.toISOstring(),
        wishlisted:wishlisted,

    };
}