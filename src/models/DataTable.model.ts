export interface DataTableInterface<T> {
    columns: string[];
    columnTypes: DataTypes[];
    data: T[];
    onAdd: Function;
    onEdit: Function;
    onDelete: Function;
}

export enum DataTypes {
    image = 'image',
    text = 'text',
    number = 'number',
}

