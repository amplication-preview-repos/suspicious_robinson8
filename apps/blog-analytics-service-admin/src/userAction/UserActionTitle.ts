import { UserAction as TUserAction } from "../api/userAction/UserAction";

export const USERACTION_TITLE_FIELD = "postId";

export const UserActionTitle = (record: TUserAction): string => {
  return record.postId?.toString() || String(record.id);
};
