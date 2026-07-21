const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Allied Shipping Agency",
  description: "Freight Forwarding & Cargo Booking",
  url: "https://allied-shipping-agency.vercel.app",
  telephone: [
    "+92 42 36293017",
    "+92 300 4018802",
  ],
  email: "arshad@alliedshippingpk.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room #3, 1st Floor, Rafiq Plaza, Near Divine Hotel, 8 - Davis Road",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92 42 36293017",
      contactType: "telephone",
    },
    {
      "@type": "ContactPoint",
      telephone: "+92 300 4018802",
      contactType: "mobile",
    },
    {
      "@type": "ContactPoint",
      telephone: "+92 300 4018802",
      contactType: "whatsapp",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}