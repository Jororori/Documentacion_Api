// DATOS DE LOS ENDPOINTS DE LA API DE TRANSPORTE
const API_DATA = [
    {
        id: "auth-token",
        category: "Ciudades",
        method: "GET",
        path: "/v1/auth/transportista/ciudades",
        title: "Lista De ciudades",
        description: "Permite Listar Las ciudades(Establecimientos) creados en la Empresa",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación. Ejemplo: Bearer <token>" }
        ],
        pathParams: [
            { description: "Este EndPoint no requiere mas parametros" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Ciudades Listadas Con Exito",
                data: {
                    status: 200,
                    success: true,
                    data: [
                        {
                            "idCiudad": 1,
                            "nombreCiudad": "Principal",
                            "codigo": "0000",
                            "idUbigeo": 1138
                        },
                        {
                            "idCiudad": 2090,
                            "nombreCiudad": "TRUJILLO",
                            "codigo": "0001",
                            "idUbigeo": 1128
                        },
                        {
                            "idCiudad": 2093,
                            "nombreCiudad": "CASMA",
                            "codigo": "0005",
                            "idUbigeo": 811
                        }
                    ]
                }
            },
            "401": {
                status: "401 Unauthorized",
                description: "Las credenciales provistas son inválidas.",
                data: {
                    status: 401,
                    success: false,
                    message: "Credenciales de API inválidas.",
                    error_code: "AUTH_CREDENTIALS_INVALID"
                }
            },
            "500" : {
                status : "500 internal server",
                description : "fallas internas en el BackEnd" ,
                data :{
                    success : false , 
                    error : "Error al obtener ciudades: el id debe ser mayor a 0" 
                    
                }
            },
            "501" : {
                status : "500 internal server",
                description : "fallas internas en la Base de Datos (500)" ,
                data :{
                    success : false , 
                    error : "Error en servicio al obtener ciudades : id = {id}: Could not find stored procedure 'SP_ListarEstablecimientos2'." 
                    
                }
            }

        }
    },
    {
        id: "consultar-rutas",
        category: "Consultar rutas",
        method: "GET",
        path: "/v1/auth/transportista/rutas",
        title: "Consultar rutas",
        description: "Consulta las rutas creadas en el sistema. (parametros ... los ids generados son en base nuestra bd , ahora la duracion siempre retornara null, ya que en nuenstro sistema no manejamos ese campo solo se agrego de manera referencial para cumplir con sus requerimientos)",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación. Ejemplo: Bearer <token>" }
        ],
        pathParams: [
          { description: "Este EndPoint no requiere mas parametros" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Datos de la ruta obtenidos con éxito.",
                data: {
                    status: 200,
                    success: true,
                    message: "Exito",
                    data:  {
                        "idRuta": 11,
                        "origen": "Principal",
                        "destino": "LIMA CENTRO",
                        "distancia": 10,
                        "duracion": null
                    }
                }
            },
            "500": {
                status: "500 Bad Request",
                description: "Formato de rutas inválido.",
                data: {
                    status: 500,
                    success: false,
                    message: "Error en servicio al obtener rutas del transportista: El id debe ser mayor a 0.",
                    error_code: "rutas_FORMAT_INVALID"
                }
            }
        }
    },
    {
        id: "consultar-buses",
        category: "Buses",
        method: "GET",
        path: "/v1/auth/transportista/buses",
        title: "Consultar información de Buses",
        description: "Consulta los datos de los Buses de la empresa, Incluye Mapa de Asientos (todos los id traidos son en base a nuestra bd, el parametro {tipo} siempre sera 0 porque es un dato que no se maneja en el sistema y se agrago por defecto para cumplir con sus requerimientos)... Leyenda de valores (letras) (T = televisor, E = escalera , B = baños)",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
          { description: "Este EndPoint no requiere mas parametros" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Datos del bus obtenidos con éxito.",
                data: {
                    status: 200,
                    success: true,
                    message: "Exito",
                    data: {
                        "idBus": 26,
                        "modelo": "ADGNSDF",
                        "placa": "HJJKHKJHK",
                        "tipo": 0,
                        "capacidad": 4,
                        "asiento": [
                            {
                                "idAsiento": 731,
                                "numero": "1",
                                "numeroFila": 0,
                                "numeroColumna": 3,
                                "numeroPiso": 1
                            },
                            {
                                "idAsiento": 732,
                                "numero": "2",
                                "numeroFila": 1,
                                "numeroColumna": 3,
                                "numeroPiso": 1
                            },
                            {
                                "idAsiento": 733,
                                "numero": "3",
                                "numeroFila": 1,
                                "numeroColumna": 4,
                                "numeroPiso": 1
                            },
                            {
                                "idAsiento": 734,
                                "numero": "4",
                                "numeroFila": 1,
                                "numeroColumna": 1,
                                "numeroPiso": 1
                            }
                        ]
                    }
                }
            },
            "500": {
                status: "500 Internal Server Error",
                description: "Error interno del servidor.",
                data: {
                    status: 500,
                    success: false,
                    message: "Error en servicio al obtener buses del transportista: El id debe ser mayor a 0",
                }
            }
        }
    },
    {
        id: "consultar-Tipo-Asiento",
        category: "Tipo de asiento",
        method: "GET",
        path: "/v1/auth/transportista/TipoAsiento",
        title: "Tipo de asiento",
        description: "Muestra el tipo de asiento de un bus específico, como 140°, 160°.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { description: "Este EndPoint no requiere mas parametros" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Datos del tipo de asiento obtenidos con éxito.",
                data: {
                    status: 200,
                    success: true,
                    message: "Exito",
                    data: [
                        {                        
                        "idTipoAsiento": 1,
                        "tiposAsiento": "140",
                        "precio": 0.00
                    },
                    {
                        "idTipoAsiento": 2,
                        "tiposAsiento": "160",
                        "precio": 0.00
        
                    }
                    ]              
                  }
            },
            
        }
    },
    {
        id: "consultar-programaciones",
        category: "Programaciones",
        method: "GET",
        path: "/v1/auth/transportista/programaciones?Fecha={fecha(año/mes/dia)}&IdOrigen={idCiudad}&IdDestino={idciudad}",
        title: "Programaciones",
        description: "Obtiene las programaciones solicitadas De acuredo a la Fecha, el IdOrigen y el IdDestino(estos Id vienen del endpoint de ciudades.)",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "Fecha", type: "DateTime", required: true, description: "Fecha a consultarPara ver la programacion (ejemplo:)", example: "2026-01-13" },
            { name: "IdOrigen", type: "int", required: true, description: "El id de la ciudad origen seleccionada (ejemplo:)", example: "2090" },
            { name: "IdDestino", type: "int", required: true, description: "El Id de la ciudad destino seleccionada (ejemplo:)", example: "2340" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
               status: "200 OK",
                description: "Programaciones obtenidas.",
                data: {
                    success : true,
                    data : [
                        {
                            
                            "idProgramacion": 48697,
                            "fechaProgramacion": "2026-01-13T00:00:00",
                            "fechaLLegada" : "2026-08-16T00:00:00",
                            "idOrigen": 5414,
                            "origen": "TRUJILLO",
                            "puntoEmbarque": [
                                {
                                    "id": 2443,
                                    "nombrePuntoIntermedio": "CHIMBOTE",
                                    "horaSalida": "00:00:00"
                                },
                                {
                                    "id": 5204,
                                    "nombrePuntoIntermedio": "Julcan",
                                    "horaSalida": "00:00:00"
                                },
                                {
                                    "id": 5414,
                                    "nombrePuntoIntermedio": "Trujillo-Esperanza",
                                    "horaSalida": "00:00:00"
                                }
                            ],
                            "idDestino": 5415,
                            "destino": "LIMA",
                            "marcaBus": "marca 5",
                            "modeloBus": "modelo 5",
                            "placaBus": "CARS-12345",
                            "idConductor": 18,
                            "conductor": "Armando Paredes",
                            "precioPiso1": 20.000,
                            "precioPiso2": 40.000,
                            "estado": 1,
                            "puntosIntermedios": [
                                {
                                    "id": 1950,
                                    "name": "ALMACEN",
                                    "p1er": 0.0,
                                    "p2do": 0.0
                                }
                            ]
                            
                        }
                    ]
                }
            },
              "401": {
                status: "401 Unauthorized",
                description: "Las credenciales provistas son inválidas.",
                data: {
                    status: 401,
                    success: false,
                    message: "Credenciales de API inválidas.",
                    error_code: "AUTH_CREDENTIALS_INVALID"
                }
            },
            "500": {
                status: "500 internal server ",
                description: "Formato de rutas inválido.",
                data: {
                    status: 500,
                    success: false,
                    message: "Error en servicio al obtener buses : El idDestino E idOrigen deben ser mayor a  0 .",
                    error_code: "rutas_FORMAT_INVALID"
                }
            },
            "501" : {
                status : "500 internal server BD",
                description : "fallas internas en la Base de Datos (500)" ,
                data :{
                    success : false , 
                    error : "Error en servicio al obtener programaciones Could not find stored procedure 'SP_FiltrarSalidasV2'." 
                    
                }
            }
        }
    },
    {
        id: "Programaciones_por_Asientos",
        category: "Programacion por Id",
        method: "GET",
        path: "/v1/auth/transportista/programaciones/{ID}/asientos",
        title: "Programaciones por asiento",
        description: "Obtiene el mapa de asientos atravez de su id(osea la programacion que se seleccione anteriormente), el IdDetalleProgramacion es el Id con el cual se crea las reservas, el ademas vienen datos como el numero de asiento(si es letra significa que no es un haciento clicleable), el precio normal del asiento si la ruta es la original (el precio se divide en pisos , 1 y 2 ) y tambien el precio si el cliente simplemente va a un punto intermedio.... Los estados(1 = libre, 0 = lo estan comprando, 2 = vendido(reservado))",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdProgramacion", type: "int", required: true, description: "ID de la programación", example: "48697" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Programación por asiento obtenida con éxito.",
                data: {
                    success: true,
                    data: [

                        {
                            "idDetalleProgramacion": 2555206,
                            "idOrigen": 1,
                            "puntoOrigen": "Principal",
                            "puntosEmbarque": [
                                {
                                    "id": 2443,
                                    "nombrePuntoIntermedio": "CHIMBOTE",
                                    "horaSalida": "00:00:00"
                                },
                                {
                                    "id": 5204,
                                    "nombrePuntoIntermedio": "Julcan",
                                    "horaSalida": "00:00:00"
                                },
                                {
                                    "id": 5414,
                                    "nombrePuntoIntermedio": "Trujillo-Esperanza",
                                    "horaSalida": "00:00:00"
                                }
                            ],
                            "idDestino": 2075,
                            "puntoDestino": "AGENCIA TRUJILLO",
                            "valorAsiento": "4 ",
                            "numeroFila": 1,
                            "numeroColumna": 1,
                            "numeroPiso": 1,
                            "estado": 3,
                            "precioPiso1": 120.000,
                            "precioPiso2": 0.000,
                            "puntosIntermedios": [
                                {
                                    "id": 1950,
                                    "name": "ALMACEN",
                                    "p1er": 0.0,
                                    "p2do": 0.0
                                }
                            ]
                        }
                    ]
                        
                }
            },
                "401": {
                status: "401 Unauthorized",
                description: "Credenciales de API inválidas.",
                data: {
                    status: 401,
                    success: false,
                    message: "Credenciales de API inválidas.",
                    error_code: "INVALID_CREDENTIALS"
                }
            },
                "400": {
                status: "400 Bad Request",
                description: "Solicitud inválida.",
                data: {
                    status: 400,
                    success: false,
                    message: "Error en servicio al obtener asientos: El id debe ser mayor a 0",
                    error_code: "INVALID_REQUEST"
                }
            }
        }
    },
    {
        id: "Bloqueo_Asientos",
        category: "Bloqueo Asientos",
        method: "POST",
        path: "/v1/auth/transportista/Asientos/BloqueoAsiento?IdDetalleProgramacion={IdDetalleProgramacion}",
        title: "Bloqueo de asientos",
        description: "Bloquea un asiento específico para un usuario.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdDetalleProgramacion", type: "int", required: true, description: "ID del detalle de la programación(ejemplo:)", example: "2446307" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento bloqueado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Token Generado Correctamente",
                    "token": "6731f1aa-07cd-4df5-8db0-63caf53f92bf"
                }
            },
             "400": {
                status: "400 Bad Request",
                description: "Solicitud inválida.",
                data: {
                    status: 400,
                    "success": false,
                    "mensaje": "No se Obtuvo Token Valido, Este asiento se esta usando por alguien mas"
                }
            }
        }
    },
      {
        id: "Bloqueo_AsientosV2",
        category: "Bloqueo Asientos",
        method: "POST",
        path: "/v1/auth/transportista/Asientos/BloqueoAsientoV2?IdDetalleProgramacion={IdDetalleProgramacion}",
        title: "Bloqueo de asientos V2",
        description: "Bloquea un asiento específico para un usuario.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdDetalleProgramacion", type: "int", required: true, description: "ID del detalle de la programación(ejemplo:)", example: "2446307" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento bloqueado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Asiento Bloqueado Correctamente",
                    "idDetalle": 2878372,
                    "fechaExpiracion": "2026-08-14T16:04:12.4705758-05:00"
                }
            },
             "400": {
                status: "400 Bad Request",
                description: "Solicitud inválida.",
                data: {
                    status: 400,
                    "success": false,
                    "mensaje": "No se Obtuvo IdDetalle, Este asiento se esta usando por alguien mas"
                }
            }
        }
    },
     {
        id: "expandir_tiempo",
        category: "Bloqueo Asientos",
        method: "POST",
        path: "v1/auth/transportista/Reservas/ExtenderV2?IdDetalle={IdDetalle}&Tiempo={Tiempo}",
        title: "Extender Reserva",
        description: "Mantener el asiento bloqueado por mas tiempo",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdDetalleProgramacion", type: "int", required: true, description: "ID del detalle de la programación(ejemplo:)", example: "2446307" },
            { name: "Tiempo", type: "int", required: true, description: "tiempo a extender", example: "15" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento liberado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Tiempo de reserva extendido correctamente",
                    "fechaExpira": "2026-08-14T16:10:50.08"
                }
            },
        }
    },
    {
        id: "Liberar_Asientos",
        category: "Bloqueo Asientos",
        method: "Delete",
        path: "/v1/auth/transportista/Asientos/Bloquear/{Token}",
        title: "Liberar asiento",
        description: "libera el asiento seleccionado con el token generado anteriormente(si pasa mas de 10 minutos el asiento se libera automaticamente).",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "Token", required: true, type: "string", description: "Token de autenticación.", example: "6731f1aa-07cd-4df5-8db0-63caf53f92bf" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento liberado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Asiento liberado correctamente"
                }
            },
        }
    },
     {
        id: "Liberar_AsientosV2",
        category: "Bloqueo Asientos",
        method: "Delete",
        path: "/v1/auth/transportista/Asientos/Liberar/{IdDetalle}",
        title: "Liberar asiento por Id",
        description: "libera el asiento seleccionado con el Id Devuelto anteriormente(si pasa mas de 15 minutos el asiento se libera automaticamente).",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdDetalle", required: true, type: "int", description: "Id detalle de la programacion(asiento seleccionado)", example: "34234234" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento liberado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Asiento liberado correctamente"
                }
            },
        }
    },
    {
        id: "Consulta-estado",
        category: "Crear Reserva",
        method: "GET",
        path: "/v1/auth/transportista/Reservas/Estado/{IdDetalleProgramacion}",
        title: "Consulta el estado del asiento",
        description: "Consultar el estado de un asiento en especifico",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdDetalleProgramacion", required: true, type: "int", description: "Id detalle de la programacion(asiento seleccionado)", example: "34234234" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento liberado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "estado": "Pendiente",
                    "boleto": ""
                }
            },
        }
    },
     {
        id: "Crear_Reserva",
        category: "Crear Reserva",
        method: "Post",
        path: "/v1/auth/transportista/Reserva",
        title: "Crear reserva",
        description: "Crea una reserva y genera el comprobante electrónico. Nota de integración: El campo 'pdffact' viene como un XML SOAP en texto. Para obtener los documentos, se debe extraer el string JSON que está dentro del nodo '<GetDocumentoResult>', deserializarlo y decodificar los campos 'ArchivoPDF' y 'ArchivoXML' que vienen en Base64 a archivos físicos.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [],
        queryParams: [],
        bodyParams: {
             contentType: "application/json",
            schema: [
                { name: "IdDetalleProgramacion", type: "int", required: true, description: "el Id Del detalle de la programacion" },
                { name: "TipoDocumento", type: "int", required: true, description: "Tipo de documento del pasajero (1 = DNI,  4 = Carnet Extranjeria, 7 = Pasaporte, 11 = PART. DE NACIMIENTO-IDENTIDAD, 0 = Otros)" },
                { name: "NroDocumento", type: "string", required: true, description: "DNI, CE..., ECT." },
                { name: "Pasajero", type: "string", required: true, description: "Nombres y apellidos del pasajero" },
                { name: "Telefono", type: "string", required: true, description: "Telefono del pasajero(en caso no tiene se debe retornar (-))" },
                { name: "FechaNacimiento", type: "datetime", required: false, description: "Fecha de nacimiento del pasajero.(puede ser null)" },
                { name: "Edad", type: "int", required: true, description: "Edad Del Pasajero(puedes retornar 0 si no se registra)" },
                { name: "Sexo", type: "string", required: true, description: "Sexo del Pasajero (M o F)" },
                { name: "IdAgenciaOrigen", type: "int", required: true, description: "El Id de La ciudad u Agencia origen seleccionada." },
                { name: "Ruc", type: "string", required: false, description: "Ruc Del Pasajero (si no es Factura puede ser null)." },
                { name: "RazonSocial", type: "string", required: false, description: "Razon Social del Pasajero (si no es Factura puede ser null)." },
                { name: "Direccion", type: "string", required: true, description: "Direccion del pasajero(puede retornar(-))." },
                { name: "IdAgenciaDestino", type: "int", required: true, description: "Id de La Ciudad Destino o Id Agencia de algun Punto intermedio." },
                { name: "MedioDePago", type: "string", required: true, description: "Efectivo, Yape, Tarjeta, Cheque, Depósito, Yape, Plin, Aplicativo(esos son los nombres que se debe retornar(tener en cuenta minusculas y mayuculas))." },
                { name: "Tarjeta", type: "string", required: true, description: "este campo es valido para todos los medios de pago menos efectivo(si es tarjeta(nro de tarjeta), si es Yape(nro de celular de yape), si es Deposito(nro de deposito), caso no desee agregar los datos debe mandar 11111 o 00000(solo es null cuando el medio de pago es efectivo lo cual no seria su caso XD))" },
                { name: "HoraSalida", type: "string", required: false, description: "Hora de Salida del Bus tipo string en formato(12:00:00 AM(hora , minutos , segundos, AM o PM), Puede ser null." },
                { name: "Observacion", type: "string", required: false, description: "Alguna Observacion o detalle del Pasajero, Puede ser null." },
                { name: "Menor", type: "string", required: false,  description: `Datos del Menor en caso se viaje con uno, Puede ser null, si quiere guardar los datos del menor debe ser en string y con este formato... '{"Dni":"90805812","Nombres":"JHAN CASTRO BARRETO","Apellidos":"","Nombre":null,"Direccion":"","Telefono":"","Correo":"","NombreCompleto":null,"Emisiones":0,"NombresRazonSocial":null,"Sexo":"M","CodigoInterno":null,"IdClienteEmpresa":0,"IdUsuario":0,"Usuario":null,"EstadoCivil":null,"FechaNacimientoS":null,"Edad":0,"FechaNacimiento":null,"FechaNacimientoDt":"","TipoDoc":11}' los datos a registrar serian :Nombres ,Apellidos , Sexo, y edad y fecha de nacimiento(opcional) los demas datos pueden quedarse por defecto como en el sjon `},
                { name: "Precio", type: "decimal", required: true, description: "Monto del Pasaje" },
                { name: "IncluidoIGV", type: "int", required: true, description: "si el igv esta incuido = 0 si el igv es adicional = 1)()aunque en su caso el documento es exonerado asi que pueden retornar solamente 0." },
                { name: "PlacaBus", type: "string", required: true, description: "Placa Del bus" },
            ],
            example: {
                       "IdDetalleProgramacion" : 2736585, 
                        "TipoDocumento" : 1 , 
                        "NroDocumento" : "01067382",
                        "Pasajero" : "ISHUIZA SANANCINA BELMIRA", 
                        "Telefono" : "-", 
                        "FechaNacimiento" : null, 
                        "Edad" : 0, 
                        "Sexo" : "M", 
                        "IdAgenciaOrigen" : 1, 
                        "Ruc": "20610208119",
                        "RazonSocial": "MULTISERVICIOS EL VARON S.A.C.",
                        "Direccion": "PR. JOSE F SANCHEZ CARRION MZA. C LOTE. 3 URB. LOS PORTALES LA LIBERTAD - TRUJILLO - TRUJILLO",
                        "IdAgenciaDestino" : 264, 
                        "MedioDePago" : "Efectivo", 
                        "Tarjeta" : null, 
                        "HoraSalida" : "12:00:00 AM",
                        "Observacion" : null,
                        "Menor" : null,  
                        "Precio" : "122.00" ,
                        "IncluidoIGV" : 1,
                        "PlacaBus" : "ASFBVS"
                    }
        },
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento liberado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Reserva creada correctamente",
                    "codigo": 2736588,
                    "pdffact" : "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><soap:Body><GetDocumentoResponse xmlns=\"http://webservice.org/\"><GetDocumentoResult>{\"Success\":true,\"Mensaje\":\"Factura registrada correctamente.\",\"Error\":\"\",\"NroError\":0,\"NumeroDocumento\":\"F0O1-1665\",\"NombreArchivo\":\"20601196817-01-F0O1-1665\",\"FechaEnvioSunat\":null,\"ArchivoXML\":\"PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPEludm9pY2UgeG1sbnM6c2FjPSJ1cm46c3VuYXQ6bmFtZXM6c3BlY2lmaWNhdGlvbjp1Ymw6cGVydTpzY2hlbWE6eHNkOlN1bmF0QWdncmVnYXRlQ29tcG9uZW50cy0xIiB4bWxuczpjYWM9InVybjpvYXNpczpuYW1lczpzcGVjaWZpY2F0aW9uOnVibDpzY2hlbWE6eHNkOkNvbW1vbkFnZ3JlZ2F0ZUNvbXBvbmVudHMtMiIgeG1sbnM6Y2JjPSJ1cm46b2FzaXM6bmFtZXM6c3BlY2lmaWNhdGlvbjp1Ymw6c2NoZW1hOnhzZDpDb21tb25CYXNpY0NvbXBvbmVudHMtMiIgeG1sbnM6Y2N0cz0idXJuOnVuOnVuZWNlOnVuY2VmYWN0OmRvY3VtZW50YXRpb246MiIgeG1sbnM6dWR0PSJ1cm46dW46dW5lY2U6dW5jZWZhY3Q6ZGF0YTpzcGVjaWZpY2F0aW9uOlVucXVhbGlmaWVkRGF0YVR5cGVzU2NoZW1hTW9kdWxlOjIiIHhtbG5zOmV4dD0idXJuOm9hc2lzOm5hbWVzOnNwZWNpZmljYXRpb246dWJsOnNjaGVtYTp4c2Q6Q29tbW9uRXh0ZW5zaW9uQ29tcG9uZW50cy0yIiB4bWxuczpxZHQ9InVybjpvYXNpczpuYW1lczpzcGVjaWZpY2F0aW9uOnVibDpzY2hlbWE6eHNkOlF1YWxpZmllZERhdGF0eXBlcy0yIiB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyIgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeG1sbnM9InVybjpvYXNpczpuYW1lczpzcGVjaWZpY2F0aW9uOnVibDpzY2hlbWE6eHNkOkludm9pY2UtMiI+DQogIDxleHQ6VUJMRXh0ZW5zaW9ucz4NCiAgICA8ZXh0OlVCTEV4dGVuc2lvbj4NCiAgICAgIDxleHQ6RXh0ZW5zaW9uQ29udGVudCAvPg0KICAgIDwvZXh0OlVCTEV4dGVuc2lvbj4NCiAgPC9leHQ6VUJMRXh0ZW5zaW9ucz4NCiAgPGNiYzpVQkxWZXJzaW9uSUQ+Mi4xPC9jYmM6VUJMVmVyc2lvbklEPg0KICA8Y2JjOkN1c3RvbWl6YXRpb25JRD4yLjA8L2NiYzpDdXN0b21pemF0aW9uSUQ+DQogIDxjYmM6UHJvZmlsZUlEIHNjaGVtZU5hbWU9IlNVTkFUOklkZW50aWZpY2Fkb3IgZGUgVGlwbyBkZSBPcGVyYWNpb24iIHNjaGVtZUFnZW5jeU5hbWU9IlBFOlNVTkFUIiBzY2hlbWVVUkk9InVybjpwZTpnb2I6c3VuYXQ6Y3BlOnNlZTpnZW06Y2F0YWxvZ29zOmNhdGFsb2dvMTciPjAxMDE8L2NiYzpQcm9maWxlSUQ+DQogIDxjYmM6SUQ+RjBPMS0xNjY1PC9jYmM6SUQ+DQogIDxjYmM6SXNzdWVEYXRlPjIwMjYtMDYtMDc8L2NiYzpJc3N1ZURhdGU+DQogIDxjYmM6SXNzdWVUaW1lPjAzOjI3OjM4PC9jYmM6SXNzdWVUaW1lPg0KICA8Y2JjOkludm9pY2VUeXBlQ29kZSBsaXN0QWdlbmN5TmFtZT0iUEU6U1VOQVQiIGxpc3ROYW1lPSJUaXBvIGRlIERvY3VtZW50byIgbGlzdFVSST0idXJuOnBlOmdvYjpzdW5hdDpjcGU6c2VlOmdlbTpjYXRhbG9nb3M6Y2F0YWxvZ28wMSIgbGlzdElEPSIwMTAxIj4wMTwvY2JjOkludm9pY2VUeXBlQ29kZT4NCiAgPGNiYzpOb3RlIGxhbmd1YWdlTG9jYWxlSUQ9IjEwMDAiPkNJRU5UTyBWRUlOVElET1MgWSAwMC8xMDAgU29sZXM8L2NiYzpOb3RlPg0KICA8Y2JjOkRvY3VtZW50Q3VycmVuY3lDb2RlIGxpc3RJRD0iSVNPIDQyMTcgQWxwaGEiIGxpc3ROYW1lPSJDdXJyZW5jeSIgbGlzdEFnZW5jeU5hbWU9IlVuaXRlZCBOYXRpb25zIEVjb25vbWljIENvbW1pc3Npb24gZm9yIEV1cm9wZSI+UEVOPC9jYmM6RG9jdW1lbnRDdXJyZW5jeUNvZGU+DQogIDxjYmM6TGluZUNvdW50TnVtZXJpYz4xPC9jYmM6TGluZUNvdW50TnVtZXJpYz4NCiAgPGNhYzpTaWduYXR1cmU+DQogICAgPGNiYzpJRD5TRkYwTzEtMTY2NTwvY2JjOklEPg0KICAgIDxjYWM6U2lnbmF0b3J5UGFydHk+DQogICAgICA8Y2FjOlBhcnR5SWRlbnRpZmljYXRpb24+DQogICAgICAgIDxjYmM6SUQ+MjA2MDExOTY4MTc8L2NiYzpJRD4NCiAgICAgIDwvY2FjOlBhcnR5SWRlbnRpZmljYXRpb24+DQogICAgICA8Y2FjOlBhcnR5TmFtZT4NCiAgICAgICAgPGNiYzpOYW1lPjwhW0NEQVRBW1JFU0VUIFNPRlRXQVJFIFMuQS5DLl1dPjwvY2JjOk5hbWU+DQogICAgICA8L2NhYzpQYXJ0eU5hbWU+DQogICAgPC9jYWM6U2lnbmF0b3J5UGFydHk+DQogICAgPGNhYzpEaWdpdGFsU2lnbmF0dXJlQXR0YWNobWVudD4NCiAgICAgIDxjYWM6RXh0ZXJuYWxSZWZlcmVuY2U+DQogICAgICAgIDxjYmM6VVJJPiNTRkYwTzEtMTY2NTwvY2JjOlVSST4NCiAgICAgIDwvY2FjOkV4dGVybmFsUmVmZXJlbmNlPg0KICAgIDwvY2FjOkRpZ2l0YWxTaWduYXR1cmVBdHRhY2htZW50Pg0KICA8L2NhYzpTaWduYXR1cmU+DQogIDxjYWM6QWNjb3VudGluZ1N1cHBsaWVyUGFydHk+DQogICAgPGNhYzpQYXJ0eT4NCiAgICAgIDxjYWM6UGFydHlJZGVudGlmaWNhdGlvbj4NCiAgICAgICAgPGNiYzpJRCBzY2hlbWVJRD0iNiIgc2NoZW1lTmFtZT0iRG9jdW1lbnRvIGRlIElkZW50aWRhZCIgc2NoZW1lQWdlbmN5TmFtZT0iUEU6U1VOQVQiIHNjaGVtZVVSST0idXJuOnBlOmdvYjpzdW5hdDpjcGU6c2VlOmdlbTpjYXRhbG9nb3M6Y2F0YWxvZ28wNiI+MjA2MDExOTY4MTc8L2NiYzpJRD4NCiAgICAgIDwvY2FjOlBhcnR5SWRlbnRpZmljYXRpb24+DQogICAgICA8Y2FjOlBhcnR5TGVnYWxFbnRpdHk+DQogICAgICAgIDxjYmM6UmVnaXN0cmF0aW9uTmFtZT48IVtDREFUQVtSRVNFVCBTT0ZUV0FSRSBTLkEuQy5dXT48L2NiYzpSZWdpc3RyYXRpb25OYW1lPg0KICAgICAgICA8Y2FjOlJlZ2lzdHJhdGlvbkFkZHJlc3M+DQogICAgICAgICAgPGNiYzpJRCBzY2hlbWVOYW1lPSJVYmlnZW9zIiBzY2hlbWVBZ2VuY3lOYW1lPSJQRTpJTkVJIj4xMzAxMDE8L2NiYzpJRD4NCiAgICAgICAgICA8Y2JjOkFkZHJlc3NUeXBlQ29kZSBsaXN0TmFtZT0iRXN0YWJsZWNpbWllbnRvcyBhbmV4b3MiIGxpc3RBZ2VuY3lOYW1lPSJQRTpTVU5BVCI+MDAwMDwvY2JjOkFkZHJlc3NUeXBlQ29kZT4NCiAgICAgICAgICA8Y2FjOkFkZHJlc3NMaW5lPg0KICAgICAgICAgICAgPGNiYzpMaW5lPjwhW0NEQVRBW0FWLiBMQVJDTyBOUk8uIDgzNCBVUkIuIFZJU1RBIEFMRUdSRV1dPjwvY2JjOkxpbmU+DQogICAgICAgICAgPC9jYWM6QWRkcmVzc0xpbmU+DQogICAgICAgICAgPGNhYzpDb3VudHJ5Pg0KICAgICAgICAgICAgPGNiYzpJZGVudGlmaWNhdGlvbkNvZGUgbGlzdE5hbWU9IkNvdW50cnkiIGxpc3RBZ2VuY3lOYW1lPSJVbml0ZWQgTmF0aW9ucyBFY29ub21pYyBDb21taXNzaW9uIGZvciBFdXJvcGUiIGxpc3RJRD0iSVNPIDMxNjYtMSI+UEU8L2NiYzpJZGVudGlmaWNhdGlvbkNvZGU+DQogICAgICAgICAgPC9jYWM6Q291bnRyeT4NCiAgICAgICAgPC9jYWM6UmVnaXN0cmF0aW9uQWRkcmVzcz4NCiAgICAgIDwvY2FjOlBhcnR5TGVnYWxFbnRpdHk+DQogICAgPC9jYWM6UGFydHk+DQogIDwvY2FjOkFjY291bnRpbmdTdXBwbGllclBhcnR5Pg0KICA8Y2FjOkFjY291bnRpbmdDdXN0b21lclBhcnR5Pg0KICAgIDxjYWM6UGFydHk+DQogICAgICA8Y2FjOlBhcnR5SWRlbnRpZmljYXRpb24+DQogICAgICAgIDxjYmM6SUQgc2NoZW1lSUQ9IjYiIHNjaGVtZU5hbWU9IkRvY3VtZW50byBkZSBJZGVudGlkYWQiIHNjaGVtZUFnZW5jeU5hbWU9IlBFOlNVTkFUIiBzY2hlbWVVUkk9InVybjpwZTpnb2I6c3VuYXQ6Y3BlOnNlZTpnZW06Y2F0YWxvZ29zOmNhdGFsb2dvMDYiPjIwNjEwMjA4MTE5PC9jYmM6SUQ+DQogICAgICA8L2NhYzpQYXJ0eUlkZW50aWZpY2F0aW9uPg0KICAgICAgPGNhYzpQYXJ0eU5hbWU+DQogICAgICAgIDxjYmM6TmFtZT4tPC9jYmM6TmFtZT4NCiAgICAgIDwvY2FjOlBhcnR5TmFtZT4NCiAgICAgIDxjYWM6UGFydHlUYXhTY2hlbWU+DQogICAgICAgIDxjYmM6UmVnaXN0cmF0aW9uTmFtZT48IVtDREFUQVtNVUxUSVNFUlZJQ0lPUyBFTCBWQVJPTiBTLkEuQy5dXT48L2NiYzpSZWdpc3RyYXRpb25OYW1lPg0KICAgICAgICA8Y2JjOkNvbXBhbnlJRCBzY2hlbWVJRD0iNiIgc2NoZW1lTmFtZT0iU1VOQVQ6SWRlbnRpZmljYWRvciBkZSBEb2N1bWVudG8gZGUgSWRlbnRpZGFkIiBzY2hlbWVBZ2VuY3lOYW1lPSJQRTpTVU5BVCIgc2NoZW1lVVJJPSJ1cm46cGU6Z29iOnN1bmF0OmNwZTpzZWU6Z2VtOmNhdGFsb2dvczpjYXRhbG9nbzA2Ij4yMDYxMDIwODExOTwvY2JjOkNvbXBhbnlJRD4NCiAgICAgICAgPGNhYzpUYXhTY2hlbWU+DQogICAgICAgICAgPGNiYzpJRCBzY2hlbWVJRD0iNiIgc2NoZW1lTmFtZT0iU1VOQVQ6SWRlbnRpZmljYWRvciBkZSBEb2N1bWVudG8gZGUgSWRlbnRpZGFkIiBzY2hlbWVBZ2VuY3lOYW1lPSJQRTpTVU5BVCIgc2NoZW1lVVJJPSJ1cm46cGU6Z29iOnN1bmF0OmNwZTpzZWU6Z2VtOmNhdGFsb2dvczpjYXRhbG9nbzA2Ij4yMDYxMDIwODExOTwvY2JjOklEPg0KICAgICAgICA8L2NhYzpUYXhTY2hlbWU+DQogICAgICA8L2NhYzpQYXJ0eVRheFNjaGVtZT4NCiAgICAgIDxjYWM6UGFydHlMZWdhbEVudGl0eT4NCiAgICAgICAgPGNiYzpSZWdpc3RyYXRpb25OYW1lPjwhW0NEQVRBW01VTFRJU0VSVklDSU9TIEVMIFZBUk9OIFMuQS5DLl1dPjwvY2JjOlJlZ2lzdHJhdGlvbk5hbWU+DQogICAgICAgIDxjYWM6UmVnaXN0cmF0aW9uQWRkcmVzcz4NCiAgICAgICAgICA8Y2FjOkFkZHJlc3NMaW5lPg0KICAgICAgICAgICAgPGNiYzpMaW5lPjwhW0NEQVRBW1BSLiBKT1NFIEYgU0FOQ0hFWiBDQVJSSU9OIE1aQS4gQyBMT1RFLiAzIFVSQi4gTE9TIFBPUlRBTEVTIExBIExJQkVSVEFEIC0gVFJVSklMTE8gLSBUUlVKSUxMT11dPjwvY2JjOkxpbmU+DQogICAgICAgICAgPC9jYWM6QWRkcmVzc0xpbmU+DQogICAgICAgICAgPGNhYzpDb3VudHJ5Pg0KICAgICAgICAgICAgPGNiYzpJZGVudGlmaWNhdGlvbkNvZGUgbGlzdE5hbWU9IkNvdW50cnkiIGxpc3RBZ2VuY3lOYW1lPSJVbml0ZWQgTmF0aW9ucyBFY29ub21pYyBDb21taXNzaW9uIGZvciBFdXJvcGUiIGxpc3RJRD0iSVNPIDMxNjYtMSI+UEU8L2NiYzpJZGVudGlmaWNhdGlvbkNvZGU+DQogICAgICAgICAgPC9jYWM6Q291bnRyeT4NCiAgICAgICAgPC9jYWM6UmVnaXN0cmF0aW9uQWRkcmVzcz4NCiAgICAgIDwvY2FjOlBhcnR5TGVnYWxFbnRpdHk+DQogICAgPC9jYWM6UGFydHk+DQogIDwvY2FjOkFjY291bnRpbmdDdXN0b21lclBhcnR5Pg0KICA8Y2FjOlBheW1lbnRUZXJtcz4NCiAgICA8Y2JjOklEPkZvcm1hUGFnbzwvY2JjOklEPg0KICAgIDxjYmM6UGF5bWVudE1lYW5zSUQ+Q29udGFkbzwvY2JjOlBheW1lbnRNZWFuc0lEPg0KICA8L2NhYzpQYXltZW50VGVybXM+DQogIDxjYWM6VGF4VG90YWw+DQogICAgPGNiYzpUYXhBbW91bnQgY3VycmVuY3lJRD0iUEVOIj4wLjAwPC9jYmM6VGF4QW1vdW50Pg0KICAgIDxjYWM6VGF4U3VidG90YWw+DQogICAgICA8Y2JjOlRheGFibGVBbW91bnQgY3VycmVuY3lJRD0iUEVOIj4xMjIuMDA8L2NiYzpUYXhhYmxlQW1vdW50Pg0KICAgICAgPGNiYzpUYXhBbW91bnQgY3VycmVuY3lJRD0iUEVOIj4wLjAwPC9jYmM6VGF4QW1vdW50Pg0KICAgICAgPGNhYzpUYXhDYXRlZ29yeT4NCiAgICAgICAgPGNiYzpJRCBzY2hlbWVBZ2VuY3lOYW1lPSJVbml0ZWQgTmF0aW9ucyBFY29ub21pYyBDb21taXNzaW9uIGZvciBFdXJvcGUiIHNjaGVtZU5hbWU9IlRheCBDYXRlZ29yeSBJZGVudGlmaWVyIiBzY2hlbWVJRD0iVU4vRUNFIDUzMDUiPkU8L2NiYzpJRD4NCiAgICAgICAgPGNhYzpUYXhTY2hlbWU+DQogICAgICAgICAgPGNiYzpJRCBzY2hlbWVJRD0iVU4vRUNFIDUxNTMiIHNjaGVtZUFnZW5jeUlEPSI2Ij45OTk3PC9jYmM6SUQ+DQogICAgICAgICAgPGNiYzpOYW1lPkVYTzwvY2JjOk5hbWU+DQogICAgICAgICAgPGNiYzpUYXhUeXBlQ29kZT5WQVQ8L2NiYzpUYXhUeXBlQ29kZT4NCiAgICAgICAgPC9jYWM6VGF4U2NoZW1lPg0KICAgICAgPC9jYWM6VGF4Q2F0ZWdvcnk+DQogICAgPC9jYWM6VGF4U3VidG90YWw+DQogIDwvY2FjOlRheFRvdGFsPg0KICA8Y2FjOkxlZ2FsTW9uZXRhcnlUb3RhbD4NCiAgICA8Y2JjOkxpbmVFeHRlbnNpb25BbW91bnQgY3VycmVuY3lJRD0iUEVOIj4xMjIuMDA8L2NiYzpMaW5lRXh0ZW5zaW9uQW1vdW50Pg0KICAgIDxjYmM6VGF4SW5jbHVzaXZlQW1vdW50IGN1cnJlbmN5SUQ9IlBFTiI+MTIyLjAwPC9jYmM6VGF4SW5jbHVzaXZlQW1vdW50Pg0KICAgIDxjYmM6UGF5YWJsZUFtb3VudCBjdXJyZW5jeUlEPSJQRU4iPjEyMi4wMDwvY2JjOlBheWFibGVBbW91bnQ+DQogIDwvY2FjOkxlZ2FsTW9uZXRhcnlUb3RhbD4NCiAgPGNhYzpJbnZvaWNlTGluZT4NCiAgICA8Y2JjOklEPjE8L2NiYzpJRD4NCiAgICA8Y2JjOkludm9pY2VkUXVhbnRpdHkgdW5pdENvZGVMaXN0QWdlbmN5TmFtZT0iVW5pdGVkIE5hdGlvbnMgRWNvbm9taWMgQ29tbWlzc2lvbiBmb3IgRXVyb3BlIiB1bml0Q29kZUxpc3RJRD0iVU4vRUNFIHJlYyAyMCIgdW5pdENvZGU9Ik5JVSI+MS4wMDA8L2NiYzpJbnZvaWNlZFF1YW50aXR5Pg0KICAgIDxjYmM6TGluZUV4dGVuc2lvbkFtb3VudCBjdXJyZW5jeUlEPSJQRU4iPjEyMi4wMDwvY2JjOkxpbmVFeHRlbnNpb25BbW91bnQ+DQogICAgPGNhYzpQcmljaW5nUmVmZXJlbmNlPg0KICAgICAgPGNhYzpBbHRlcm5hdGl2ZUNvbmRpdGlvblByaWNlPg0KICAgICAgICA8Y2JjOlByaWNlQW1vdW50IGN1cnJlbmN5SUQ9IlBFTiI+MTIyLjAwMDwvY2JjOlByaWNlQW1vdW50Pg0KICAgICAgICA8Y2JjOlByaWNlVHlwZUNvZGUgbGlzdEFnZW5jeU5hbWU9IlBFOlNVTkFUIiBsaXN0TmFtZT0iVGlwbyBkZSBQcmVjaW8iIGxpc3RVUkk9InVybjpwZTpnb2I6c3VuYXQ6Y3BlOnNlZTpnZW06Y2F0YWxvZ29zOmNhdGFsb2dvMTYiPjAxPC9jYmM6UHJpY2VUeXBlQ29kZT4NCiAgICAgIDwvY2FjOkFsdGVybmF0aXZlQ29uZGl0aW9uUHJpY2U+DQogICAgPC9jYWM6UHJpY2luZ1JlZmVyZW5jZT4NCiAgICA8Y2FjOlRheFRvdGFsPg0KICAgICAgPGNiYzpUYXhBbW91bnQgY3VycmVuY3lJRD0iUEVOIj4wLjAwPC9jYmM6VGF4QW1vdW50Pg0KICAgICAgPGNhYzpUYXhTdWJ0b3RhbD4NCiAgICAgICAgPGNiYzpUYXhhYmxlQW1vdW50IGN1cnJlbmN5SUQ9IlBFTiI+MTIyLjAwPC9jYmM6VGF4YWJsZUFtb3VudD4NCiAgICAgICAgPGNiYzpUYXhBbW91bnQgY3VycmVuY3lJRD0iUEVOIj4wLjAwPC9jYmM6VGF4QW1vdW50Pg0KICAgICAgICA8Y2FjOlRheENhdGVnb3J5Pg0KICAgICAgICAgIDxjYmM6SUQgc2NoZW1lQWdlbmN5TmFtZT0iVW5pdGVkIE5hdGlvbnMgRWNvbm9taWMgQ29tbWlzc2lvbiBmb3IgRXVyb3BlIiBzY2hlbWVOYW1lPSJUYXggQ2F0ZWdvcnkgSWRlbnRpZmllciIgc2NoZW1lSUQ9IlVOL0VDRSA1MzA1Ij5FPC9jYmM6SUQ+DQogICAgICAgICAgPGNiYzpQZXJjZW50PjE4LjAwPC9jYmM6UGVyY2VudD4NCiAgICAgICAgICA8Y2JjOlRheEV4ZW1wdGlvblJlYXNvbkNvZGUgbGlzdEFnZW5jeU5hbWU9IlBFOlNVTkFUIiBsaXN0TmFtZT0iQWZlY3RhY2lvbiBkZWwgSUdWIiBsaXN0VVJJPSJ1cm46cGU6Z29iOnN1bmF0OmNwZTpzZWU6Z2VtOmNhdGFsb2dvczpjYXRhbG9nbzA3Ij4yMDwvY2JjOlRheEV4ZW1wdGlvblJlYXNvbkNvZGU+DQogICAgICAgICAgPGNhYzpUYXhTY2hlbWU+DQogICAgICAgICAgICA8Y2JjOklEIHNjaGVtZUFnZW5jeUlEPSI2IiBzY2hlbWVJRD0iVU4vRUNFIDUxNTMiPjk5OTc8L2NiYzpJRD4NCiAgICAgICAgICAgIDxjYmM6TmFtZT5FWE88L2NiYzpOYW1lPg0KICAgICAgICAgICAgPGNiYzpUYXhUeXBlQ29kZT5WQVQ8L2NiYzpUYXhUeXBlQ29kZT4NCiAgICAgICAgICA8L2NhYzpUYXhTY2hlbWU+DQogICAgICAgIDwvY2FjOlRheENhdGVnb3J5Pg0KICAgICAgPC9jYWM6VGF4U3VidG90YWw+DQogICAgPC9jYWM6VGF4VG90YWw+DQogICAgPGNhYzpJdGVtPg0KICAgICAgPGNiYzpEZXNjcmlwdGlvbj48IVtDREFUQVtQYXNhamVdXT48L2NiYzpEZXNjcmlwdGlvbj4NCiAgICAgIDxjYWM6U2VsbGVyc0l0ZW1JZGVudGlmaWNhdGlvbj4NCiAgICAgICAgPGNiYzpJRD4zNTI3PC9jYmM6SUQ+DQogICAgICA8L2NhYzpTZWxsZXJzSXRlbUlkZW50aWZpY2F0aW9uPg0KICAgIDwvY2FjOkl0ZW0+DQogICAgPGNhYzpQcmljZT4NCiAgICAgIDxjYmM6UHJpY2VBbW91bnQgY3VycmVuY3lJRD0iUEVOIj4xMjIuMDAwPC9jYmM6UHJpY2VBbW91bnQ+DQogICAgPC9jYWM6UHJpY2U+DQogIDwvY2FjOkludm9pY2VMaW5lPg0KPC9JbnZvaWNlPg==\",\"ArchivoPDF\":\"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bnREZXNjcmlwdG9yIDMyIDAgUgovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9XIFswIFs2NjYgNjQxIDI0NyAzNDUgNDk0IDQ5NCA1NDMgNTQzIDI5NSAyNDcgNTQzIDI0NyAyOTUgNjQxIDU0MyA2NDEgNjQxIDQ5NCA0OTQgNDk0IDQ5NCA0OTQgNDk0IDQ5NCA1NDMgNjQxIDU5MiA1NDMgNjkxIDY0MSAyNDcgNjkxIDI5NSA0OTQgNzkwIDQ5NCA2OTEgNTQzIDU0MyA0OTQgNDQ0IDI0NyA1OTIgNTkyIDU0MyAyNDcgNTkyIDU0MyAyOTUgNDk0IDY0MSA1NDMgNTQzIDU0MyA3NDAgNDk0IDQ5NCA2NDEgNzkwIDI0NyA1OTIgNDk0IDQ5NCA2OTEgXQpdCj4+CmVuZG9iagozNSAwIG9iago8PCAvTGVuZ3RoIDgwNSA+PgpzdHJlYW0KL0NJREluaXQgL1Byb2NTZXQgZmluZHJlc291cmNlIGJlZ2luCjEyIGRpY3QgYmVnaW4KYmVnaW5jbWFwCi9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVudCAwID4+IGRlZgovQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYKL0NNYXBUeXBlIDIgZGVmCjEgYmVnaW5jb2Rlc3BhY2VyYW5nZQo8MDAwMD4gPEZGRkY+CmVuZGNvZGVzcGFjZXJhbmdlCjIgYmVnaW5iZnJhbmdlCjwwMDAwPiA8MDAwMD4gPDAwMDA+CjwwMDAxPiA8MDAzRj4gWzwwMDQ0PiA8MDA2OT4gPDAwNzI+IDwwMDY1PiA8MDA2Mz4gPDAwRjM+IDwwMDZFPiA8MDAzQT4gPDAwMjA+IDwwMDU0PiA8MDA2Qz4gPDAwNjY+IDwwMDQzPiA8MDA2Rj4gPDAwNTI+IDwwMDU1PiA8MDAzMj4gPDAwMzA+IDwwMDM2PiA8MDAzMT4gPDAwMzk+IDwwMDM4PiA8MDAzNz4gPDAwNDY+IDwwMDQxPiA8MDA0NT4gPDAwNEM+IDwwMEQzPiA8MDA0RT4gPDAwNDk+IDwwMDRGPiA8MDAyRD4gPDAwMzU+IDwwMDZEPiA8MDA2MT4gPDAwNDc+IDwwMDY4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QXJpYWxOb3JtYWwKL0NJRFN5c3RlbUluZm8gPDwgL1JlZ2lzdHJ5IChBZG9iZSkgL09yZGVyaW5nIChJZGVudGl0eSkgL1N1cHBsZW1lbnQgMCA+PgovRm9udERlc2NyaXB0b3IgMzcgMCBSCi9DSURUb0dJRE1hcCAvSWRlbnRpdHkKL1cgWzAgWzY2NiA1OTIgNTkyIDI0NyAyNDcgNDk0IDY0MSA2NDEgNjkxIDY0MSA0OTQgNDk0IDQ5NCA2NDEgNTkyIDI0NyA1OTIgNTQzIDU5MiA2OTEgMjk1IDQ0NCA2NDEgNDk0IDQ5NCA0OTQgNDk0IDQ5NCA0OTQgNDQ0IDQ5NCA0OTQgMjQ3IDQ5NCA0NDQgOTAxIDI5NSA0NDQgNDk0IDQ5NCA0OTQgNDk0IDc0MCA0OTQgMjQ3IDc0MCA0OTQgNjQxIDU0MyA1OTIgNTkyIDI0NyAxOTcgMTk3IDQ0NCA2OTEgMTk3IDQ0NCAyNDcgNDk0IF0KXQo+PgplbmRvYmoKNDAgMCBvYmoKPDwgL0xlbmd0aCA3NzcgPj4Kc3RyZWFtCi9DSURJbml0IC9Qcm9jU2V0IGZpbmRyZXNvdXJjZSBiZWdpbgoxMiBkaWN0IGJlZ2luCmJlZ2luY21hcAovQ0lEU3lzdGVtSW5mbyA8PCAvUmVnaXN0cnkgKEFkb2JlKSAvT3JkZXJpbmcgKFVDUykgL1N1cHBsZW1lbnQgMCA+PiBkZWYKL0NNYXBOYW1lIC9BZG9iZS1JZGVudGl0eS1VQ1MgZGVmCi9DTWFwVHlwZSAyIGRlZgoxIGJlZ2luY29kZXNwYWNlcmFuZ2UKPDAwMDA+IDxGRkZGPgplbmRjb2Rlc3BhY2VyYW5nZQoyIGJlZ2luYmZyYW5nZQo8MDAwMD4gPDAwMDA+IDwwMDAwPgo8MDAwMT4gPDAwM0I+IFs8MDA0MT4gPDAwNTY+IDwwMDJFPiA8MDAyMD4gPDAwNEM+IDwwMDUyPiA8MDA0Mz4gPDAwNEY+IDwwMDRFPiA8MDAzOD4gPDAwMzM+IDwwMDM0PiA8MDA1NT4gPDAwNDI+IDwwMDQ5PiA8MDA1Mz4gPDAwNTQ+IDwwMDQ1PiA8MDA0Nz4gPDAwMkQ+IDwwMDRBPiA8MDA0ND4gPDAwMzk+IDwwMDM2PiA8MDAzMD4gPDAwMzI+IDwwMDM3PiA8MDAzNT4gPDAwNzY+IDwwMDY1PiA8MDA2RT4gPDAwNzQ+IDwwMDYxPiA8MDA3Mz4gPDAwNDA+IDwwMDcyPiA8MDA2Mz4gPDAwNjg+IDwwMDcwPiA8MDA3NT4gPDAwNkY+IDwwMDZEPiA8MDAzMT4gPDAwMkY+IDwwMDREPiA8MDA2ND4gPDAwNDg+IDwwMDVBPiA8MDA1MD4gPDAwNTk+IDwwMDNBPiA8MDA2OT4gPDAwNkM+IDwwMDc5PiA8MDA1MT4gPDAwNkE+IDwwMDdBPiA8MDAyQz4gPDAwRjM+IF0KZW5kYmZyYW5nZQplbmRjbWFwCkNNYXBOYW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcAplbmQKZW5kCgplbmRzdHJlYW0KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUwCi9CYXNlRm9udCAvQXJpYWxOb3JtYWwKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzM5IDAgUl0KL1RvVW5pY29kZSA0MCAwIFI+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgClsKNSAwIFIKMTQgMCBSCl0KL0NvdW50IDIKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDXQo+PgplbmRvYmoKeHJlZgowIDQyCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDI5MjU5IDAwMDAwIG4gCjAwMDAwMDAxOTEgMDAwMDAgbiAKMDAwMDAwMDI4NiAwMDAwMCBuIAowMDAwMDAwNDI1IDAwMDAwIG4gCjAwMDAwMTkxNzcgMDAwMDAgbiAKMDAwMDAyOTEyMiAwMDAwMCBuIAowMDAwMDAwMzIzIDAwMDAwIG4gCjAwMDAwMDAzNzQgMDAwMDAgbiAKMDAwMDAwMDc0MiAwMDAwMCBuIAowMDAwMDA0MzgyIDAwMDAwIG4gCjAwMDAwMDA1NDYgMDAwMDAgbiAKMDAwMDAwMDcyMiAwMDAwMCBuIAowMDAwMDA3ODExIDAwMDAwIG4gCjAwMDAwMDQ0MDMgMDAwMDAgbiAKMDAwMDAwNjE3MyAwMDAwMCBuIAowMDAwMDA2MTk0IDAwMDAwIG4gCjAwMDAwMDYyNDYgMDAwMDAgbiAKMDAwMDAwNjI5OCAwMDAwMCBuIAowMDAwMDA2MzUwIDAwMDAwIG4gCjAwMDAwMDc2NDQgMDAwMDAgbiAKMDAwMDAwNjQ3NSAwMDAwMCBuIAowMDAwMDA2ODU1IDAwMDAwIG4gCjAwMDAwMDcxMDIgMDAwMDAgbiAKMDAwMDAwNzI5MyAwMDAwMCBuIAowMDAwMDA3NDY2IDAwMDAwIG4gCjAwMDAwMDc3MDcgMDAwMDAgbiAKMDAwMDAwODE0MiAwMDAwMCBuIAowMDAwMDA5MDEzIDAwMDAwIG4gCjAwMDAwMDc5MzMgMDAwMDAgbiAKMDAwMDAwODEyMiAwMDAwMCBuIAowMDAwMDA5MDMzIDAwMDAwIG4gCjAwMDAwMDkyODYgMDAwMDAgbiAKMDAwMDAxNzg1MiAwMDAwMCBuIAowMDAwMDE4MzIwIDAwMDAwIG4gCjAwMDAwMTc4MzEgMDAwMDAgbiAKMDAwMDAxOTMxNSAwMDAwMCBuIAowMDAwMDE5NTY3IDAwMDAwIG4gCjAwMDAwMjc4NDIgMDAwMDAgbiAKMDAwMDAyODI5MyAwMDAwMCBuIAowMDAwMDI3ODIxIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNDIKL0luZm8gMSAwIFIKL1Jvb3QgMjcgMCBSCj4+CnN0YXJ0eHJlZgoyOTM2NAolJUVPRgo=\",\"ArchivoCDR\":null,\"Invoice_lines\":null,\"ListaDocumento\":null,\"InfoEmpresa\":null}</GetDocumentoResult></GetDocumentoResponse></soap:Body></soap:Envelope>"
                }
            },
        }
    },
    {
        id: "Crear_ReservaV2",
        category: "Crear Reserva",
        method: "Post",
        path: "/v1/auth/transportista/ReservasLista",
        title: "Crear reserva Lista",
        description: "Generas la venta de uno o mas asientos de dicha programacion para obtener pdf, nroboleto etc",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [],
        queryParams: [],
        bodyParams: {
             contentType: "application/json",
            schema: [
                { name: "IdProgramacion", type: "int", required: true, description: "el Id de la programacion" },
                { name: "TipoDocumento", type: "int", required: true, description: "Tipo de documento del pasajero (1 = DNI,  4 = Carnet Extranjeria, 7 = Pasaporte, 11 = PART. DE NACIMIENTO-IDENTIDAD, 0 = Otros)" },
                { name: "NroDocumento", type: "string", required: true, description: "DNI, CE..., ECT." },
                { name: "Pasajero", type: "string", required: true, description: "Nombres y apellidos del pasajero" },
                { name: "Telefono", type: "string", required: true, description: "Telefono del pasajero(en caso no tiene se debe retornar (-))" },
                { name: "FechaNacimiento", type: "datetime", required: false, description: "Fecha de nacimiento del pasajero.(puede ser null)" },
                { name: "Edad", type: "int", required: true, description: "Edad Del Pasajero(puedes retornar 0 si no se registra)" },
                { name: "Sexo", type: "string", required: true, description: "Sexo del Pasajero (M o F)" },
                { name: "IdAgenciaOrigen", type: "int", required: true, description: "El Id de la ciudad o agencia origen principal" },
                { name: "PuntoEmbarque", type: "int", required: true, description: "El ID de la ciudad o punto de embarque seleccionado" },
                { name: "Ruc", type: "string", required: false, description: "Ruc Del Pasajero (si no es Factura puede ser null)." },
                { name: "RazonSocial", type: "string", required: false, description: "Razon Social del Pasajero (si no es Factura puede ser null)." },
                { name: "Direccion", type: "string", required: true, description: "Direccion del pasajero(puede retornar(-))." },
                { name: "IdAgenciaDestino", type: "int", required: true, description: "Id de La Ciudad Destino o Id Agencia de algun Punto intermedio." },
                { name: "MedioDePago", type: "string", required: true, description: "Efectivo, Yape, Tarjeta, Cheque, Depósito, Yape, Plin, Aplicativo(esos son los nombres que se debe retornar(tener en cuenta minusculas y mayuculas))." },
                { name: "Tarjeta", type: "string", required: true, description: "este campo es valido para todos los medios de pago menos efectivo(si es tarjeta(nro de tarjeta), si es Yape(nro de celular de yape), si es Deposito(nro de deposito), caso no desee agregar los datos debe mandar 11111 o 00000(solo es null cuando el medio de pago es efectivo lo cual no seria su caso XD))" },
                { name: "Observacion", type: "string", required: false, description: "Alguna Observacion o detalle del Pasajero, Puede ser null." },
                { name: "Menor", type: "string", required: false,  description: `Datos del Menor en caso se viaje con uno, Puede ser null, si quiere guardar los datos del menor debe ser en string y con este formato... '{"Dni":"90805812","Nombres":"JHAN CASTRO BARRETO","Apellidos":"","Nombre":null,"Direccion":"","Telefono":"","Correo":"","NombreCompleto":null,"Emisiones":0,"NombresRazonSocial":null,"Sexo":"M","CodigoInterno":null,"IdClienteEmpresa":0,"IdUsuario":0,"Usuario":null,"EstadoCivil":null,"FechaNacimientoS":null,"Edad":0,"FechaNacimiento":null,"FechaNacimientoDt":"","TipoDoc":11}' los datos a registrar serian :Nombres ,Apellidos , Sexo, y edad y fecha de nacimiento(opcional) los demas datos pueden quedarse por defecto como en el sjon `},
                { name: "Precio", type: "decimal", required: true, description: "Monto del Pasaje" }
                
            ],
            example: {
                       "IdProgramacion" : 2736585, 
                        "venta" : [
                            {
                                "Asiento" : 6,
                                "TipoDocumento": 1,
                                "NroDocumento": "73798694",
                                "Pasajero": "Josue Joel Guevara",
                                "Telefono": "-",
                                "FechaNacimiento": null,
                                "Edad": 0,
                                "Sexo": "M",
                                "IdAgenciaOrigen": 5414,
                                "PuntoEmbarque": 5204,
                                "Ruc": "",
                                "RazonSocial": "",
                                "Direccion": "PR. JOSE F SANCHEZ CARRION MZA. C LOTE. 3 URB. LOS PORTALES LA LIBERTAD - TRUJILLO - TRUJILLO",
                                "IdAgenciaDestino": 2442,
                                "MedioDePago": "Tarjeta",
                                "Tarjeta": "2321",
                                "Observacion": null,
                                "Menor": null,
                                "Precio": "23.00"
                            },
                            {
                                "Asiento" : 18,
                                "TipoDocumento": 1,
                                "NroDocumento": "17824009",
                                "Pasajero": "MARIA TERESA MONTERO ZEVALLOS",
                                "Telefono": "-",
                                "FechaNacimiento": null,
                                "Edad": 0,
                                "Sexo": "M",
                                "IdAgenciaOrigen": 5414,
                                "PuntoEmbarque": 5204,
                                "Ruc": "",
                                "RazonSocial": "",
                                "Direccion": "PR. JOSE F SANCHEZ CARRION MZA. C LOTE. 3 URB. LOS PORTALES LA LIBERTAD - TRUJILLO - TRUJILLO",
                                "IdAgenciaDestino": 2442,
                                "MedioDePago": "Tarjeta",
                                "Tarjeta": "2322",
                                "Observacion": null,
                                "Menor": null,
                                "Precio": "20.00"
                            }
                        ]
                    }
        },
        responses: {
            "200": {
                status: "200 OK",
                description: "Asiento liberado exitosamente.",
                data: {
                    status: 200,
                    "success": true,
                    "mensaje": "Reserva creada correctamente",
                    "numeroBoleto": "00000022",
                    "documentosElectronicos": [
                        {
                            "asiento": 3,
                            "numero": "B002-44",
                            "pdf": "Zxe2/FXQW2mtGvy7Nt4Bg==..."
                        },
                        {
                            "asiento": 9,
                            "numero": "B002-45",
                            "pdf": "JVBERi0xLjQKMSAwg==...."
                        }
                    ]
                }
            },
        }
    },
     {
        id: "Posponer-ticket",
        category: "REPROGRAMACION",
        method: "Post",
        path: "/v1/auth/transportista/Reservas/Posponer",
        title: "Posponer Ticket",
        description: "Reprograma tu asiento para otro horario",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [],
        queryParams: [],
        bodyParams: {
             contentType: "application/json",
            schema: [
                { name: "NumeroBoleto", type: "string", required: true, description: "nro boleto anterior" },
                { name: "IdProgramacion", type: "int", required: true, description: "el Id de la programacion a reprogramar" },
                { name: "Telefono", type: "string", required: true, description: "Telefono del pasajero(en caso no tiene se debe retornar (-))" },
                { name: "asiento", type: "int", required: true, description: "asiento a reservar" },
                { name: "Pasajero", type: "string", required: true, description: "Nombres y apellidos del pasajero" },
                { name: "TipoDocumento", type: "int", required: true, description: "Tipo de documento del pasajero (1 = DNI,  4 = Carnet Extranjeria, 7 = Pasaporte, 11 = PART. DE NACIMIENTO-IDENTIDAD, 0 = Otros)" },
                { name: "NroDocumento", type: "string", required: true, description: "DNI, CE..., ECT." },
                { name: "FechaNacimiento", type: "datetime", required: false, description: "Fecha de nacimiento del pasajero.(puede ser null)" },
                { name: "Sexo", type: "string", required: true, description: "Sexo del Pasajero (M o F)" },
                { name: "SerieBoleto", type: "string", required: true, description: "serie y corelativo de fact o bol." },
                { name: "Ruc", type: "string", required: false, description: "Ruc Del Pasajero (si no es Factura puede ser null)." },
                { name: "RazonSocial", type: "string", required: false, description: "Razon Social del Pasajero (si no es Factura puede ser null)." },
                { name: "Direccion", type: "string", required: true, description: "Direccion del pasajero(puede retornar(-))." },
                { name: "PuntoEmbarque", type: "int", required: true, description: "El ID de la ciudad o punto de embarque seleccionado" },
                { name: "IdDestino", type: "int", required: true, description: "El Id de la ciudad o agencia origen principal" },
                { name: "IdOrigen", type: "int", required: true, description: "Id de La Ciudad Destino o Id Agencia de algun Punto intermedio." },
                { name: "MedioDePago", type: "string", required: true, description: "Efectivo, Yape, Tarjeta, Cheque, Depósito, Yape, Plin, Aplicativo(esos son los nombres que se debe retornar(tener en cuenta minusculas y mayuculas))." },
                { name: "Tarjeta", type: "string", required: true, description: "este campo es valido para todos los medios de pago menos efectivo(si es tarjeta(nro de tarjeta), si es Yape(nro de celular de yape), si es Deposito(nro de deposito), caso no desee agregar los datos debe mandar 11111 o 00000(solo es null cuando el medio de pago es efectivo lo cual no seria su caso XD))" },

            ],
            example: {
                       "NumeroBoleto" : "00000020",
                       "IdProgramacion" : 55405, 
                       "Telefono" : "-", 
                       "Pasajeros" : [
                            {
                                "Asiento" : 16,
                                "Pasajero": "Josue Joel GUevara",
                                "TipoDocumento": 1,
                                "NroDocumento": "73798694",
                                "FechaNacimiento": null,
                                "Sexo": "M",
                                "SerieBoleto" : "B002-00000041", 
                                "Ruc": "",
                                "RazonSocial": "",
                                "Direccion": "PR. JOSE F SANCHEZ CARRION MZA. C LOTE. 3 URB. LOS PORTALES LA LIBERTAD - TRUJILLO - TRUJILLO"
                            },
                            {
                                "Asiento" : 17,
                                "Pasajero": "Josue Joel GUevara",
                                "TipoDocumento": 1,
                                "NroDocumento": "73798694",
                                "FechaNacimiento": null,
                                "Sexo": "M",
                                "SerieBoleto" : "B002-00000042", 
                                "Ruc": "",
                                "RazonSocial": "",
                                "Direccion": "PR. JOSE F SANCHEZ CARRION MZA. C LOTE. 3 URB. LOS PORTALES LA LIBERTAD - TRUJILLO - TRUJILLO"
                            }
                        ],
                        "PuntoEmbarque" : 2443,
                        "IdDestino" : 2132, 
                        "IdOrigen" : 5414, 
                        "MedioDePago": "Yape", 
                        "Tarjeta" : "2312"
                    }
        },
        responses: {
            "200": {
                status: "200 OK",
                description: "Reserva pospuesta correctamente",
                "respuesta": {
                    "idReseva": "00000007",
                    "datosReserva": [
                        {
                            "asiento": 16,
                            "nuevoMonto": 23.00,
                            "montoExtra": 0.00
                        },
                        {
                            "asiento": 17,
                            "nuevoMonto": 23.00,
                            "montoExtra": 3.00
                        }
                    ]
                }
            },
        }
    },
    {
        id: "reprogramanr-ticket",
        category: "REPROGRAMACION",
        method: "POST",
        path: "/v1/auth/transportista/Reservas/ReprogramarTicket?IdReserva={id}",
        title: "Confirmación de la reprogramación",
        description: "confirmacion y generacion de nuevas facturas",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "IdReserva", required: true, type: "int", description: "Id de la reserva generada anteriormente", example: "7" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                "success": true,
                "mensaje": "Reserva reprogramada correctamente",
                "numeroBoleto": "00000023",
                "documentosElectronicos": [
                    {
                        "asiento": 16,
                        "numero": "B002-44",
                        "pdf": "JVBERi0xLjQKMSAwIG9iagVPRgo=....",
                        "nuevoMonto": 23,
                        "montoExtra": 0.00
                    },
                    {
                        "asiento": 17,
                        "numero": "B002-46",
                        "pdf": "JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUg...",
                        "nuevoMonto": 3.00,
                        "montoExtra": 3.00
                    }
                ]
            },
        }
    },
];
// ESTADO GLOBAL DE LA APP
let activeEndpoint = API_DATA[1]; // Por defecto: Consulta DNI (id: consultar-dni)
let activeResponseTab = "200";

