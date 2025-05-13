import {Component, inject, signal, WritableSignal} from '@angular/core';
import {NoteApiService} from '../../services/notes/note-api-service.service';
import {NoteInterface} from '../../intefaces/note-interface';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {
  private readonly noteApiService: NoteApiService = inject(NoteApiService);
  notes:WritableSignal<NoteInterface[] | null> = signal([]);

  constructor() {
  }



}
