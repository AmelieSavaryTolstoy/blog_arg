export interface Posts {
    id: number;
    date: string;
    text: string;
};

export const posts: Posts[] = [
    {
        id: 1,
        date: '2015-06-21',
        text: "S’il ne trouve pas Bonbinsky c’est parce qu’ils sont incompétents. Moi cet homme, je l’ai déjà traqué, je peux recommencer."
    },
    {
        id: 2,
        date: '2015-07-22',
        text: "J’ai trouvé sa cachette, j’ai un fusil, je vais le buter, je vais te venger mon chéri. Daphné, pardonne-moi, je t’aime, j’ai échoué dans mon rôle de père. Je vous rejoindrais demain. Vous me manquez tellement. Je suis fou de rage et de chagrin. À bientôt mon fils, À bientôt mon amour."
    },
]