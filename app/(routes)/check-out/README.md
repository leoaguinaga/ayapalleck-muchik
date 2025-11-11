# Módulo de Estadías (Check-out)

Sistema completo de gestión de check-outs y estadías activas con UX optimizada para velocidad.

## 🔗 Navegación del Módulo

### Vista Principal: `/check-out`
Lista completa de estadías con filtros y acciones masivas.

### Vista Individual: `/check-out/[checkOutId]`
Gestión detallada de una estadía específica:
- Extender reserva
- Agregar productos consumidos
- Agregar cargos extras (servicios, taxi, extras)
- Registrar pagos
- Realizar check-out final

**[Ver documentación completa del módulo individual →](./[checkOutId]/README.md)**

## 📋 Características Principales

### 1. Barra Superior (Workflow Optimizado)

#### Tabs Rápidas
- **Hoy**: Estadías con checkout hoy
- **Atrasadas**: Check-outs con retraso
- **Mañana**: Checkout programados para mañana
- **Todas**: Vista completa

#### Filtros Avanzados
- 🔍 Búsqueda por cliente, habitación o folio
- 📊 Estado de checkout (En tiempo / Con retraso / Extendida)
- 💰 Estado de pago (Pagado / Parcial / Pendiente)
- 📅 Rango de fechas
- 🏠 Tipo de habitación

#### Acciones Masivas
Cuando hay filas seleccionadas:
- ✅ Checkout masivo
- ↔️ Extender estadías
- ✉️ Enviar recordatorios
- 🖨️ Imprimir recibos

### 2. Columnas de la Tabla

| Columna | Contenido | Ordenable |
|---------|-----------|-----------|
| **Cliente** | Avatar + Nombre + #Folio + Contacto | ✅ |
| **Hab.** | Badge [101] + Tipo + Estado limpieza | ✅ |
| **Estadía** | Fechas + Noches + Badge temporal | ✅ |
| **Pago** | Progress bar + Montos | ✅ |
| **Estado** | Badge estado + Sub-badge pago | ✅ |
| **Acciones** | Iconos rápidos + Menú | ❌ |

### 3. Componentes de Celda

#### `GuestCell`
```tsx
<GuestCell guest={guest} folio="F-2025-001" />
```
- Avatar con iniciales
- Nombre en negrita
- Subtexto: #Folio · Teléfono/Email

#### `RoomCell`
```tsx
<RoomCell room={room} />
```
- Badge con código de habitación
- Tipo de habitación en gris
- Tooltip con: Piso · Capacidad · Estado HK
- ✨ Indicador de limpieza

#### `StayCell`
```tsx
<StayCell 
  checkIn={date} 
  checkOut={date} 
  nights={3} 
  dueDelta={-85} 
/>
```
- Formato: `DD MMM → DD MMM`
- Badge con número de noches
- Pill temporal: "Vence en 2h" o "Atraso 1h 25m"

#### `PaymentCell`
```tsx
<PaymentCell total={1000} paid={820} />
```
- Progress bar visual (paid/total)
- Texto: `S/ 820 pagado · S/ 180 pendiente`
- ✓ Check cuando está 100% pagado
- Tooltip con desglose

#### `StatusCell`
```tsx
<StatusCell stayState="on-time" paymentState="partial" />
```
- Badge principal de estado
- Sub-badge de estado de pago (si no está pagado)

#### `RowActions`
```tsx
<RowActions stayId="stay-1" />
```
Iconos rápidos con tooltips:
- ✓ Checkout
- ↔ Extender
- 🧾 Recibo
- ✉ Recordatorio
- ⋮ Más opciones (dropdown)

### 4. Estados Visuales

#### Colores Semánticos (Dark Theme)

**Estados de Estadía:**
- 🟢 **En tiempo**: `bg-emerald-500/15 text-emerald-400 ring-emerald-500/20`
- 🔴 **Con retraso**: `bg-rose-500/15 text-rose-400 ring-rose-500/20`
- 🟡 **Extendida**: `bg-amber-500/15 text-amber-400 ring-amber-500/20`
- ⚪ **No-show**: `bg-slate-500/15 text-slate-400 ring-slate-500/20`

**Estados de Pago:**
- 🟢 **Pagado**: `bg-emerald-500/15 text-emerald-300`
- 🔵 **Parcial**: `bg-cyan-500/15 text-cyan-300`
- 🔴 **Pendiente**: `bg-rose-500/15 text-rose-300`

#### Resaltado de Filas
- **Atrasadas**: `bg-rose-500/5 border-l-2 border-rose-500`
- **Due hoy**: `border-l-2 border-amber-500`
- **Hover**: Fondo suave con transición

