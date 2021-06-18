export interface ModalCliente {
  customer_id: number;
  store_id: number;
  first_name: string;
  last_name: string;
  email: string;
  address_id: number;
  address_name?: string;
  active: number;
  create_date?: string;
  last_update?: string;
}
