import React, { useEffect, useState } from 'react';
import hot from "../../../src/assets/hot.jpg";

const Dashboard = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotels from the backend
    fetch('http://localhost:3000/api/hotels')
      .then(response => response.json())
      .then(data => setHotels(data))
      .catch(error => console.error('Error fetching hotels:', error));
  }, []);

  return (
    <>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">WELCOME TO BOOKIT!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Discover the ultimate hotel booking experience with our user-friendly platform. Explore a wide range of luxurious accommodations.
          </p>
        </div>
        <div>
          <div className="hotel">
            <img src={hot} className="img-fluid rounded-3 mb-4" alt="Example image" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col">
              <div className="card shadow-sm">
                <img 
                  src={hotel.imageUrl} 
                  className="bd-placeholder-img card-img-top" 
                  alt={hotel.name} 
                  style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <p className="card-text">{hotel.name}</p>
                  <p className="card-text">{hotel.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>

              <div className="card shadow-sm">
                <img 
                  src={hotel.imageUrl} 
                  className="bd-placeholder-img card-img-top" 
                  alt={hotel.name} 
                  style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <p className="card-text">{hotel.name}</p>
                  <p className="card-text">{hotel.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
              
              <div className="card shadow-sm">
                <img 
                  src={hotel.imageUrl} 
                  className="bd-placeholder-img card-img-top" 
                  alt={hotel.name} 
                  style={{ width: '100%', height: '225px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                  <p className="card-text">{hotel.name}</p>
                  <p className="card-text">{hotel.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
