export interface SiteInfo {
    version: string,

    /**
     * 网站标题. The title of the hub.
     *
     */
    title :string,

    /**
     * 公告
     */
    notice :string,

    /**
     * 页脚
     */
    footer :string,

    /**
     * 导航项
     * 
     */
    nav :{
        name: string, url: string
    }[]

    /**
     * 分组
     */
    groups :{
        /**
         * 组名
         */
        name: string,
        /** 站点 */
        sites: {
            /** The UUID of a site, you can generate one in www.uuidgenerator.net online. We recommend UUID version 4 */
            uuid? :string,
            /** 网站名称 */
            name :string,
            /** 网址 */
            url: string,
            /** 描述 */
            description?: string
        }[]
    }[]

    particles: {
        enabled: boolean
    }
}