import PropertyCard from "@/components/PropertyCard";

interface PropertyGridProps {
  properties: Array<{
    id: string;
    title: string;
    price: number;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
    images: string[];
  }>;
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-medium text-gray-700">No properties found matching your criteria</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}