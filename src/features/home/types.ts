type State = {
    lang: string;
    themes: string;
    user?: User;
};

type User = {
    name: string;
    age: number;
};

type City = {
    name: string;
};

export type {State, User, City};
