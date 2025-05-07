import { Routes } from '@angular/router';
import {NoteEditorComponent} from '../components/note-editor/note-editor.component';

export const routes: Routes = [
  {
    path: 'new-note',component:NoteEditorComponent
  }
];
