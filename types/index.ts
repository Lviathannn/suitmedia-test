interface SmallImage {
  id: number;
  mime: string;
  file_name: string;
  url: string;
}

interface MediumImage {
  id: number;
  mime: string;
  file_name: string;
  url: string;
}

export interface CardType {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  small_image: SmallImage[];
  medium_image: MediumImage[];
}
