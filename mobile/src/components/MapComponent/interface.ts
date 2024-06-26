export interface Pointer {
    latitude: number,
    longitude: number,
    title?: string,
}

export interface MapComponentProps {
    pointer: Pointer,
}