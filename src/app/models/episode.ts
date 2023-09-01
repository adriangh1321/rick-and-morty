export interface IEpisode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}


export class Episode {
    constructor(
        public id:number,
        public name:string,
        public air_date:string,
        public episode:string,
        public characters: string[],
        public url:string,
        public created: Date
        
        ){}
}