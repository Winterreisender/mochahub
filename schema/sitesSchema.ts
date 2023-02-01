export interface Sites {
    /**
     * The title of the hub.
     *
     */
    title :string,

    /**
     * The array contains many `group`s of website
     */
    groups :{
        /**
         * The name of the group
         */
        groupName: string,
        sites: {
            /** The UUID of a site, you can generate one in www.uuidgenerator.net online. We recommend UUID version 4 */
            uuid :string,
            name :string,
            url: string,
            description?: string
        }[]
    }[]
}