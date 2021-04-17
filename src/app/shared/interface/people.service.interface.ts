import { IPeopleList } from './people-list.interface';
import { Observable } from 'rxjs';

export interface IPeopleService {
  getPeopleList(): Observable<IPeopleList>
}
