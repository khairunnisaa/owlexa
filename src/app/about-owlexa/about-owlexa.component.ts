import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-owlexa',
  templateUrl: './about-owlexa.component.html',
  styleUrls: ['./about-owlexa.component.css']
})
  export class AboutOwlexaComponent implements OnInit {

  constructor() { }

  @Input() judul: any = 'Tentang Owlexa';
  @Input() smalltext = 'Owlexa sebagai Unit Bisnis';
  // tslint:disable-next-line:max-line-length
  @Input() description = 'Untuk memenuhi kebutuhan layanan administrasi asuransi dan jaminan kesehatan yang handal, cepat dan akurat, maka PT Aplikanusa Lintasarta membentuk unit bisnis e-Health dengan brand Owlexa Healthcare. Dengan pengalaman selama 29 tahun sebagai perusahaan yang melayani lebih dari 2500 korporasi, Lintasarta berkomitmen untuk memberikan pelayanan terbaik bagi seluruh stakeholder di industri kesehatan.\n' +
    '\n' +
    ' \n' +
    '\n' +
    // tslint:disable-next-line:max-line-length
    'Owlexa memberikan pelayanan tanpa batas, diantaranya memberikan pelayanan terhadap proses administrasi klaim perusahaan atau asuransi mulai dari proses membership & policy administration, eligibility member, case monitoring, discharge sampai pada proses pembayaran tagihan klaim biaya pengobatan. Didukung oleh sistem dan teknologi yang handal serta sumber daya manusia berpengalaman di bidangnya, Owlexa dapat memberikan layanan administrasi kesehatan yang optimal, efisien, cepat dan akurat serta pelayanan terbaik.';

  ngOnInit() {
  }

}
