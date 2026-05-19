# Autenticación

La API usa autenticación mediante token Bearer.

## Encabezado requerido

Cada llamada debe incluir el encabezado:

```http
Authorization: Bearer {token}
```

## Flujo de autenticación

1. El cliente envía la API Key asociada a la empresa.
2. El servidor valida la API Key.
3. Si es válida, el servidor devuelve un token de acceso.
4. El cliente usa ese token en los endpoints protegidos.

## Formato de respuesta

```json
{
  "status": 200,
  "success": true,
  "message": "Autenticación exitosa",
  "data": {
    "token": "eyJhbGciOi..."
  }
}
```
