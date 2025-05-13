import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteInterface} from '../../intefaces/note-interface';
import {firstValueFrom, from, Observable, switchMap, tap} from 'rxjs';
import {decrypt, encrypt, generateIv, generateKey} from '../../../utils/aes-gcm';

@Injectable({
  providedIn: 'root'
})
export class NoteApiService {
  private readonly url = "/api/notes";
 httpClient: HttpClient = inject(HttpClient);



  getDecryptedNote(id:number,key:CryptoKey):Observable<string>{
    return this.httpClient.get<any>(`${this.url}/${id}`).pipe(
      tap(note => console.log('Note reçue :', note)),
      switchMap( note =>
        from(decrypt(note.cipherTextBase64, key, note.ivBase64))
      )
    )
  }
 list():Observable<NoteInterface[]>{
   return  this.httpClient.get<NoteInterface[]>(this.url);
 }

 getNote(id:number):Observable<NoteInterface>{
   return this.httpClient.get<NoteInterface>(`${this.url}/${id}`);
 }

 create(content:string):Observable<Omit<NoteInterface, 'id'>>{
   return from(this.encryptAndPost(content));
 }

 private async encryptAndPost(content:string):Promise<any>{
   const key = await generateKey();
   const iv = generateIv();
   const cipherBuffer = await encrypt(content,key,iv);

   const cipherText = btoa(String.fromCharCode(...new Uint8Array(cipherBuffer)));
   const ivBase64 = btoa(String.fromCharCode(...iv));
   const body = {
     cipherText,
     iv:ivBase64,
     owner: '/api/users/1'
   }

   return firstValueFrom(this.httpClient.post(this.url, body));

 }
}
