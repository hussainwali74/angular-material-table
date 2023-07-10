import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
export interface PostElement {
    title: string;
    id: number;
    userId: number;
    body: string;
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'avrox';
    constructor(private appService: AppService) { }
    dataSource: any = []
    displayedColumns = ['id', 'title', 'body',];
    @ViewChild(MatPaginator) paginator !: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;
    ngOnInit() {
        this.appService.getPosts().subscribe(data => {
            this.dataSource = data
            this.dataSource = new MatTableDataSource<PostElement>(this.dataSource)
            this.dataSource.paginator = this.paginator
            this.dataSource.sort = this.sort
        })
    }

}
