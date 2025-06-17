import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import {
  Slider
} from "@/components/ui/slider";

interface FilterBarProps {
  onFilterChange: (filters: {
    location: string;
    type: string;
    minPrice: number;
    maxPrice: number;
    beds: string;
    baths: string;
  }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");

  const applyFilters = () => {
    onFilterChange({
      location,
      type,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      beds,
      baths,
    });
  };

  const resetFilters = () => {
    setLocation("");
    setType("");
    setPriceRange([0, 2000000]);
    setBeds("");
    setBaths("");
    onFilterChange({
      location: "",
      type: "",
      minPrice: 0,
      maxPrice: 2000000,
      beds: "",
      baths: ""
    });
  };

  const handleToggleMap = () => {
    navigate("/map");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Location, neighborhood, or address"
            className="pl-9"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={2000000}
                    step={50000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Bedrooms</h3>
                  <Select value={beds} onValueChange={setBeds}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Bathrooms</h3>
                  <Select value={baths} onValueChange={setBaths}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <SheetFooter>
                <div className="flex w-full justify-between">
                  <Button variant="outline" onClick={resetFilters}>Reset</Button>
                  <SheetClose asChild>
                    <Button onClick={applyFilters}>Apply Filters</Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          
          <Button onClick={applyFilters}>Search</Button>
        </div>
      </div>
      
      {(location || type || beds || baths || priceRange[0] > 0 || priceRange[1] < 2000000) && (
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="text-sm text-gray-500 mt-1">Active filters:</div>
          
          {location && (
            <Badge onDelete={() => {
              setLocation("");
              applyFilters();
            }}>
              Location: {location}
            </Badge>
          )}
          
          {type && (
            <Badge onDelete={() => {
              setType("");
              applyFilters();
            }}>
              Type: {type}
            </Badge>
          )}
          
          {(priceRange[0] > 0 || priceRange[1] < 2000000) && (
            <Badge onDelete={() => {
              setPriceRange([0, 2000000]);
              applyFilters();
            }}>
              Price: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
            </Badge>
          )}
          
          {beds && (
            <Badge onDelete={() => {
              setBeds("");
              applyFilters();
            }}>
              {beds}+ Beds
            </Badge>
          )}
          
          {baths && (
            <Badge onDelete={() => {
              setBaths("");
              applyFilters();
            }}>
              {baths}+ Baths
            </Badge>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-gray-500"
            onClick={resetFilters}
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  onDelete: () => void;
}

function Badge({ children, onDelete }: BadgeProps) {
  return (
    <div className="flex items-center gap-1 bg-blue-50 text-blue-700 text-sm rounded-full px-3 py-1">
      {children}
      <button onClick={onDelete} className="ml-1 text-blue-400 hover:text-blue-700">
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}