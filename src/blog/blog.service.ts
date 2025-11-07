import { Injectable } from '@nestjs/common';
interface BlogPost {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class BlogService {
  private readonly blogPosts: BlogPost[] = [];

  create(blogPost: BlogPost) {
    this.blogPosts.push(blogPost);
  }

  findAll(): BlogPost[] | any { //For some god forsaken reason putting any solves a typescript problem. ols helo.
    return this.blogPosts;
  }

  findOne(id: number): BlogPost | undefined | any { //same here
    return this.blogPosts.find((post) => post.id === id);
  }

  update(id: number, updatedPost: Partial<BlogPost>) {
    const postIndex = this.blogPosts.findIndex((post) => post.id === id);
    if (postIndex !== -1) {
      this.blogPosts[postIndex] = {
        ...this.blogPosts[postIndex],
        ...updatedPost,
      };
    }
  }

  remove(id: number) {
    const postIndex = this.blogPosts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
      this.blogPosts.splice(postIndex, 1);
    }
  }
}