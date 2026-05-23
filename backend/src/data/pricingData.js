const pricingData = [
  {
    name: "Starter",
    subtitle: "Basic",
    oneTime: "$1497 / one-time",
    price: "$197",
    period: "/mo",
    features: ["AI Voice Agent", "Booking Automation", "Lead automation"],
    popular: false,
  },
  {
    name: "Growth",
    subtitle: "Pro",
    oneTime: "$1997 / one-time",
    price: "$297",
    period: "/mo",
    features: ["Everything in Starter", "Review Automation", "Professional Website"],
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "Pro Max",
    oneTime: "$2777 / one-time",
    price: "$497",
    period: "/mo",
    features: ["All in one", "Professional Website"],
    popular: false,
  },
];

module.exports = pricingData;
