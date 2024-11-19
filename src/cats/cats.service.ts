import { Injectable } from '@nestjs/common';
import { Cat } from './models/cat.model';
import { CreateCatInput } from './dto/create-cat.input';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats; // 모든 고양이 데이터를 반환합니다.
  }

  create(createCatInput: CreateCatInput): Cat {
    const newCat = { id: Date.now(), ...createCatInput }; // 새로운 고양이 데이터를 생성합니다.
    this.cats.push(newCat);
    return newCat; // 생성된 고양이 데이터를 반환합니다.
  }
}
