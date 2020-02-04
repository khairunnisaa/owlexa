import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-owlexa',
  templateUrl: './about-owlexa.component.html',
  styleUrls: ['./about-owlexa.component.css']
})
  export class AboutOwlexaComponent implements OnInit {

  constructor() { }

  @Input() judul: any = 'Tentang Owlexa';
  @Input() smalltext = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
  @Input() description = 'Expedita voluptatum, ratione eveniet velit, distinctio animi voluptas suscipit eos labore voluptatibus?';

  ngOnInit() {
  }

}
