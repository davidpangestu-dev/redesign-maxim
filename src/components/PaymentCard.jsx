import React from 'react';
import { Wallet, ChevronRight } from 'lucide-react';
export default function PaymentCard({method='Tunai',onClick}){ return <button className="payment-card" onClick={onClick}><span className="payment-icon"><Wallet size={19}/></span><span><small>Pembayaran</small><strong>{method}</strong></span><ChevronRight size={18}/></button> }