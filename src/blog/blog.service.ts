import { Injectable } from '@nestjs/common';

@Injectable()

interface BlogPost { //Creo interfaz para definir e interactuar con data
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

    findAll(): BlogPost[] {
        return this.blogPosts;
    }

    findOne(id: number): BlogPost | undefined {
        return this.blogPosts.find(post => post.id === id);
    }

    update(id:number, updatedPost: Partial<BlogPost>) {
        const postIndex = this.blogPosts.findIndex(post => post.id === id);
        if(postIndex !== -1) {
            this.blogPosts[postIndex] = {...this.blogPosts[postIndex],...updatedPost};
        }
        
    }

    remove(id: number) {
        const postIndex = this.blogPosts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.blogPosts.splice(postIndex, 1);
        }
  }
}