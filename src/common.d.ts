export const enum FileType {
    text,
    pdf,
    video,
    image,
    audio
}

export interface File {
    type: FileType;
    name: string;
}
