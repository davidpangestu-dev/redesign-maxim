export const rideOptions = {
  bike: [
    {
      id: "bike-economy",
      name: "Bike Hemat",
      subtitle: "Tarif ekonomis",
      vehicleInfo: "Yamaha · AB 1234 XX",
      fare: 12000,
      promoDiscount: 5000,
    },
    {
      id: "bike-priority",
      name: "Bike Prioritas",
      subtitle: "Penjemputan lebih cepat",
      vehicleInfo: "Yamaha · AB 1234 XX",
      fare: 17000,
      promoDiscount: 5000,
    },
  ],
  car: [
    {
      id: "car-4",
      name: "Car 4 Orang",
      subtitle: "City Car · Maks. 4 penumpang",
      vehicleInfo: "City Car · AB 1234 XX",
      fare: 25000,
      promoDiscount: 0,
    },
    {
      id: "car-6",
      name: "Car 6 Orang",
      subtitle: "MPV · Maks. 6 penumpang",
      vehicleInfo: "MPV · AB 1234 XX",
      fare: 35000,
      promoDiscount: 0,
    },
  ],
};

export function getRidePricing(selection) {
  const discount = selection?.promoApplied ? selection.promoDiscount : 0;
  return {
    fare: selection?.fare ?? 0,
    discount,
    total: Math.max(0, (selection?.fare ?? 0) - discount),
  };
}

export function getRideSelection(serviceType, selection) {
  const options = rideOptions[serviceType] || rideOptions.bike;
  const option = options.find((item) => item.id === selection?.id) || options[0];
  return {
    ...option,
    promoApplied: serviceType === "bike" && (selection?.promoApplied ?? true),
  };
}
