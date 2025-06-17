import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Square, MapPin, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyMap from "@/components/PropertyMap";

// This would be fetched from an API in a real application
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
    description: "Stunning modern villa with direct waterfront access and breathtaking views. This luxurious property features floor-to-ceiling windows, an open concept living area, chef's kitchen, and expansive outdoor entertaining spaces. The master suite includes a spa-like bathroom and private balcony overlooking the water.",
    features: [
      "Waterfront Property",
      "Private Pool",
      "Floor-to-ceiling Windows",
      "Chef's Kitchen",
      "Home Automation System",
      "Outdoor Kitchen",
      "Private Dock"
    ],
    yearBuilt: 2018,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1000&auto=format&fit=crop",
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
    description: "Upscale downtown condo in the heart of the city. This elegant unit offers high-end finishes, an open floor plan, and incredible city views. Building amenities include a 24-hour concierge, fitness center, rooftop terrace, and secured parking.",
    features: [
      "City Views",
      "Concierge Service",
      "Fitness Center Access",
      "Rooftop Terrace",
      "Secure Parking",
      "Hardwood Floors",
      "Stainless Steel Appliances"
    ],
    yearBuilt: 2015,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1000&auto=format&fit=crop",
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
    description: "Perfect family home in a quiet, family-friendly neighborhood. This spacious residence offers a large backyard, updated kitchen, finished basement, and multiple living areas. Nearby parks, excellent schools, and easy access to shopping and dining.",
    features: [
      "Large Backyard",
      "Finished Basement",
      "Updated Kitchen",
      "Multiple Living Areas",
      "Two-car Garage",
      "Central Heating and Cooling",
      "Fireplace"
    ],
    yearBuilt: 2005,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1000&auto=format&fit=crop",
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
    description: "Charming townhouse in the historic district featuring original architectural details and modern updates. This beautiful home includes a private courtyard, renovated kitchen, hardwood floors throughout, and a cozy fireplace. Walking distance to local restaurants, shops, and attractions.",
    features: [
      "Historic District",
      "Private Courtyard",
      "Original Hardwood Floors",
      "Updated Kitchen",
      "Fireplace",
      "Walk-up Attic",
      "Period Details"
    ],
    yearBuilt: 1910,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1000&auto=format&fit=crop",
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
    description: "Stylish urban apartment in a trendy neighborhood. This contemporary unit features an open concept design, modern kitchen, in-unit laundry, and a private balcony. Building offers a communal rooftop space and is steps away from restaurants, nightlife, and public transportation.",
    features: [
      "Private Balcony",
      "In-unit Laundry",
      "Stainless Steel Appliances",
      "Quartz Countertops",
      "Rooftop Access",
      "Bike Storage",
      "Pet Friendly"
    ],
    yearBuilt: 2020,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527359443443-84a48aec73d2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597358371607-5a8e97940881?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=1000&auto=format&fit=crop",
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
    description: "Luxurious mountain retreat with breathtaking views. This stunning property features vaulted ceilings, a stone fireplace, gourmet kitchen, and expansive outdoor living spaces. Perfect as a year-round residence or vacation home with easy access to skiing, hiking, and outdoor activities.",
    features: [
      "Mountain Views",
      "Stone Fireplace",
      "Vaulted Ceilings",
      "Gourmet Kitchen",
      "Hot Tub",
      "Ski Storage",
      "Heated Driveway"
    ],
    yearBuilt: 2012,
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610057099257-7b35a25610c8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1000&auto=format&fit=crop",
    ],
    position: { lat: 40.7528, lng: -73.9760 }
  },
];

export default function PropertyDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any | null>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProperty = () => {
      const foundProperty = MOCK_PROPERTIES.find(p => p.id === id);
      setProperty(foundProperty || null);
    };
    
    fetchProperty();
  }, [id]);
  
  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Property not found</h2>
        <p className="mt-2 text-gray-500">The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button className="mt-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Listings
          </Button>
        </Link>
      </div>
    );
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Listings
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <div className="text-2xl font-semibold text-blue-600 mt-2 sm:mt-0">
                {formatPrice(property.price)}
              </div>
            </div>
            
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{property.address}</span>
            </div>
            
            <div className="flex flex-wrap gap-4 text-gray-700">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2 text-gray-500" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-gray-500" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2 text-gray-500" />
                <span>{property.area} sq ft</span>
              </div>
            </div>
          </div>
          
          <PropertyGallery images={property.images} title={property.title} />
          
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About this property</h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Features & Amenities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {property.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-500 text-sm">Property Type</div>
                  <div className="font-medium">{property.type}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-500 text-sm">Year Built</div>
                  <div className="font-medium">{property.yearBuilt}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-500 text-sm">Lot Size</div>
                  <div className="font-medium">0.25 acres</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-500 text-sm">Heating</div>
                  <div className="font-medium">Central</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-500 text-sm">Cooling</div>
                  <div className="font-medium">Central</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-500 text-sm">Parking</div>
                  <div className="font-medium">2 Car Garage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" 
                  alt="Agent" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-medium">Michael Thompson</div>
                  <div className="text-gray-500 text-sm">Senior Real Estate Agent</div>
                  <div className="text-blue-600 text-sm mt-1">View Profile</div>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <Button className="w-full">Request a Tour</Button>
                <Button variant="outline" className="w-full">Contact Agent</Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="flex-1 justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Save
                </Button>
                <Button variant="ghost" size="icon" className="flex-1 justify-center">
                  <Share className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-64 sm:h-72 lg:h-80">
              <h3 className="p-4 border-b border-gray-200 font-medium">Location</h3>
              <div className="h-[calc(100%-57px)]">
                <PropertyMap 
                  properties={[
                    {
                      id: property.id,
                      title: property.title,
                      price: property.price,
                      position: property.position,
                      address: property.address
                    }
                  ]}
                  selectedProperty={property.id}
                  center={property.position}
                  zoom={15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}