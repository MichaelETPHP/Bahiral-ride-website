import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const appCss = "/assets/styles-KYqZy97-.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bahiran Ride — Taxi & Ride-Hailing App in Ethiopia" },
      {
        name: "description",
        content: "Book affordable taxis in Bahir Dar & Addis Ababa instantly. Economy, Bajaj & Premium rides from ETB 20. Download Ethiopia's fastest ride-hailing app today."
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#00C170" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/icon.png" },
      { rel: "apple-touch-icon", href: "/icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Manrope:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsx("head", { suppressHydrationWarning: true, children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { suppressHydrationWarning: true, children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter = () => import("./index-BQMUNBrz.js");
const SITE_URL = "https://bahiranride.com";
const OG_IMAGE = `${SITE_URL}/icon.png`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "MobileApplication",
    name: "Bahiran Ride",
    alternateName: ["Bahiran", "Bahiran Taxi"],
    description: "Fast, affordable ride-hailing taxi service in Bahir Dar and Addis Ababa, Ethiopia. Book Economy, Standard, Classic, Bajaj or Premium rides in seconds.",
    url: SITE_URL,
    operatingSystem: "Android, iOS",
    applicationCategory: "TravelApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ETB"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000",
      bestRating: "5",
      worstRating: "1"
    },
    areaServed: [{
      "@type": "City",
      name: "Bahir Dar",
      addressCountry: "ET"
    }, {
      "@type": "City",
      name: "Addis Ababa",
      addressCountry: "ET"
    }]
  }, {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Bahiran Ride",
    description: "Ethiopia's modern ride-hailing app for fast, affordable taxis.",
    url: SITE_URL,
    telephone: "9040",
    priceRange: "ETB 20 – ETB 80",
    currenciesAccepted: "ETB",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahir Dar",
      addressRegion: "Amhara",
      addressCountry: "ET"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.5742",
      longitude: "37.3614"
    },
    areaServed: ["Bahir Dar", "Addis Ababa"],
    serviceType: ["Taxi Service", "Ride Hailing", "Bajaj Hire"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000"
    }
  }]
};
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Bahiran Ride — Taxi & Ride-Hailing App in Ethiopia"
    }, {
      name: "description",
      content: "Book affordable taxis in Bahir Dar & Addis Ababa instantly. Economy, Bajaj & Premium rides from ETB 20. Download Ethiopia's fastest ride-hailing app today."
    }, {
      name: "keywords",
      content: "taxi Ethiopia, ride hailing Ethiopia, taxi app Ethiopia, taxi Bahir Dar, taxi Addis Ababa, affordable taxi Ethiopia, Bahiran Ride, Bahiran taxi, bajaj Ethiopia, bajaj Bahir Dar"
    }, {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    }, {
      name: "author",
      content: "Bahiran Ride"
    }, {
      name: "theme-color",
      content: "#00C170"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:site_name",
      content: "Bahiran Ride"
    }, {
      property: "og:url",
      content: SITE_URL
    }, {
      property: "og:title",
      content: "Bahiran Ride — Taxi App in Ethiopia | Bahir Dar & Addis Ababa"
    }, {
      property: "og:description",
      content: "Book affordable taxis in Bahir Dar & Addis Ababa in seconds. Economy, Bajaj & Premium rides from ETB 20."
    }, {
      property: "og:image",
      content: OG_IMAGE
    }, {
      property: "og:locale",
      content: "en_ET"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Bahiran Ride — Fast, Affordable Taxis in Ethiopia"
    }, {
      name: "twitter:description",
      content: "Book taxis in Bahir Dar & Addis Ababa in seconds. Economy, Bajaj & Premium rides from ETB 20. Download now."
    }, {
      name: "twitter:image",
      content: OG_IMAGE
    }, {
      name: "mobile-web-app-capable",
      content: "yes"
    }, {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }, {
      name: "apple-mobile-web-app-title",
      content: "Bahiran Ride"
    }],
    links: [{
      rel: "canonical",
      href: SITE_URL
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
