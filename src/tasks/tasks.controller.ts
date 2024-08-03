import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from './dto/task-create.dto';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService:TasksService){}
    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    async create(@Body() task:CreateTaskDto){
        return this.taskService.create(task);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id:string,@Body() task:CreateTaskDto){
        return this.taskService.update(id,task);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.taskService.delete(id);
    }
}
