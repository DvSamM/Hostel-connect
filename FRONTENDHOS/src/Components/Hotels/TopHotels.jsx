import React, { useEffect, useState } from "react";

const TopHotels = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    // Fetch hotels from the backend
    fetch("http://localhost:3000/api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  return (
    <>
    
    <div className="container">
        <div>
          <h1 className="text-center display-2 mb-4">Explore Our Hotels</h1>
          <p className="text-center">
            Discover a world class hotel experience with our carefully curated
            collection of luxury accommodations{" "}
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {rooms.map((hotel) => (
            <div key={hotel.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={hotel.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={hotel.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{hotel.name}</p>
                  <p className="card-text">{hotel.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        class="btn rounded-0 d-none fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        View
                      </button>
                      <button
                        class="btn rounded-0 d-none fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>





     <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>    
    </>




  )
}

export default TopHotels