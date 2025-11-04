# CustomOpenModalButton Component

Componente reutilizable para crear botones que abren modales con formularios o contenido personalizado.

## Características

- 🎨 **4 variantes de botón**: default, icon, text, underline
- 📋 **Breadcrumb opcional** para navegación visual
- 🎯 **Estado controlado o no controlado** 
- ♿ **Accesible** con Dialog de Radix UI
- 🔧 **Totalmente personalizable** con className props

## Variantes de Botón

### 1. Default (con icono)
Botón estándar con icono y texto.

```tsx
<CustomOpenModalButton
  triggerLabel="Agregar Cliente"
  triggerIcon={<UserPlus />}
  buttonVariant="default"
  title="Nuevo Cliente"
  description="Completa el formulario para agregar un nuevo cliente"
>
  <FormCreateCustomer />
</CustomOpenModalButton>
```

### 2. Icon Only
Solo icono sin texto (usa `triggerLabel` como accesibilidad).

```tsx
<CustomOpenModalButton
  triggerIcon={<Plus />}
  buttonVariant="icon"
  title="Crear"
>
  <FormContent />
</CustomOpenModalButton>
```

### 3. Text (sin fondo)
Botón sin background, solo texto.

```tsx
<CustomOpenModalButton
  triggerLabel="Ver detalles"
  buttonVariant="text"
  title="Detalles"
>
  <DetailsContent />
</CustomOpenModalButton>
```

### 4. Underline (texto subrayado)
Estilo de enlace con subrayado.

```tsx
<CustomOpenModalButton
  triggerLabel="Editar información"
  buttonVariant="underline"
  title="Editar"
  description="Modifica los datos del registro"
>
  <EditForm />
</CustomOpenModalButton>
```

## Props

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `triggerLabel` | `string` | ❌ | `"Abrir"` | Texto del botón trigger |
| `triggerIcon` | `ReactNode` | ❌ | - | Icono del botón (solo en variantes default e icon) |
| `buttonVariant` | `'default' \| 'icon' \| 'text' \| 'underline'` | ❌ | `'default'` | Estilo del botón |
| `buttonClassName` | `string` | ❌ | - | Clases CSS adicionales para el botón |
| `title` | `string` | ✅ | - | Título del modal |
| `description` | `string` | ❌ | - | Descripción del modal |
| `breadcrumb` | `string[]` | ❌ | - | Array de strings para mostrar navegación |
| `children` | `ReactNode` | ✅ | - | Contenido del modal (formulario, etc) |
| `open` | `boolean` | ❌ | - | Estado controlado del modal |
| `onOpenChange` | `(open: boolean) => void` | ❌ | - | Callback para controlar el estado |
| `modalClassName` | `string` | ❌ | - | Clases CSS adicionales para el modal |

## Ejemplos de Uso

### Con Breadcrumb

```tsx
<CustomOpenModalButton
  triggerLabel="Agregar Cliente"
  triggerIcon={<UserPlus />}
  buttonVariant="default"
  breadcrumb={["Clientes", "Agregar Cliente"]}
  description="Aquí podrás agregar un nuevo cliente a la plataforma."
>
  <FormCreateCustomer />
</CustomOpenModalButton>
```

Resultado del breadcrumb:
```
Clientes > Agregar Cliente
```

### Estado Controlado

```tsx
function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    // ... lógica de submit
    setIsOpen(false); // Cerrar modal programáticamente
  };

  return (
    <CustomOpenModalButton
      triggerLabel="Crear"
      title="Nuevo Registro"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <MyForm onSubmit={handleSubmit} />
    </CustomOpenModalButton>
  );
}
```

### Personalización de Estilos

```tsx
<CustomOpenModalButton
  triggerLabel="Acción Especial"
  buttonClassName="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
  modalClassName="sm:max-w-[800px]"
  title="Modal Grande"
>
  <LargeContent />
</CustomOpenModalButton>
```

