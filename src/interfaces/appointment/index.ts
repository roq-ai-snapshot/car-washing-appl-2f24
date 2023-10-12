import { UserInterface } from 'interfaces/user';
import { ServiceInterface } from 'interfaces/service';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  status: string;
  user_id: string;
  service_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  service?: ServiceInterface;
  car?: CarInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  service_id?: string;
  car_id?: string;
}
