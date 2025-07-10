import { Injectable } from '@angular/core';
import {Observable, of, delay} from "rxjs";


export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Ноутбук ASUS ZenBook', price: 89999, category: 'Электроника', inStock: true },
  { id: 2, name: 'Смартфон Samsung Galaxy', price: 49999, category: 'Электроника', inStock: false },
  { id: 3, name: 'Электросамокат Xiaomi', price: 35999, category: 'Транспорт', inStock: true },
  { id: 4, name: 'Гитара Fender', price: 42999, category: 'Музыка', inStock: true },
  { id: 5, name: 'Книга “Clean Code”', price: 1999, category: 'Книги', inStock: true },
  { id: 6, name: 'Чайник Philips', price: 2999, category: 'Бытовая техника', inStock: false },
  { id: 7, name: 'Рюкзак XD Design', price: 4990, category: 'Аксессуары', inStock: true },
  { id: 8, name: 'Кофеварка DeLonghi', price: 15999, category: 'Бытовая техника', inStock: true },
  { id: 9, name: 'Настольная лампа IKEA', price: 1299, category: 'Дом и интерьер', inStock: true },
  { id: 10, name: 'Наушники Sony WH-1000XM4', price: 24999, category: 'Электроника', inStock: false },
  { id: 11, name: 'Планшет Apple iPad Air', price: 65999, category: 'Электроника', inStock: true },
  { id: 12, name: 'Фитнес-браслет Xiaomi Mi Band 7', price: 3990, category: 'Электроника', inStock: true },
  { id: 13, name: 'Термокружка Contigo', price: 2390, category: 'Аксессуары', inStock: false },
  { id: 14, name: 'Микрофон Blue Yeti', price: 13990, category: 'Музыка', inStock: true },
  { id: 15, name: 'Книга “You Don’t Know JS”', price: 1890, category: 'Книги', inStock: true },
  { id: 16, name: 'Шлем для самоката', price: 2290, category: 'Транспорт', inStock: true },
  { id: 17, name: 'Электрическая зубная щётка Oral-B', price: 7490, category: 'Бытовая техника', inStock: false },
  { id: 18, name: 'Светильник Yeelight', price: 3490, category: 'Дом и интерьер', inStock: true },
  { id: 19, name: 'Сумка для ноутбука Samsonite', price: 7990, category: 'Аксессуары', inStock: true },
  { id: 20, name: 'Скейтборд Penny Board', price: 4999, category: 'Транспорт', inStock: false },
];
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  getProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS).pipe(delay(500));
  }
}
