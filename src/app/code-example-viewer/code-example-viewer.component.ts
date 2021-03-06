import {
  Component,
  OnInit,
  Input,
  TemplateRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-code-example-viewer',
  templateUrl: './code-example-viewer.component.html',
  styleUrls: ['./code-example-viewer.component.scss']
})
export class CodeExampleViewerComponent implements OnInit {
  @Input() codeExample: TemplateRef<any>;
  @Input() codeSourceUrl?: string;

  constructor(private http: HttpClient) { }

  viewCodeEnabled = false;

  ngOnInit() {

  }

  toggleViewCodeEnabled() {
    this.viewCodeEnabled = !this.viewCodeEnabled;
  }

}
