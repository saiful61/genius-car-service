import React from 'react';
import useServices from '../../hooks/useService';

const MangeService = () => {
    const [services, setServices] = useServices();


    const handleDelect = id => {
        const proceed = window.confirm("Are you sure")
        if (proceed) {
            const url = `https://car-service-5nx6.onrender.com/service/${id}`;
            // console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center mt-4'>My Services Item:{services.length}</h2>
            <div className="row">
                {
                    services.map(service => <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='g-5 col-sm-12 col-md-6 col-lg-4'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={service.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{service.name}</h5>
                                <h2>Price:{service.price}</h2>
                                <p class="card-text">{service.description}</p>
                                <button onClick={() => handleDelect(service._id)} className='btn btn-danger'>Delect</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MangeService;