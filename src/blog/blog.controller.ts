/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() blogPost: { id: number; title: string; content: string }) {
    this.blogService.create(blogPost);
  }
  
  @Get()
  findAll() {
    return this.blogService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPost: Partial<{ title: string; content: string }>) {
    this.blogService.update(+id, updatedPost);
  }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.blogService.remove(+id);
    }
}
