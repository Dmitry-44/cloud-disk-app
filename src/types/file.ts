

export interface File {
    _id: string,
    name: string,
    type: string,
    accsessLink: string,
    size: number,
    path: string,
    user: [number],
    parent: [number] | [],
    childs: number[] | []
}

export interface fileState {
    files: File[],
    currentDir: string | null
}