import { IPeople } from './people.interface';

export interface IPeopleList {
  data: IPeople[]
  page: number
  per_page: number
  support: { url: string,text:string }
  total: number
  total_pages: number
}
