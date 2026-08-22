import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OfferDisplay from "../../components/OfferDisplay/OfferDisplay";
import Navbar from "../../components/Navbar/Navbar";
import FooterSection from "../../components/FooterSection/FooterSection";

import { getMyOrders } from "../../services/orderService";

const statusStyle = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const MyOrders = () => {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const loadOrders = async () => {

      try {

        const data = await getMyOrders();

        setOrders(data.orders);

      } catch (error) {

        console.error(
          "Error loading orders:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadOrders();

  }, []);


  return (
    <>
      <OfferDisplay />

      <Navbar />


      <div className="min-h-screen bg-[#F2F0F1] py-10">

        <div className="w-[90%] max-w-6xl mx-auto">


          {/* Header */}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8">

            <div>

              <h1 className="text-4xl font-black">
                My Orders
              </h1>

              <p className="text-gray-500 mt-2">
                View your recent purchases
              </p>

            </div>


            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition"
            >
              Continue Shopping
            </button>

          </div>


          {/* Loading */}

          {loading && (

            <div className="bg-white rounded-3xl p-10 text-center">

              <p className="text-gray-500">
                Loading your orders...
              </p>

            </div>

          )}


          {/* Empty */}

          {!loading && orders.length === 0 && (

            <div className="bg-white rounded-3xl p-10 text-center">

              <h2 className="text-2xl font-bold">
                No Orders Yet
              </h2>

              <p className="text-gray-500 mt-2">
                You haven't placed any orders yet.
              </p>

              <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 rounded-full bg-black text-white"
              >
                Start Shopping
              </button>

            </div>

          )}


          {/* Orders */}

          {!loading && orders.length > 0 && (

            <div className="space-y-6">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="bg-white rounded-3xl p-6 shadow-sm"
                >

                  <div className="flex flex-col lg:flex-row justify-between gap-6">


                    {/* Left */}

                    <div>

                      <h2 className="text-xl font-bold">
                        Order #{order.id}
                      </h2>


                      <p className="text-gray-500 mt-2">
                        Ordered On :{" "}
                        {new Date(
                          order.created_at
                        ).toLocaleDateString()}
                      </p>


                      <h3 className="text-2xl font-bold mt-3">
                        $
                        {Number(
                          order.total_amount
                        ).toFixed(2)}
                      </h3>

                    </div>


                    {/* Right */}

                    <div className="flex flex-col justify-between items-start lg:items-end">

                      <span
                        className={`
                          px-5
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                          ${
                            statusStyle[
                              order.status
                            ] ||
                            "bg-gray-100 text-gray-700"
                          }
                        `}
                      >
                        {order.status}
                      </span>


                      <button
                        className="
                          mt-5
                          lg:mt-0
                          px-6
                          py-3
                          rounded-full
                          bg-black
                          text-white
                          hover:bg-gray-900
                          transition
                        "
                      >
                        Track Order
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>


      <FooterSection />

    </>
  );
};

export default MyOrders;