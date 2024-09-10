import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tqop.frontend';
  file:any;

  fileChanged(e: any) {
    this.file = e.target.files[0];
  }

  parseFile() {
    let fileReader = new FileReader();
    
    fileReader.onload = (e) => {
      const buffer = <ArrayBuffer>e.target.result;
      const first = buffer != null ? new Uint32Array(buffer, 0, 3) : null;
      const headerVersionText = new Uint8Array(buffer, 4, 13);
      const headerVersionValue = new Uint8Array(buffer, 17, 1);

      console.log(first);
      console.log(headerVersionText);
      console.log(headerVersionValue);

      const text = new TextDecoder().decode(headerVersionText);
      console.log(first[0] + " " + text + " " + headerVersionValue[0]);
    }

    fileReader.readAsArrayBuffer(this.file);

  }
}
