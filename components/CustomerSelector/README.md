# CustomerSelector Component

Componente reutilizable para seleccionar clientes con búsqueda integrada.

## Características

- 🔍 **Búsqueda en tiempo real** por nombre o documento
- 📋 **Lista filtrada** dinámica
- 🎨 **Integración con react-hook-form** mediante props
- ♿ **Accesible** y fácil de usar
- 🎯 **Reutilizable** en cualquier formulario

## Uso

### Básico

```tsx
import { CustomerSelector } from '@/components/CustomerSelector';

const customers = [
  { id: "1", name: "Juan Pérez", document: "DNI 72351336" },
  { id: "2", name: "María García", document: "DNI 81234567" },
];

function MyComponent() {
  const [selectedCustomer, setSelectedCustomer] = useState('');

  return (
    <CustomerSelector
      value={selectedCustomer}
      onChange={setSelectedCustomer}
      customers={customers}
    />
  );
}
```

### Con react-hook-form

```tsx
import { CustomerSelector } from '@/components/CustomerSelector';
import { useForm } from 'react-hook-form';

function MyForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="customer"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selecciona el huésped</FormLabel>
            <FormControl>
              <CustomerSelector
                value={field.value}
                onChange={field.onChange}
                customers={customersData}
                placeholder="Selecciona el cliente"
                searchPlaceholder="Buscar por nombre o documento..."
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `value` | `string` | ✅ | - | ID del cliente seleccionado |
| `onChange` | `(value: string) => void` | ✅ | - | Callback cuando cambia la selección |
| `customers` | `Customer[]` | ✅ | - | Array de clientes disponibles |
| `placeholder` | `string` | ❌ | `"Selecciona el cliente"` | Texto del placeholder del selector |
| `searchPlaceholder` | `string` | ❌ | `"Buscar por nombre o documento..."` | Texto del placeholder de búsqueda |
| `className` | `string` | ❌ | `"w-full"` | Clases CSS adicionales |

## Tipo Customer

```typescript
interface Customer {
  id: string;
  name: string;
  document: string;
}
```

## Funcionalidades

### Búsqueda

El componente incluye un campo de búsqueda que filtra los clientes en tiempo real por:
- Nombre del cliente
- Número de documento

La búsqueda es **case-insensitive** y funciona con coincidencias parciales.

### Manejo de eventos

El componente previene correctamente la propagación de eventos del teclado y del mouse para evitar que el Select se cierre al interactuar con el campo de búsqueda.

### Estado vacío

Cuando no se encuentran resultados, se muestra un mensaje informativo:
```
No se encontraron clientes
```

## Ejemplos de uso

### En un formulario de reserva

```tsx
<FormField
  control={form.control}
  name="customer"
  render={({ field }) => (
    <FormItem className="w-full">
      <FormLabel>Selecciona el huésped</FormLabel>
      <FormControl>
        <CustomerSelector
          value={field.value}
          onChange={field.onChange}
          customers={customersData}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```

### En un formulario de check-in

```tsx
<CustomerSelector
  value={guestId}
  onChange={setGuestId}
  customers={registeredGuests}
  placeholder="Buscar huésped"
  searchPlaceholder="Nombre o DNI..."
  className="w-full md:w-96"
/>
```

## Dependencias

- `@/components/ui/select` - Componente Select de shadcn/ui
- `@/components/ui/input` - Componente Input de shadcn/ui
- `react` - useState, useMemo

## Notas

- El componente usa `useMemo` para optimizar el filtrado de clientes
- La búsqueda es eficiente y no causa re-renders innecesarios
- Compatible con temas claros y oscuros
- Totalmente responsive
