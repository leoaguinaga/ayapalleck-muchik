# Back Office - Ayapalleck Muchik

Sistema de gestión hotelera con Next.js, Prisma y PostgreSQL.

## 🏗️ Arquitectura de Datos

### Stack
- **ORM**: Prisma 5.x
- **Database**: PostgreSQL 15+
- **TypeScript**: 5.x

### Políticas de Datos

#### Tipos Monetarios
- Todos los campos de dinero usan `Decimal(10,2)` para evitar errores de redondeo.
- Campos afectados: `RoomType.pricePerNight`, `Extra.price`, `Booking.totalAmount`.

#### Enums
Los enums están sincronizados 1:1 con la UI:
- `RoomStatus`: `AVAILABLE | OCCUPIED | DIRTY`
- `BookingStatus`: `PENDING | CHECK_IN | CHECK_OUT | CANCELED`
- `PaymentMethod`: `CASH | CARD | TRANSFER`
- `RequestStatus`: `PENDING | ACCEPTED | CANCELED`
- `UserRole`: `ADMIN | RECEPTIONIST | HOUSEKEEPING`

#### Auditoría
Modelos operativos incluyen:
- `createdAt`: Timestamp de creación (auto).
- `updatedAt`: Timestamp de última modificación (auto).

#### Relaciones y OnDelete
- `Booking → User`: `onDelete: SetNull` (permite borrar usuarios sin perder historial).
- `Session/Account → User`: `onDelete: Cascade` (borra sesiones al borrar usuario).

## 🚀 Setup Local

### Requisitos
- Node.js 20+
- PostgreSQL 15+
- pnpm 8+

### Variables de Entorno
Crea `.env` con:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/ayapalleck_db?schema=public"
```

### Instalación
```bash
# Instalar dependencias
pnpm install

# Generar cliente Prisma
pnpm prisma generate

# Ejecutar migraciones
pnpm prisma migrate dev

# Sembrar datos (opcional)
pnpm prisma db seed

# Iniciar desarrollo
pnpm dev
```

## 🔄 Migraciones

### En Desarrollo
```bash
# Crear migración después de cambiar schema.prisma
pnpm prisma migrate dev --name descripcion-del-cambio

# Ver estado
pnpm prisma migrate status

# Abrir Prisma Studio
pnpm prisma studio
```

### En CI/Producción
```bash
# Aplicar migraciones pendientes (sin prompt)
pnpm prisma migrate deploy

# Verificar integridad
pnpm prisma validate
```

### Rollback
Prisma no soporta rollback automático. Para revertir:
1. Identificar la migración a revertir en `prisma/migrations/`.
2. Crear migración manual con `ALTER TABLE` inverso.
3. Aplicar con `prisma migrate dev`.

## 📊 Índices y Rendimiento

Índices creados para optimizar consultas frecuentes:
- `customer(firstName, lastName)`: Búsquedas de clientes.
- `booking(checkIn, checkOut)`: Consultas de disponibilidad por rango.
- `booking(customerId, roomId, userId)`: Joins frecuentes.

## ⚠️ Breaking Changes (última migración)

### Cambios de Tipos
1. **Booking.status**: `String` → `BookingStatus` (enum)
   - **Migración**: Valores mapeados automáticamente en SQL.
   - **Acción requerida**: Actualizar código que usaba strings literales.

2. **Booking.paymentMethod**: `String` → `PaymentMethod` (enum)
   - **Migración**: Mapeo a `CASH`, `CARD`, `TRANSFER`.
   - **Acción requerida**: Usar enum en formularios y validaciones.

3. **Campos monetarios**: `Float` → `Decimal(10,2)`
   - **Migración**: Conversión automática sin pérdida de datos.
   - **Acción requerida**: Usar `toNumber()` al leer de Prisma si es necesario.

4. **Booking.userId**: `String` → `String?` (nullable)
   - **Migración**: Se permite NULL ahora.
   - **Acción requerida**: Manejar casos donde `booking.user` sea `null`.

### Mitigación
```typescript
// Antes
const booking = await prisma.booking.findUnique({
  where: { bookingId },
  include: { user: true }
});
console.log(booking.user.name); // ❌ Puede fallar si user es null

// Después
const booking = await prisma.booking.findUnique({
  where: { bookingId },
  include: { user: true }
});
console.log(booking.user?.name ?? 'Usuario eliminado'); // ✅
```

## 🛠️ Troubleshooting

### Error: "Enum value not found"
- **Causa**: Datos existentes no coinciden con valores del enum.
- **Solución**: Revisar la migración SQL y ajustar el `CASE` statement.

### Error: "Column does not exist"
- **Causa**: Migración no aplicada o schema desincronizado.
- **Solución**: `pnpm prisma migrate dev` o `prisma db push` en desarrollo.

### Inconsistencia de tipos en TypeScript
- **Causa**: Cliente Prisma no regenerado.
- **Solución**: `pnpm prisma generate`

## 📚 Referencias
- [Prisma Docs](https://www.prisma.io/docs)
- [PostgreSQL Decimal Types](https://www.postgresql.org/docs/current/datatype-numeric.html)
- [Better Auth Integration](https://www.better-auth.com/docs/integrations/prisma)