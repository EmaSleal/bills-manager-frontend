export class Factura {
    id: number=0;
    nombreCliente: string="";
    direccion: string="";
    telefono: string="";
    fecha: string="";
    estado: string="";
    lineaFacturas: LineaFactura[] | undefined;
    //detalleFactura: DetalleFactura[]=[];
    total: number=0;
    lineas: number=0;
    pagado: boolean=false;
    entregado: boolean=false;
}


export class LineaFactura {
    id: number=0;
    producto: {
        nombre: string;
        precio: number;
        descripcion: string;
        estado: string;
        presentacion: string;
        id: number;
    } | undefined;
    cantidad: number=0;
    precio: number=0;
    subtotal: number=0;
  }