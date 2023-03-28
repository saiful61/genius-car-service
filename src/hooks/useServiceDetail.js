import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://car-service-5nx6.onrender.com/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return [service]
};

export default useServiceDetail;