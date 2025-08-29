import { locales } from "@/i18n";

export type Locale = (typeof locales)[number];

export type Pathnames = {
  "/": "/";
  "/about": "/about";
  "/services": "/services";
  "/contact": "/contact";
  "/portfolio": "/portfolio";
  "/blog": "/blog";
};

export type AppPathnames = keyof Pathnames;
