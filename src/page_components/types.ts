export namespace Types {
    export type Node = {
        name: string,
        group: number
    }

    export type Link = {
        source: string,
        target: string,
        value: string
    }

    export type Data = {
        nodes: Node[],
        links: Link[]
    }
}