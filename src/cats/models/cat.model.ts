import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // GraphQL 객체 타입을 정의합니다.
export class Cat {
  @Field(() => Int)
  id: number; // 고양이의 ID입니다.

  @Field()
  name: string; // 고양이의 이름입니다.

  @Field()
  age: number; // 고양이의 나이입니다.

  @Field()
  breed: string; // 고양이의 품종입니다.
}
