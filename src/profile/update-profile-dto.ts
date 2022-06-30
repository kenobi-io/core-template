import { CreateProfileDto } from './create-profile-dto';

export interface UpdateProfileDto extends CreateProfileDto {
    id: number;
}
