import React from 'react';
import { Form, useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    // console.log(service);
    const { _id, name, price, description, img } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h2>Price:{price}</h2>
                    <p class="card-text">{description}</p>
                    <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book:{name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;