/// <reference path="../../src/Kiwi.ts" /> 

class basics extends Kiwi.State {

    constructor() {
        super('basics');
    }

    init() {

    }

    public tileMap: Kiwi.GameObjects.TileMap;

    preload() {
        this.addSpriteSheet('desert', 'assets/tiles/tmw_desert_spacing.png', 33, 33, false);
        this.addJSON('desertTiles', 'assets/tilemaps/desert.json', false);
    }

    create() {
        this.tileMap = new Kiwi.GameObjects.TileMap();
        this.tileMap.createFromCache('desertTiles', this.cache, 'desert', this.cache, this.game, Kiwi.GameObjects.TileMap.FORMAT_TILED_JSON);

        this.addChild(this.tileMap);
    
    }


}