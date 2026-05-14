// ─────────────────────────────────────────────────────────────────────────────
// BackgroundSpots.tsx
// SVG background scenes for each character in the QC Heat Risk Monitor.
// Each scene renders behind its character at their fixed position.
// ─────────────────────────────────────────────────────────────────────────────

/** Construction site — scaffolding, house frame, hard hat on post */
export function ConstructionSite() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      {/* Ground */}
      <rect x="0" y="170" width="300" height="30" fill="#8B7355" />
      <rect x="0" y="168" width="300" height="4" fill="#6B5B45" />
      {/* House frame */}
      <rect x="40" y="60" width="120" height="110" fill="none" stroke="#A0A0A0" strokeWidth="3" />
      <path d="M30 60 L100 15 L170 60" fill="none" stroke="#A0A0A0" strokeWidth="3" />
      {/* Window frames */}
      <rect x="60" y="85" width="30" height="35" fill="none" stroke="#888" strokeWidth="2" />
      <line x1="75" y1="85" x2="75" y2="120" stroke="#888" strokeWidth="1.5" />
      <line x1="60" y1="102" x2="90" y2="102" stroke="#888" strokeWidth="1.5" />
      <rect x="110" y="85" width="30" height="35" fill="none" stroke="#888" strokeWidth="2" />
      {/* Door frame */}
      <rect x="80" y="120" width="40" height="50" fill="none" stroke="#888" strokeWidth="2" />
      {/* Scaffolding */}
      <rect x="180" y="40" width="4" height="130" fill="#666" />
      <rect x="230" y="40" width="4" height="130" fill="#666" />
      <rect x="178" y="60" width="58" height="4" fill="#666" />
      <rect x="178" y="100" width="58" height="4" fill="#666" />
      <rect x="178" y="140" width="58" height="4" fill="#666" />
      {/* Wooden planks on scaffolding */}
      <rect x="183" y="56" width="48" height="5" fill="#B8956A" rx="1" />
      <rect x="183" y="96" width="48" height="5" fill="#B8956A" rx="1" />
      {/* Hard hat on post */}
      <rect x="260" y="120" width="4" height="50" fill="#888" />
      <ellipse cx="262" cy="118" rx="12" ry="5" fill="#FFD700" />
      <path d="M250 118 Q250 106 262 104 Q274 106 274 118" fill="#FFD700" />
      {/* Bricks pile */}
      <rect x="10" y="155" width="18" height="8" fill="#CC5533" rx="1" />
      <rect x="12" y="147" width="14" height="8" fill="#CC5533" rx="1" />
      <rect x="14" y="139" width="10" height="8" fill="#CC5533" rx="1" />
    </svg>
  );
}

/** Parking area — lot lines, parked car, P sign */
export function ParkingSpot() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      {/* Asphalt */}
      <rect x="0" y="140" width="300" height="60" fill="#3A3A3A" />
      {/* Parking lines */}
      <line x1="50" y1="140" x2="50" y2="200" stroke="#DDD" strokeWidth="2" strokeDasharray="6 4" />
      <line x1="110" y1="140" x2="110" y2="200" stroke="#DDD" strokeWidth="2" strokeDasharray="6 4" />
      <line x1="170" y1="140" x2="170" y2="200" stroke="#DDD" strokeWidth="2" strokeDasharray="6 4" />
      <line x1="230" y1="140" x2="230" y2="200" stroke="#DDD" strokeWidth="2" strokeDasharray="6 4" />
      {/* Parked car silhouette */}
      <rect x="120" y="152" width="40" height="18" fill="#4A5568" rx="3" />
      <path d="M125 152 Q130 138 140 138 Q150 138 155 152" fill="#4A5568" />
      <circle cx="128" cy="172" r="5" fill="#222" />
      <circle cx="152" cy="172" r="5" fill="#222" />
      <circle cx="128" cy="172" r="2" fill="#555" />
      <circle cx="152" cy="172" r="2" fill="#555" />
      {/* P Sign */}
      <rect x="250" y="80" width="4" height="62" fill="#777" />
      <rect x="240" y="70" width="24" height="20" fill="#2255AA" rx="3" />
      <text x="252" y="86" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">P</text>
      {/* Sidewalk curb */}
      <rect x="0" y="135" width="300" height="7" fill="#999" rx="1" />
    </svg>
  );
}

/** Waiting shed — bench, roof, bus stop sign */
export function WaitingShed() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      {/* Ground / sidewalk */}
      <rect x="0" y="170" width="300" height="30" fill="#B0A898" />
      {/* Shed roof */}
      <rect x="40" y="50" width="180" height="8" fill="#607080" rx="2" />
      <rect x="35" y="46" width="190" height="6" fill="#708090" rx="2" />
      {/* Shed pillars */}
      <rect x="48" y="54" width="5" height="116" fill="#808080" />
      <rect x="207" y="54" width="5" height="116" fill="#808080" />
      {/* Bench */}
      <rect x="60" y="148" width="140" height="5" fill="#8B6914" rx="1" />
      <rect x="65" y="153" width="5" height="17" fill="#8B6914" />
      <rect x="190" y="153" width="5" height="17" fill="#8B6914" />
      {/* Bench back */}
      <rect x="60" y="128" width="140" height="4" fill="#8B6914" rx="1" />
      <rect x="60" y="138" width="140" height="4" fill="#8B6914" rx="1" />
      {/* Bus stop sign */}
      <rect x="248" y="60" width="4" height="112" fill="#444" />
      <rect x="236" y="50" width="28" height="22" fill="#1E8449" rx="3" />
      <text x="250" y="58" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">BUS</text>
      <text x="250" y="67" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">STOP</text>
      {/* School bag */}
      <rect x="80" y="132" width="16" height="18" fill="#2E4057" rx="3" />
      <rect x="83" y="135" width="10" height="6" fill="#3D5575" rx="1" />
      <path d="M85 132 Q88 126 91 132" fill="none" stroke="#2E4057" strokeWidth="2" />
    </svg>
  );
}

