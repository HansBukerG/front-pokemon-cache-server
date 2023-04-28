import { environment } from "src/environments/environment";
import { Manga } from "../models/Manga";

export const setMangaCoverArt = (mangaList:Manga[]):Manga[] => {

  const newMangaList:Manga[] = mangaList.map((manga)=>{
      const coverArtRelationship = manga.relationships.find(relationship => relationship.type === 'cover_art');

      if (coverArtRelationship) {
          const coverArtFileName = `${environment.MANGA_COVERS}/covers/${manga.id}/${coverArtRelationship.attributes?.fileName}`;
          const mangaWithCoverArtFileName = {
              ...manga,
              coverArtFileName
          };
          return mangaWithCoverArtFileName;
      }else{
      return manga;
      }
  })
  return newMangaList;
}

