import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface Property {
  id: string;
  title: string;
  price: number;
  position: { lat: number; lng: number };
  address: string;
}

interface PropertyMapProps {
  properties: Property[];
  onPropertySelect?: (propertyId: string) => void;
  selectedProperty?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function PropertyMap({ 
  properties,
  onPropertySelect,
  selectedProperty,
  center = { lat: 40.7128, lng: -74.0060 }, // Default to NYC
  zoom = 12
}: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeProperty, setActiveProperty] = useState<string | null>(null);

  // This is a placeholder that simulates a map
  // In a real application, you would integrate with Google Maps, Mapbox, or similar
  useEffect(() => {
    // For demonstration purposes only - in a real app you'd initialize your map library here
    console.log("Map would initialize with:", { center, zoom, properties });
    
    const mapContainer = mapRef.current;
    if (mapContainer) {
      // Apply some basic styling to make it look like a map
      mapContainer.style.backgroundImage = "url('https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=1000&auto=format&fit=crop')";
      mapContainer.style.backgroundSize = "cover";
      mapContainer.style.backgroundPosition = "center";
    }
  }, [center, zoom]);

  // Update active property when selectedProperty changes
  useEffect(() => {
    if (selectedProperty) {
      setActiveProperty(selectedProperty);
    }
  }, [selectedProperty]);

  const handleMarkerClick = (propertyId: string) => {
    setActiveProperty(propertyId);
    if (onPropertySelect) {
      onPropertySelect(propertyId);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md border border-gray-200">
      <div 
        ref={mapRef} 
        className="w-full h-full bg-gray-100"
      >
        {/* This is a visual representation of map markers for demonstration */}
        {properties.map((property) => {
          const isActive = activeProperty === property.id;
          const offsetX = Math.random() * 80 - 40; // Random position simulation
          const offsetY = Math.random() * 80 - 40; // Random position simulation
          
          return (
            <div 
              key={property.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-10"
              style={{ 
                left: `calc(50% + ${offsetX}%)`, 
                top: `calc(50% + ${offsetY}%)`,
                zIndex: isActive ? 20 : 10,
              }}
              onClick={() => handleMarkerClick(property.id)}
            >
              <div className={`
                flex flex-col items-center
                ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}
              `}>
                {isActive && (
                  <div className="bg-white rounded-lg shadow-lg p-3 mb-2 max-w-[200px]">
                    <div className="font-semibold truncate">{property.title}</div>
                    <div className="text-blue-600 font-medium">{formatPrice(property.price)}</div>
                    <div className="text-gray-500 text-sm truncate">{property.address}</div>
                  </div>
                )}
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full
                  ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-600'}
                  shadow-md
                `}>
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md text-xs text-gray-500 shadow-md">
        Map view (placeholder) - In a real application, this would be integrated with a map service
      </div>
    </div>
  );
}