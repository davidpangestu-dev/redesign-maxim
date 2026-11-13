import React from 'react';
import { Bike, Utensils, Package, ChevronRight } from 'lucide-react';
const icons={Bike,Food:Utensils,Delivery:Package};
export default function ActivityCard({item,onClick}){
 const Icon=icons[item.type]||Bike;
 return <button className="activity-card" onClick={onClick}><span className="activity-icon"><Icon size={19}/></span><span className="activity-main"><strong>{item.type}</strong><small>{item.date} · {item.status}</small></span><strong>{item.price}</strong><ChevronRight size={17}/></button>;
}