import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  pathImageUrl: any;

  form: FormGroup;

  constructor(
    private blogService: BlogService,
    private router: Router
  ) {

    this.pathImageUrl = 'http://localhost:3000/images/uploads/';

    this.form = new FormGroup({
      titulo: new FormControl(),
      contenido: new FormControl(),
      categoria: new FormControl(),
      url_imagen: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    console.log(this.form.value);
    const response = await this.blogService.createPost(this.form.value);
    console.log(response);
    this.router.navigate(['/blog/posts']);
  }

}
