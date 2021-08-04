export interface IUser{
    'id': number;
    'firstName': string;
    'lastName': string; 
    'email': string;
    'phoneNumber': string;
    'dateOfBirth': string; 
    'shippingAddress':{
      'city': string; 
      'street': string;   
    };
}