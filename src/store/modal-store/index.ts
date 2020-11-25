export interface ModalState<T> {
    data: T;
    shouldDisplay: boolean;
    contentType: ContentTypes;
}

export const INITIAL_STATE: ModalState<any> = {
    data: null,
    shouldDisplay: false,
    contentType: null,
}

export type ContentTypes = 'service' | 'employee' | 'post' | null
