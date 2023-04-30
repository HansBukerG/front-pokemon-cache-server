import { environment } from "src/environments/environment";
import { Chapter } from "../models/Chapter";
import { Manga, Tag } from "../models/Manga";

export const setMangaCoverArt = (mangaList: Manga[]): Manga[] => {

    const newMangaList: Manga[] = mangaList.map((manga) => {
        const coverArtRelationship = manga.relationships.find(relationship => relationship.type === 'cover_art');

        if (coverArtRelationship) {
            const coverArtFileName = `${environment.MANGA_COVERS}/covers/${manga.id}/${coverArtRelationship.attributes?.fileName}`;
            const mangaWithCoverArtFileName = {
                ...manga,
                coverArtFileName
            };
            return mangaWithCoverArtFileName;
        } else {
            return manga;
        }
    })
    return newMangaList;
}

export const setMangaCoverArtById = (manga: Manga): Manga => {
    const coverArtRelationship = manga.relationships.find(
        (relationship) => relationship.type === 'cover_art'
    );

    if (coverArtRelationship) {
        const coverArtFileName = `${environment.MANGA_COVERS}/covers/${manga.id}/${coverArtRelationship.attributes?.fileName}`;
        const mangaWithCoverArtFileName = {
            ...manga,
            coverArtFileName,
        };
        return mangaWithCoverArtFileName;
    } else {
        return manga;
    }
};

export const getTags = (manga:Manga): Tag[] => {
  return manga.attributes.tags;
}

export const sortChapters = (chapterList: Chapter[]): Chapter[] => {
    return chapterList.sort((a, b) => {
        const chapterA = parseInt(a.attributes.chapter, 10);
        const chapterB = parseInt(b.attributes.chapter, 10);

        if (chapterA > chapterB) {
            return -1;
        }
        if (chapterA < chapterB) {
            return 1;
        }
        return 0;
    });
};
