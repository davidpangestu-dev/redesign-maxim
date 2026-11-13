import React from 'react';
export default function MapMock({active=false}){
 return <div className="map"><div className="map-grid"></div><div className="road r1"></div><div className="road r2"></div><div className="road r3"></div><div className="block b1"></div><div className="block b2"></div><div className="block b3"></div><div className="block b4"></div><div className="route"></div><div className="marker pickup">P</div><div className="marker destination">D</div>{active&&<div className="driver-dot">●</div>}<div className="map-label">Mock map · tanpa API</div></div>
}