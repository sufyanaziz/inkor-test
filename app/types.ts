export type TUserAccess = {
  expired: number;
  user: {
    email: string;
    tokenId: string;
    memberNo: number;
  };
};
