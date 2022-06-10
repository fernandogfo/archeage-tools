export default {
  session: {
    authenticate: '/session/authenticate',
    createAccount: '/session/register',
    me: '/session/me',
  },
  service: {
    me: '/service/me',
    newsCreate: '/service/news',
    newsPage: '/service/page.json',
    newsPost: '/service/newspost.json',
    newComment: '/service/comment',
    comment: '/service/comment/${commentId}',
    comments: '/service/comment/byPost/${postId}',
    item: '/service/items?ids=${itemIds}',
    itemCrops: '/service/items/crops',
    itemBuildings: '/service/items/buildings',
    recipeByProduct: '/service/recipe/product/${itemId}',
    recipeSearchByProduct: '/service/recipe/product',
    recipeByMaterial: '/service/recipe/material/${itemId}',
    recipeSearchByMaterial: '/service/recipe/material',
    recipeByVocation: '/service/recipe/vocation/${vocation}',
    recipe: '/service/recipe?ids=${recipeIds}',
    recipeCategories: '/service/recipe/categories',
    recipeByCategory: '/service/recipe/categories/${category}?cat1=${subCat1}&cat2=${subCat2}',
    vocations: '/service/vocations',
    searchByProduct: '/service/search/product',
    searchByMaterial: '/service/search/material',
    event: '/service/events/${eventId}',
    events: '/service/events.json',
    eventTypes: '/service/types.json',
    users: '/service/users?usernames=${names}',
    skills: '/service/skills?ids=${skillIds}',
    skillsets: '/service/skills/skillsets',
    classes: '/service/skills/classes',
    mounts: '/service/npcs/mounts',
    mountTypes: '/service/npcs/mounts/types',
    mountObtainTypes: '/service/npcs/mounts/obtainTypes',
    quest: '/service/quests?ids=${questIds}',
    questCategories: '/service/quests/categories',
    questDailies: '/service/quests/dailies',
    questRefData: '/service/quests/reference',
    title: '/service/titles?ids=${titleIds}',
    festivals: '/service/festivals',
    instances: '/service/instances',
    npc: '/service/npcs?ids=${npcIds}',
    doodad: '/service/doodads?ids=${doodadIds}',
    climates: '/service/zones/climates',
    continents: '/service/zones/continents',
    tradePacks: '/service/trade-packs',
    tradePackRef: '/service/trade-packs/reference',
    servers: '/service/servers.json',
    bluesaltBonds: '/service/blue-salt-bonds',
    cargoTimer: '/service/cargo-ship.json',
  },
};
