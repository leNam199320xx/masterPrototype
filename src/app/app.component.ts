import { Component, ViewEncapsulation } from '@angular/core';
import { NamTagComponent } from './nam/nam-tag/tag.component';
import { NamDialogContentComponent } from './nam/nam-dialog/dialog.component';

@Component({
  selector: 'nam-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./nam/nam-define.css']
})
export class AppComponent {
  title = 'nam app';
  openedDialog = false;
  dialogContentComponent: NamDialogContentComponent = new NamDialogContentComponent(NamTagComponent, {});
  openDialog() {
    this.openedDialog = true;
  }
}
