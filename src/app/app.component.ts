import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NoteApiService} from './services/notes/note-api-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ztn-front';


}
