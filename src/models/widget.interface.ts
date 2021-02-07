export type InputType = 'text' | 'password';

export interface Widget {
    name: string;
    value: string;
    multiline: boolean;
    select?: boolean;
    type?: InputType | null;
}
