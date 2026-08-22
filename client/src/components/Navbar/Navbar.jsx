import React, { useState } from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  Menu,
  ChevronDown,
  Search,
  ShoppingCart,
  CircleUserRound,
} from "lucide-react";

import { logout } from "../../redux/authSlice";


const Navbar = () => {

  const navigate = useNavigate(); 
  const location = useLocation(); 
  const dispatch = useDispatch(); 

  const [showProfileMenu, setShowProfileMenu] = useState(false);
 
  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );
 
  const goToSection = (id) => {

    if (location.pathname === "/") { 
      document .getElementById(id) ?.scrollIntoView({
          behavior: "smooth",
        }); 
    } else { 
      navigate("/", {
        state: {
          scrollTo: id,
        },
      }); 
    } 
  };

 
  const handleLogout = () => { 
    dispatch(logout()); 
    setShowProfileMenu(false);
    navigate('/login')
  };


  return (

    <nav className="w-full bg-white flex justify-center h-24">

      <div className="w-[90%] flex items-center justify-between gap-4">


        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-4 lg:gap-8">


          {/* Mobile Menu */}

          <button className="block md:hidden">

            <Menu size={28} />

          </button>


          {/* Logo */}

          <button
            onClick={() => navigate("/")}
            className="text-3xl lg:text-4xl font-extrabold"
          >
            SHOP.CO
          </button>


          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-6">


            {/* Shop */}

            <button
              onClick={() => navigate("/category")}
              className="flex items-center gap-1"
            >

              Shop

              <ChevronDown size={16} />

            </button>


            {/* On Sale */}

            <button
              onClick={() =>
                goToSection("top-selling")
              }
            >
              On Sale
            </button>


            {/* New Arrivals */}

            <button
              onClick={() =>
                goToSection("new-arrivals")
              }
            >
              New Arrivals
            </button>


            {/* Brands */}

            <button
              onClick={() =>
                goToSection("brands")
              }
            >
              Brands
            </button>


          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-5">


          {/* Mobile Search */}

          <button className="block md:hidden">

            <Search size={22} />

          </button>


          {/* Desktop Search */}

          <div className="hidden md:flex items-center bg-gray-100 rounded-full h-11 px-4 w-56 lg:w-80 xl:w-105">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search for products..."
              className="ml-3 flex-1 bg-transparent outline-none"
            />

          </div>


          {/* ================= CART ================= */}

          {isLoggedIn && (

            <button
              onClick={() => navigate("/cart")}
            >

              <ShoppingCart size={22} />

            </button>

          )}


          {/* ================= PROFILE ================= */}

          {isLoggedIn ? (

            <div className="relative">


              {/* Profile Button */}

              <button
                onClick={() =>
                  setShowProfileMenu(
                    (previous) => !previous
                  )
                }
              >

                <CircleUserRound size={22} />

              </button>


              {/* Profile Dropdown */}

              {showProfileMenu && (

                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">


                  {/* My Orders */}

                  <button
                    onClick={() => {

                      navigate("/orders");

                      setShowProfileMenu(false);

                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100"
                  >

                    My Orders

                  </button>


                  {/* Logout */}

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                  >

                    Logout

                  </button>


                </div>

              )}


            </div>

          ) : (


            /* ================= LOGIN ================= */

            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-5 py-2 rounded-full"
            >

              Login

            </button>

          )}


        </div>

      </div>

    </nav>

  );

};


export default Navbar;