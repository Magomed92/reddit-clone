import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restrictied" | "private";
  createdAt?: Timestamp;
  imageURL?: string;
}

export interface CommunitySnippets {
  communityId: string;
  isModerator?: boolean;
  imageURL?: string;
}
interface CommunityState {
  mySnippets: CommunitySnippets[];
}

const defaultCommunityState: CommunityState = {
  mySnippets: [],
};
export const CommunityState = atom<CommunityState>({
  key: "communitiesState",
  default: defaultCommunityState,
});
