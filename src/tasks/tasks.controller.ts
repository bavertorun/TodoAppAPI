import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
}
