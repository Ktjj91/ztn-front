import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteInterface} from '../../intefaces/note-interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteApiService {
  private readonly url = "/api/notes";
 httpClient: HttpClient = inject(HttpClient);

 list():Observable<NoteInterface[]>{
   return  this.httpClient.get<NoteInterface[]>(this.url);
 }

 create(content:string):Observable<Omit<NoteInterface, 'id'>>{
   const cipherText = btoa(content);
   const iv = btoa('aaaaaaaaaaaa');

   const n:Omit<NoteInterface, 'id'> = {
     cipherText:cipherText,
     iv:iv,
     owner: '/api/users/1'

   }
    return this.httpClient.post<NoteInterface>(this.url,n);

 }
}
