# Entidades

Esta API trabaja con entidades principales que representan los datos de transporte.

## Entidades clave

- `Ciudad`: representa una ciudad de origen o destino.
- `Ruta`: representa un trayecto entre dos ciudades.
- `Bus`: representa un autobús con capacidad y modelo.
- `Programacion`: representa un viaje programado con fecha y hora.
- `Reserva`: representa una reserva de asiento.

## Formato de respuesta común

Todas las entidades se devuelven dentro de la propiedad `data` de la respuesta JSON.
