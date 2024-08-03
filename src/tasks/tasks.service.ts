import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task-create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task-create.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private readonly taskModel: Model<Task>) {}
  
  async create(task: CreateTaskDto) {
    const createdTask = await this.taskModel.create(task)
    return createdTask;
  }

  async update(id:string,task:CreateTaskDto){
    const updateedTask = await this.taskModel.findByIdAndUpdate(id,task,{new:true})
    return updateedTask;
  }
}
