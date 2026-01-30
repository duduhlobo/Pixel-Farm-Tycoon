window.gameConfig = {
  "crops": [
    {
      "id": "carrot",
      "name": "Carrot",
      "growthTime": 10,
      "seedCost": 6,
      "harvestValue": 10,
      "sprites": {
        "seed": "carrot_seed",
        "growing": "carrot_growing",
        "ready": "carrot_ready"
      }
    },
    {
      "id": "wheat",
      "name": "Wheat",
      "growthTime": 15,
      "seedCost": 3,
      "harvestValue": 6,
      "sprites": {
        "seed": "wheat_seed",
        "growing": "wheat_growing",
        "ready": "wheat_ready"
      }
    },
    {
      "id": "tomato",
      "name": "Tomato",
      "growthTime": 20,
      "seedCost": 8,
      "harvestValue": 15,
      "sprites": {
        "seed": "tomato_seed",
        "growing": "tomato_growing",
        "ready": "tomato_ready"
      }
    },
    {
      "id": "potato",
      "name": "Potato",
      "growthTime": 12,
      "seedCost": 5,
      "harvestValue": 9,
      "sprites": {
        "seed": "potato_seed",
        "growing": "potato_growing",
        "ready": "potato_ready"
      }
    },
    {
      "id": "corn",
      "name": "Corn",
      "growthTime": 18,
      "seedCost": 7,
      "harvestValue": 12,
      "sprites": {
        "seed": "corn_seed",
        "growing": "corn_growing",
        "ready": "corn_ready"
      }
    },
    {
      "id": "pumpkin",
      "name": "Pumpkin",
      "growthTime": 25,
      "seedCost": 10,
      "harvestValue": 20,
      "sprites": {
        "seed": "pumpkin_seed",
        "growing": "pumpkin_growing",
        "ready": "pumpkin_ready"
      }
    },
    {
      "id": "lettuce",
      "name": "Lettuce",
      "growthTime": 8,
      "seedCost": 4,
      "harvestValue": 7,
      "sprites": {
        "seed": "seed_lettuce",
        "growing": "lettuce_stage1",
        "ready": "lettuce_ready"
      }
    },
    {
      "id": "eggplant",
      "name": "Eggplant",
      "growthTime": 22,
      "seedCost": 9,
      "harvestValue": 16,
      "sprites": {
        "seed": "seed_eggplant",
        "growing": "eggplant_stage1",
        "ready": "eggplant_ready"
      }
    },
    {
      "id": "sunflower",
      "name": "Sunflower",
      "growthTime": 30,
      "seedCost": 12,
      "harvestValue": 25,
      "sprites": {
        "seed": "seed_sunflower",
        "growing": "sunflower_stage1",
        "ready": "sunflower_ready"
      }
    },
    {
      "id": "radish",
      "name": "Radish",
      "growthTime": 6,
      "seedCost": 2,
      "harvestValue": 4,
      "sprites": {
        "seed": "seed_radish",
        "growing": "radish_stage1",
        "ready": "radish_ready"
      }
    }
  ],
  "economy": {
    "startingCoins": 100,
    "ringCosts": [
      0,
      150,
      300,
      500,
      1000,
      3000,
      5000,
      7000,
      10000
    ],
    "startingSeeds": {
      "corn": 1
    }
  },
  "visual": {
    "gridSize": 11,
    "tileSize": 56,
    "backgroundColor": "#994f0a"
  },
  "powerups": [
    {
      "id": "growth_boost",
      "name": "Growth Boost",
      "icon": "expand_icon",
      "duration": 30,
      "cooldown": 60,
      "effect": "growthMultiplier",
      "effectValue": 2
    },
    {
      "id": "money_double",
      "name": "Money Double",
      "icon": "coin_icon",
      "duration": 20,
      "cooldown": 90,
      "effect": "harvestMultiplier",
      "effectValue": 2
    },
    {
      "id": "auto_water",
      "name": "Auto Water",
      "icon": "shop_icon",
      "duration": 25,
      "cooldown": 75,
      "effect": "autoWater",
      "effectValue": 1
    }
  ]
}
  