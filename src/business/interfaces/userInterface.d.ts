interface ProfileInterface{
    firstName: string;
    bio: string;
    avatarUrl?: string;
    country: string
    gender: string;

}


export interface UserInterface{
    _id?: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    profile:ProfileInterface;
}