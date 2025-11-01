# Módulo de Solicitudes - Kanban

Este módulo implementa un sistema de gestión de solicitudes de reservas con una interfaz tipo Kanban.

## Características

### 🎯 Vista Kanban
- **6 Estados**: En revisión, Aprobada, Confirmadas, Rechazadas, Expiradas, Canceladas
- **Scroll Horizontal Contenido**: El scroll horizontal está en la parte superior para evitar desplazar toda la página
- **Columnas Colapsables**: Posibilidad de replegar columnas mostrando el nombre en vertical y la cantidad
- **Ordenamiento FIFO**: Las solicitudes se muestran desde las más antiguas a las más recientes
- **Diseños Diferenciados**: Cada estado tiene su propio diseño visual con colores y badges distintivos

### 📋 Tarjetas de Solicitud
Cada tarjeta muestra información según el estado:

- **En revisión**: Resalta el tipo de habitación (amarillo) - Badge "Por revisar"
- **Aprobada**: Resalta las fechas (azul) - Badge "Por confirmar"
- **Confirmada**: Resalta el nombre del cliente (verde) - Badge "Confirmada"
- **Rechazada**: Diseño estándar con borde rojo - Badge "Rechazada"
- **Expirada**: Diseño estándar con borde gris - Badge "Expirada"
- **Cancelada**: Diseño estándar con borde naranja - Badge "Cancelada"

Información mostrada:
- Nombre del cliente
- Tipo de habitación
- Fechas de check-in y check-out con duración en noches
- Tiempo transcurrido desde la creación
- Botón de "Ver" para detalles o disponibilidad

### 🏨 Modal de Disponibilidad (En revisión)
Al hacer clic en una solicitud "En revisión", se muestra un modal especial con:
- Información completa de la solicitud
- Lista de habitaciones disponibles según el tipo y fechas
- Selección de habitación con precio por noche
- Indicador visual de habitaciones limpias (✨)
- Acciones: Asignar habitación o Rechazar solicitud

### 🔍 Modal de Detalles (Otros estados)
Para solicitudes en otros estados:
- Vista detallada de cada solicitud
- Información completa del cliente y reserva
- Acciones contextuales según el estado:
  - **En revisión**: Ver disponibilidad (modal especial)
  - **Aprobada**: Confirmar o Cancelar
  - **Confirmada**: Cancelar Reserva

### ⚡ Controles Globales
- **Contraer todo**: Colapsa todas las columnas
- **Expandir todo**: Expande todas las columnas

## Estructura de Archivos

```
app/(routes)/requests/
├── page.tsx                    # Página principal del módulo
├── types.ts                    # Tipos TypeScript
├── data.ts                     # Datos de ejemplo
├── room-types.ts               # Tipos de habitaciones
├── room-availability.ts        # Lógica de disponibilidad
└── README.md                   # Documentación

components/
├── KanbanColumn/               # Componente de columna Kanban
├── RequestCard/                # Tarjeta de solicitud individual
├── RequestDetailsModal/        # Modal con detalles y acciones
└── RoomAvailabilityModal/      # Modal de disponibilidad de habitaciones
```

## Tipos de Datos

### Request
```typescript
{
  id: string;
  customerName: string;
  roomType: string;
  checkIn: Date;
  checkOut: Date;
  status: RequestStatus;
  createdAt: Date;
}
```

### RequestStatus
- `in-review` - En revisión
- `approved` - Aprobada
- `confirmed` - Confirmada
- `rejected` - Rechazada
- `expired` - Expirada
- `cancelled` - Cancelada

### Room
```typescript
{
  roomNumber: string;
  roomType: string;
  status: 'available' | 'occupied' | 'maintenance';
  price: number;
  isClean: boolean;
}
```

## Flujo de Estados

```
En revisión → Aprobada → Confirmada
    ↓            ↓
Rechazada    Cancelada
```

## Estilos Personalizados

El módulo incluye estilos personalizados para:
- Scrollbar horizontal mejorado (`kanban-scroll`)
- Modo de escritura vertical para columnas colapsadas
- Transiciones suaves en hover
- Bordes de colores según estado
- Resaltado de información relevante por estado

## Lógica de Disponibilidad

La función `checkRoomAvailability` filtra habitaciones según:
- Tipo de habitación solicitado
- Estado disponible
- Habitación limpia

En una implementación real, debería considerar:
- Reservas existentes en el rango de fechas
- Mantenimiento programado
- Bloqueos temporales

## Uso

1. Las solicitudes en estado "En revisión" muestran un modal de disponibilidad al hacer clic
2. El usuario puede seleccionar una habitación disponible
3. Al asignar, la solicitud pasa a estado "Aprobada"
4. Las solicitudes aprobadas pueden confirmarse
5. Las confirmadas pueden cancelarse si es necesario

Todo se maneja mediante modales sin necesidad de navegar a páginas individuales.

## Próximas Mejoras

- [ ] Integración con API backend
- [ ] Drag & drop entre columnas
- [ ] Filtros y búsqueda avanzada
- [ ] Notificaciones en tiempo real
- [ ] Historial de cambios de estado
- [ ] Exportación de reportes
- [ ] Reservas de habitaciones desde disponibilidad
- [ ] Cálculo automático de precio total
- [ ] Sistema de notas y comentarios
- [ ] Alertas de expiración automáticas
