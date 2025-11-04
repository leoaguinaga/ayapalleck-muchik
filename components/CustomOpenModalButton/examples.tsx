/**
 * Ejemplos de uso del componente CustomOpenModalButton
 * 
 * Este archivo contiene ejemplos prácticos de cómo usar el componente
 * en diferentes escenarios comunes.
 */

import CustomOpenModalButton from '@/components/CustomOpenModalButton';
import { UserPlus, Edit, Trash, Calendar, Plus, Eye } from 'lucide-react';

// ============================================================================
// EJEMPLO 1: Crear Cliente (Variante Default con Icono y Breadcrumb)
// ============================================================================

export function CreateCustomerExample() {
  return (
    <CustomOpenModalButton
      triggerLabel="Agregar Cliente"
      triggerIcon={<UserPlus />}
      buttonVariant="default"
      breadcrumb={["Clientes", "Agregar Cliente"]}
      description="Aquí podrás agregar un nuevo cliente a la plataforma."
      title="Nuevo Cliente"
    >
      {/* <FormCreateCustomer /> */}
      <div>Formulario de creación de cliente aquí</div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 2: Editar (Variante Icon Only)
// ============================================================================

export function EditButtonExample() {
  return (
    <CustomOpenModalButton
      triggerLabel="Editar" // Para accesibilidad
      triggerIcon={<Edit />}
      buttonVariant="icon"
      buttonClassName="h-8 w-8"
      title="Editar Información"
      description="Modifica los datos del registro"
    >
      {/* <FormEdit /> */}
      <div>Formulario de edición aquí</div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 3: Ver Detalles (Variante Text)
// ============================================================================

export function ViewDetailsExample() {
  return (
    <CustomOpenModalButton
      triggerLabel="Ver detalles"
      buttonVariant="text"
      title="Detalles de la Reserva"
    >
      {/* <BookingDetails /> */}
      <div>Detalles de la reserva aquí</div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 4: Link de Ayuda (Variante Underline)
// ============================================================================

export function HelpLinkExample() {
  return (
    <CustomOpenModalButton
      triggerLabel="¿Olvidaste tu contraseña?"
      buttonVariant="underline"
      buttonClassName="text-sm text-muted-foreground"
      title="Recuperar Contraseña"
      description="Ingresa tu email para recibir instrucciones de recuperación"
    >
      {/* <FormForgotPassword /> */}
      <div>Formulario de recuperación aquí</div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 5: Estado Controlado
// ============================================================================

export function ControlledStateExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSuccess = () => {
    // Lógica después de éxito
    console.log('Operación exitosa');
    setIsOpen(false); // Cerrar modal
  };

  return (
    <CustomOpenModalButton
      triggerLabel="Crear Reserva"
      triggerIcon={<Calendar />}
      open={isOpen}
      onOpenChange={setIsOpen}
      title="Nueva Reserva"
      breadcrumb={["Reservas", "Nueva Reserva"]}
    >
      {/* <FormCreateBooking onSuccess={handleSuccess} /> */}
      <div>
        <p>Formulario aquí</p>
        <button onClick={handleSuccess}>Guardar</button>
      </div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 6: Modal Grande con Contenido Personalizado
// ============================================================================

export function LargeModalExample() {
  return (
    <CustomOpenModalButton
      triggerLabel="Ver Calendario Completo"
      triggerIcon={<Calendar />}
      title="Calendario de Reservas"
      modalClassName="sm:max-w-[900px]"
      description="Vista completa del calendario de reservas del mes"
    >
      {/* <FullCalendar /> */}
      <div className="h-[600px]">Calendario grande aquí</div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 7: Botón de Acción Peligrosa
// ============================================================================

export function DangerActionExample() {
  return (
    <CustomOpenModalButton
      triggerLabel="Eliminar"
      triggerIcon={<Trash />}
      buttonClassName="bg-destructive hover:bg-destructive/90"
      title="Confirmar Eliminación"
      description="Esta acción no se puede deshacer"
    >
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          ¿Estás seguro de que deseas eliminar este elemento?
        </p>
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-2 border rounded">Cancelar</button>
          <button className="px-4 py-2 bg-destructive text-white rounded">
            Eliminar
          </button>
        </div>
      </div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 8: Botón Flotante (FAB)
// ============================================================================

export function FloatingActionButtonExample() {
  return (
    <div className="fixed bottom-6 right-6">
      <CustomOpenModalButton
        triggerIcon={<Plus />}
        buttonVariant="icon"
        buttonClassName="h-14 w-14 rounded-full shadow-lg"
        title="Acción Rápida"
      >
        <div>Contenido de acción rápida</div>
      </CustomOpenModalButton>
    </div>
  );
}

// ============================================================================
// EJEMPLO 9: Botón en Tabla (Acción por Fila)
// ============================================================================

export function TableActionExample({ id }: { id: string }) {
  return (
    <div className="flex gap-1">
      <CustomOpenModalButton
        triggerIcon={<Eye />}
        buttonVariant="icon"
        buttonClassName="h-8 w-8"
        title={`Detalles #${id}`}
      >
        <div>Detalles del registro {id}</div>
      </CustomOpenModalButton>

      <CustomOpenModalButton
        triggerIcon={<Edit />}
        buttonVariant="icon"
        buttonClassName="h-8 w-8"
        title={`Editar #${id}`}
      >
        <div>Formulario de edición {id}</div>
      </CustomOpenModalButton>
    </div>
  );
}

// ============================================================================
// EJEMPLO 10: Formulario Multi-Step
// ============================================================================

export function MultiStepFormExample() {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <CustomOpenModalButton
      triggerLabel="Registro Completo"
      triggerIcon={<UserPlus />}
      title={`Registro - Paso ${currentStep} de 3`}
      modalClassName="sm:max-w-[700px]"
    >
      <div className="space-y-4">
        {currentStep === 1 && <div>Paso 1: Información Personal</div>}
        {currentStep === 2 && <div>Paso 2: Información de Contacto</div>}
        {currentStep === 3 && <div>Paso 3: Confirmación</div>}
        
        <div className="flex gap-2 justify-between">
          <button
            onClick={() => setCurrentStep(s => Math.max(1, s - 1))}
            disabled={currentStep === 1}
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentStep(s => Math.min(3, s + 1))}
            disabled={currentStep === 3}
          >
            Siguiente
          </button>
        </div>
      </div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 11: Confirmación con Timer
// ============================================================================

export function TimedConfirmationExample() {
  const [countdown, setCountdown] = React.useState(5);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, countdown]);

  return (
    <CustomOpenModalButton
      triggerLabel="Acción Importante"
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) setCountdown(5);
      }}
      title="Confirmación Requerida"
      description="Por favor confirma esta acción importante"
    >
      <div>
        <p>Esta acción tendrá efecto inmediato.</p>
        <button disabled={countdown > 0}>
          {countdown > 0 ? `Espera ${countdown}s` : 'Confirmar'}
        </button>
      </div>
    </CustomOpenModalButton>
  );
}

// ============================================================================
// EJEMPLO 12: Integración con React Hook Form
// ============================================================================

export function FormIntegrationExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <CustomOpenModalButton
      triggerLabel="Nuevo Usuario"
      triggerIcon={<UserPlus />}
      open={isOpen}
      onOpenChange={setIsOpen}
      breadcrumb={["Usuarios", "Agregar"]}
      title="Crear Usuario"
    >
      {/* 
      <FormCreateUser 
        onSuccess={() => {
          toast.success('Usuario creado');
          setIsOpen(false);
        }}
        onCancel={() => setIsOpen(false)}
      />
      */}
      <div>Formulario con react-hook-form aquí</div>
    </CustomOpenModalButton>
  );
}

import React from 'react';