### 5. Utilidades

#### `formatDueDelta(minutes: number)`
Convierte minutos en texto legible:
- Positivo: "Vence en 2h 30m" (azul si >3h, ámbar si <3h)
- Negativo: "Atraso 1h 25m" (rojo)

#### `formatCurrency(amount: number)`
Formatea montos: `S/ 1,200.00`

#### `getRowBackgroundClass(stayState, paymentState)`
Retorna clase CSS para el background de la fila según estado

### 6. Tipos de Datos

```typescript
interface Stay {
  id: string
  folio: string
  guest: Guest
  room: Room
  checkIn: Date
  checkOut: Date
  nights: number
  total: number
  paid: number
  stayState: 'on-time' | 'delayed' | 'extended' | 'no-show'
  paymentState: 'paid' | 'partial' | 'pending'
  dueDelta?: number // minutos: + = vence en, - = atrasado
  notes?: string
  extendedFrom?: Date
}
```

## 🎯 Flujos de Trabajo

### Checkout Rápido
1. Encontrar estadía (tabs o búsqueda)
2. Click en ✓ en acciones
3. Sistema valida pago pendiente
4. Confirmar checkout

### Extender Estadía
1. Click en ↔ en acciones
2. Popover con nuevas fechas
3. Preview de prorrateo
4. Confirmar extensión

### Gestión de Pagos
1. Hover sobre "Pago" muestra tooltip con desglose
2. Click en fila abre drawer lateral
3. Historial de pagos + botón "Registrar pago"

## 📱 Responsive

### Desktop (≥ md)
- Tabla completa con todas las columnas
- Header y columna "Acciones" sticky
- Acciones masivas en toolbar

### Mobile (< md)
- Cards por fila
- Jerarquía:
  - Línea 1: Cliente + Estado
  - Línea 2: Hab. · Fechas · Noches
  - Línea 3: Progress pago
- Bar de acciones fija en bottom

## 🔧 Configuración

### TanStack Table
```tsx
const columns = [
  { id: "guest", header: "Cliente", ... },
  { accessorKey: "room.code", header: "Hab.", ... },
  { id: "stay", header: "Estadía", sortingFn: ... },
  { id: "payment", header: "Pago", sortingFn: ... },
  { id: "status", header: "Estado", ... },
  { id: "actions", header: "", size: 200 },
]
```

### Ordenamiento Custom
- **Estadía**: Por fecha de checkout (ASC)
- **Pago**: Por monto pendiente (DESC) - mayor deuda primero

## 🎨 Personalización

### Agregar nuevo filtro
```tsx
// En StaysToolbar.tsx
const [customFilter, setCustomFilter] = useState<string[]>([])

// Agregar DropdownMenu con DropdownMenuCheckboxItem
```

### Agregar nueva acción
```tsx
// En RowActions.tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button onClick={handleNewAction}>
      <Icon className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Nueva acción</TooltipContent>
</Tooltip>
```

## 📂 Estructura de Archivos

```
check-out/
├── page.tsx                    # Página principal
├── types.ts                    # Definiciones de tipos
├── data.ts                     # Datos mock
├── utils.ts                    # Utilidades y helpers
└── components/
    ├── StaysToolbar.tsx       # Barra superior con tabs/filtros
    ├── StaysTable.tsx         # Tabla TanStack
    ├── columns.tsx            # Definiciones de columnas
    └── cells/
        ├── GuestCell.tsx
        ├── RoomCell.tsx
        ├── StayCell.tsx
        ├── PaymentCell.tsx
        ├── StatusCell.tsx
        ├── RowActions.tsx
        └── index.ts
```

## 🚀 Próximas Mejoras

- [ ] Drawer lateral para detalles de estadía
- [ ] Modal de checkout con validación de pago
- [ ] Popover de extensión con cálculo de prorrateo
- [ ] Sistema de notificaciones (email/WhatsApp)
- [ ] Persistencia de filtros en localStorage
- [ ] Actualización en tiempo real de badges temporales
- [ ] Atajos de teclado (E, C, R)
- [ ] Exportación a Excel/PDF
- [ ] Vista de calendario alternativa
- [ ] Integración con sistema de pagos

## 📝 Notas de Implementación

- Todos los componentes usan `"use client"` para interactividad
- TanStack Table v8 para máximo rendimiento
- ShadCN UI para consistencia visual
- Tailwind con dark mode optimizado
- date-fns para manipulación de fechas
- Tooltips accesibles con Radix UI

## 🎓 Ejemplos de Uso

Ver `data.ts` para datos de ejemplo completos con diferentes estados y escenarios.
