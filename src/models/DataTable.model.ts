import * as _ from 'lodash';

export interface DataTableModel<T> {
    headings: string[];
    rows: DataTableRow<T>[][];
}

export interface DataTableRow<T> {
    type: DataTypes;
    value: string | number;
}

export enum DataTypes {
    image = 'image',
    text = 'text',
    number = 'number',
}

export function mapArrayToDataTable<T>(data: T[]): DataTableModel<T> {
    return {
        headings: Object.keys(data[0]),
        rows: data.map((dataItem: T) => mapObjectToDataTableRow(dataItem))
    };
}


export function mapObjectToDataTableRow<T>(dataItem: T): DataTableRow<T>[] {
    return Object.values(dataItem).map((value: string | number) => ({
            value,
            type: value.toString().startsWith('http') ?
                DataTypes.image :
                (!_.isNaN(value) ? DataTypes.number : DataTypes.text),
        })
    );
}
