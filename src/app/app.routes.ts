import { Routes } from '@angular/router';
import {NoteEditorComponent} from './components/note-editor/note-editor.component';
import {NoteListComponent} from './components/note-list/note-list.component';
import {NoteViewerComponent} from './components/note-viewer/note-viewer.component';

export const routes: Routes = [
  //new-note
    {path: '',component:NoteEditorComponent},
  {path:'note-list',component:NoteListComponent},
  {path:'note-viewer',component:NoteViewerComponent}
];
