import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.scss']
})
export class FormFooterComponent implements OnInit {

  @Input('text') public text = '';
  @Input('button') public button = '';

  constructor() { }

  ngOnInit(): void {
  }

}
