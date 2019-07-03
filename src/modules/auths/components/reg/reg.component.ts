import {Component, OnInit} from '@angular/core';
import {BookService} from '../../../books/services/book.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
    if (authService.isAuth()) {
      this.router.navigate(['/' + BookService.URL_HASH]);
      return;
    }
  }

  ngOnInit() {
  }

}
