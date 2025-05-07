import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'app-note-editor',
  imports: [FormsModule,MarkdownModule],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.css'
})
export class NoteEditorComponent {
  markdown = '';

}
