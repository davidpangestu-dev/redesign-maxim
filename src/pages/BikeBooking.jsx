import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MapMock from "../components/MapMock";
import VehicleCard from "../components/VehicleCard";
import PaymentCard from "../components/PaymentCard";
import FareSummary from "../components/FareSummary";
import PrimaryButton from "../components/PrimaryButton";
import Modal from "../components/Modal";
import { getRidePricing, getRideSelection, rideOptions } from "../data/rideOptions";
export default function BikeBooking({ serviceType = "bike", selection, onSelectionChange }) {
  const nav = useNavigate();
  const [payment, setPayment] = useState(false);
  const options = rideOptions[serviceType] || rideOptions.bike;
  const selected = getRideSelection(serviceType, selection);
  const pricing = getRidePricing(selected);
  const serviceName = serviceType === "car" ? "Car" : "Bike";

  const selectOption = (option) => {
    onSelectionChange({
      ...option,
      promoApplied: serviceType === "bike" && selected.promoApplied,
    });
  };

  return (
    <div className="page flush">
      <Header title={`Pesan ${serviceName}`} back />
      <MapMock />
      <div className="sheet">
        <div className="location-card">
          <div>
            <small>Lokasi jemput</small>
            <strong>
              <span className="dot green"></span> Lokasi saya
            </strong>
          </div>
          <div>
            <small>Tujuan</small>
            <strong>
              <span className="dot red"></span> Masukkan tujuan perjalanan
            </strong>
          </div>
        </div>
        <h3 className="section-title">Pilih kendaraan</h3>
        <div className="stack">
          {options.map((option) => (
            <VehicleCard
              key={option.id}
              title={option.name}
              subtitle={option.subtitle}
              price={getRidePricing({ ...option, promoApplied: selected.promoApplied }).total}
              serviceType={serviceType}
              selected={selected.id === option.id}
              onClick={() => selectOption(option)}
            />
          ))}
        </div>
        {serviceType === "bike" && (
          <button
            className={"choice-row " + (selected.promoApplied ? "selected" : "")}
            onClick={() => onSelectionChange({ ...selected, promoApplied: !selected.promoApplied })}
          >
            <span>🏷️</span>
            <span>
              <strong>Hemat Rp{selected.promoDiscount.toLocaleString("id-ID")}</strong>
              <small>Promo perjalanan</small>
            </span>
            <b>{selected.promoApplied ? "✓" : ""}</b>
          </button>
        )}
        <PaymentCard onClick={() => setPayment(true)} />
        <FareSummary fare={pricing.fare} discount={pricing.discount} total={pricing.total} />
        <PrimaryButton onClick={() => nav(`/${serviceType}/confirmation`)}>Pesan Sekarang</PrimaryButton>
      </div>
      {payment && (
        <Modal title="Pilih pembayaran" onClose={() => setPayment(false)}>
          <div className="stack">
            <button className="modal-option selected" onClick={() => setPayment(false)}>
              Tunai <span>✓</span>
            </button>
            <button className="modal-option" onClick={() => setPayment(false)}>
              Saldo Maxim
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
