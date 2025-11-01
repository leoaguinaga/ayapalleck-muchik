# Bookings Calendar Page

## Descripción
Página de calendario de reservas que muestra todas las reservas del hotel en una vista semanal tipo Gantt. Permite ver el estado de ocupación de las habitaciones y crear nuevas reservas.

## Características Principales

### 📅 Vista de Calendario Semanal
- **Rango de fechas**: Muestra 7 días desde hoy (o desde la semana seleccionada)
- **Navegación**: Botones para avanzar/retroceder semanas
- **Día actual**: Resaltado con color especial
- **Formato español**: Fechas en formato "Día DD Mes" (ej: "Vie 31 Oct")

### 🏨 Visualización de Reservas
- **Grid de habitaciones**: Cada fila representa una habitación
- **Bloques de color**: Las reservas se muestran como bloques que abarcan múltiples días
- **Colores por estado**:
  - 🟢 Verde: Reservas confirmadas
  - 🔵 Azul: Reservas en proceso
  - 🔴 Rojo: Reservas pendientes/urgentes
- **Información**: Nombre del huésped visible en cada bloque

### ➕ Crear Nueva Reserva
- **Click en celda vacía**: Abre modal para crear reserva
- **Datos pre-llenados**: Habitación y fecha automáticamente seleccionadas
- **Formulario completo**:
  - Selección de huésped (con opción de crear nuevo)
  - Fechas de check-in y check-out
  - Tipo de reserva (Por noche/Por horas)
  - Duración
  - Descuentos y cargos adicionales
  - Adelanto
  - Notas adicionales
- **Validación**: Fecha de salida debe ser posterior a entrada

## Estructura de Componentes

### `/app/(routes)/bookings/`

#### `page.tsx`
Página principal que renderiza el componente BookingCalendar

#### Componentes:

**1. BookingCalendar**
- Componente principal del calendario
- Maneja navegación entre semanas
- Renderiza grid de habitaciones y fechas
- Gestiona clicks para crear reservas
- Props: ninguna (self-contained)

**2. CreateBookingModal**
- Modal para crear nuevas reservas
- Formulario con validación
- Props:
  - `isOpen`: boolean
  - `onClose`: función
  - `roomNumber`: string (opcional)
  - `selectedDate`: string (opcional)

## Utilidades

### `/lib/date-utils.ts`
Funciones helper para manejo de fechas:
- `getNext7Days()`: Obtiene array de próximos 7 días
- `formatDateSpanish()`: Formatea fecha en español
- `isSameDay()`: Compara si dos fechas son el mismo día
- `formatDateKey()`: Formatea fecha como YYYY-MM-DD

## Datos Mock

### Reservas de Ejemplo:
```typescript
{
  id: 'BK-001',
  guestName: 'Juan Perez',
  roomNumber: '101',
  checkIn: '2025-10-23',
  checkOut: '2025-10-24',
  status: 'confirmed',
  color: '#22c55e'
}
```

### Habitaciones:
16 habitaciones (101-116) de diferentes tipos

## Lógica de Renderizado

### Cálculo de Ancho de Reservas:
Las reservas se renderizan como bloques que abarcan múltiples celdas:
- Se calcula cuántos días ocupa la reserva en la semana visible
- El ancho se ajusta dinámicamente: `width * 100% + gaps`
- Solo se renderiza en el primer día de la reserva en la semana

### Detección de Celdas Ocupadas:
- Cada celda verifica si tiene reservas activas
- Se muestra el primer bloque de reserva encontrado
- Celdas vacías son clickeables para crear reservas

## Interacciones

### Click en Celda Vacía:
1. Usuario hace click en habitación + fecha sin reserva
2. Se guarda habitación y fecha seleccionada
3. Se abre modal CreateBookingModal
4. Campos de habitación y fecha vienen pre-llenados

### Click en Reserva Existente:
(Por implementar)
- Podría abrir modal para ver/editar detalles
- Mostrar información completa de la reserva

## Navegación de Semanas

### Funcionamiento:
- `weekOffset` controla qué semana se muestra
- Offset 0 = semana actual
- Offset -1 = semana anterior
- Offset +1 = semana siguiente
- Botones < > modifican el offset

## Próximos Pasos (Para Producción)

1. **Backend Integration**:
   - Conectar con API para obtener reservas reales
   - Endpoint GET /api/bookings?from=YYYY-MM-DD&to=YYYY-MM-DD
   - Endpoint POST /api/bookings para crear reservas

2. **Funcionalidades Adicionales**:
   - Click en reserva existente para ver/editar detalles
   - Drag & drop para mover reservas
   - Filtros por estado, tipo de habitación
   - Leyenda de colores
   - Export a PDF/Excel

3. **Optimizaciones**:
   - Lazy loading de semanas
   - Cache de datos
   - Skeleton loading states

4. **UX Improvements**:
   - Tooltips al hacer hover sobre reservas
   - Confirmación antes de crear reserva
   - Notificaciones de conflictos de fechas
   - Búsqueda rápida de habitaciones

## Responsive Design

- ✅ Scroll horizontal en móviles
- ✅ Min-width para mantener legibilidad
- ✅ Modal responsive con max-height

## Ejemplo de Uso

```typescript
// La página ya está lista para usar
// Navega a /bookings para verla
router.push('/bookings')

// Para crear una reserva:
// 1. Click en cualquier celda vacía
// 2. Completa el formulario
// 3. Submit
```

¡La página de reservas está completamente funcional y lista para usar! 🎉
