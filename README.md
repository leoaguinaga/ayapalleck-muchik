# Ayapalleck Muchik Back Office

Sistema de gestión operativa para hospedaje, diseñado para centralizar la operación diaria del hotel en una sola plataforma: ingresos, estadías, reservas, solicitudes, habitaciones, huéspedes, usuarios e inventario.

## Resumen Comercial

Este sistema permite que recepción, administración y operación trabajen con una vista unificada del negocio, reduciendo tiempos de atención, errores manuales y pérdida de control en procesos críticos como check-in, check-out y cobros.

### Qué problema resuelve

- Información dispersa entre cuadernos, chats y hojas de cálculo.
- Procesos lentos en recepción (ingresos, salidas, asignación de habitaciones).
- Falta de visibilidad sobre ocupación, pendientes y caja.
- Control débil de inventario y consumos durante la estadía.

### Propuesta de valor

- `1 sola plataforma` para la operación diaria.
- `Atención más rápida` en recepción.
- `Mayor control` de cobros, cargos y pagos por estadía.
- `Visibilidad operativa` con panel y KPIs.
- `Mejor coordinación` entre recepción, limpieza y administración.

## Módulos Principales

### Panel de control (Dashboard)

- KPIs operativos y resumen visual.
- Gráficos de actividad y distribución.
- Vista de clientes y seguimiento de limpieza.

### Ingresos (Check-in)

- Búsqueda y filtrado de habitaciones.
- Filtros por tipo, ocupación y estado de limpieza.
- Flujo pensado para acelerar la asignación de habitaciones.

### Estadías / Salidas (Check-out)

- Gestión de estadías activas y próximas salidas.
- Filtros por hoy, mañana, atrasadas y búsqueda rápida.
- Detalle de estadía con:
  - cargos
  - productos consumidos
  - pagos
  - saldo pendiente
  - extensión de estadía
  - línea de tiempo de actividad
  - cierre de check-out y generación de recibo

### Reservas y Solicitudes

- Gestión de reservas e historial.
- Módulo de solicitudes con vista `Kanban` para seguimiento comercial/operativo.
- Revisión, aprobación, rechazo y confirmación de solicitudes.
- Validación de disponibilidad de habitaciones durante el proceso.

### Habitaciones

- Catálogo de habitaciones y detalle por habitación.
- Estado operativo (`disponible`, `ocupada`, `sucia`).
- Historial/actividad reciente por habitación.
- Acciones de creación, actualización y baja lógica.

### Huéspedes (Clientes)

- Registro y gestión de huéspedes.
- Datos de identificación y contacto.
- Historial de reservas/estadías por cliente.

### Usuarios y Gestión

- Gestión de usuarios internos.
- Roles operativos (administración, recepción, housekeeping).
- Organización por turnos.

### Inventario

- Catálogo de productos.
- Movimientos de inventario.
- Historial de movimientos.
- Alertas de stock bajo.
- Soporte para productos de venta y almacenamiento.

## Beneficios para el negocio

- Mejora la experiencia del huésped al reducir tiempos de espera.
- Aumenta el control del ingreso por estadía (cargos + pagos).
- Facilita la supervisión de la operación en tiempo real.
- Reduce errores de registro y duplicidad de información.
- Estandariza procesos entre turnos y áreas.

## Flujo Operativo (Ejemplo)

1. Llega una `solicitud` o `reserva`.
2. Se valida disponibilidad y se asigna habitación.
3. Se realiza el `check-in`.
4. Durante la estadía se registran `cargos`, `productos` y `pagos`.
5. Se ejecuta el `check-out` con validación de saldo.
6. Se envía a limpieza y la habitación vuelve a disponibilidad.

## Stack Tecnológico

- `Next.js 16` + `React 19`
- `TypeScript`
- `Prisma` + `PostgreSQL`
- `Better Auth` (autenticación)
- `TanStack Query` / `TanStack Table`
- `Tailwind CSS` + `Radix UI`

## Estado del Proyecto

El repositorio contiene una base sólida de back-office con módulos operativos y de gestión. Algunas vistas están en evolución/prototipo y usan datos de ejemplo para validar UX y flujo antes de integrarlas completamente con API/base de datos.

## Puesta en Marcha (Equipo Técnico)

### Requisitos

- Node.js 20+
- PostgreSQL
- pnpm

### Variables de entorno

Crear `.env` con la conexión a PostgreSQL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/ayapalleck_db?schema=public"
```

### Instalación

```bash
pnpm install
pnpm prisma generate
pnpm prisma migrate dev
pnpm dev
```

## Scripts disponibles

- `pnpm dev` -> entorno local
- `pnpm build` -> compilación de producción
- `pnpm start` -> ejecutar build

## Enfoque de uso recomendado

Este README está orientado a presentación comercial del sistema. Si necesitas documentación técnica más detallada (arquitectura, migraciones, modelo de datos o plan de despliegue), conviene mantener un documento separado para el equipo de desarrollo.
