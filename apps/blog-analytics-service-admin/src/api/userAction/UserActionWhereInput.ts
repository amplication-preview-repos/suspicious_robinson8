import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserActionWhereInput = {
  action?: "Option1";
  id?: StringFilter;
  postId?: StringNullableFilter;
};