### Botón Minimalista (Underline)

```tsx
<CustomOpenModalButton
  triggerLabel="¿Olvidaste tu contraseña?"
  buttonVariant="underline"
  buttonClassName="text-sm text-muted-foreground"
  title="Recuperar Contraseña"
  description="Ingresa tu email para recibir instrucciones"
>
  <FormForgotPassword />
</CustomOpenModalButton>
```

### Con Formulario que Cierra el Modal

El formulario hijo puede recibir una función para cerrar el modal:

```tsx
// En el componente padre
<CustomOpenModalButton
  triggerLabel="Crear Reserva"
  triggerIcon={<Calendar />}
  title="Nueva Reserva"
>
  <FormCreateBooking />
</CustomOpenModalButton>

// En el formulario hijo
interface FormCreateBookingProps {
  onSuccess?: () => void;
}

function FormCreateBooking({ onSuccess }: FormCreateBookingProps) {
  const handleSubmit = async (data) => {
    await createBooking(data);
    onSuccess?.(); // Cerrar modal si se proporciona
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

## Casos de Uso

### 1. Formulario de Creación
```tsx
<CustomOpenModalButton
  triggerLabel="Agregar Habitación"
  triggerIcon={<Plus />}
  breadcrumb={["Habitaciones", "Agregar"]}
  description="Completa la información de la nueva habitación"
>
  <FormCreateRoom />
</CustomOpenModalButton>
```

### 2. Ver Detalles
```tsx
<CustomOpenModalButton
  triggerLabel="Ver"
  buttonVariant="text"
  title="Detalles de la Reserva"
>
  <BookingDetails bookingId={id} />
</CustomOpenModalButton>
```

### 3. Acciones Rápidas
```tsx
<CustomOpenModalButton
  triggerIcon={<Edit />}
  buttonVariant="icon"
  buttonClassName="h-8 w-8"
  title="Editar"
>
  <QuickEditForm />
</CustomOpenModalButton>
```

### 4. Links de Ayuda
```tsx
<CustomOpenModalButton
  triggerLabel="¿Necesitas ayuda?"
  buttonVariant="underline"
  title="Centro de Ayuda"
>
  <HelpContent />
</CustomOpenModalButton>
```

## Integración con Formularios

El componente está diseñado para trabajar con cualquier formulario que use `react-hook-form`:

```tsx
function FormExample({ onClose }: { onClose?: () => void }) {
  const form = useForm();
  
  const onSubmit = async (data) => {
    await saveData(data);
    toast.success('Guardado exitosamente');
    onClose?.(); // Cerrar modal
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* campos del formulario */}
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
}

// Uso con estado controlado
function Parent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomOpenModalButton
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Formulario"
    >
      <FormExample onClose={() => setIsOpen(false)} />
    </CustomOpenModalButton>
  );
}
```

## Estilos de las Variantes

### Default
- Background con color primary
- Hover effect
- Gap entre icono y texto

### Icon
- Similar a default pero optimizado para solo icono
- Padding cuadrado

### Text
- Sin background
- Sin border
- Color primary
- Padding mínimo

### Underline
- Sin background
- Texto con underline
- Efecto hover en underline-offset
- Transiciones suaves

## Accesibilidad

- ✅ ARIA labels correctos
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader friendly
- ✅ ESC para cerrar modal

## Dependencias

- `@/components/ui/button` - Componente Button
- `@/components/ui/dialog` - Componente Dialog de Radix UI
- `lucide-react` - Para icono ChevronRight en breadcrumb
- `@/lib/utils` - Función cn para merge de clases

## Notas

- El componente soporta tanto estado controlado como no controlado
- Si no se proporciona `open` y `onOpenChange`, maneja su propio estado interno
- Los iconos solo se muestran en variantes `default` e `icon`
- El breadcrumb se renderiza automáticamente con separadores `>`
