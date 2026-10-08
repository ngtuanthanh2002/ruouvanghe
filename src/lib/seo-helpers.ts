import { siteConfig } from "./site-config";
import type { WineItem } from "./wine-data";
import type { WineArticle } from "./article-data";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LiquorStore",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Cửa Hàng Rượu Vang Hè"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    telephone: siteConfig.contact.hotline,
    email: siteConfig.contact.email,
    priceRange: "$$$",
    currenciesAccepted: "VND",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, QR Pay",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.locations[0].address,
      addressLocality: "Hà Nội",
      addressRegion: "Hà Nội",
      postalCode: "100000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.locations[0].geo.latitude,
      longitude: siteConfig.locations[0].geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:30",
        closes: "22:00",
      },
    ],
    sameAs: siteConfig.socialLinks.map((s) => s.url),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "vi-VN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/san-pham?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http")
        ? crumb.item
        : `${siteConfig.url}${crumb.item}`,
    })),
  };
}

export function generateProductSchema(wine: WineItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}/san-pham/${wine.slug}#product`,
    name: wine.name,
    alternateName: wine.vietnameseName,
    description: wine.description,
    image: [`${siteConfig.url}/images/wines/${wine.slug}.jpg`],
    sku: wine.id,
    mpn: wine.id,
    brand: {
      "@type": "Brand",
      name: wine.winery,
    },
    category: wine.type,
    countryOfOrigin: {
      "@type": "Country",
      name: wine.origin,
    },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/san-pham/${wine.slug}`,
      priceCurrency: "VND",
      price: wine.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: wine.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "VN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnInStore",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "VND",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "VN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "d",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: wine.ratingValue,
      reviewCount: wine.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Vintage (Niên vụ)",
        value: wine.vintage,
      },
      {
        "@type": "PropertyValue",
        name: "Nồng độ cồn",
        value: wine.alcohol,
      },
      {
        "@type": "PropertyValue",
        name: "Dung tích",
        value: wine.volume,
      },
      {
        "@type": "PropertyValue",
        name: "Vùng sản xuất",
        value: wine.region,
      },
      {
        "@type": "PropertyValue",
        name: "Giống nho",
        value: wine.grapes.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Điểm chuyên gia",
        value: wine.criticScore,
      },
    ],
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: WineArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/kienthuc-ruouvang/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/kienthuc-ruouvang/${article.slug}`,
    },
    inLanguage: "vi-VN",
    keywords: article.tags.join(", "),
  };
}
