export type RequestStatus = 
  | 'in-review'
  | 'approved'
  | 'confirmed'
  | 'rejected'
  | 'expired'
  | 'cancelled';

export interface Request {
  id: string;
  customerName: string;
  roomType: string;
  checkIn: Date;
  checkOut: Date;
  status: RequestStatus;
  createdAt: Date;
}

export interface RequestStatusColumn {
  id: RequestStatus;
  title: string;
  count: number;
  requests: Request[];
}