/** Road with traffic — lanes, traffic light, vehicle silhouettes */
export function RoadTraffic() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      {/* Road */}
      <rect x="0" y="130" width="300" height="70" fill="#3D3D3D" />
      {/* Lane markings */}
      <line x1="0" y1="165" x2="300" y2="165" stroke="#EEE" strokeWidth="2" strokeDasharray="20 15" />
      {/* Sidewalk */}
      <rect x="0" y="125" width="300" height="8" fill="#999" />
      {/* Traffic light */}
      <rect x="20" y="30" width="4" height="98" fill="#555" />
      <rect x="10" y="20" width="24" height="50" fill="#333" rx="4" />
      <circle cx="22" cy="32" r="6" fill="#FF3333" opacity="0.9" />
      <circle cx="22" cy="47" r="6" fill="#FFCC00" opacity="0.3" />
      <circle cx="22" cy="62" r="6" fill="#33CC33" opacity="0.3" />
      {/* Car 1 — behind */}
      <rect x="180" y="138" width="50" height="20" fill="#5A6E82" rx="4" />
      <path d="M187 138 Q195 125 210 125 Q218 125 225 138" fill="#5A6E82" />
      <rect x="192" y="128" width="22" height="10" fill="rgba(150,200,255,0.3)" rx="2" />
      <circle cx="190" cy="160" r="5" fill="#222" />
      <circle cx="220" cy="160" r="5" fill="#222" />
      {/* Car 2 — behind */}
      <rect x="70" y="142" width="45" height="18" fill="#8B4513" rx="4" />
      <path d="M76 142 Q83 130 92 130 Q101 130 108 142" fill="#8B4513" />
      <circle cx="80" cy="162" r="4.5" fill="#222" />
      <circle cx="105" cy="162" r="4.5" fill="#222" />
      {/* Jeepney silhouette — far back */}
      <rect x="240" y="145" width="55" height="22" fill="#2E86C1" rx="3" />
      <rect x="242" y="150" width="10" height="10" fill="rgba(200,230,255,0.3)" rx="1" />
      <circle cx="250" cy="170" r="5" fill="#222" />
      <circle cx="283" cy="170" r="5" fill="#222" />
    </svg>
  );
}

/** Food truck scene — truck counter, umbrella, signage */
export function FoodTruckScene() {
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
      {/* Ground */}
      <rect x="0" y="170" width="300" height="30" fill="#8B8B7A" />
      {/* Food truck body */}
      <rect x="20" y="80" width="160" height="90" fill="#E8E8E8" stroke="#CCC" strokeWidth="2" rx="5" />
      {/* Truck cab */}
      <rect x="160" y="100" width="50" height="70" fill="#E0E0E0" stroke="#CCC" strokeWidth="2" rx="3" />
      <rect x="168" y="108" width="32" height="25" fill="rgba(150,200,255,0.4)" rx="2" />
      {/* Service window */}
      <rect x="40" y="95" width="60" height="40" fill="#333" rx="3" />
      <rect x="42" y="97" width="56" height="36" fill="rgba(255,200,100,0.15)" rx="2" />
      {/* Counter / shelf */}
      <rect x="30" y="135" width="80" height="6" fill="#B0B0B0" rx="1" />
      {/* Menu board */}
      <rect x="115" y="88" width="30" height="25" fill="#2E4057" rx="2" />
      <line x1="120" y1="95" x2="140" y2="95" stroke="#FFF" strokeWidth="1" opacity="0.5" />
      <line x1="120" y1="100" x2="138" y2="100" stroke="#FFF" strokeWidth="1" opacity="0.5" />
      <line x1="120" y1="105" x2="135" y2="105" stroke="#FFF" strokeWidth="1" opacity="0.5" />
      {/* Wheels */}
      <circle cx="60" cy="175" r="12" fill="#333" />
      <circle cx="60" cy="175" r="4" fill="#777" />
      <circle cx="170" cy="175" r="12" fill="#333" />
      <circle cx="170" cy="175" r="4" fill="#777" />
      {/* Umbrella */}
      <rect x="248" y="60" width="3" height="112" fill="#8B6914" />
      <path d="M220 62 Q250 30 280 62" fill="#FF4444" />
      <path d="M220 62 Q235 50 250 62" fill="#FF6666" />
      <path d="M250 62 Q265 50 280 62" fill="#FF3333" />
      {/* Signage on truck */}
      <text x="100" y="165" textAnchor="middle" fill="#E64A19" fontSize="10" fontWeight="bold">FOOD</text>
    </svg>
  );
}
