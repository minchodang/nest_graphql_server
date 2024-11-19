import { InputType, Field } from '@nestjs/graphql';

@InputType() // GraphQL 입력 타입을 정의합니다.
export class CreateCatInput {
  @Field()
  name: string; // 입력받을 고양이의 이름입니다.

  @Field()
  age: number; // 입력받을 고양이의 나이입니다.

  @Field()
  breed: string; // 입력받을 고양이의 품종입니다.
}
