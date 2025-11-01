// Función para obtener los próximos 7 días desde hoy
export function getNext7Days(): Date[] {
  const days: Date[] = []
  const today = new Date()
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    days.push(date)
  }
  
  return days
}

// Función para formatear fecha a español
export function formatDateSpanish(date: Date): string {
  const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  
  const dayName = days[date.getDay()]
  const dayNumber = date.getDate()
  const monthName = months[date.getMonth()]
  
  return `${dayName} ${dayNumber} ${monthName}`
}

// Función para comparar si dos fechas son el mismo día
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

// Función para formatear fecha como string YYYY-MM-DD
export function formatDateKey(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
