export type HeaderActionButtontype={title:string,onClick:()=>void}


export interface Mobiles {
  Id: number;
  brand: string;
  Description: string;
  Image: string;
  Price: string;
  Tag: string;
  id?: number;
  description?: string;
  image?: string;
  price?: string;
  tag?: string;
}

export interface MobilesCollectionCardProps {
  title: string;
  products: Mobiles[];
  sectionPath?: string;
  tagLabel?: string;
}
