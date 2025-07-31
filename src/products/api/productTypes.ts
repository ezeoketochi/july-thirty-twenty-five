export interface productType {
    id: string,
    category: string,
    description: String,
    price : Number,
    title : string,
    images : string[],
    rating: number,
    reveiws : review[],
  }

  export interface review {

      rating: number,
      comment: string,
      date: string,
      reviewerName: string,
      reviewerEmail : string
  }