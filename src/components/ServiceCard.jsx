import React from 'react';
import { Bike, CarFront, Package, Utensils, ShoppingBag, ArrowUpRight } from 'lucide-react';
const icons={bike:Bike,car:CarFront,package:Package,utensils:Utensils,shopping:ShoppingBag};
export default function ServiceCard({service,onClick}){
 const Icon=icons[service.icon]||Bike;
 return <button className="service-card" onClick={onClick}><span className="service-icon"><Icon size={22}/></span><span className="service-copy"><strong>{service.name}</strong><small>{service.subtitle}</small></span><ArrowUpRight size={17} className="service-arrow"/></button>;
}