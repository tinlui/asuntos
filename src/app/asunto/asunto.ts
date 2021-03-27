export interface asuntoDTO{
    no_identificacion:number;
    no_docto_original: string;
    fecha_recepcion: Date;
    fecha_Documento: Date;
    dirigido_a: number;
    enviado_por: number;
    asunto: string;
    observaciones:string;
    original:number;
    copia:number;
    archivo_digital:string;
}


export interface asuntoCreacionDTO{
    no_identificacion:number;
    no_docto_original: string;
    fecha_recepcion: Date;
    fecha_Documento: Date;
    dirigido_a: number;
    enviado_por: number;
    asunto: string;
    observaciones:string;
    original:number;
    copia:number;
    archivo_digital:File;
}

export interface contactosDTO{
    id_contacto:number;
    nombre:string;
    }