import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // C'est ce qu'on utilise dans app.component.html
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
