import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(fechaISO: string): string {
    const fecha = new Date(fechaISO);

    // Opciones para el formato
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long', // día de la semana
      year: 'numeric', // año completo
      month: 'long', // mes completo
      day: 'numeric' // día del mes
    };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

    return fechaFormateada;

  }
}