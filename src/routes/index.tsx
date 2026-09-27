import { createFileRoute } from "@tanstack/react-router";
import { CafeSite } from "@/components/cafe-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chai Ho Jaye | Café in Kapurthala" },
      {
        name: "description",
        content:
          "Chai Ho Jaye — a café in Tagore Nagar, Kapurthala offering dine-in, kerbside pickup and no-contact delivery.",
      },
      { property: "og:title", content: "Chai Ho Jaye | Café in Kapurthala" },
      {
        property: "og:description",
        content:
          "Chai Ho Jaye — a café in Tagore Nagar, Kapurthala offering dine-in, kerbside pickup and no-contact delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CafeSite,
});
