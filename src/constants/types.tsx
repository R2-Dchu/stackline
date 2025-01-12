export interface Reviews {
  customer: string;
  review: string;
  score: number;
}
  
export interface Sales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface StacklineData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Reviews[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Sales[];
}