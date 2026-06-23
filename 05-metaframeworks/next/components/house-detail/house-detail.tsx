import { House } from "@/types";
import { env } from "@/lib/env";
import { Bath, Bed, House as HouseIcon } from "lucide-react";
import { HouseDetailHero } from "./house-detail-hero";
import { HouseDetailOverview } from "./house-detail-overview";
import { HouseDetailAmenities } from "./house-detail-amenities";
import { HouseDetailReviews } from "./house-detail-reviews";
import { HouseDetailPriceCard } from "./house-detail-price-card";

interface Props {
  house: House;
}

export function HouseDetail(props: Props) {
  const { house } = props;
  const imageUrl = `${env.IMAGE_URL}${house.image}`;
  const avgRating =
    house.reviews.length > 0
      ? (
          house.reviews.reduce((sum, r) => sum + r.rating, 0) /
          house.reviews.length
        ).toFixed(1)
      : null;

  const houseCharacteristics = [
    {
      icon: HouseIcon,
      label: "Habitaciones",
      value: house.bedrooms,
    },

    {
      icon: Bed,
      label: "Camas",
      value: house.beds,
    },
    {
      icon: Bath,
      label: "Baños",
      value: house.bathrooms,
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-16">
      <HouseDetailHero
        imageUrl={imageUrl}
        name={house.name}
        country={house.country}
        city={house.city}
        address={house.address}
        avgRating={avgRating}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <HouseDetailOverview
            description={house.description}
            houseCharacteristics={houseCharacteristics}
          />
          <HouseDetailAmenities amenities={house.amenities} />
          <HouseDetailReviews reviews={house.reviews} />
        </div>
        <HouseDetailPriceCard
          price={house.price}
          avgRating={avgRating}
          reviewCount={house.reviews.length}
        />
      </div>
    </div>
  );
}
