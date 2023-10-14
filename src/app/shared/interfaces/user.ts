import { Card } from './card'; // Importar la interfaz Card si existe

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  dni: number;
  email: string;
  password: string;
  cvu: string;
  balance: number;
  cards: Card[];
}