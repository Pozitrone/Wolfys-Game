import { Spell } from './spell.interface';
import { Entity } from './entity.interface';
import { Player } from './player.interface';
import { Quest } from './quest.interface';

export interface World {
    seed: null | number | string,
    name: string,
    posX: number,
    posY: number,
    relativePosX: number,
    relativePosY: number,
    tileset: {
        tilesetX: number,
        tilesetY: number,
        biome: string,
        spells: Array<Spell>,
        entities: Array<Entity>
    },
    overrides: any,
    spawnPointX: number,
    spawnPointY: number,
    player: Player,
    currentQuest: Quest,
    statistics: {
        created: Date,
        entities: number,
        herbs: number,
        quests: number
    }
}