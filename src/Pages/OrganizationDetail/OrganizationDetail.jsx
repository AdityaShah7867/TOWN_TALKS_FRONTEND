
import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";


const OrganizationDetail = () => {

  const [organization, setOrganization] = useState({});
  const [events, setEvents] = useState([]);

  const getOrganization = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/user/getOrganiser",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      setOrganization(response.data.data);
    }

  };


  const getEventByUserId = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/event/get-event-by-user-id",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      setEvents(response.data);
    }
  };

  useEffect(() => {
    getOrganization()
    getEventByUserId();
  }, [])



  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6 bg-gray-100 ">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        // src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        src="https://source.unsplash.com/800x800/?people"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <div className="flex flex-wrap">
                        <p>DONATE</p>
                        <p className=" ml-2 text-xl"> <IoMdHeart /></p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Number of events{" "}
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Number of members join
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-bold leading-normal mb-3">
                    {organization.username}
                  </h3>
                </div>
                <hr />
                <div className="text-2xl font-semibold text-center pt-12">
                  <p>Previous Events Occured</p>
                </div>

                <div className="mt-10 py-6 text-center ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="container mx-auto flex flex-row gap-4 flex-wrap  py-8 max-w-4xl">
                        {
                          events.map((event) => (
                            <div className="flex flex-row">
                              {" "}
                              {/* Changed to 1 column */}
                              <div className="bg-white rounded-lg p-6 shadow-md">
                                <img
                                  alt="..."
                                  src={`http://localhost:4000/${event.image}`}
                                  className="h-40 w-full rounded-md object-cover mb-6"
                                />
                                <h2 className="text-xl font-semibold mb-2">
                                  {event.title}
                                </h2>
                                <p className="text-gray-600">
                                  {event.description}
                                </p>
                              </div>

                            </div>
                          ))
                        }
                      </div>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Notus JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default OrganizationDetail;
