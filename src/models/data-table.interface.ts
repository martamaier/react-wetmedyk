export interface DataTableInterface<T> {
    columns: string[];
    columnTypes: DataTypes[];
    data: T[];
    onAdd: Function;
    onEdit: Function;
    onDelete: Function;
    valueMap?: { [key: string]: string } | null,
}

export enum DataTypes {
    image = 'image',
    text = 'text',
    number = 'number',
    date = 'date',
    array = 'array',
    mappedArray = 'mappedArray',
}

