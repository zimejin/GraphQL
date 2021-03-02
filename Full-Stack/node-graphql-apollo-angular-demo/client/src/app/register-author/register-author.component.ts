import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-register-author',
  templateUrl: './register-author.component.html',
  styleUrls: ['./register-author.component.css']
})
export class RegisterAuthorComponent {

  authorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  })
  constructor(private apollo: Apollo) { }
  query = gql`
  mutation addAuthor($name:String!,$age:Int!  ){
    addAuthor(name:$name,age:$age){
      name
      age
      id
    }
  }
  `
  addAuthor() {
    let data = this.authorForm.getRawValue();
    this.apollo.mutate({
      mutation: this.query,
      variables: {
        name: data.name,
        age: data.age,
      }
    }).subscribe((res) => {
      alert('Author Registerd');
      this.authorForm.reset();
    }, err => console.log(err))
  }

}
