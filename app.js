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
                description: "Rutas Obetnidas con exito",
                data: {
                    status: 200,
                    success: true,
                    data:[
                        
                        {
                            "idRuta": 11,
                            "origen": "Principal",
                            "destino": "LIMA CENTRO",
                            "distancia": 10,
                            "duracion": null
                        },
                        {
                            "idRuta": 32,
                            "origen": "Principal",
                            "destino": "Chiclayo",
                            "distancia": 800,
                            "duracion": null
                        },
                            {
                            "idRuta": 56,
                            "origen": "Principal",
                            "destino": "PRUEBA",
                            "distancia": 1000,
                            "duracion": null
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
                    message: "Error en servicio al obtener rutas : El id debe ser mayor a 0.",
                    error_code: "rutas_FORMAT_INVALID"
                }
            },
            "501" : {
                status : "500 internal server BD",
                description : "fallas internas en la Base de Datos (500)" ,
                data :{
                    success : false , 
                    error : "Error en servicio al obtener rutas : id = {id}: Could not find stored procedure 'SP_ListarRutas'." 
                    
                }
            }
        }
    },
    {
        id: "consultar-buses",
        category: "Consultar información de buses",
        method: "GET",
        path: "/v1/auth/transportista/buses",
        title: "Consultar información de Buses",
        description: "Consulta los datos de los Buses de la empresa, Incluye Mapa de Asientos (todos los id traidos son en base a nuestra bd, el parametro {tipo} siempre sera 0 porque es un dato que no se maneja en el sistema y se agrago por defecto para cumplir con sus requerimientos)",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            {description: "Este EndPoint no recquiere parametros" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
           "200": {
                status: "200 OK",
                description: "Buses Obetnidos con exito",
                data: {
                    status: 200,
                    success: true,
                    data:[
                        {
                            "idBus": 8,
                            "modelo": "Bus Urbano ",
                            "Placa": "TTTTT",
                            "tipo": 0,
                            "Capacidad": 10,
                            "asiento" : [
                                {
                                    "idAsiento": 562,
                                    "numero": "1",
                                    "numeroFila": 0,
                                    "numeroColumna": 0,
                                    "numeroPiso": 1
                                },
                                {
                                    "idAsiento": 25201,
                                    "numero": "7",
                                    "numeroFila": 1,
                                    "numeroColumna": 1,
                                    "numeroPiso": 2
                                },
                                {
                                    "idAsiento": 25202,
                                    "numero": "8",
                                    "numeroFila": 1,
                                    "numeroColumna": 3,
                                    "numeroPiso": 2
                                },
                                {
                                    "idAsiento": 25203,
                                    "numero": "9",
                                    "numeroFila": 1,
                                    "numeroColumna": 4,
                                    "numeroPiso": 2
                                },
                                {
                                    "idAsiento": 25204,
                                    "numero": "10",
                                    "numeroFila": 2,
                                    "numeroColumna": 0,
                                    "numeroPiso": 2
                                }
                            ]
                        },
                        {
                            "idBus": 26,
                            "modelo": "Autocar",
                            "placa": "Y001-32",
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
                    message: "Error en servicio al obtener buses : El id debe ser mayor a 0.",
                    error_code: "rutas_FORMAT_INVALID"
                }
            },
            "501" : {
                status : "500 internal server BD",
                description : "fallas internas en la Base de Datos (500)" ,
                data :{
                    success : false , 
                    error : "Error en servicio al obtener buses : id = {id}: Could not find stored procedure 'SP_ListarBuses'." 
                    
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
        description: "Muestra dos Tipos de asiento por defecto (140 , 160). Cabe recalcar que nuestro sistema no maneja los tipos de asiento, por eso es por defecto",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
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
        path: "/v1/auth/transportista/programaciones?{}",
        title: "Programaciones",
        description: "Obtiene las programaciones solicitadas",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "placa", type: "int", required: true, description: "Placa del vehículo a consultar.", example: "CARS-12345" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Programaciones obtenidas.",
                data: {
                    status: 200,
                    success: true,
                    message: "Consulta de programaciones exitosa",
                    data: {
                        "idProgramacion": 48697,
                        "fechaProgramacion": "2026-01-13T00:00:00",
                        "origen": "TRUJILLO",
                        "destino": "LIMA",
                        "marcaBus": "marca 5",
                        "modeloBus": "modelo 5",
                        "placaBus": "CARS-12345",
                        "idConductor": 18,
                        "conductor": "Armando Paredes",
                        "precioPiso1": 20.000,
                        "precioPiso2": 40.000,
                        "estado": 1,
                        "puntosIntermedios": []
                    }
                }
            },
            "404": {
                status: "404 Not Found",
                description: "No tiene SOAT registrado.",
                data: {
                    status: 404,
                    success: false,
                    message: "No se encontró SOAT vigente ni vencido para la placa solicitada.",
                    error_code: "SOAT_NOT_FOUND"
                }
            }
        }
    },
    {
        id: "consultar-gps",
        category: "Vehículos y Tránsito",
        method: "GET",
        path: "/v1/vehiculos/placa/{placa}/gps",
        title: "GPS en Tiempo Real",
        description: "Obtiene las coordenadas geográficas de telemetría y estado de movimiento del dispositivo GPS instalado en la unidad.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "placa", type: "string", required: true, description: "Placa del vehículo con GPS activo.", example: "F3B-823" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Ubicación GPS obtenida con éxito.",
                data: {
                    status: 200,
                    success: true,
                    message: "GPS consultado correctamente",
                    data: {
                        placa: "F3B823",
                        ignicion: "ENCENDIDO",
                        velocidad_kmh: 62.4,
                        rumbo: "NOR-ESTE (45°)",
                        coordenadas: {
                            latitud: -12.084723,
                            longitud: -77.032891
                        },
                        altitud_metros: 142,
                        odometro_km: 124982.3,
                        ultima_actualizacion: "2026-05-20T15:21:45Z",
                        conductor_asignado: {
                            dni: "45678912",
                            nombre: "CARLOS ALBERTO RODRIGUEZ"
                        }
                    }
                }
            }
        }
    },
    {
        id: "consultar-licencia",
        category: "Conductores",
        method: "GET",
        path: "/v1/conductores/dni/{dni}/licencia",
        title: "Licencia de conducir",
        description: "Verifica el estado de la licencia de conducir del chofer en el sistema MTC, incluyendo puntos acumulados y retenciones.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "dni", type: "string", required: true, description: "Número de DNI del conductor a consultar.", example: "45678912" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "Licencia encontrada.",
                data: {
                    status: 200,
                    success: true,
                    message: "Consulta de Licencia MTC exitosa",
                    data: {
                        dni: "45678912",
                        conductor: "RODRIGUEZ QUISPE, CARLOS ALBERTO",
                        numero_licencia: "Q45678912",
                        clase_categoria: "A-IIIc (Profesional Especial)",
                        fecha_expedicion: "2021-02-10",
                        fecha_vencimiento: "2029-02-10",
                        estado: "VIGENTE / HABILITADO",
                        puntos_acumulados: 15,
                        puntos_limite: 100,
                        restricciones: "USO DE LENTES COMPENSADORES",
                        record_conductor: "BUENO (Sin infracciones graves en el último año)"
                    }
                }
            }
        }
    },
    {
        id: "crear-guia",
        category: "Guías de Remisión (Despachos)",
        method: "POST",
        path: "/v1/guias/crear",
        title: "Crear Guía de Remisión",
        description: "Registra y emite electrónicamente una Guía de Remisión Electrónica (Remitente o Transportista) firmada digitalmente y enviada a SUNAT.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [],
        queryParams: [],
        bodyParams: {
            contentType: "application/json",
            schema: [
                { name: "tipo_guia", type: "string", required: true, description: "Tipo de guía: 'REMITENTE' o 'TRANSPORTISTA'." },
                { name: "remitente_ruc", type: "string", required: true, description: "RUC del remitente (11 dígitos)." },
                { name: "destinatario_ruc", type: "string", required: true, description: "RUC del destinatario (11 dígitos)." },
                { name: "punto_partida", type: "object", required: true, description: "Dirección y ubigeo de origen del viaje." },
                { name: "punto_llegada", type: "object", required: true, description: "Dirección y ubigeo de destino final." },
                { name: "vehiculo_placa", type: "string", required: true, description: "Placa del camión asignado." },
                { name: "conductor_dni", type: "string", required: true, description: "DNI del chofer asignado." },
                { name: "peso_total_kg", type: "number", required: true, description: "Peso bruto total de la carga en kilogramos." },
                { name: "items", type: "array", required: true, description: "Lista de productos transportados (código, descripción, cantidad, unidad)." }
            ],
            example: {
                tipo_guia: "TRANSPORTISTA",
                remitente_ruc: "20601234567",
                destinatario_ruc: "20559988771",
                punto_partida: {
                    direccion: "Av. Materiales 2450, Cercado de Lima",
                    ubigeo: "150101"
                },
                punto_llegada: {
                    direccion: "Av. El Sol 124, Wanchaq, Cusco",
                    ubigeo: "080108"
                },
                vehiculo_placa: "F3B-823",
                conductor_dni: "45678912",
                peso_total_kg: 18500.5,
                items: [
                    { codigo: "PROD-0092", descripcion: "Bolsas de Cemento Portland Tipo I", cantidad: 400, unidad: "SACOS" },
                    { codigo: "PROD-1102", descripcion: "Fierro Corrugado de 1/2 pulgada", cantidad: 50, unidad: "VARILLAS" }
                ]
            }
        },
        responses: {
            "200": {
                status: "200 OK (Creado)",
                description: "Guía de remisión emitida e informada a SUNAT.",
                data: {
                    status: 200,
                    success: true,
                    message: "Guía de Remisión Electrónica emitida correctamente",
                    data: {
                        id_guia: "T001-00049281",
                        ticket_sunat: "202605201024-94827394",
                        estado_sunat: "ACEPTADO",
                        mensaje_sunat: "La Guía de Remisión Electrónica ha sido aceptada.",
                        hash_xml: "eGg5N2RzZjhoOTIzNGhnaDk4M3RmZGFzZGY=",
                        qr_content: "20601234567|09|T001|00049281|18500.5|2026-05-20|F3B823|45678912|",
                        fecha_emision: "2026-05-20T15:24:50Z"
                    }
                }
            },
            "400": {
                status: "400 Bad Request",
                description: "Error de validación de campos u observaciones de negocio (ej. chofer inhabilitado o vehículo vencido).",
                data: {
                    status: 400,
                    success: false,
                    message: "No se puede emitir la guía. El SOAT del vehículo F3B823 se encuentra vencido.",
                    error_code: "COMPLIANCE_SOAT_EXPIRED"
                }
            }
        }
    },
    {
        id: "descargar-guia-json",
        category: "Guías de Remisión (Despachos)",
        method: "GET",
        path: "/v1/guias/descargar/{id_guia}",
        title: "Descargar Guía JSON",
        description: "Obtiene la representación estructurada JSON de una guía emitida anteriormente con su estado de firmas y auditoría.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [
            { name: "id_guia", type: "string", required: true, description: "Código de la guía de remisión (ej. T001-00049281).", example: "T001-00049281" }
        ],
        queryParams: [],
        bodyParams: null,
        responses: {
            "200": {
                status: "200 OK",
                description: "JSON retornado correctamente.",
                data: {
                    status: 200,
                    success: true,
                    message: "Exito",
                    data: {
                        id_guia: "T001-00049281",
                        tipo: "TRANSPORTISTA",
                        estado: "DECLARADO_APROBADO",
                        fecha_registro: "2026-05-20T15:24:50Z",
                        remitente: {
                            ruc: "20601234567",
                            razon_social: "TRANSPORTES ANDINOS S.A.C."
                        },
                        destinatario: {
                            ruc: "20559988771",
                            razon_social: "CONSTRUCTORA PACIFICO S.A."
                        },
                        ruta: {
                            origen: "Av. Materiales 2450, Lima",
                            destino: "Av. El Sol 124, Cusco"
                        },
                        flota: {
                            placa: "F3B823",
                            conductor_dni: "45678912",
                            conductor_licencia: "Q45678912"
                        },
                        peso: 18500.5
                    }
                }
            }
        }
    },
    {
        id: "iniciar-viaje",
        category: "Viajes y Rutas",
        method: "POST",
        path: "/v1/viajes/iniciar",
        title: "Iniciar Viaje",
        description: "Inicia formalmente una ruta de despacho, asociando la unidad móvil, el conductor principal y las guías de carga. Envía notificaciones de seguimiento.",
        authorizations: [
            { name: "Authorization", type: "string", location: "header", required: true, description: "Token Bearer de autenticación." }
        ],
        pathParams: [],
        queryParams: [],
        bodyParams: {
            contentType: "application/json",
            schema: [
                { name: "vehiculo_placa", type: "string", required: true, description: "Placa del vehículo." },
                { name: "conductor_dni", type: "string", required: true, description: "DNI del conductor principal asignado." },
                { name: "guias_asociadas", type: "array", required: true, description: "Lista de IDs de guías de remisión electrónicas amparadas en el despacho." },
                { name: "ruta_nombre", type: "string", required: false, description: "Nombre comercial de la ruta. Ej: 'Ruta Sur - Lima a Cusco'." }
            ],
            example: {
                vehiculo_placa: "F3B-823",
                conductor_dni: "45678912",
                guias_asociadas: ["T001-00049281", "T001-00049282"],
                ruta_nombre: "Troncal Sur - Lima Arequipa Cusco"
            }
        },
        responses: {
            "200": {
                status: "200 OK",
                description: "Viaje iniciado con éxito en la plataforma de seguimiento.",
                data: {
                    status: 200,
                    success: true,
                    message: "Despacho de viaje iniciado exitosamente",
                    data: {
                        id_viaje: "TRIP-2026-00928",
                        estado: "EN_RUTA",
                        codigo_seguimiento: "TRACK-89372-AND",
                        fecha_salida: "2026-05-20T15:25:01Z",
                        paradas_estimadas: [
                            { parada: "Control Chilca", eta: "2026-05-20T16:45:00Z" },
                            { parada: "Control Nazca", eta: "2026-05-20T21:30:00Z" }
                        ],
                        link_tracking: "https://tracking.transportista.pe/v1/live/TRACK-89372-AND"
                    }
                }
            }
        }
    }
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
