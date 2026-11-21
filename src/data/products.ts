export type ArtKey = 'machine' | 'grinder' | 'kettle' | 'tamper';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface BrandProduct {
  slug: string;
  name: string;
  category: string;
  art: ArtKey;
  description: string;
  details: string;
  specs: ProductSpec[];
  badge?: string;
  price?: string;
}

export interface BrandCategory {
  name: string;
  products: BrandProduct[];
}

export interface Brand {
  id: string;
  name: string;
  origin: string;
  tagline: string;
  categories: BrandCategory[];
}
