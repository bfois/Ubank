import { User } from "./user";

export interface Card {
    id: number;
    cardNumber: string;
    expirationDate: string;
    balance: number;
    activated: boolean;
    user: User; // Asegúrate de importar la interfaz User si no está en el mismo archivo
  }