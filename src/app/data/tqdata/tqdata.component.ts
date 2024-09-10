import { Component, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/appsettings';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-tqdata',
  templateUrl: './tqdata.component.html',
  styleUrls: ['./tqdata.component.css']
})
export class TqdataComponent implements OnInit {
  public constructor(private httpClient: HttpClient) {}

  public ngOnInit(): void {
    this.httpClient.get(AppSettings.TqDataSource).forEach(
      x => console.log(JSON.stringify(x))
    )
  }
}
