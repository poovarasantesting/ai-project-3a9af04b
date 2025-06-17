import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import PropertyGrid from "@/components/PropertyGrid";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Sample property data - in a real app, this would come from an API
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
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    ],
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
  },
];

export default function HomePage() {
  const [filteredProperties, setFilteredProperties] = useState(MOCK_PROPERTIES);
  
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Featured Properties</h1>
        <Link to="/map">
          <Button variant="outline" className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            View Map
          </Button>
        </Link>
      </div>
      
      <FilterBar onFilterChange={handleFilterChange} />
      
      <PropertyGrid properties={filteredProperties} />
    </div>
  );
}