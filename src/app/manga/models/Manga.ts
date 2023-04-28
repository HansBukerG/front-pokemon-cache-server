export interface Manga {
    id: string;
    type: string;
    attributes: Attributes;
    relationships: Relationship[];
    coverArtFileName?:string;
}

export interface Attributes {
    title: Title;
    altTitles: { [key: string]: string }[];
    description: PurpleDescription;
    isLocked: boolean;
    links: { [key: string]: string };
    originalLanguage: OriginalLanguage;
    lastVolume: string;
    lastChapter: string;
    publicationDemographic: null | string;
    status: Status;
    year: number | null;
    contentRating: ContentRating;
    tags: Tag[];
    state: State;
    chapterNumbersResetOnNewVolume: boolean;
    createdAt: string;
    updatedAt: string;
    version: number;
    availableTranslatedLanguages: string[];
    latestUploadedChapter: string;
}

export enum ContentRating {
    Erotica = "erotica",
    Safe = "safe",
    Suggestive = "suggestive",
}

export interface PurpleDescription {
    en?: string;
    "pt-br"?: string;
    "es-la"?: string;
    it?: string;
    pt?: string;
}

export enum OriginalLanguage {
    Ja = "ja",
}

export enum State {
    Published = "published",
}

export enum Status {
    Completed = "completed",
    Ongoing = "ongoing",
}

export interface Tag {
    id: string;
    type: TagType;
    attributes: TagAttributes;
    relationships: any[];
}

export interface TagAttributes {
    name: Title;
    description: FluffyDescription;
    group: Group;
    version: number;
}

export interface FluffyDescription {
}

export enum Group {
    Content = "content",
    Format = "format",
    Genre = "genre",
    Theme = "theme",
}

export interface Title {
    en?: string;
    jp?: string;
}

export enum TagType {
    Tag = "tag",
}

export interface Relationship {
    id: string;
    type: string;
    attributes?: RelationshipAttributes;
    related?: string;
}

export interface RelationshipAttributes {
    description: string;
    volume: string;
    fileName: string;
    locale: OriginalLanguage;
    createdAt: string;
    updatedAt: string;
    version: number;
}
