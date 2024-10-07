import React, { useEffect, useState, useMemo } from "react";
import hot from "../../../src/assets/hot.jpg";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Dashboard = () => {
  const [isActive, setIsActive] = useState(true);

  const classes = useMemo(
    () => `${!isActive ? "closed" : ""} card-body px-0`,
    [isActive]
  );

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  // const [email, setEmail] = useState([])

  useEffect(() => {
    // Fetch hotels from the backend
    fetch("http://localhost:3000/api/rooms")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  // useEffect(() => {
  //   // Fetch hotels from the backend
  //   fetch("http://localhost:3000/user/getemail")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEmail(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error fetching hotels:", error));
  // }, []);

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
 <div>
      
   
  
  
    </div>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">
          WELCOME TO BOOKIT!
        </h1>
        {/* {email.map((user) => (
          <li key={user._id}>
            <p>Name: {user.Name}</p>
          </li>
        ))} */}
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Discover the ultimate hotel booking experience with our
            user-friendly platform. Explore a wide range of luxurious
            accommodations.
          </p>
        </div>
        <div>
          <div className="hotel">
            <img
              src={hot}
              className="img-fluid card-img rounded-3 mb-4"
              alt="Example image"
              style={{ width: "100%", height: "725px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    
      <div className="container">
        <div>
          <h1 className="text-center display-2 mb-4">Elevate Your Gatewayyd</h1>
          <p className="text-center">
            Indulge in the comfort and elegance of our meticulously designed
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {hotels.map((room) => (
            <div key={room.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={room.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={room.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{room.name}</p>
                  <p className="card-text">{room.description}</p>
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

      <div className="container pt-5 pb-5">
        <div className="row mt-5">
          <div className="col-10 col-sm-8   col-lg-5">
            <p className="fs-4 mt-2">ACCOMODATION</p>
            <select class="form-select" aria-label="Default select example">
              <option disabled selected>
                Packages
              </option>
              <option value="1">Dining Packages</option>
              <option value="2">Seasonal Packages</option>
              <option value="3">Business</option>
            </select>

            <select
              class="form-select mt-2"
              aria-label="Default select example"
            >
              <option disabled selected>
                Offers
              </option>
              <option value="1">Loyalty Program Benefits</option>
              <option value="2">Spa Retreat</option>
              <option value="3">Last-Minute Deals</option>
            </select>

            <div>
              <p className="fs-4 mt-2">AMENTIES</p>
              <select
                class="form-select mt-2"
                aria-label="Default select example"
              >
                <option disabled selected>
                  Dinning
                </option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="room-service">Room Service</option>
              </select>
              <select
                class="form-select mt-2"
                aria-label="Default select example"
              >
                <option disabled selected>
                  Explore
                </option>
                <option value="amenities">Amenities</option>
                <option value="rooms">Rooms & Suites</option>
                <option value="services">Services</option>
              </select>
              <button
                class="btn rounded-1 mt-3 mb-4 fw-bold me-3 d-lg-block"
                style={{ backgroundColor: "#445297", color: "white" }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={hot}
              className="img-fluid rounded-3 mb-4"
              alt="Example image"
            />
          </div>
        </div>
      </div>

      <div className="container pt-3">
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

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-4 mt-5" style={{ maxWidth: "100%" }}>
        <div className="container">
          <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div className="card map-card">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=TranscorpHiltonAbuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  style={{ border: "0" }}
                ></iframe>
              </div>
              <div className={classes} onClick={() => setIsActive(!isActive)}>
                <div className="button px-2 mt-3">
                  <a
                    className="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{ marginRight: ".75rem;" }}
                  >
                    <i className="fas fa-bicycle"></i>
                  </a>
                </div>
                <div className="bg-white px-4 pb-4 pt-3-5">
                  <h5 className="card-title h5 living-coral-text">
                    Transcorp Hilton, Abuja
                  </h5>
                  <div className="d-flex justify-content-between living-coral-text">
                    <h6 className="card-subtitle font-weight-light">
                      A luxury hotel in Maitama.
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                    <div>
                      <i className="fas fa-phone fa-lg mb-3"></i>
                      <p className="mb-0"></p>
                    </div>
                    <div>
                      <i className="fas fa-cat fa-lg mb-3"></i>
                      <p className="mb-0">Love</p>
                    </div>
                    <div>
                      <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                      <p className="mb-0">Smile</p>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-map-marker-alt living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          1 Aguiyi Ironsi Street, Maitama, Abuja, Nigeria.
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="far fa-clock living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          <span className="deep-purple-text me-2"> Closed</span>{" "}
                          Opens 10 AM
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-cloud-moon living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="mx-auto my-5" style={{ maxWidth: "23rem"}}>
            <div className="card map-card">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=BonOgbomosho&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  style={{ border: "0" }}
                ></iframe>
              </div>
              <div className={classes} onClick={() => setIsActive(!isActive)}>
                <div className="button px-2 mt-3">
                  <a
                    className="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{ marginRight: ".75rem;" }}
                  >
                    <i className="fas fa-bicycle"></i>
                  </a>
                </div>
                <div className="bg-white px-4 pb-4 pt-3-5">
                  <h5 className="card-title h5 living-coral-text">
                    Nest, Ogbomosho
                  </h5>
                  <div className="d-flex justify-content-between living-coral-text">
                    <h6 className="card-subtitle font-weight-light">
                      A modern hotel in Ogbomoso.
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                    <div>
                      <i className="fas fa-phone fa-lg mb-3"></i>
                      <p className="mb-0">call</p>
                    </div>
                    <div>
                      <i className="fas fa-cat fa-lg mb-3"></i>
                      <p className="mb-0">Love</p>
                    </div>
                    <div>
                      <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                      <p className="mb-0">Relax</p>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-map-marker-alt living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          KM5, Ogbomoso-Ilorin Expressway,
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="far fa-clock living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          <span className="deep-purple-text me-2"> Closed</span>{" "}
                          Opens 10 AM
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-cloud-moon living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div className="card map-card">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=TranscorpHiltonAbuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  style={{ border: "0" }}
                ></iframe>
              </div>
              <div className={classes} onClick={() => setIsActive(!isActive)}>
                <div className="button px-2 mt-3">
                  <a
                    className="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{ marginRight: ".75rem;" }}
                  >
                    <i className="fas fa-bicycle"></i>
                  </a>
                </div>
                <div className="bg-white px-4 pb-4 pt-3-5">
                  <h5 className="card-title h5 living-coral-text">
                    Transcorp Hilton, Abuja
                  </h5>
                  <div className="d-flex justify-content-between living-coral-text">
                    <h6 className="card-subtitle font-weight-light">
                      A city to relax
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                    <div>
                      <i className="fas fa-phone fa-lg mb-3"></i>
                      <p className="mb-0"></p>
                    </div>
                    <div>
                      <i className="fas fa-cat fa-lg mb-3"></i>
                      <p className="mb-0">Love</p>
                    </div>
                    <div>
                      <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                      <p className="mb-0">Smile</p>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-map-marker-alt living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          East 64th Street, New York, NY 10021, US
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="far fa-clock living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          <span className="deep-purple-text me-2"> Closed</span>{" "}
                          Opens 10 AM
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-cloud-moon living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <MDBFooter bgColor='ligt' className='text-center mt-4 foot text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='white' icon='gem' className='me-3' />
                BOOKIT
              </h6>
              <p>
              Discover the ultimate hotel booking experience with our user-friendly platform. Explore a wide range of luxurious accommodations.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HOTELS</h6>
              <p>
                <a href='/hotels' className='text-reset'>
                Transcorp Hilton
                </a>
              </p>
              <p>
                <a href='/hotels' className='text-reset'>
                  Nest Hostel
                </a>
              </p>
              <p>
                <a href='/hotels' className='text-reset'>
                  Eko Hotel
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='white' icon='home' className='me-2' />
                Nigeria Oyo
              </p>
              <p>
                <MDBIcon color='white' icon='envelope' className='me-3' />
                eaajejohnson@gmail.com | samuelsam91e@gmail.com
              </p>
              <p>
                <MDBIcon color='white' icon='phone' className='me-3' /> +2348160885374
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-decoration-none ps-2 fw-bold' href='/'>
          Bookit.Com
        </a>
      </div>
    </MDBFooter>
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </>
  );
};

export default Dashboard;
