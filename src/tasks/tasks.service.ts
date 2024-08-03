import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task-create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task-create.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async create(task: CreateTaskDto) {
    const createdTask = await this.taskModel.create(task);
    return createdTask;
  }

  async update(id: string, task: CreateTaskDto) {
    const updateedTask = await this.taskModel.findByIdAndUpdate(id, task, {
      new: true,
    });
    return updateedTask;
  }

  async delete(id: string) {
    const deletedTask = await this.taskModel.findByIdAndDelete(id);
    return deletedTask;
  }

  async findAll() {
    const tasks = await this.taskModel.find().exec();
    return tasks;
  }

  async findOne(id: string) {
    const findTask = await this.taskModel.findById(id);
    return findTask;
  }

  async findFilteredTask(status: string) {
    const filteredTask = await this.taskModel.find({ status: status });
    return filteredTask;
  }
}
