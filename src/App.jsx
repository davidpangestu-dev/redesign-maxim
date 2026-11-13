import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/AppShell";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BikeBooking from "./pages/BikeBooking";
import BikeConfirmation from "./pages/BikeConfirmation";
import BikeSearching from "./pages/BikeSearching";
import DriverFound from "./pages/DriverFound";
import ActiveTrip from "./pages/ActiveTrip";
import TripCompleted from "./pages/TripCompleted";
import Food from "./pages/Food";
import Restaurant from "./pages/Restaurant";
import FoodCart from "./pages/FoodCart";
import FoodCheckout from "./pages/FoodCheckout";
import FoodTracking from "./pages/FoodTracking";
import Delivery from "./pages/Delivery";
import Activity from "./pages/Activity";
import Favorites from "./pages/Favorites";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Promos from "./pages/Promos";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import ProfileSetup from "./pages/ProfileSetup";

export default function App() {
  const [cart, setCart] = useState({});
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route element={<AppShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bike" element={<BikeBooking />} />
        <Route path="/bike/confirmation" element={<BikeConfirmation />} />
        <Route path="/bike/searching" element={<BikeSearching />} />
        <Route path="/bike/driver" element={<DriverFound />} />
        <Route path="/bike/trip" element={<ActiveTrip />} />
        <Route path="/bike/completed" element={<TripCompleted />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/restaurant" element={<Restaurant cart={cart} setCart={setCart} />} />
        <Route path="/food/cart" element={<FoodCart cart={cart} setCart={setCart} />} />
        <Route path="/food/checkout" element={<FoodCheckout />} />
        <Route path="/food/tracking" element={<FoodTracking />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/promos" element={<Promos />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
