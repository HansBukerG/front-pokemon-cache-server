export interface Chapter {
    id: string;
    type: string;
    attributes: ChapterAttributes;
    relationships: ChapterRelationship[];
}

export interface ChapterAttributes {
    volume: string;
    chapter: string;
    title: string;
    translatedLanguage: string;
    externalUrl: null;
    publishAt: Date;
    readableAt: Date;
    createdAt: Date;
    updatedAt: Date;
    pages: number;
    version: number;
}

export enum TranslatedLanguage {
    En = "en",
    EsLa = "es-la",
    ID = "id",
    PtBr = "pt-br",
    Ru = "ru",
    Vi = "vi",
}

export interface ChapterRelationship {
    id: string;
    type: ChapterRelationshipType;
}

export enum ChapterRelationshipType {
    Manga = "manga",
    ScanlationGroup = "scanlation_group",
    User = "user",
}
