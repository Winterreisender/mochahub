export interface Sites {
    title :string,
    groups :{
        groupName: string,
        sites: {
            name :string,
            url: string,
            description: string
        }[]
    }[]
}