// REFERENCIAS A ELEMENTOS DEL DOM
const sidebarMenu = document.getElementById("sidebar-menu");
const searchInput = document.getElementById("search-input");
const endpointDetails = document.getElementById("endpoint-details");
const curlDisplay = document.getElementById("curl-display");
const responseDisplay = document.getElementById("response-display");
const responseTabsContainer = document.getElementById("response-tabs-container");
const responseStatusInfo = document.getElementById("response-status-info");
const copyCurlBtn = document.getElementById("copy-curl-btn");
const copyResponseBtn = document.getElementById("copy-response-btn");

// ELEMENTOS DEL MODAL (TRY IT)
const tryitOverlay = document.getElementById("tryit-overlay");
const tryitForm = document.getElementById("tryit-form");
const closeModalBtn = document.getElementById("close-modal-btn");
const runSimulationBtn = document.getElementById("run-simulation-btn");
const simulationLoader = document.getElementById("simulation-loader");
const simulationResponseDisplay = document.getElementById("simulation-response-display");

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
    selectEndpoint(activeEndpoint.id);
    
    // Listeners
    searchInput.addEventListener("input", filterSidebar);
    copyCurlBtn.addEventListener("click", copyCurlToClipboard);
    copyResponseBtn.addEventListener("click", copyResponseToClipboard);
    closeModalBtn.addEventListener("click", toggleTryitModal);
    runSimulationBtn.addEventListener("click", executeTryitSimulation);
});

