import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: any = [];
  constructor(private apollo: Apollo) {
    apollo.watchQuery({
      query: gql`
      {
        books{
          name
          genre
          id
          author{
            name
            age
            id
          }
        }
      }
      `
    }).valueChanges.subscribe((res) => {
      this.bookList = res.data['books'];
    }, err => console.log(err))
  }

  ngOnInit(): void {
  }

}
