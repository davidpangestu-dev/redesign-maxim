import React from 'react';
export default function StatusStepper({active=1}){
 const steps=['Pesanan dibuat','Restoran menyiapkan','Kurir mengambil','Pesanan diantar','Selesai'];
 return <div className="stepper">{steps.map((s,i)=><div className={'step '+(i<=active?'done':'')} key={s}><span>{i<=active?'✓':i+1}</span><div><strong>{s}</strong>{i===active&&<small>Sedang berlangsung</small>}</div></div>)}</div>
}