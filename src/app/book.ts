export class Book {
    private author: string;
    private title: string;
    private price: string;
    constructor(author:string, title: string, price: string){
        this.author = author;
        this.price=price;
        this.title=title;
    }
    getTitle() : string{
        return this.title;
    }
    getAuthor() : string{
        return this.author;
    }
    getPrice() : string{
        return this.price;
    }
}
