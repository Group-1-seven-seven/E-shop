export class Product {
    
  constructor(
    public id: number = 1,
    public category: {} = {},
    public productName: string = '',
    public image: string[] = [],
    public description: string = '',
    public price: number = 0,
    public quantity: number = 0,
    public isActive: boolean = true,
    public comments: string[] = [],
    public date: string = new Date().toISOString().split('T')[0],
    public typePayment: string[] = ["COD", "Cash", "Credit Card"],
    public currentRating: number = 0,
    public sold: number = 0
  ) 
  {}
}

