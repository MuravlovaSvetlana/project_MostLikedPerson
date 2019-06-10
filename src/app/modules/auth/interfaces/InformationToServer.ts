export interface Login {
    email: string;
    password: string;
}

export interface ResetPassword {
    email: string;
}

export interface SignUp {
    email: string;
    first_name: string;
    password: string;
    repeatPassword?: string;
    nickname: string;
    last_name: string;
    phone: string;
    gender_orientation: string;
    city: string;
    country: string;
    date_of_birth_day: number;
    date_of_birth_month: number;
    date_of_birth_year: number; 
}

