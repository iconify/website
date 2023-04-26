let data = collection.getIcons();
let newCollection = new Collection();
newCollection.loadJSON(JSON.parse(JSON.stringify(data)));
