import {InModel} from './in-model';

export class User extends InModel {

  id: number;
  name: string;
  email: string;
  imageUrl: string;
  emailVerified: boolean;
  password: string;
  provider: string;
  providerId: string;

}
