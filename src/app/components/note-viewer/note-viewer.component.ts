import {Component, inject, OnInit, signal} from '@angular/core';
import {NoteApiService} from '../../services/notes/note-api-service.service';
import {generateKey} from '../../../utils/aes-gcm';

@Component({
  selector: 'app-note-viewer',
  imports: [],
  templateUrl: './note-viewer.component.html',
  styleUrl: './note-viewer.component.css'
})
export class NoteViewerComponent implements OnInit {
  markdown = signal('');
  noteApiService:NoteApiService = inject(NoteApiService);

  async ngOnInit() {
    const key = await generateKey();
    this.noteApiService.getDecryptedNote(1,key).subscribe(content  => {
      this.markdown.set(content);
      console.log(content);
    })
  }
}
