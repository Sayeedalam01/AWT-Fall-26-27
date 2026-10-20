import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    const emp = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(emp);
  }

  findAll() {
    return this.employeeRepository.find();
  }

  async findOne(id: number) {
    const emp = await this.employeeRepository.findOneBy({ id });
    if (!emp) throw new NotFoundException(`Employee #${id} not found`);
    return emp;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const emp = await this.findOne(id);
    Object.assign(emp, updateEmployeeDto);
    return this.employeeRepository.save(emp);
  }

  async remove(id: number) {
    const emp = await this.findOne(id);
    return this.employeeRepository.remove(emp);
  }
}
