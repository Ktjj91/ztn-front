import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'app-note-editor',
  imports: [FormsModule,MarkdownModule],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.css'
})
export class NoteEditorComponent {
  markdown = signal<string>('');
  @ViewChild('editor') editor!: ElementRef<HTMLTextAreaElement>;
  insert(prefix: string,listOdered:string = ""): void {
      let p:string;
    if(listOdered >= "1") {
      let n = parseInt(listOdered);
      n++;
       p = n.toString()
      prefix = `${p}. `;

    }
    const textarea = this.editor.nativeElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = this.markdown().slice(0, start);
    const after = this.markdown().slice(end);
    const selected = this.markdown().slice(start, end);

    this.markdown.set(`${before}${prefix}${selected}${after}`);
    textarea.focus();
  }

  wrap(wrapper: string): void {
    const textarea = this.editor.nativeElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = this.markdown().slice(0, start);
    const after = this.markdown().slice(end);
    const selected = this.markdown().slice(start, end);

    this.markdown.set( `${before}${wrapper}${selected}${wrapper}${after}`);
    textarea.focus();
  }

}
