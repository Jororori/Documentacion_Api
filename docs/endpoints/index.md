# API Consulta

Esta página muestra el funcionamiento de los endpoints principales y las funciones que devuelven los resultados.

## Endpoints disponibles

| Método | Ruta | Función | Descripción |
|---|---|---|---|
| GET | `/api/transportista/ciudades` | `ObtenerCiudades()` | Devuelve todas las ciudades disponibles |
| GET | `/api/transportista/rutas` | `ObtenerRutas()` | Devuelve rutas activas y sus datos |
| GET | `/api/transportista/buses` | `ObtenerBuses()` | Devuelve los buses registrados |
| GET | `/api/transportista/programaciones` | `ObtenerProgramaciones()` | Devuelve programaciones y asientos disponibles |
| POST | `/api/transportista/reservas` | `ReservarAsiento()` | Crea una reserva y devuelve el resultado |

---

## Authorization

Todas las llamadas requieren el encabezado de autorización:

```http
Authorization: Bearer {token}
```

El token se obtiene al autenticar la API Key de la empresa transportista.

---

## Funcionamiento de las funciones

### `ObtenerCiudades()`
- Consulta la base de datos de ciudades.
- Retorna JSON con el resultado en la propiedad `data`.
- Ejemplo de respuesta:

```json
{
  "status": 200,
  "success": true,
  "message": "Ciudades obtenidas correctamente",
  "data": [
    { "id": 1, "nombre": "Lima" },
    { "id": 2, "nombre": "Arequipa" }
  ]
}
```

### `ObtenerRutas()`
- Consulta rutas activas.
- Devuelve la lista de rutas con origen, destino y horario.

### `ObtenerBuses()`
- Retorna los buses disponibles en el sistema.
- Incluye información de modelo, capacidad y estado.

### `ObtenerProgramaciones()`
- Recupera programaciones de viajes.
- Incluye fecha, hora, ruta y asientos libres.

### `ReservarAsiento()`
- Recibe los datos de reserva.
- Valida disponibilidad de asiento.
- Devuelve el resultado final de la operación.

---

## Parámetros de consulta

- `idCiudad` (string, requerido): Identificador de ciudad a consultar.
- `idRuta` (string, requerido): Identificador de ruta a consultar.
- `fecha` (string, opcional): Fecha de viaje en formato `YYYY-MM-DD`.

---

## Respuesta estandarizada

Todas las funciones devuelven respuestas con el mismo formato:

```json
{
  "status": 200,
  "success": true,
  "message": "Operación exitosa",
  "data": { /* resultado específico */ }
}
```
