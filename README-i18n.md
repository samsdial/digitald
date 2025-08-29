# Sistema de Internacionalización (i18n)

Este proyecto está configurado para soportar múltiples idiomas usando `next-intl`. El español es el idioma por defecto y el inglés está disponible como idioma secundario.

## Estructura de URLs

- **Español (por defecto)**: `localhost:3000/` → redirige a `localhost:3000/es`
- **Inglés**: `localhost:3000/en`

## Configuración

### Archivos de configuración principales:

1. **`i18n.ts`** - Configuración de locales y tipos TypeScript
2. **`middleware.ts`** - Middleware para manejar las rutas internacionalizadas
3. **`next.config.ts`** - Configuración de Next.js con next-intl
4. **`i18n/request.ts`** - Configuración del servidor para next-intl

### Estructura de archivos de mensajes:

```
messages/
├── es.json    # Mensajes en español
└── en.json    # Mensajes en inglés
```

## Cómo usar las traducciones

### En componentes del servidor:

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("navigation");

  return (
    <nav>
      <a href="/">{t("home")}</a>
      <a href="/about">{t("about")}</a>
    </nav>
  );
}
```

### En componentes del cliente:

```tsx
"use client";

import { useTranslations } from "next-intl";

export default function MyClientComponent() {
  const t = useTranslations("hero");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
    </div>
  );
}
```

### Cambiar de idioma:

El componente `LanguageSwitcher` está disponible en la navegación y permite cambiar entre idiomas:

```tsx
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

// Se incluye automáticamente en el componente Navigation
```

## Agregar nuevos idiomas

1. Agregar el nuevo locale en `i18n.ts`:

```ts
export const locales = ["en", "es", "fr"] as const;
export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};
```

2. Crear el archivo de mensajes en `messages/fr.json`

3. Actualizar el middleware si es necesario

## Estructura de archivos de mensajes

Los archivos de mensajes están organizados por secciones:

```json
{
  "navigation": {
    "home": "Inicio",
    "about": "Acerca de"
  },
  "hero": {
    "title": "Título principal",
    "subtitle": "Subtítulo"
  },
  "footer": {
    "description": "Descripción del footer"
  }
}
```

## Componentes disponibles

- **`Navigation`** - Navegación principal con selector de idioma
- **`LanguageSwitcher`** - Selector de idioma independiente
- **`HeroSection`** - Sección hero con traducciones
- **`Footer`** - Footer con traducciones

## SEO y metadatos

Los metadatos se generan automáticamente basándose en el locale actual:

```tsx
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Título en español" : "Title in English",
    description:
      locale === "es" ? "Descripción en español" : "Description in English",
  };
}
```

## Rutas dinámicas

Para crear páginas que soporten múltiples idiomas, usa la estructura:

```
app/[locale]/
├── page.tsx           # Página principal
├── about/
│   └── page.tsx       # Página about
├── services/
│   └── page.tsx       # Página services
└── [slug]/
    └── page.tsx       # Páginas dinámicas
```

## Comandos útiles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Notas importantes

1. El español es el idioma por defecto, por lo que las URLs en español no incluyen el prefijo `/es`
2. Las URLs en inglés siempre incluyen el prefijo `/en`
3. El middleware redirige automáticamente `localhost:3000/` a `localhost:3000/es`
4. Todos los componentes que usen traducciones deben estar dentro del layout `[locale]`
