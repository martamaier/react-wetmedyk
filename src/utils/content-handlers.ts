import * as _ from "lodash";

export const stringToStartCase = (value: string): string => {
    return _.startCase(_.camelCase(value));
}
