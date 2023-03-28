
import React from 'react';
import useServiceDetail from '../../hooks/useServiceDetail';


const ServiceDetail = () => {
    const [service, setService] = useServiceDetail();

    const handleDiscount = () => {

    }

    return (
        <div style={{ minHeight: "100Vh" }} className='container mt-2 '>
            <h2 className='text-center'>Welcome to Service Details:{service.name}</h2>
            <div class="card" style={{ width: "18rem" }}>
                <img src={service.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{service.name}</h5>
                    <h2>Price:{service.price}</h2>
                    <p class="card-text">{service.description}</p>
                    <button onClick={handleDiscount} className='btn btn-primary'>Discount</button>
                </div>
            </div>
            {/* <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div> */}
        </div>
    );
};

export default ServiceDetail;