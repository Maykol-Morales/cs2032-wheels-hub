# cs2032-wheels-hub

> Proyecto del curso **CS2032 – Cloud Computing** · UTEC · 2024-1

**WheelsHub** es un frontend *multi-tenant* para concesionarios de autos. Un mismo sitio atiende a varias marcas y cambia su identidad (nombre, color, logo, carrusel y textos) según el subdominio desde el que se visita:

| Subdominio | Tenant |
|---|---|
| `honda.*` | Honda |
| `ford.*` | Ford |
| `nissan.*` | Nissan |
| cualquier otro | WheelsHub (modo demo) |

La configuración de cada marca vive en `static/<tenant>.json`.

## Funcionalidades

- Catálogo de vehículos y página de detalle (`/vehicles/:id`)
- Registro e inicio de sesión por tenant
- Compra de vehículos con validación de saldo (`wallet`) y stock
- Modo oscuro
- **Modo demo**: sin subdominio de marca, muestra datos de ejemplo y no requiere backend

## Stack

- Gatsby 5 · React 18
- Tailwind CSS · Flowbite React
- Axios
- Backend serverless en AWS (API Gateway + Lambda), multi-tenant por `tenant_id`

## Backend

El sitio consumía tres APIs desplegadas en AWS API Gateway (`/cars`, `/users`, `/purchases`). **Esas APIs ya no están activas**, así que hoy solo funciona el modo demo.

## Ejecución

```bash
npm install
npm run develop   # http://localhost:8000
```

Para probar un tenant en local, configura un subdominio (por ejemplo `honda.localhost`) o cambia el dominio por defecto en `src/hooks/useData.js`.

```bash
npm run build     # build de producción en /public
npm run serve
```

## Estructura

```
src/
├── components/   # Layout, Loading
├── hooks/        # useData (tenant), useUser, useVehicles, useVehicle, usePurchase
├── pages/        # index, vehicles, about, login, register
└── templates/    # detalle de vehículo
static/           # configuración por tenant (default, honda, ford, nissan)
```

## Licencia

[0BSD](LICENSE)
