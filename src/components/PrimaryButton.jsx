import React from 'react';
export default function PrimaryButton({children,onClick,disabled=false}){
 return <button className="btn btn-primary" onClick={onClick} disabled={disabled}>{children}</button>;
}