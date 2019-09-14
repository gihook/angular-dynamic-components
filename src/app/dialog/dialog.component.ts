import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() input: any;
    initialValue: string = '';

  constructor() { }

  ngOnInit() {
      this.initialValue = this.input.toString();
      console.log('ngOnInit called');
      setInterval(() => {
        this.input++;
      }, 500);
  }

}
