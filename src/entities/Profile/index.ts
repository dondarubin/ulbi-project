import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { IProfile, ProfileSchema } from './model/types/profile.types';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  IProfile,
  ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
};
