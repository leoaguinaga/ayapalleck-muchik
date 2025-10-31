# Check-In Page

## Descripción
Página de registro de ingreso (check-in) para habitaciones del hotel. Permite registrar la entrada de huéspedes con todos los detalles de la reserva y productos adicionales.

## Estructura de Componentes

### `/app/(routes)/check-in/[checkInId]/`

#### `page.tsx`
Página principal que organiza el layout en 2 columnas:
- **Columna izquierda (2/3)**: Información de la habitación y formulario
- **Columna derecha (1/3)**: Resumen de la reserva (sticky)

#### Componentes:

**1. RoomInfo**
- Muestra información básica de la habitación
- Props: `roomNumber`, `roomType`, `nextReservation`

**2. RoomDetails**
- Muestra descripción detallada de la habitación
- Props: `description`

**3. FormCheckIn**
- Formulario principal de registro de ingreso
- Secciones:
  - **Registrar ingreso**: Selección de huésped y duración
  - **Detalles de la reserva**: Modalidad, cargos adicionales, adelanto
  - **Productos extras**: Tabla para añadir productos del inventario
- Props: `roomId`, `onSummaryChange`

**4. BookingSummary**
- Resumen en tiempo real de la reserva
- Muestra: servicios, productos, descuentos, total
- Props: `reservationType`, `duration`, `basePrice`, `products`, `discount`, `taxiFee`, `advance`, `total`

**5. ProductsTable**
- Tabla para seleccionar productos del inventario
- Permite especificar cantidad y añadir al resumen
- Props: `products`, `onAddProduct`

## Flujo de Datos

1. El usuario completa el formulario en `FormCheckIn`
2. Cada cambio actualiza el estado local y llama a `onSummaryChange`
3. `BookingSummary` recibe los datos actualizados y los muestra en tiempo real
4. Al enviar, se registra el check-in y redirige a la lista

## Características

- ✅ Formulario con validación (Zod + React Hook Form)
- ✅ Resumen en tiempo real (sticky sidebar)
- ✅ Selección de huéspedes
- ✅ Cálculo automático de totales
- ✅ Añadir productos del inventario
- ✅ Descuentos y cargos adicionales
- ✅ Responsive design (columnas en desktop, stack en mobile)

## Datos Mock

Actualmente usa datos de ejemplo. Reemplazar con llamadas a API:
- `mockGuests`: Lista de huéspedes
- `mockProducts`: Productos del inventario
- `roomData`: Información de la habitación

## Uso

```typescript
// Navegar a check-in de habitación específica
router.push('/check-in/101')
```
