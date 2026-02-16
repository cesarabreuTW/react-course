import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '6993413240819ea434d516ae',
      isActive: true,
      balance: '$1,674.99',
      picture: 'http://placehold.it/32x32',
      age: 32,
      name: 'Rutledge Miller',
      gender: 'male',
      company: 'DEMINIMUM',
      email: 'rutledgemiller@deminimum.com',
      phone: '+1 (924) 495-2170',
      address: '701 Classon Avenue, Gratton, Nevada, 787',
      registered: '2023-12-29T02:50:34 +03:00',
    },
    {
      id: '69934132f8ad55133f49031e',
      isActive: false,
      balance: '$1,151.83',
      picture: 'http://placehold.it/32x32',
      age: 25,
      name: 'Liliana Guzman',
      gender: 'female',
      company: 'ORBEAN',
      email: 'lilianaguzman@orbean.com',
      phone: '+1 (834) 507-2573',
      address: '472 Walker Court, Levant, Nebraska, 5922',
      registered: '2024-08-24T02:13:54 +04:00',
    },
    {
      id: '69934132265b6fcdbb16e70e',
      isActive: false,
      balance: '$3,516.17',
      picture: 'http://placehold.it/32x32',
      age: 21,
      name: 'Middleton Hampton',
      gender: 'male',
      company: 'TEMORAK',
      email: 'middletonhampton@temorak.com',
      phone: '+1 (934) 529-2066',
      address: '629 Times Placez, Roland, Michigan, 8561',
      registered: '2018-09-19T08:23:21 +03:00',
    },
    {
      id: '699341323285a1d65eab14c0',
      isActive: false,
      balance: '$3,955.19',
      picture: 'http://placehold.it/32x32',
      age: 20,
      name: 'Gaines Craft',
      gender: 'male',
      company: 'NEXGENE',
      email: 'gainescraft@nexgene.com',
      phone: '+1 (927) 454-3589',
      address: '315 Remsen Avenue, Sabillasville, North Dakota, 3686',
      registered: '2014-04-27T10:42:46 +04:00',
    },
    {
      id: '6993413222d551cd9d6f766c',
      isActive: true,
      balance: '$2,674.85',
      picture: 'http://placehold.it/32x32',
      age: 21,
      name: 'Salazar Foreman',
      gender: 'male',
      company: 'NUTRALAB',
      email: 'salazarforeman@nutralab.com',
      phone: '+1 (850) 552-2776',
      address: '186 Jerome Avenue, Wintersburg, Utah, 4927',
      registered: '2015-07-08T12:11:14 +03:00',
    },
    {
      id: '69934132517f113e4462bbc8',
      isActive: true,
      balance: '$2,295.11',
      picture: 'http://placehold.it/32x32',
      age: 33,
      name: 'Jeri Wright',
      gender: 'female',
      company: 'POLARIA',
      email: 'jeriwright@polaria.com',
      phone: '+1 (857) 541-2044',
      address: '361 Martense Street, Yorklyn, Hawaii, 2053',
      registered: '2017-12-17T06:25:13 +03:00',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
