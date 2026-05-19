# API Transportista

Bienvenido a la documentación técnica de la **API Transportista**, una API REST construida con **.NET 10** que permite a empresas de transporte exponer sus datos de ciudades, rutas, buses, programaciones, asientos y reservas a sistemas cliente externos.

---

## ¿Qué hace esta API?

La API actúa como puente entre la base de datos de una empresa transportista y cualquier cliente externo. Cada empresa accede únicamente a sus propios datos gracias al sistema de autenticación por **API Key**.

## Características Principales

| Característica | Detalle |
|---|---|
| **Framework** | ASP.NET Core (.NET 10) |
| **Arquitectura** | N-Tier (Capas) |
| **Base de datos** | SQL Server |
| **Autenticación** | API Key via Bearer Token |
| **Formato** | JSON |
| **Tarea programada** | Limpieza automática de bloqueos de asientos cada 10 minuto |


### Hacer una petición

```bash
"https://localhost:5001/api/transportista/ciudades"
```

---

## Estructura del Repositorio

```
Api_trasporte/
├── API_TRANSPORTISTE/        # Capa de Presentación (Web API)
├── CapaServicio/             # Capa de Lógica de Negocio
├── CapaDatos/                # Capa de Acceso a Datos
├── CapaEntidades/            # Modelos / Entidades
└── BD/                       # Scripts SQL
```




