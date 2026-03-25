export const COLORS = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
  { label: "Yellow", value: "yellow" },
  { label: "Purple", value: "purple" },
  { label: "Orange", value: "orange" },
  { label: "Pink", value: "pink" },
  { label: "Brown", value: "brown" },
  { label: "Gray", value: "gray" },
];

export const SIZES = [
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" },
  { label: "X-Large", value: "x-large" },
];

export const CATEGORIES = [
  { label: "Clothing", value: "clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Home & Garden", value: "home-garden" },
  { label: "Books", value: "books" },
  { label: "Toys", value: "toys" },
  { label: "Sports", value: "sports" },
  { label: "Health & Beauty", value: "health-beauty" },
  { label: "Automotive", value: "automotive" },
  { label: "Other", value: "other" },
];

export const AVAILABILITY = [
  { label: "In Stock", value: "in-stock" },
  { label: "Out of Stock", value: "out-of-stock" },
  { label: "Pre-Order", value: "pre-order" },
];

export const RATINGS = [
  { label: "1 Star", value: "1" },
  { label: "2 Stars", value: "2" },
  { label: "3 Stars", value: "3" },
  { label: "4 Stars", value: "4" },
  { label: "5 Stars", value: "5" },
];

export const PRICE_RANGES = [
  { label: "$0 - $50", value: "0-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "$200 - $500", value: "200-500" },
  { label: "$500+", value: "500+" },
];

export const BRANDS = [
  { label: "Brand A", value: "brand-a" },
  { label: "Brand B", value: "brand-b" },
  { label: "Brand C", value: "brand-c" },
  { label: "Brand D", value: "brand-d" },
];

export const MATERIALS = [
  { label: "Cotton", value: "cotton" },
  { label: "Polyester", value: "polyester" },
  { label: "Leather", value: "leather" },
  { label: "Wood", value: "wood" },
  { label: "Metal", value: "metal" },
  { label: "Plastic", value: "plastic" },
];

export const sortOptions = [
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Customer Reviews", value: "reviews" },
  { label: "Best Sellers", value: "best-sellers" },
  { label: "Alphabetical: A-Z", value: "alpha-asc" },
  { label: "Alphabetical: Z-A", value: "alpha-desc" },
];

// sanity schema format exports
//format compatible with sanity schema for filters and sort options

// colors fomatted for sanity schema
export const SANITY_COLORS = COLORS.map((color) => ({
  title: color.label,
  value: color.value,
}));
// sizes formatted for sanity schema
export const SANITY_SIZES = SIZES.map((size) => ({
  title: size.label,
  value: size.value,
}));
// categories formatted for sanity schema
export const SANITY_CATEGORIES = CATEGORIES.map((category) => ({
  title: category.label,
  value: category.value,
}));
// availability formatted for sanity schema
export const SANITY_AVAILABILITY = AVAILABILITY.map((status) => ({
  title: status.label,
  value: status.value,
}));
// ratings formatted for sanity schema
export const SANITY_RATINGS = RATINGS.map((rating) => ({
  title: rating.label,
  value: rating.value,
}));
// price ranges formatted for sanity schema
export const SANITY_PRICE_RANGES = PRICE_RANGES.map((range) => ({
  title: range.label,
  value: range.value,
}));
// brands formatted for sanity schema
export const SANITY_BRANDS = BRANDS.map((brand) => ({
  title: brand.label,
  value: brand.value,
}));
// materials formatted for sanity schema
export const SANITY_MATERIALS = MATERIALS.map((material) => ({
  title: material.label,
  value: material.value,
}));
// sort options formatted for sanity schema
export const SANITY_SORT_OPTIONS = sortOptions.map((option) => ({
  title: option.label,
  value: option.value,
}));
// all filters formatted for sanity schema
export const SANITY_FILTERS = {
  colors: SANITY_COLORS,
  sizes: SANITY_SIZES,
  categories: SANITY_CATEGORIES,
  availability: SANITY_AVAILABILITY,
  ratings: SANITY_RATINGS,
  priceRanges: SANITY_PRICE_RANGES,
  brands: SANITY_BRANDS,
  materials: SANITY_MATERIALS,
  sortOptions: SANITY_SORT_OPTIONS,
};
