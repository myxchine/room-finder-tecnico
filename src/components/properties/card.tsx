export default function PropertyCard({ property }: { property: Property }) {
  return (
    <a
      href={property.property_url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-4 w-full"
    >
      <img
        src={property.image_url}
        alt="property"
        className="w-full object-cover aspect-[4/3] rounded-md"
      />
      <h3 className="line-clamp-2">Room in {property.address}</h3>
      <p className="text-xl font-bold mt-auto">{property.price}</p>
      <div className="flex flex-wrap gap-2">
        <p className="pill">{property.beds} rooms</p>
        <p className="pill">{property.occupancy_details}</p>
        {property.max_guests && (
          <p className="pill">
            {property.max_guests}{" "}
            {property.max_guests > 1 ? "people" : "person"}
          </p>
        )}
        <p className="pill">
          Smoking {property.smoking_allowed ? null : "not"} allowed
        </p>
        {property.availability &&
        !property.availability.startsWith("Minimum") ? (
          <p className="pill"> Available from {property.availability}</p>
        ) : (
          <p className="pill">{property.availability}</p>
        )}
        {property.expenses_included ? (
          <p className="pill">Expenses included</p>
        ) : (
          <p className="pill">Expenses not included</p>
        )}
      </div>
    </a>
  );
}
