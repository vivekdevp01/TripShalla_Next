export const headerConfig = {
  "/": {
    type: "base",
  },

  "/packages": {
    variant: "listing",
    title: "All Adventure Packages",
    subtitle: "Treks • Camps • Himalayan Experiences",
    bgImage: "/src/assets/9.jpg",
  },

  "/tour": {
    variant: "tour",
    title: "Tour Details",
    bgImage: "/src/assets/1.jpg",
  },

  trek: {
    variant: "tour",
    dynamic: true, // title will come from TrekDetails
    bgImage: "/src/assets/1.jpg",
  },

  default: {
    variant: "default",
    title: "ABOUT US",
    bgImage: "/src/assets/9.jpg",
  },
};