// FUNCION PARA FORMATEAR JSON CON CORES (Sintaxis Highlight)
function highlightJSON(jsonObj) {
    let json = JSON.stringify(jsonObj, null, 2);
    // Escapar caracteres HTML básicos
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
        let cls = 'json-number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'json-key';
            } else {
                cls = 'json-string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'json-boolean';
        } else if (/null/.test(match)) {
            cls = 'json-null';
        }
        
        if (cls === 'json-key') {
            return '<span class="' + cls + '">' + match.replace(/:$/, '') + '</span>:';
        } else {
            return '<span class="' + cls + '">' + match + '</span>';
        }
    });
}

// RENDERIZAR MENÚ LATERAL (SIDEBAR)
function renderSidebar() {
    sidebarMenu.innerHTML = "";
    
    // Agrupar por categoría
    const groups = {};
    API_DATA.forEach(ep => {
        if (!groups[ep.category]) {
            groups[ep.category] = [];
        }
        groups[ep.category].push(ep);
    });
    
    // Renderizar categorías y links
    for (const [catName, endpoints] of Object.entries(groups)) {
        const catDiv = document.createElement("div");
        catDiv.className = "nav-category";
        
        const catTitle = document.createElement("div");
        catTitle.className = "category-title";
        catTitle.textContent = catName;
        catDiv.appendChild(catTitle);
        
        const navList = document.createElement("ul");
        navList.className = "nav-list";
        
        endpoints.forEach(ep => {
            const navItem = document.createElement("li");
            navItem.className = "nav-item";
            
            const link = document.createElement("a");
            link.className = `nav-link ${activeEndpoint.id === ep.id ? 'active' : ''}`;
            link.dataset.id = ep.id;
            link.addEventListener("click", (e) => {
                e.preventDefault();
                selectEndpoint(ep.id);
            });
            
            const badge = document.createElement("span");
            badge.className = `method-badge ${ep.method.toLowerCase()}`;
            badge.textContent = ep.method;
            
            const textSpan = document.createElement("span");
            textSpan.className = "endpoint-label";
            textSpan.textContent = ep.title;
            
            link.appendChild(badge);
            link.appendChild(textSpan);
            navItem.appendChild(link);
            navList.appendChild(navItem);
        });
        
        catDiv.appendChild(navList);
        sidebarMenu.appendChild(catDiv);
    }
}

