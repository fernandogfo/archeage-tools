import {
  DIFFICULTY,
  FACTION,
  REWARD,
  TYPE,
  ZONE,
} from 'constants/dailies';
import ITEM from 'constants/items';

export default [
  {
    name: 'Enemies of Sea Trade',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.TWO_CROWNS, ZONE.DIAMOND_SHORES, ZONE.FREEDICH_ISLAND],
    difficulty: DIFFICULTY.ELITE,
    rewards: [{ type: REWARD.COIN, count: 3197 }, { type: REWARD.GILDA, count: 1 }],
  },
  {
    name: 'Decorated Warrior',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.YNYSTERE, ZONE.MARIANOPLE, ZONE.CINDERSTONE_MOOR, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.ITEM, item: ITEM.LABOR_RECHARGE }],
  },
  {
    name: 'Battle of Mistmerrow',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.YNYSTERE, ZONE.MARIANOPLE, ZONE.CINDERSTONE_MOOR, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.ITEM, item: ITEM.LABOR_RECHARGE }],
  },
  {
    name: 'Crimson Rift: Crimson Omens',
    zones: [ZONE.YNYSTERE, ZONE.CINDERSTONE_MOOR, ZONE.SUNGOLD_FIELDS],
    difficulty: DIFFICULTY.ELITE,
    rewards: [{ type: REWARD.ITEM, item: ITEM.IMPROVED_INFUSION_KIT, count: 9 }, { type: REWARD.HONOR, count: 900 }],
    type: TYPE.RIFT,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 1,
    zones: [ZONE.SILENT_FOREST],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 2,
    zones: [ZONE.YNYSTERE],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 3,
    zones: [ZONE.PERINOOR_RUINS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 4,
    zones: [ZONE.HASLA],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 5,
    zones: [ZONE.HELLSWAMP],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 6,
    zones: [ZONE.SOLZREED_PENINSULA],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 7,
    zones: [ZONE.GWEONID_FOREST],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Lumber',
    idx: 8,
    zones: [ZONE.WHITE_ARDEN],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 1,
    zones: [ZONE.SANDDEEP],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 2,
    zones: [ZONE.KARKASSE_RIDGELANDS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 3,
    zones: [ZONE.AUBRE_CRADLE],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 4,
    zones: [ZONE.ANHIMAR],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 5,
    zones: [ZONE.ROOKBORNE_BASIN],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 6,
    zones: [ZONE.WINDSCOUR_SAVANNAH],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 7,
    zones: [ZONE.MAHADEVI],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Leather',
    idx: 8,
    zones: [ZONE.VILLANELLE],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 1,
    zones: [ZONE.SOLIS_HEADLANDS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 2,
    zones: [ZONE.TIGERSPINE_MOUNTAINS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 3,
    zones: [ZONE.SUNBITE_WILDS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 4,
    zones: [ZONE.ROKHALA_MOUNTAINS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 5,
    zones: [ZONE.DEWSTONE_PLAINS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 6,
    zones: [ZONE.AIRAIN_ROCK],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Iron Ingot',
    idx: 7,
    zones: [ZONE.CINDERSTONE_MOOR],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Fabric',
    idx: 1,
    zones: [ZONE.HALCYONA],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Fabric',
    idx: 2,
    zones: [ZONE.LILYUT_HILLS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Fabric',
    idx: 3,
    zones: [ZONE.MARIANOPLE],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Fabric',
    idx: 4,
    zones: [ZONE.TWO_CROWNS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Fabric',
    idx: 5,
    zones: [ZONE.ARCUM_IRIS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Supply Demand: Fabric',
    idx: 6,
    zones: [ZONE.FALCORTH_PLAINS],
    rewards: [{ type: REWARD.COIN, count: 25000 }, { type: REWARD.ITEM, item: ITEM.BLUE_SALT_BOND }],
    type: TYPE.SUPPLY_DEMAND,
  },
  {
    name: 'Ghosts from the Depths',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.YNYSTERE, ZONE.MARIANOPLE, ZONE.TWO_CROWNS, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.COIN, count: 3618 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.WORLD_BOSS,
    difficulty: DIFFICULTY.EPIC,
  },
  {
    name: 'Ghost Ships of Delphinad',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.YNYSTERE, ZONE.MARIANOPLE, ZONE.TWO_CROWNS, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.COIN, count: 5427 }, { type: REWARD.GILDA, count: 3 }, { type: REWARD.HONOR, count: 200 }],
    type: TYPE.WORLD_BOSS,
    difficulty: DIFFICULTY.LEGENDARY,
  },
  {
    name: 'A Grand Construction 1',
    zones: [ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.PRESTIGE, count: 3 }, { type: REWARD.GUILD_XP, count: 4 }],
  },
  {
    name: 'A Grand Construction 2',
    zones: [ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.PRESTIGE, count: 5 }, { type: REWARD.GUILD_XP, count: 8 }],
  },
  {
    name: 'A Grand Construction 3',
    zones: [ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.PRESTIGE, count: 6 }, { type: REWARD.GUILD_XP, count: 12 }],
  },
  {
    name: 'Construct the Nuian Alliance Bridge',
    faction: FACTION.NUIA,
    zones: [ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.PRESTIGE, count: 3 }, { type: REWARD.GUILD_XP, count: 3 },
      { type: REWARD.GILDA, count: 1 }],
  },
  {
    name: 'Construct the Haranyan Alliance Bridge',
    faction: FACTION.HARANYA,
    zones: [ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.PRESTIGE, count: 3 }, { type: REWARD.GUILD_XP, count: 3 },
      { type: REWARD.GILDA, count: 1 }],
  },
  {
    name: 'Reinforce the Ramparts',
    zones: [ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.PRESTIGE, count: 3 }, { type: REWARD.GUILD_XP, count: 3 },
      { type: REWARD.GILDA, count: 1 }],
  },
  {
    name: 'Ynystere Hunting Request',
    zones: [ZONE.YNYSTERE],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Cinderstone Hunting Request',
    zones: [ZONE.CINDERSTONE_MOOR],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Halcyona Hunting Request',
    zones: [ZONE.HALCYONA],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Hellswamp Hunting Request',
    zones: [ZONE.HELLSWAMP],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Sanddeep Hunting Request',
    zones: [ZONE.SANDDEEP],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Rookborne Hunting Request',
    zones: [ZONE.ROOKBORNE_BASIN],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Windscour Hunting Request',
    zones: [ZONE.WINDSCOUR_SAVANNAH],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Perinoor Hunting Request',
    zones: [ZONE.PERINOOR_RUINS],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Hasla Hunting Request',
    zones: [ZONE.HASLA],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Karkasse Hunting Request',
    zones: [ZONE.KARKASSE_RIDGELANDS],
    rewards: [{ type: REWARD.PRESTIGE, count: 1 }, { type: REWARD.GILDA, count: 1 }],
    type: TYPE.HUNTING_REQUEST,
  },
  {
    name: 'Lusca Awakening',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.MARIANOPLE, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.COIN, count: 3197 }, { type: REWARD.GILDA, count: 1 },
      { type: REWARD.ITEM, item: ITEM.SHATIGONS_SAND, count: 10 }, { type: REWARD.HONOR, count: 900 },
      { type: REWARD.LEADERSHIP, count: 10 }],
    difficulty: DIFFICULTY.ELITE,
    type: TYPE.RIFT,
  },
  {
    name: 'Becoming a Seaknight',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.MARIANOPLE, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.COIN, count: 3618 }, { type: REWARD.HONOR, count: 400 },
      { type: REWARD.LEADERSHIP, count: 20 }],
  },
  {
    name: 'Stopping Doomsday',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.MARIANOPLE, ZONE.DIAMOND_SHORES],
    rewards: [{ type: REWARD.COIN, count: 3618 }, { type: REWARD.ITEM, item: ITEM.SHATIGONS_SAND, count: 5 },
      { type: REWARD.HONOR, count: 200 }],
  },
  {
    name: 'Grimghast Rift Bulletin Board',
    zones: [ZONE.YNYSTERE, ZONE.CINDERSTONE_MOOR],
    rewards: [{ type: REWARD.GILDA, count: 1 }],
    type: TYPE.RIFT,
  },
  {
    name: 'Grimghast Rift: Helping the War Effort',
    zones: [ZONE.YNYSTERE, ZONE.CINDERSTONE_MOOR],
    rewards: [{ type: REWARD.GILDA, count: 1 }],
    type: TYPE.RIFT,
  },
  {
    name: 'Grimghast Rift: Halting the Crimson Tide',
    zones: [ZONE.YNYSTERE, ZONE.CINDERSTONE_MOOR],
    rewards: [{ type: REWARD.HONOR, count: 900 }, { type: REWARD.LEADERSHIP, count: 10 }],
    difficulty: DIFFICULTY.ELITE,
    type: TYPE.RIFT,
  },
  {
    name: 'Golden Plains Battle',
    zones: [ZONE.HALCYONA],
    rewards: [{ type: REWARD.HONOR, count: 2000 }, { type: REWARD.ITEM, item: ITEM.IMPROVED_INFUSION_KIT, count: 20 }],
  },
  {
    name: 'A Rare Perfume',
    zones: [ZONE.MARIANOPLE, ZONE.TWO_CROWNS, ZONE.CINDERSTONE_MOOR, ZONE.SOLIS_HEADLANDS, ZONE.VILLANELLE,
      ZONE.YNYSTERE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 3000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Signs of the Salphira Cult',
    zones: [ZONE.SOLIS_HEADLANDS, ZONE.VILLANELLE, ZONE.YNYSTERE],
    faction: FACTION.HARANYA,
    rewards: [{ type: REWARD.GILDA, count: 1 }],
    type: TYPE.BLUE_SALT,
  },
  // raising mount quests here
  {
    name: 'Blue Salt Request: Aromatics',
    zones: [ZONE.SPICE_SEED_BUNDLE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.ITEM, item: ITEM.RAINBOW_SPRINKLER, count: 3 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Blue Salt Request: Bait Worms',
    zones: [ZONE.FARMHOUSE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.VOCATION, count: 500 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Blue Salt Request: Earthmana',
    zones: [ZONE.FARMHOUSE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.VOCATION, count: 500 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Blue Salt Request: Fresh Fertilizer',
    zones: [ZONE.FARMHOUSE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.VOCATION, count: 500 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Blue Salt Request: Ore',
    zones: [ZONE.IRON_VEIN],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.ITEM, item: ITEM.SHARPWIND_MINING_DRILL, count: 1 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Blue Salt Request: Preserves',
    zones: [ZONE.PRODUCE_SEED_BUNDLE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.ITEM, item: ITEM.RAINBOW_SPRINKLER, count: 3 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Blue Salt Request: Textiles',
    zones: [ZONE.GOOSE_CAGE],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.ITEM, item: ITEM.STAR_WINGS, count: 10 },
      { type: REWARD.COIN, count: 50000 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Whalesong Siege',
    zones: [ZONE.WHALESONG_HARBOR],
    rewards: [{ type: REWARD.HONOR, count: 1800 }, { type: REWARD.LEADERSHIP, count: 10 },
      { type: REWARD.ITEM, item: ITEM.CURSED_ARMOR_SCRAP, count: 13 }, { type: REWARD.COIN, count: 18640 }],
    difficulty: DIFFICULTY.MYTHIC,
    type: TYPE.RIFT,
  },
  {
    name: 'Defend the Seal',
    zones: [ZONE.AEGIS_ISLAND],
    rewards: [{ type: REWARD.HONOR, count: 1800 }, { type: REWARD.LEADERSHIP, count: 10 },
      { type: REWARD.ITEM, item: ITEM.ACID_GOBBET, count: 12 }, { type: REWARD.COIN, count: 22368 }],
    difficulty: DIFFICULTY.MYTHIC,
    type: TYPE.RIFT,
  },
  {
    name: 'Oblivion Rift',
    zones: [ZONE.LILYUT_HILLS],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 254 }],
    faction: FACTION.NUIA,
    type: TYPE.RIFT,
  },
  {
    name: 'Clockwork Rift',
    zones: [ZONE.TIGERSPINE_MOUNTAINS],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 254 }],
    faction: FACTION.HARANYA,
    type: TYPE.RIFT,
  },
  {
    name: 'Bugira\'s Gift',
    zones: [ZONE.FARMERS_WORKSTATION],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 50000 },
      { type: REWARD.VOCATION, count: 300 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Bugira\'s Gift: A Special Meal',
    zones: [ZONE.FARMERS_WORKSTATION],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 50000 },
      { type: REWARD.VOCATION, count: 300 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Bugira\'s Gift: A Premium Meal',
    zones: [ZONE.FARMERS_WORKSTATION],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 50000 },
      { type: REWARD.VOCATION, count: 300 }],
    type: TYPE.BLUE_SALT,
  },
  {
    name: 'Bugira\'s Gift: Rare Hearty Meal',
    zones: [ZONE.FARMERS_WORKSTATION],
    rewards: [{ type: REWARD.GILDA, count: 1 }, { type: REWARD.COIN, count: 50000 },
      { type: REWARD.VOCATION, count: 300 }],
    type: TYPE.BLUE_SALT,
  },
];
