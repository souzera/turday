export interface ComentarioInputComponentProps {
    type: string;
    entity: any;
    onSend: (comentario: string) => void;
}