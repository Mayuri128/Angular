import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
http = inject(HttpClient);
posts: any=[];

ngOnInit(): void {
  this.fetchPosts()
}

fetchPosts(){
  this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .subscribe((posts:any)=>{
    console.log(posts);
    this.posts = posts

  })
}

}
