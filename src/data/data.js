const dataOpcion = [
    {
       name: "Clientes",
       opc: [
          {
             "Clientes":["Listado"], 
             "Catalogos":["Vendedores", "Zonas", "Rutas", "Sector", "Referencias", "Importadores"], 
             "Reportes":["Reportes Personalizados", "Contactos", "Vigencia Doc's Digitales"]
          }
       ]
    },
    {
       name: "Provedores",
       opc: [
          {
             "Proveedores": "Listado",
             "Prospectos": ["Listado", "Autorización", "Seguimientos de Autorización"],
             "Catalogos": ["Personal de compra", "Personal de pagos"],
             "Reportes":["Reportes Personalizados", "Vigencia Doc's Digitales"]
          }
       ]
    },
    {
       name: "Sucursales",
       opc: [
          {
             "Sucursales": "Listado",
             "Reportes": "Sucursales"
          }
       ]
    },
    {
       name: "Personal",
       opc: [
          {
             "Interno": "Listado",
             "Externo": "Listado",
             "Produccion": ["Listado", "Asignacion Estacion T."],
             "Mantenimiento": "Listado",
             "Consumibles": ["Listado"],
             "Almacenes": [
                 "Listado",
                 "Tipo Servicio",
                 "Solicitar Personal",
                 "Revision y autorizacion",
                 "Seguimiento de Autorizacion",
             ]
          }
       ]
    },
    {
       name: "Opciones",
       opc: [
          {
             "Configuracion": "Opciones",
             "Indicadores": ["INPC", "Recargos", "Tipod", "Usuarios", "Logs"],
             "Reportes": ["INPC", "Recargos", "Tipos de cambio"],
             "Catalogos SAT": {
                "CDFI": [
                   "Pais",
                   "Estado",
                   "Municipio",
                   "Localidad",
                   "Colonia",
                   "Régimen fiscal",
                   "Monedas",
                   "Cátalogo de Retenciones",
                   "Productos y Servicios",
                   "Unidades Medida",
                   "Metodos de Pago",
                   "Formas de Pago",
                   "Catalogo de Impuestos",
                   "Uso de CFDI",
                   "Motivos cancelacion",
                ],
                "Complemento Leyendas Fiscales": "Catalogo Leyendas Fiscales",
                "Complemento Pago Extranjeros": "Tipo Contribuyente Sujeto a Retencion",
                "Complemento de Retenciones": "Tipo de Dividendo o utilidad distribuida",
                "Complemento Comercio Exterior": [
                   "Catalogo INCOTERM",
                   "Fraccion arancelaria"
                ],
                "Complemento Carta Porte": [
                   "Transporte",
                   "Tipo Estacion",
                   "Unidad de peso",
                   "Productos y Servicios",
                   "Material Peligroso",
                   "Tipo Embalaje",
                   "Tipo Permiso",
                   "Config AutoTransporte",
                   "Tipo Remolque",
                   "Config Maritima",
                   "Tipo Carga",
                   "Contenedor Maritimo",
                   "Num Autorizacion Naviero",
                   "Codigo Trans. Aereo",
                   "Tipo Servicio",
                   "Derechos de paso",
                   "Tipo Carro",
                   "Contenedor",
                   "Regimen Aduanero",
                   "Registro ISTMO",
                   "Sector COFEPRIS",
                   "Forma Farmacéutica",
                   "Condiciones Especiales Transportes",
                   "Tipo Materia",
                   "Tipos de Documentos Aduaneros"
                ],
                "Complementos INE": "Entidad"
             }
          }
       ]
    }
 ]
