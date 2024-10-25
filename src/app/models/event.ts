export interface DataEvent {
    id:        number;
    title:     string;
    fullName:  string;
    events:    EventInfo[];
}

export interface EventInfo {
    id:          number;
    title:       string;
    subtitle:    string;
    description: string;
    start:       Data;
    end:         Data;
    url:         string;
    brand:       string;
}

export interface Data {
    hour: number;
    mins: number;
}