// FILTRAR SIDEBAR POR TEXTO DE BÚSQUEDA
function filterSidebar() {
    const text = searchInput.value.toLowerCase();
    const categories = sidebarMenu.querySelectorAll(".nav-category");
    
    categories.forEach(cat => {
        let hasVisibleLink = false;
        const items = cat.querySelectorAll(".nav-item");
        
        items.forEach(item => {
            const linkText = item.querySelector(".endpoint-label").textContent.toLowerCase();
            const linkMethod = item.querySelector(".method-badge").textContent.toLowerCase();
            
            if (linkText.includes(text) || linkMethod.includes(text)) {
                item.style.display = "";
                hasVisibleLink = true;
            } else {
                item.style.display = "none";
            }
        });
        
        // Ocultar categoría completa si no tiene elementos visibles
        if (hasVisibleLink) {
            cat.style.display = "";
        } else {
            cat.style.display = "none";
        }
    });
}

// SELECCIONAR UN ENDPOINT ACTIVO
function selectEndpoint(id) {
    const ep = API_DATA.find(x => x.id === id);
    if (!ep) return;
    
    activeEndpoint = ep;
    activeResponseTab = Object.keys(ep.responses)[0] || "200";
    
    // Marcar como activo en la barra lateral
    const allLinks = sidebarMenu.querySelectorAll(".nav-link");
    allLinks.forEach(link => {
        if (link.dataset.id === id) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
    
    // Renderizar detalles centrales
    renderEndpointDetails(ep);
    
    // Renderizar cURL
    updateCurlSnippet();
    
    // Renderizar Visor de Respuestas
    renderResponseTabs(ep);
    updateResponseDisplay(ep);
}

// RENDEREAR DETALLES DEL ENDPOINT (COLUMNA CENTRAL)
function renderEndpointDetails(ep) {
    let authSection = "";
    if (ep.authorizations && ep.authorizations.length > 0) {
        authSection = `
            <div class="section-wrapper">
                <div class="section-header">Authorizations</div>
                <div class="param-card-list">
                    ${ep.authorizations.map(auth => `
                        <div class="param-card">
                            <div class="param-meta">
                                <span class="param-name">${auth.name}</span>
                                <span class="param-type">${auth.type}</span>
                                <span class="param-type">${auth.location}</span>
                                <span class="param-req required">${auth.required ? 'required' : 'optional'}</span>
                            </div>
                            <div class="param-desc">${auth.description}</div>
                            <div class="param-input-container">
                                <input type="text" 
                                    class="auth-input-field form-control" 
                                    data-auth="${auth.name}" 
                                    placeholder="Bearer &lt;token&gt;" 
                                    value="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfdHJhbnNfcHJvZF84MjMiLCJleHAiOjE3Nzk5ODQwMDB9.a82f80be">
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let pathParamsSection = "";
    if (ep.pathParams && ep.pathParams.length > 0) {
        pathParamsSection = `
            <div class="section-wrapper">
                <div class="section-header">Path Parameters</div>
                <div class="param-card-list">
                    ${ep.pathParams.map(param => `
                        <div class="param-card">
                            <div class="param-meta">
                                <span class="param-name">${param.name}</span>
                                <span class="param-type">${param.type}</span>
                                <span class="param-req required">${param.required ? 'required' : 'optional'}</span>
                            </div>
                            <div class="param-desc">${param.description}</div>
                            <div class="param-input-container">
                                <input type="text" 
                                    class="param-input-field form-control" 
                                    data-type="path" 
                                    data-name="${param.name}" 
                                    placeholder="Ej: ${param.example || ''}" 
                                    value="${param.example || ''}">
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let queryParamsSection = "";
    if (ep.queryParams && ep.queryParams.length > 0) {
        queryParamsSection = `
            <div class="section-wrapper">
                <div class="section-header">Query Parameters</div>
                <div class="param-card-list">
                    ${ep.queryParams.map(param => `
                        <div class="param-card">
                            <div class="param-meta">
                                <span class="param-name">${param.name}</span>
                                <span class="param-type">${param.type}</span>
                                <span class="param-req ${param.required ? 'required' : 'optional'}">${param.required ? 'required' : 'optional'}</span>
                            </div>
                            <div class="param-desc">${param.description}</div>
                            <div class="param-input-container">
                                <input type="text" 
                                    class="param-input-field form-control" 
                                    data-type="query" 
                                    data-name="${param.name}" 
                                    placeholder="Ej: ${param.example || ''}" 
                                    value="${param.example || ''}">
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let bodyParamsSection = "";
    if (ep.bodyParams) {
        bodyParamsSection = `
            <div class="section-wrapper">
                <div class="section-header">Request Body</div>
                <div class="param-card">
                    <div style="font-size: 0.8rem; margin-bottom: 12px; color: var(--text-secondary)">
                        Content-Type: <code class="param-type" style="font-family: 'Fira Code', monospace;">${ep.bodyParams.contentType}</code>
                    </div>
                    <div class="param-input-container" style="max-width: 100%;">
                        <textarea class="body-input-field form-control" 
                            data-type="body" 
                            placeholder="Escribe el cuerpo JSON de la petición..."
                            style="font-family: 'Fira Code', monospace; font-size: 0.8rem; height: 180px;">${JSON.stringify(ep.bodyParams.example, null, 4)}</textarea>
                    </div>
                </div>
                
                <h4 style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); margin: 20px 0 10px 0;">Esquema del Body</h4>
                <table class="field-table">
                    <thead>
                        <tr>
                            <th>Campo</th>
                            <th>Tipo</th>
                            <th>Obligatorio</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ep.bodyParams.schema.map(field => `
                            <tr>
                                <td class="field-name">${field.name}</td>
                                <td class="field-type">${field.type}</td>
                                <td><span class="param-req ${field.required ? 'required' : 'optional'}" style="font-size: 0.65rem;">${field.required ? 'Sí' : 'No'}</span></td>
                                <td class="field-desc">${field.description}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Dibujar el HTML completo
    endpointDetails.innerHTML = `
        <div class="breadcrumb">API Consulta</div>
        <h2 class="endpoint-title">${ep.title}</h2>
        <div class="endpoint-desc">${ep.description}</div>
        
        <div class="path-container ${ep.method.toLowerCase()}">
            <span class="path-method ${ep.method.toLowerCase()}">${ep.method}</span>
            <span class="path-url" id="live-path-display">${renderLivePathHTML(ep.path, ep.pathParams)}</span>
            <button class="btn-tryit" id="open-tryit-btn" style="display:none;"> 
                <span>Try it</span>
                <svg viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            </button>
        </div>
        
        ${authSection}
        ${pathParamsSection}
        ${queryParamsSection}
        ${bodyParamsSection}
    `;

    // Adjuntar listeners de cambios en inputs para actualizar cURL y Path dinámicamente
    const inputs = endpointDetails.querySelectorAll(".param-input-field, .auth-input-field, .body-input-field");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            updateCurlSnippet();
            updateLivePathDisplay();
        });
    });


    // Listener para abrir el modal interactivo
    document.getElementById("open-tryit-btn").addEventListener("click", () => {
        toggleTryitModal();
        populateTryitForm();
    });
}

// RENDERIZAR LA RUTA EN PANTALLA CON COLORES EN PARÁMETROS DE RUTA
function renderLivePathHTML(path, pathParams) {
    let html = path;
    if (pathParams && pathParams.length > 0) {
        pathParams.forEach(p => {
            html = html.replace(`{${p.name}}`, `<span class="param-highlight" data-name="${p.name}">{${p.name}}</span>`);
        });
    }
    return html;
}

// ACTUALIZAR EL VISUALIZADOR DE RUTA CENTRAL
function updateLivePathDisplay() {
    const ep = activeEndpoint;
    const pathDisplayEl = document.getElementById("live-path-display");
    if (!pathDisplayEl) return;

    let path = ep.path;
    
    if (ep.pathParams && ep.pathParams.length > 0) {
        ep.pathParams.forEach(p => {
            const input = endpointDetails.querySelector(`.param-input-field[data-name="${p.name}"][data-type="path"]`);
            const val = input ? input.value : "";
            const replaceVal = val ? `<span class="param-highlight" data-name="${p.name}">${val}</span>` : `<span class="param-highlight" data-name="${p.name}">{${p.name}}</span>`;
            path = path.replace(`{${p.name}}`, replaceVal);
        });
    }
    pathDisplayEl.innerHTML = path;
}

// ACTUALIZAR EL SNIPPET DE cURL DINÁMICAMENTE
function updateCurlSnippet() {
    const ep = activeEndpoint;
    
    // Obtener Auth Header
    let authHeaderValue = "Bearer <token>";
    const authInput = endpointDetails.querySelector(".auth-input-field");
    if (authInput && authInput.value) {
        authHeaderValue = authInput.value;
    }
    
    // Reemplazar Path parameters en la URL
    let urlPath = ep.path;
    if (ep.pathParams && ep.pathParams.length > 0) {
        ep.pathParams.forEach(p => {
            const input = endpointDetails.querySelector(`.param-input-field[data-name="${p.name}"][data-type="path"]`);
            const val = input ? input.value : `{${p.name}}`;
            urlPath = urlPath.replace(`{${p.name}}`, val || `{${p.name}}`);
        });
    }
    
    // Armar Query Params
    let queryParamsStr = "";
    if (ep.queryParams && ep.queryParams.length > 0) {
        const queryParts = [];
        ep.queryParams.forEach(p => {
            const input = endpointDetails.querySelector(`.param-input-field[data-name="${p.name}"][data-type="query"]`);
            const val = input ? input.value : "";
            if (val) {
                queryParts.push(`${p.name}=${encodeURIComponent(val)}`);
            }
        });
        if (queryParts.length > 0) {
            queryParamsStr = "?" + queryParts.join("&");
        }
    }
    
    // Obtener Body
    let bodySnippet = "";
    if (ep.bodyParams) {
        const textarea = endpointDetails.querySelector(".body-input-field");
        let bodyValue = "";
        if (textarea) {
            bodyValue = textarea.value.trim();
        } else {
            bodyValue = JSON.stringify(ep.bodyParams.example, null, 2);
        }
        
        // Dar formato multilinea al cURL con el data-raw
        if (bodyValue) {
            // Reemplazar saltos de línea para el cURL de consola
            bodySnippet = ` \\\n  --data-raw '${bodyValue}'`;
        }
    }

    // Generar string final cURL
    const baseUrl = "https://factura-2.pe/ApiTransporte";
    let curlStr = `curl --request ${ep.method} \\\n  --url ${baseUrl}${urlPath}${queryParamsStr} \\\n  --header 'Authorization: ${authHeaderValue}'`;
    
    if (ep.bodyParams) {
        curlStr += ` \\\n  --header 'Content-Type: ${ep.bodyParams.contentType}'${bodySnippet}`;
    }
    
    curlDisplay.textContent = curlStr;
}

// RENDEREAR PESTAÑAS DE RESPUESTA
function renderResponseTabs(ep) {
    responseTabsContainer.innerHTML = "";
    
    const statuses = Object.keys(ep.responses);
    statuses.forEach((status, idx) => {
        const btn = document.createElement("button");
        const statusType = status.startsWith("2") ? "status-2xx" : "status-4xx";
        btn.className = `response-tab ${statusType} ${activeResponseTab === status ? 'active' : ''}`;
        btn.textContent = status;
        btn.dataset.status = status;
        
        btn.addEventListener("click", () => {
            activeResponseTab = status;
            // Marcar activa en DOM
            responseTabsContainer.querySelectorAll(".response-tab").forEach(tab => tab.classList.remove("active"));
            btn.classList.add("active");
            
            updateResponseDisplay(ep);
        });
        
        responseTabsContainer.appendChild(btn);
    });
}

// ACTUALIZAR EL VISOR DE RESPUESTAS JSON
function updateResponseDisplay(ep) {
    const statusData = ep.responses[activeResponseTab];
    if (!statusData) return;
    
    // Status color
    const is2xx = activeResponseTab.startsWith("2");
    responseStatusInfo.innerHTML = `Status: <span class="status-indicator ${is2xx ? 'status-2xx' : 'status-4xx'}">${statusData.status}</span> <span style="margin-left: 10px; color: var(--text-muted)">${statusData.description}</span>`;
    
    // JSON highlight
    responseDisplay.innerHTML = highlightJSON(statusData.data);
}

// ABRIR/CERRAR MODAL INTERACTIVO
function toggleTryitModal() {
    tryitOverlay.classList.toggle("active");
    // resetear simulación al abrir
    simulationResponseDisplay.textContent = "Pulse \"Enviar Petición\" para ver la respuesta interactiva.";
    simulationResponseDisplay.className = "language-json";
    simulationLoader.classList.remove("active");
}

// LLENAR FORMULARIO DE PRUEBA EN EL MODAL
function populateTryitForm() {
    const ep = activeEndpoint;
    tryitForm.innerHTML = "";
    
    // 1. Agregar Auth
    if (ep.authorizations && ep.authorizations.length > 0) {
        ep.authorizations.forEach(auth => {
            // Obtener el valor ingresado previamente en la pantalla principal
            const mainAuthEl = endpointDetails.querySelector(`.auth-input-field[data-auth="${auth.name}"]`);
            const prevVal = mainAuthEl ? mainAuthEl.value : "";
            
            const group = document.createElement("div");
            group.className = "form-group";
            group.innerHTML = `
                <label>Header: ${auth.name} ${auth.required ? '<span class="required-marker">*</span>' : ''}</label>
                <input type="text" class="form-control tryit-input" data-category="auth" data-name="${auth.name}" value="${prevVal || 'Bearer <token>'}">
            `;
            tryitForm.appendChild(group);
        });
    }
    
    // 2. Path params
    if (ep.pathParams && ep.pathParams.length > 0) {
        ep.pathParams.forEach(p => {
            const mainPathEl = endpointDetails.querySelector(`.param-input-field[data-name="${p.name}"][data-type="path"]`);
            const prevVal = mainPathEl ? mainPathEl.value : "";
            
            const group = document.createElement("div");
            group.className = "form-group";
            group.innerHTML = `
                <label>Path Parameter: {${p.name}} ${p.required ? '<span class="required-marker">*</span>' : ''}</label>
                <input type="text" class="form-control tryit-input" data-category="path" data-name="${p.name}" value="${prevVal || p.example || ''}">
            `;
            tryitForm.appendChild(group);
        });
    }
    
    // 3. Query params
    if (ep.queryParams && ep.queryParams.length > 0) {
        ep.queryParams.forEach(p => {
            const mainQueryEl = endpointDetails.querySelector(`.param-input-field[data-name="${p.name}"][data-type="query"]`);
            const prevVal = mainQueryEl ? mainQueryEl.value : "";
            
            const group = document.createElement("div");
            group.className = "form-group";
            group.innerHTML = `
                <label>Query Parameter: ?${p.name} ${p.required ? '<span class="required-marker">*</span>' : ''}</label>
                <input type="text" class="form-control tryit-input" data-category="query" data-name="${p.name}" value="${prevVal || p.example || ''}">
            `;
            tryitForm.appendChild(group);
        });
    }
    
    // 4. Body
    if (ep.bodyParams) {
        const mainBodyEl = endpointDetails.querySelector(".body-input-field");
        const prevVal = mainBodyEl ? mainBodyEl.value : "";
        
        const group = document.createElement("div");
        group.className = "form-group";
        group.innerHTML = `
            <label>Request Body JSON ${ep.bodyParams.contentType}</label>
            <textarea class="form-control tryit-input" data-category="body" style="font-family: 'Fira Code', monospace; height: 180px;">${prevVal || JSON.stringify(ep.bodyParams.example, null, 4)}</textarea>
        `;
        tryitForm.appendChild(group);
    }
}

// EJECUTAR SIMULACIÓN DE PETICIÓN (TRY IT)
function executeTryitSimulation() {
    const ep = activeEndpoint;
    simulationLoader.classList.add("active");
    
    // Leer valores del form de simulación
    const authInputs = tryitForm.querySelectorAll(".tryit-input[data-category='auth']");
    const pathInputs = tryitForm.querySelectorAll(".tryit-input[data-category='path']");
    const queryInputs = tryitForm.querySelectorAll(".tryit-input[data-category='query']");
    const bodyInput = tryitForm.querySelector(".tryit-input[data-category='body']");
    
    let pathParamsVal = {};
    pathInputs.forEach(i => { pathParamsVal[i.dataset.name] = i.value.trim(); });
    
    let queryParamsVal = {};
    queryInputs.forEach(i => { queryParamsVal[i.dataset.name] = i.value.trim(); });
    
    let authHeader = "";
    if (authInputs.length > 0) {
        authHeader = authInputs[0].value.trim();
    }
    
    // Simular retraso de latencia de red (600ms)
    setTimeout(() => {
        simulationLoader.classList.remove("active");
        
        // 1. Validaciones simuladas
        // Validar Token
        if (ep.authorizations && ep.authorizations.length > 0) {
            if (!authHeader || authHeader === "Bearer <token>" || authHeader === "Bearer") {
                renderSimulationResult(401, {
                    status: 401,
                    success: false,
                    message: "Cabecera de autorización no encontrada o con formato incorrecto. Proporcione un Token Bearer válido.",
                    error_code: "AUTH_TOKEN_MISSING_OR_INVALID"
                });
                return;
            }
        }
        
        // Validar Path parameters requeridos vacíos
        let missingPath = false;
        if (ep.pathParams && ep.pathParams.length > 0) {
            ep.pathParams.forEach(p => {
                if (p.required && !pathParamsVal[p.name]) {
                    missingPath = true;
                }
            });
        }
        if (missingPath) {
            renderSimulationResult(400, {
                status: 400,
                success: false,
                message: "Falta un parámetro requerido en la ruta URL.",
                error_code: "PATH_PARAM_MISSING"
            });
            return;
        }

        // 2. Generar respuesta dinámica exitosa
        // Tomar el mock de respuesta 200 y reemplazar con valores del usuario para asombrar
        const mock200 = JSON.parse(JSON.stringify(ep.responses["200"].data));
        
        // Lógica específica por endpoint para que se vea hiper-realista
        if (ep.id === "consultar-dni") {
            const dniVal = pathParamsVal["dni"];
            if (dniVal.length !== 8 || isNaN(dniVal)) {
                renderSimulationResult(400, ep.responses["400"].data);
                return;
            }
            mock200.data.numero = dniVal;
            // Nombres aleatorios pero consistentes según el DNI
            const nombres = ["JOSE PEDRO", "CARLOS ALBERTO", "MARIA ELENA", "ANA BEATRIZ"];
            const apellidosP = ["CASTILLO", "RODRIGUEZ", "SANCHEZ", "MENDOZA"];
            const apellidosM = ["TERRONES", "QUISPE", "CHAVEZ", "DIAZ"];
            const idx = parseInt(dniVal.slice(-2)) % 4;
            
            mock200.data.nombres = nombres[idx];
            mock200.data.apellido_paterno = apellidosP[idx];
            mock200.data.apellido_materno = apellidosM[idx];
            mock200.data.nombre_completo = `${apellidosP[idx]} ${apellidosM[idx]}, ${nombres[idx]}`;
            
        } else if (ep.id === "consultar-ruc") {
            const rucVal = pathParamsVal["ruc"];
            if (rucVal.length !== 11 || isNaN(rucVal)) {
                renderSimulationResult(404, ep.responses["404"].data);
                return;
            }
            mock200.data.ruc = rucVal;
            const empresas = ["TRANSPORTES ANDINOS S.A.C.", "LOGISTICA EXPRESS DEL PERU S.A.", "CARGO RAPIDO INTEGRAL E.I.R.L.", "FLETES MARITIMOS Y TERRESTRES S.A."];
            const idx = parseInt(rucVal.slice(-2)) % 4;
            mock200.data.razon_social = empresas[idx];
            mock200.data.nombre_comercial = empresas[idx].split(" ")[0];
            
        } else if (ep.id === "consultar-placa") {
            const placaVal = pathParamsVal["placa"].toUpperCase().replace("-", "");
            if (placaVal.length !== 6) {
                renderSimulationResult(400, ep.responses["400"].data);
                return;
            }
            mock200.data.placa = placaVal;
            
        } else if (ep.id === "consultar-soat") {
            const placaVal = pathParamsVal["placa"].toUpperCase().replace("-", "");
            mock200.data.placa = placaVal;
            
        } else if (ep.id === "consultar-gps") {
            const placaVal = pathParamsVal["placa"].toUpperCase().replace("-", "");
            mock200.data.placa = placaVal;
            // Simular cambios en las coordenadas GPS para darle dinamismo
            mock200.data.coordenadas.latitud = -12.084723 + (Math.random() - 0.5) * 0.01;
            mock200.data.coordenadas.longitud = -77.032891 + (Math.random() - 0.5) * 0.01;
            mock200.data.velocidad_kmh = Math.floor(Math.random() * 80) + 10;
            mock200.data.ultima_actualizacion = new Date().toISOString();
            
        } else if (ep.id === "consultar-licencia") {
            const dniVal = pathParamsVal["dni"];
            mock200.data.dni = dniVal;
            mock200.data.numero_licencia = "Q" + dniVal;
            
        } else if (ep.id === "crear-guia") {
            // Leer desde el body input
            let bodyVal = {};
            try {
                bodyVal = JSON.parse(bodyInput.value);
            } catch(e) {}
            
            // Si el peso es muy alto, simular un error
            if (bodyVal.peso_total_kg && bodyVal.peso_total_kg > 40000) {
                renderSimulationResult(400, {
                    status: 400,
                    success: false,
                    message: "No se puede emitir la guía. El peso total del camión excede la capacidad máxima de vía nacional (40 Tn).",
                    error_code: "EXCESS_WEIGHT_LIMIT"
                });
                return;
            }
            
            mock200.data.fecha_emision = new Date().toISOString();
            if (bodyVal.vehiculo_placa) mock200.data.qr_content = `${bodyVal.remitente_ruc || '20601234567'}|09|T001|00049281|${bodyVal.peso_total_kg || '18500.5'}|2026-05-20|${bodyVal.vehiculo_placa.replace("-","")}|${bodyVal.conductor_dni || '45678912'}|`;
            
        } else if (ep.id === "iniciar-viaje") {
            let bodyVal = {};
            try {
                bodyVal = JSON.parse(bodyInput.value);
            } catch(e) {}
            
            mock200.data.fecha_salida = new Date().toISOString();
        }
        
        // Renderizar respuesta 200 modificada
        renderSimulationResult(200, mock200);

    }, 600);
}

// RENDEREAR RESULTADO EN LA CONSOLA DEL MODAL
function renderSimulationResult(statusCode, data) {
    simulationResponseDisplay.innerHTML = `Status: <span class="status-indicator ${statusCode === 200 ? 'status-2xx' : 'status-4xx'}">${statusCode}</span>\n\n` + highlightJSON(data);
    simulationResponseDisplay.classList.add("success-response");
}

// COPIAR cURL AL PORTAPAPELES
function copyCurlToClipboard() {
    const text = curlDisplay.textContent;
    navigator.clipboard.writeText(text).then(() => {
        copyCurlBtn.classList.add("copied");
        const btnText = copyCurlBtn.querySelector(".btn-text");
        btnText.textContent = "Copiado!";
        setTimeout(() => {
            copyCurlBtn.classList.remove("copied");
            btnText.textContent = "Copiar";
        }, 1500);
    });
}

// COPIAR RESPUESTA AL PORTAPAPELES
function copyResponseToClipboard() {
    const text = responseDisplay.textContent;
    navigator.clipboard.writeText(text).then(() => {
        copyResponseBtn.classList.add("copied");
        const btnText = copyResponseBtn.querySelector(".btn-text");
        btnText.textContent = "Copiado!";
        setTimeout(() => {
            copyResponseBtn.classList.remove("copied");
            btnText.textContent = "Copiar";
        }, 1500);
    });
}
