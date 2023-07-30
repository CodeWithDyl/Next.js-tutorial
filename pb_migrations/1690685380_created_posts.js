migrate((db) => {
  const collection = new Collection({
    "id": "5hb9dcni2wlor32",
    "created": "2023-07-30 02:49:40.662Z",
    "updated": "2023-07-30 02:49:40.662Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wbcmfjqd",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qa5hgit0",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5hb9dcni2wlor32");

  return dao.deleteCollection(collection);
})
