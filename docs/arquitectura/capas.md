# Capas del Proyecto
## CapaEntidades — Modelos compartidos
### Proyecto: `CapaEntidades.csproj`  
No tiene dependencias de otras capas del proyecto. Es referenciada por todas las demás.
Contiene las clases que representan los datos del dominio:

|Clase | Descripción|
|---|---|
|**Transportista**|	Datos básicos de un transportista (nombre, cédula, teléfono, email)|
|**Ciudades**|	Ciudad origen o destino|
|**Rutas** |	Ruta entre dos ciudades|
|**Buses**|	Vehículo asignado a una ruta|
|**Programaciones**|	Viaje programado en una fecha y hora|
|**DetalleProgramacion**|	Asiento específico dentro de una programación|
|**TipoAsiento**|	Tipo de asiento (ej. 140°, 160°)|
|**DetalleReserva**|	Datos completos para crear una reserva|
|**PuntoIntemedio**|	Parada intermedia en una ruta|
|**Asientos**|	Información de asientos de un bus|

---

## CapaDatos — Acceso a datos
### Proyecto: `CapaDatos.csproj`  
### Depende de: `CapaEntidades`
Implementa el acceso directo a SQL Server usando `System.Data.SqlClient`.
Interfaz del Repositorio
```csharp
public interface ITransportistaRepository
{
    Task<List<Transportista>> ObtenerTodosAsync();
    Task<Transportista?> ObtenerPorIdAsync(int id);
    Task<List<Ciudades>> ObtenerCuidadesPor(int id);
    Task<List<Rutas>> ObtenerRutasPor(int id);
    Task<List<Buses>> ObtenerBusesPor(int id);
    Task<List<Programaciones>> ObtenerProgramacionPor(int Id, DateTime Fecha, int IdOrigen, int IdDestino);
    Task<List<TipoAsiento>> ObtenerTiposAsiento();
    Task<List<DetalleProgramacion>> ObtenerAsientosPor(int id);
    Task<string> BloquearAsientoPor(int idDetalleProgramacion);
    Task<bool> LimpiarBloqueoAsientos();
    Task<bool> LiberarAsientoPorToken(string token);
    Task<int> CrearReserva(int TipoDocumento, string NroDocumento, string Pasajero, DateTime? FechaNacimiento,
                         int Edad, string Sexo, string Ruc, string RazonSocial, string Direccion, int TipoDocVenta, 
                         DateTime? FechaEmision, int IdAgenciaOrigen, int IdAgenciaDestino, string FormaDePago, 
                         string MedioPago, string Tarjeta, DateTime? FechaVencimiento, double Adelanto, 
                         string Observaciones, int IdUsuario, int Estado, int IdDocumento, int IdDetalleProgramacion, 
                         string precio, string PrecioLetra, string PrecioReprog , string HoraSalida , string Menor , 
                         int Embarque , string Telefono);
}
```
Implementación
`TransportistaRepository` implementa la interfaz abriendo conexiones a SQL Server, ejecutando procedimientos almacenados o consultas SQL parametrizadas, y mapeando los resultados a entidades.

---
## CapaServicio — Lógica de negocio
### Proyecto: `CapaServicio.csproj`  
### Depende de: `CapaEntidades`, `CapaDatos`
Actúa como intermediario entre el controlador y el repositorio. Aquí se concentran las validaciones de negocio y la orquestación de operaciones.
Interfaz del Servicio
```csharp
public interface ITransportistaService
{
    Task<List<Transportista>> ObtenerTodos();
    Task<Transportista?> ObtenerPorId(int id);
    Task<List<Ciudades>> ObtenerCuidadesPor(int id);
    Task<List<Rutas>> ObtenerRutasPor(int id);
    Task<List<Buses>> ObtenerBusesPor(int id);
    Task<List<Programaciones>> ObtenerProgramacionPor(int Id, DateTime Fecha, int IdOrigen, int IdDestino);
    Task<List<TipoAsiento>> ObtenerTiposAsiento();
    Task<List<DetalleProgramacion>> ObtenerAsientosPor(int id);
    Task<string> BloquearAsientoPor(int idDetalleProgramacion);
    Task<bool> LimpiarBloqueoAsientos();
    Task<bool> LiberarAsientoPorToken(string token);
    Task<int> CrearReserva(/* múltiples parámetros */);
}
```
---
## API_TRANSPORTISTA — Capa de Presentación
### Proyecto: `API_TRANSPORTISTE.csproj`  
### Depende de: `CapaEntidades`, `CapaServicio`
Expone los endpoints HTTP y gestiona la autenticación. Contiene:
###### `TransportistaController`
Controlador principal decorado con `[ApiController]`, `[Route("api/[controller]")]` y `[Authorize]`. Todos los endpoints requieren un Bearer Token válido.
Extrae el `IdEmpresa` del token para filtrar los datos devueltos por empresa.
###### `ApiKeyAuthenticationHandler`
Handler personalizado de ASP.NET Core que intercepta cada petición y valida el Bearer Token contra el diccionario de `ApiKeyConfig`. Si el token es válido, inyecta el `idEmpresa` como claim en el contexto de usuario.
###### `ApiKeyConfig`
Clase estática que contiene el diccionario `Token → IdEmpresa`. En producción este diccionario debería migrarse a base de datos o a un gestor de secretos.
###### `TareaProgramadaService`
`BackgroundService` que se ejecuta en segundo plano. Cada 60 segundos invoca `LimpiarBloqueoAsientos()` para liberar asientos que quedaron bloqueados sin completar una reserva.
###### `ConvertidorPrecioALetras`
Utilidad que convierte un precio numérico a su representación en letras (ej. `15.50` → `"QUINCE CON 50/100 SOLES"`), necesario para la emisión de comprobantes.