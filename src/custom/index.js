const menu = [
    {
        id: 100,
        name: "會員資訊",
        children: [
            {
                id: 110,
                name: '會員列表',
                componentName: 'demoOne'
            },
            {
                id: 120,
                name: "在線會員",
                componentName: 'demoTwo'
            }
        ]
    },
    {
        id: 200,
        name: "訂單資訊",
        children: [
            {
                id: 210,
                name: "訂單列表",
                componentName: 'demoTwo'
            }
        ]
    },
    {
        id: 300, 
        name: "報表統計",
        children: [
            {
                id: 310,
                name: "每日登入"
            },
            {
                id: 320,
                name: "每日訂單"
            }
        ]
    },
    {
        id: 1000,
        name: "系統",
        children: [
            {
                id: 1010,
                name: "系統設定",
                componentName: 'demoTwo'
            },
            {
                id: 1020,
                name: "系統日誌",
                componentName: 'demoTwo'
            }
        ]
    }
]


function getMenu(permission){
    const map = new Map();
    menu.forEach(category => {
        map.set(category.id, {id: category.id, name:category.name, children: []})
        if(category.children !== undefined && category.children.length > 0){
            const subItems = category.children
            subItems.forEach(item => {
                map.set(item.id, {id: item.id, name: item.name, parentId: category.id})
            }) 
        }
    })

    const result = []

    permission.forEach(id => {
        if(!map.has(id)){
            return
        }

        const item = map.get(id)
        if(item.parentId === undefined){
            result.push(item)
        } else {
            map.get(item.parentId).children.push(item)
        }
        
    })
    
    return result;
}
    

export default getMenu