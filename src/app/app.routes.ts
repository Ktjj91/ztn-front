import { Routes } from '@angular/router';
import {NoteEditorComponent} from '../components/note-editor/note-editor.component';

export const routes: Routes = [
  //new-note
    {
    path: '',component:NoteEditorComponent
  }
];
