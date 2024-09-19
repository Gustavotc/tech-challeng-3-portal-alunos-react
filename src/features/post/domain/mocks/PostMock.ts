import { faker } from "@faker-js/faker";
import { IPost } from "../interfaces/IPost";
import Post from "../models/Post";

export const makePostMock = (): IPost => {
  return new Post(
    faker.string.uuid(),
    faker.lorem.sentence(),
    faker.lorem.paragraphs(),
    faker.date.past(),
    faker.person.fullName()
  );
};

export const makePostsList = ({ length }: { length: number }): IPost[] => {
  return Array.from({ length }, makePostMock);
};
