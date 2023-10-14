import { User } from './user'; // Asegúrate de importar la interfaz User si no está en el mismo archivo

export interface Transaction {
  id: number;
  transactionType: string;
  amount: number;
  transactionDate: Date;
  user: User; // Asegúrate de importar la interfaz User si no está en el mismo archivo
}