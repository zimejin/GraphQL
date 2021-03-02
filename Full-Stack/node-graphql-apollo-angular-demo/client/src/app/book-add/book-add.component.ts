import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  authors: any = [];
  addBookForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    genre: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  })
  constructor(private apollo: Apollo) {
    apollo.watchQuery({
      query: gql`
      {
        authors{
          name
          id
        }
      }
      `
    }).valueChanges.subscribe((res) => {
      this.authors = res.data['authors'];
    })
  }
  addBook() {
    let check = this.addBookForm.valid;
    let val = this.addBookForm.getRawValue();
    let query = gql`
    mutation addBook($name:String!,$genre:String!,$authorid:ID!){
      addBook(name:$name,genre:$genre,authorid:$authorid){
        name
        genre
        id
      }
    }
    `
    if (check) {
      this.apollo.mutate({
        mutation: query,
        variables: {
          name: val.name,
          genre: val.genre,
          authorid: val.author,
        }
      }).subscribe((res) => {
        alert('Book Saved');
        this.addBookForm.reset();
      }, err => console.log(err));
    } else {
    }
  }
  ngOnInit(): void {
  }

}
