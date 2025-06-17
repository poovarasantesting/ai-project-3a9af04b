import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, List, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyMap from "@/components/PropertyMap";
import PropertyCard from "@/components/PropertyCard";
import FilterBar from "@/components/FilterBar";

// Sample property data
const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Modern Waterfront Villa",
    price: 1250000,
    address: "123 Ocean Drive, Miami, FL",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "House",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: "2",
    title: "Downtown Luxury Condo",
    price: 850000,
    address: "456 Main Street, Seattle, WA",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    type: "Condo",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7328, lng: -73.9860 }
  },
  {
    id: "3",
    title: "Spacious Family Home with Garden",
    price: 675000,
    address: "789 Maple Avenue, Denver, CO",
    bedrooms: 5,
    bathrooms: 3.5,
    area: 3200,
    type: "House",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7028, lng: -74.0160 }
  },
  {
    id: "4",
    title: "Charming Townhouse in Historic District",
    price: 525000,
    address: "321 Heritage Lane, Charleston, SC",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    type: "Townhouse",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7228, lng: -73.9960 }
  },
  {
    id: "5",
    title: "Contemporary Urban Apartment",
    price: 395000,
    address: "555 Downtown Blvd, Chicago, IL",
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    type: "Apartment",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7428, lng: -74.0260 }
  },
  {
    id: "6",
    title: "Mountain View Retreat",
    price: 1450000,
    address: "777 Alpine Way, Aspen, CO",
    bedrooms: 4,
    bathrooms: 4,
    area: 3600,
    type: "House",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7528, lng: -73.9760 }
  },
];

export default function MapViewPage() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState(MOCK_PROPERTIES);
  
  const handlePropertySelect = (propertyId: string) => {
    setSelectedProperty(propertyId);
  };
  
  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleFilterChange = (filters: any) => {
    // In a real app, this would be a server-side filter
    // For demo purposes, we'll do client-side filtering
    const filtered = MOCK_PROPERTIES.filter(property => {
      // Filter by location
      if (filters.location && !property.address.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      // Filter by type
      if (filters.type && property.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }
      
      // Filter by price
      if (property.price < filters.minPrice || property.price > filters.maxPrice) {
        return false;
      }
      
      // Filter by beds
      if (filters.beds && property.bedrooms < parseInt(filters.beds)) {
        return false;
      }
      
      // Filter by baths
      if (filters.baths && property.bathrooms < parseInt(filters.baths)) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProperties(filtered);
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="p-4 bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to List View
            </Link>
            <div className="ml-4 text-gray-500">
              {filteredProperties.length} properties found
            </div>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleSidebar}
              className="hidden sm:flex items-center"
            >
              <List className="h-4 w-4 mr-1" />
              {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setFilteredProperties(MOCK_PROPERTIES)}
              className="flex items-center"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Reset Map
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-grow overflow-hidden">
        {isSidebarOpen && (
          <aside className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-4">
              <FilterBar onFilterChange={handleFilterChange} />
              
              <div className="space-y-4 mt-4">
                {filteredProperties.map(property => (
                  <div 
                    key={property.id}
                    className={`cursor-pointer transition-all border rounded-lg overflow-hidden ${
                      selectedProperty === property.id ? 'border-blue-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handlePropertySelect(property.id)}
                  >
                    <div className="p-2">
                      <PropertyCard property={property} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
        
        <div className={`flex-1 relative ${!isSidebarOpen ? 'w-full' : ''}`}>
          <div className="absolute inset-0">
            <PropertyMap 
              properties={filteredProperties.map(p => ({
                id: p.id,
                title: p.title,
                price: p.price,
                position: p.position,
                address: p.address
              }))}
              onPropertySelect={handlePropertySelect}
              selectedProperty={selectedProperty || undefined}
            />
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleSidebar}
            className="absolute top-4 left-4 z-10 sm:hidden bg-white shadow-md"
          >
            <List className="h-4 w-4 mr-1" />
            {isSidebarOpen ? 'Hide' : 'Show'} List
          </Button>
          
          {selectedProperty && (
            <div className="absolute bottom-4 left-4 right-4 md:w-80 md:left-4 md:right-auto z-10">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {filteredProperties
                  .filter(p => p.id === selectedProperty)
                  .map(property => (
                    <div key={property.id} className="p-2">
                      <PropertyCard property={property} />
                      <div className="px-2 pb-2">
                        <Button 
                          className="w-full mt-2"
                          onClick={() => handlePropertyClick(property.id)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}