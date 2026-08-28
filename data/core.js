window.V6_RULES = {
  "schemaVersion": 1,
  "config": {
    "defaultCreature": "vampire_neonate",
    "focusThresholds": [
      1,
      3,
      5
    ],
    "skillBaseChargenCap": 3,
    "youngCharacter": {
      "tier": "neonate",
      "lifepaths": 1,
      "skillDots": 8,
      "resourceDots": 5
    },
    "disciplineCapsByTier": {
      "neonate": {
        "clan": 5,
        "nonClan": 3
      },
      "ancilla": {
        "clan": 7,
        "nonClan": 5
      },
      "elder": {
        "clan": 8,
        "nonClan": 7
      }
    },
    "stepIds": [
      "creature",
      "clan",
      "sire",
      "lifepaths",
      "attributes",
      "skills",
      "focuses",
      "powers",
      "humanity",
      "resources",
      "finish"
    ]
  },
  "attributes": [
    {
      "id": "strength",
      "category": "physical"
    },
    {
      "id": "dexterity",
      "category": "physical"
    },
    {
      "id": "stamina",
      "category": "physical"
    },
    {
      "id": "charisma",
      "category": "social"
    },
    {
      "id": "manipulation",
      "category": "social"
    },
    {
      "id": "composure",
      "category": "social"
    },
    {
      "id": "intelligence",
      "category": "mental"
    },
    {
      "id": "wits",
      "category": "mental"
    },
    {
      "id": "resolve",
      "category": "mental"
    }
  ],
  "skills": [
    {
      "id": "athletics",
      "focuses": [
        {
          "id": "climbing"
        },
        {
          "id": "lifting"
        },
        {
          "id": "running"
        },
        {
          "id": "throwing"
        }
      ]
    },
    {
      "id": "awareness",
      "focuses": [
        {
          "id": "empathy"
        },
        {
          "id": "insight"
        },
        {
          "id": "instinct"
        },
        {
          "id": "supernatural"
        }
      ]
    },
    {
      "id": "craft",
      "focuses": [
        {
          "id": "carpentry"
        },
        {
          "id": "computers"
        },
        {
          "id": "engines"
        },
        {
          "id": "forgery"
        },
        {
          "id": "improvised"
        }
      ]
    },
    {
      "id": "expression",
      "focuses": [
        {
          "id": "acting"
        },
        {
          "id": "drawing"
        },
        {
          "id": "music"
        },
        {
          "id": "sculpting"
        },
        {
          "id": "writing"
        }
      ]
    },
    {
      "id": "fighting",
      "focuses": [
        {
          "id": "fighting_dirty"
        },
        {
          "id": "hand_to_hand"
        },
        {
          "id": "improvised_weaponry"
        },
        {
          "id": "medieval_weaponry"
        }
      ]
    },
    {
      "id": "investigation",
      "focuses": [
        {
          "id": "crime_scene"
        },
        {
          "id": "digital_media"
        },
        {
          "id": "gossip"
        },
        {
          "id": "physical_media"
        },
        {
          "id": "streetwise"
        }
      ]
    },
    {
      "id": "knowledge",
      "focuses": [
        {
          "id": "chemistry"
        },
        {
          "id": "history"
        },
        {
          "id": "law"
        },
        {
          "id": "linguistics"
        },
        {
          "id": "occult"
        },
        {
          "id": "politics"
        }
      ]
    },
    {
      "id": "medicine",
      "focuses": [
        {
          "id": "animals"
        },
        {
          "id": "first_aid"
        },
        {
          "id": "psychology"
        },
        {
          "id": "surgery"
        },
        {
          "id": "toxicology"
        }
      ]
    },
    {
      "id": "persuasion",
      "focuses": [
        {
          "id": "fraternize"
        },
        {
          "id": "intimidation"
        },
        {
          "id": "negotiation"
        },
        {
          "id": "seduction"
        }
      ]
    },
    {
      "id": "sabotage",
      "focuses": [
        {
          "id": "burglary"
        },
        {
          "id": "explosives"
        },
        {
          "id": "hacking"
        },
        {
          "id": "security_systems"
        }
      ]
    },
    {
      "id": "shooting",
      "focuses": [
        {
          "id": "heavy_firearms"
        },
        {
          "id": "improvised_weaponry"
        },
        {
          "id": "light_firearms"
        },
        {
          "id": "medieval_weaponry"
        }
      ]
    },
    {
      "id": "subterfuge",
      "focuses": [
        {
          "id": "deceit"
        },
        {
          "id": "disguise"
        },
        {
          "id": "skulking"
        },
        {
          "id": "sleight_of_hand"
        },
        {
          "id": "stealth"
        }
      ]
    },
    {
      "id": "survival",
      "focuses": [
        {
          "id": "animal_handling"
        },
        {
          "id": "foraging"
        },
        {
          "id": "hunting"
        },
        {
          "id": "shelter"
        },
        {
          "id": "tracking"
        }
      ]
    }
  ],
  "sires": [
    {
      "id": "adoptive_sire",
      "relation": "clan",
      "allowedDisciplines": []
    },
    {
      "id": "brood_child",
      "relation": "clan",
      "allowedDisciplines": []
    },
    {
      "id": "caring_sire",
      "allowedDisciplines": [
        "fortitude",
        "potence",
        "presence"
      ]
    },
    {
      "id": "cruel_sire",
      "allowedDisciplines": [
        "dominate",
        "fortitude",
        "obfuscate"
      ]
    },
    {
      "id": "manipulative_sire",
      "allowedDisciplines": [
        "dominate",
        "potence",
        "presence"
      ]
    },
    {
      "id": "secretive_sire",
      "allowedDisciplines": [
        "auspex",
        "celerity",
        "obfuscate"
      ]
    },
    {
      "id": "unknown_sire",
      "allowedDisciplines": [
        "celerity",
        "fortitude",
        "potence"
      ]
    },
    {
      "id": "vigilant_sire",
      "allowedDisciplines": [
        "auspex",
        "dominate",
        "fortitude"
      ]
    }
  ],
  "creatures": [
    {
      "id": "ghoul",
      "lifepaths": 2,
      "attributeBudgets": [
        6,
        4,
        3
      ],
      "disciplineDots": 1,
      "sireBonus": 1,
      "disciplinePowers": 2,
      "merits": 2,
      "clanTraits": 0,
      "freeSkillDots": 8,
      "freeResourceDots": 1,
      "maxDots": 5,
      "maxDisciplineDots": 2,
      "generationModifier": 0,
      "kind": "ghoul",
      "tier": null
    },
    {
      "id": "duskborn",
      "lifepaths": 2,
      "attributeBudgets": [
        6,
        4,
        3
      ],
      "disciplineDots": 2,
      "sireBonus": 1,
      "disciplinePowers": 3,
      "merits": 1,
      "clanTraits": 1,
      "freeSkillDots": 8,
      "freeResourceDots": 2,
      "maxDots": 5,
      "maxDisciplineDots": 3,
      "generationModifier": 1,
      "kind": "duskborn",
      "tier": null
    },
    {
      "id": "vampire_neonate",
      "lifepaths": 2,
      "attributeBudgets": [
        7,
        5,
        3
      ],
      "disciplineDots": 3,
      "sireBonus": 1,
      "disciplinePowers": 4,
      "merits": 1,
      "clanTraits": 2,
      "freeSkillDots": 8,
      "freeResourceDots": 3,
      "maxDots": 5,
      "maxDisciplineDots": 5,
      "generationModifier": 1,
      "kind": "vampire",
      "tier": "neonate"
    },
    {
      "id": "vampire_ancilla",
      "lifepaths": 3,
      "attributeBudgets": [
        8,
        6,
        4
      ],
      "disciplineDots": 5,
      "sireBonus": 1,
      "disciplinePowers": 6,
      "merits": 2,
      "clanTraits": 3,
      "freeSkillDots": 8,
      "freeResourceDots": 5,
      "maxDots": 6,
      "maxDisciplineDots": 6,
      "generationModifier": 2,
      "kind": "vampire",
      "tier": "ancilla"
    },
    {
      "id": "vampire_elder",
      "lifepaths": 4,
      "attributeBudgets": [
        9,
        7,
        5
      ],
      "disciplineDots": 7,
      "sireBonus": 1,
      "disciplinePowers": 8,
      "merits": 3,
      "clanTraits": 4,
      "freeSkillDots": 8,
      "freeResourceDots": 7,
      "maxDots": 8,
      "maxDisciplineDots": 8,
      "generationModifier": 3,
      "kind": "vampire",
      "tier": "elder"
    }
  ],
  "lifepaths": [
    {
      "id": "artist",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "craft",
          "skill": "craft",
          "recommendationIds": []
        },
        {
          "id": "expression",
          "skill": "expression",
          "recommendationIds": []
        },
        {
          "id": "knowledge",
          "skill": "knowledge",
          "recommendationIds": [
            "lp_art"
          ]
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "wealth:default:0",
          "type": "wealth",
          "labelKey": ""
        },
        {
          "id": "contact:art_dealer:1",
          "type": "contact",
          "labelKey": "art_dealer"
        },
        {
          "id": "ally:patron:2",
          "type": "ally",
          "labelKey": "patron"
        }
      ]
    },
    {
      "id": "corporate_executive",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "investigation",
          "skill": "investigation",
          "recommendationIds": [
            "gossip"
          ]
        },
        {
          "id": "knowledge",
          "skill": "knowledge",
          "recommendationIds": [
            "lp_business"
          ]
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": []
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": [
            "deceit"
          ]
        }
      ],
      "resources": [
        {
          "id": "wealth:default:0",
          "type": "wealth",
          "labelKey": ""
        },
        {
          "id": "property:default:1",
          "type": "property",
          "labelKey": ""
        },
        {
          "id": "haven:default:2",
          "type": "haven",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "criminal",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "athletics",
          "skill": "athletics",
          "recommendationIds": [
            "running"
          ]
        },
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "fighting",
          "skill": "fighting",
          "recommendationIds": [
            "fighting_dirty"
          ]
        },
        {
          "id": "sabotage",
          "skill": "sabotage",
          "recommendationIds": [
            "burglary"
          ]
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "contact:fencer:0",
          "type": "contact",
          "labelKey": "fencer"
        },
        {
          "id": "wealth:default:1",
          "type": "wealth",
          "labelKey": ""
        },
        {
          "id": "mask:default:2",
          "type": "mask",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "holy_person",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "expression",
          "skill": "expression",
          "recommendationIds": [
            "lp_oratory"
          ]
        },
        {
          "id": "knowledge",
          "skill": "knowledge",
          "recommendationIds": [
            "lp_religion"
          ]
        },
        {
          "id": "medicine",
          "skill": "medicine",
          "recommendationIds": []
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "contact:local_church:0",
          "type": "contact",
          "labelKey": "local_church"
        },
        {
          "id": "status:mortal_church_member:1",
          "type": "status",
          "labelKey": "mortal_church_member"
        },
        {
          "id": "wealth:default:2",
          "type": "wealth",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "hunter",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "craft",
          "skill": "craft",
          "recommendationIds": [
            "lp_traps"
          ]
        },
        {
          "id": "fighting",
          "skill": "fighting",
          "recommendationIds": []
        },
        {
          "id": "shooting",
          "skill": "shooting",
          "recommendationIds": []
        },
        {
          "id": "survival",
          "skill": "survival",
          "recommendationIds": [
            "lp_wilderness_hunting"
          ]
        }
      ],
      "resources": [
        {
          "id": "haven:default:0",
          "type": "haven",
          "labelKey": ""
        },
        {
          "id": "ally:fellow_hunter:1",
          "type": "ally",
          "labelKey": "fellow_hunter"
        },
        {
          "id": "repository:armory:2",
          "type": "repository",
          "labelKey": "armory"
        }
      ]
    },
    {
      "id": "military",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "athletics",
          "skill": "athletics",
          "recommendationIds": []
        },
        {
          "id": "fighting",
          "skill": "fighting",
          "recommendationIds": []
        },
        {
          "id": "medicine",
          "skill": "medicine",
          "recommendationIds": [
            "first_aid"
          ]
        },
        {
          "id": "shooting",
          "skill": "shooting",
          "recommendationIds": [
            "lp_heavy_weapons"
          ]
        },
        {
          "id": "survival",
          "skill": "survival",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "repository:weapons:0",
          "type": "repository",
          "labelKey": "weapons"
        },
        {
          "id": "contact:military:1",
          "type": "contact",
          "labelKey": "military"
        },
        {
          "id": "ally:former_comrades:2",
          "type": "ally",
          "labelKey": "former_comrades"
        }
      ]
    },
    {
      "id": "politician",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": [
            "insight"
          ]
        },
        {
          "id": "investigation",
          "skill": "investigation",
          "recommendationIds": []
        },
        {
          "id": "knowledge",
          "skill": "knowledge",
          "recommendationIds": [
            "politics"
          ]
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": [
            "negotiation"
          ]
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": [
            "deceit"
          ]
        }
      ],
      "resources": [
        {
          "id": "wealth:default:0",
          "type": "wealth",
          "labelKey": ""
        },
        {
          "id": "status:political:1",
          "type": "status",
          "labelKey": "political"
        },
        {
          "id": "haven:default:2",
          "type": "haven",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "technician",
      "type": "mortal",
      "tier": "mortal",
      "skills": [
        {
          "id": "athletics",
          "skill": "athletics",
          "recommendationIds": []
        },
        {
          "id": "craft",
          "skill": "craft",
          "recommendationIds": [
            "improvised"
          ]
        },
        {
          "id": "fighting",
          "skill": "fighting",
          "recommendationIds": []
        },
        {
          "id": "sabotage",
          "skill": "sabotage",
          "recommendationIds": [
            "security_systems"
          ]
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "vehicle:default:0",
          "type": "vehicle",
          "labelKey": ""
        },
        {
          "id": "repository:tools:1",
          "type": "repository",
          "labelKey": "tools"
        },
        {
          "id": "haven:default:2",
          "type": "haven",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "blood_deliverer",
      "type": "vampire",
      "tier": "neonate",
      "skills": [
        {
          "id": "athletics",
          "skill": "athletics",
          "recommendationIds": []
        },
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": []
        },
        {
          "id": "sabotage",
          "skill": "sabotage",
          "recommendationIds": []
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": [
            "skulking"
          ]
        }
      ],
      "resources": [
        {
          "id": "vehicle:default:0",
          "type": "vehicle",
          "labelKey": ""
        },
        {
          "id": "wealth:default:1",
          "type": "wealth",
          "labelKey": ""
        },
        {
          "id": "contact:default:2",
          "type": "contact",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "clean_up_crew",
      "type": "vampire",
      "tier": "neonate",
      "skills": [
        {
          "id": "athletics",
          "skill": "athletics",
          "recommendationIds": []
        },
        {
          "id": "fighting",
          "skill": "fighting",
          "recommendationIds": []
        },
        {
          "id": "investigation",
          "skill": "investigation",
          "recommendationIds": [
            "crime_scene"
          ]
        },
        {
          "id": "sabotage",
          "skill": "sabotage",
          "recommendationIds": []
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "contact:vampiric_authority:0",
          "type": "contact",
          "labelKey": "vampiric_authority"
        },
        {
          "id": "vehicle:default:1",
          "type": "vehicle",
          "labelKey": ""
        },
        {
          "id": "repository:cleaning_materials:2",
          "type": "repository",
          "labelKey": "cleaning_materials"
        }
      ]
    },
    {
      "id": "hound",
      "type": "vampire",
      "tier": "neonate",
      "skills": [
        {
          "id": "fighting",
          "skill": "fighting",
          "recommendationIds": []
        },
        {
          "id": "investigation",
          "skill": "investigation",
          "recommendationIds": [
            "streetwise"
          ]
        },
        {
          "id": "shooting",
          "skill": "shooting",
          "recommendationIds": []
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": []
        },
        {
          "id": "survival",
          "skill": "survival",
          "recommendationIds": [
            "lp_urban_tracking"
          ]
        }
      ],
      "resources": [
        {
          "id": "status:sect:0",
          "type": "status",
          "labelKey": "sect"
        },
        {
          "id": "repository:armory:1",
          "type": "repository",
          "labelKey": "armory"
        },
        {
          "id": "contact:vampiric_authority:2",
          "type": "contact",
          "labelKey": "vampiric_authority"
        }
      ]
    },
    {
      "id": "diplomat",
      "type": "vampire",
      "tier": "ancilla",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": [
            "empathy"
          ]
        },
        {
          "id": "expression",
          "skill": "expression",
          "recommendationIds": [
            "lp_oratory"
          ]
        },
        {
          "id": "investigation",
          "skill": "investigation",
          "recommendationIds": []
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": [
            "lp_fraternizing",
            "negotiation"
          ]
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": []
        }
      ],
      "resources": [
        {
          "id": "haven:default:0",
          "type": "haven",
          "labelKey": ""
        },
        {
          "id": "status:sect:1",
          "type": "status",
          "labelKey": "sect"
        },
        {
          "id": "mask:default:2",
          "type": "mask",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "harpy",
      "type": "vampire",
      "tier": "ancilla",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": []
        },
        {
          "id": "expression",
          "skill": "expression",
          "recommendationIds": []
        },
        {
          "id": "knowledge",
          "skill": "knowledge",
          "recommendationIds": [
            "lp_vampire_society"
          ]
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": []
        },
        {
          "id": "subterfuge",
          "skill": "subterfuge",
          "recommendationIds": [
            "deceit"
          ]
        }
      ],
      "resources": [
        {
          "id": "haven:default:0",
          "type": "haven",
          "labelKey": ""
        },
        {
          "id": "status:sect:1",
          "type": "status",
          "labelKey": "sect"
        },
        {
          "id": "ally:default:2",
          "type": "ally",
          "labelKey": ""
        }
      ]
    },
    {
      "id": "sheriff",
      "type": "vampire",
      "tier": "ancilla",
      "skills": [
        {
          "id": "awareness",
          "skill": "awareness",
          "recommendationIds": [
            "insight"
          ]
        },
        {
          "id": "investigation",
          "skill": "investigation",
          "recommendationIds": []
        },
        {
          "id": "knowledge",
          "skill": "knowledge",
          "recommendationIds": [
            "lp_vampire_politics"
          ]
        },
        {
          "id": "persuasion",
          "skill": "persuasion",
          "recommendationIds": [
            "intimidation"
          ]
        },
        {
          "id": "survival",
          "skill": "survival",
          "recommendationIds": [
            "lp_urban_tracking"
          ]
        }
      ],
      "resources": [
        {
          "id": "ally:hound_sweeper:0",
          "type": "ally",
          "labelKey": "hound_sweeper"
        },
        {
          "id": "repository:armory:1",
          "type": "repository",
          "labelKey": "armory"
        },
        {
          "id": "status:sect:2",
          "type": "status",
          "labelKey": "sect"
        }
      ]
    }
  ],
  "disciplines": [
    {
      "id": "animalism",
      "powers": [
        {
          "id": "aspect_of_the_beast",
          "rank": 1
        },
        {
          "id": "bestial_instinct",
          "rank": 1
        },
        {
          "id": "shared_soul",
          "rank": 1,
          "detailsMissing": true
        },
        {
          "id": "sweet_whispers",
          "rank": 1
        },
        {
          "id": "animal_messenger",
          "rank": 2
        },
        {
          "id": "call_of_the_wild",
          "rank": 2
        },
        {
          "id": "feral_claws",
          "rank": 2
        },
        {
          "id": "beast_shape",
          "rank": 3
        },
        {
          "id": "plague_of_beasts",
          "rank": 3
        }
      ]
    },
    {
      "id": "auspex",
      "powers": [
        {
          "id": "analyze",
          "rank": 1
        },
        {
          "id": "heightened_senses",
          "rank": 1
        },
        {
          "id": "sense_the_unseen",
          "rank": 1
        },
        {
          "id": "premonition",
          "rank": 2
        },
        {
          "id": "psychometry",
          "rank": 2
        },
        {
          "id": "telepathy",
          "rank": 2
        },
        {
          "id": "clairvoyance",
          "rank": 3
        },
        {
          "id": "share_senses",
          "rank": 3
        }
      ]
    },
    {
      "id": "blood_sorcery",
      "powers": []
    },
    {
      "id": "celerity",
      "powers": [
        {
          "id": "cat_s_grace",
          "rank": 1
        },
        {
          "id": "rapid_reflexes",
          "rank": 1
        },
        {
          "id": "vibrating_hands",
          "rank": 1
        },
        {
          "id": "blink",
          "rank": 2
        },
        {
          "id": "rush_job",
          "rank": 2
        },
        {
          "id": "willful_grace",
          "rank": 2
        },
        {
          "id": "blurred_passage",
          "rank": 3
        },
        {
          "id": "fighter_s_alactrity",
          "rank": 3
        }
      ]
    },
    {
      "id": "corruption",
      "powers": [
        {
          "id": "contradict",
          "rank": 1
        },
        {
          "id": "nightmare_glimpses",
          "rank": 1
        },
        {
          "id": "self_doubt",
          "rank": 1
        },
        {
          "id": "dark_secrets",
          "rank": 2
        },
        {
          "id": "poison_heart",
          "rank": 2
        },
        {
          "id": "tainted",
          "rank": 2
        },
        {
          "id": "dissociate",
          "rank": 3
        },
        {
          "id": "fool_the_heart_s_eye",
          "rank": 3
        }
      ]
    },
    {
      "id": "dominate",
      "powers": [
        {
          "id": "apathy",
          "rank": 1
        },
        {
          "id": "cloud_memory",
          "rank": 1
        },
        {
          "id": "command",
          "rank": 1
        },
        {
          "id": "stifle_will",
          "rank": 2
        },
        {
          "id": "submerged_directive",
          "rank": 2
        },
        {
          "id": "suppress_mind",
          "rank": 2
        },
        {
          "id": "deliver_command",
          "rank": 3
        },
        {
          "id": "sap_will",
          "rank": 3
        }
      ]
    },
    {
      "id": "fortitude",
      "powers": [
        {
          "id": "endure",
          "rank": 1
        },
        {
          "id": "fortify",
          "rank": 1
        },
        {
          "id": "unswayable_mind",
          "rank": 1
        },
        {
          "id": "restore_limbs",
          "rank": 2
        },
        {
          "id": "shared_resilience",
          "rank": 2
        },
        {
          "id": "unmoving",
          "rank": 2
        },
        {
          "id": "purification",
          "rank": 3
        },
        {
          "id": "retributive_hide",
          "rank": 3
        }
      ]
    },
    {
      "id": "necromancy",
      "powers": []
    },
    {
      "id": "obfuscate",
      "powers": [
        {
          "id": "cloak_of_shadows",
          "rank": 1
        },
        {
          "id": "conceal",
          "rank": 1
        },
        {
          "id": "silence_of_death",
          "rank": 1
        },
        {
          "id": "double_talk",
          "rank": 2
        },
        {
          "id": "fool_s_gold",
          "rank": 2
        },
        {
          "id": "mind_tricks",
          "rank": 2
        },
        {
          "id": "horrid_reality",
          "rank": 3
        },
        {
          "id": "mask_of_a_thousand_faces",
          "rank": 3
        }
      ]
    },
    {
      "id": "oblivion",
      "powers": [
        {
          "id": "cloud_of_darkness",
          "rank": 1
        },
        {
          "id": "shadow_play",
          "rank": 1
        },
        {
          "id": "shadow_tools",
          "rank": 1
        },
        {
          "id": "draining_darkness",
          "rank": 2
        },
        {
          "id": "grasping_shadows",
          "rank": 2
        },
        {
          "id": "shadow_mask",
          "rank": 2
        },
        {
          "id": "night_terrors",
          "rank": 3
        },
        {
          "id": "shadow_step",
          "rank": 3
        }
      ]
    },
    {
      "id": "potence",
      "powers": [
        {
          "id": "bull_rush",
          "rank": 1
        },
        {
          "id": "imprint",
          "rank": 1
        },
        {
          "id": "soaring_leap",
          "rank": 1
        },
        {
          "id": "bone_breaker",
          "rank": 2
        },
        {
          "id": "earthshock",
          "rank": 2
        },
        {
          "id": "powerful_strike",
          "rank": 2
        },
        {
          "id": "strike_true",
          "rank": 3
        },
        {
          "id": "war_cry",
          "rank": 3
        }
      ]
    },
    {
      "id": "presence",
      "powers": [
        {
          "id": "awe",
          "rank": 1
        },
        {
          "id": "dread_gaze",
          "rank": 1
        },
        {
          "id": "impassion",
          "rank": 1
        },
        {
          "id": "captivating_gaze",
          "rank": 2
        },
        {
          "id": "compose_yourself",
          "rank": 2
        },
        {
          "id": "redirect_desire",
          "rank": 2
        },
        {
          "id": "friends_to_enemies",
          "rank": 3
        },
        {
          "id": "transcendent_aura",
          "rank": 3
        }
      ]
    },
    {
      "id": "tellurgy",
      "powers": []
    },
    {
      "id": "vicissitude",
      "powers": []
    }
  ],
  "merits": [
    {
      "id": "bond_famulus",
      "requirements": {
        "all": [
          {
            "id": "animalism",
            "min": 1
          }
        ],
        "creatureKinds": [
          "duskborn",
          "vampire"
        ]
      }
    },
    {
      "id": "bond_resistant",
      "requirements": {}
    },
    {
      "id": "chain_the_psyche",
      "requirements": {
        "all": [
          {
            "id": "dominate",
            "min": 2
          }
        ]
      }
    },
    {
      "id": "code_of_honor",
      "requirements": {}
    },
    {
      "id": "enchanting_presence",
      "requirements": {
        "all": [
          {
            "id": "presence",
            "min": 2
          }
        ],
        "creatureKinds": [
          "duskborn",
          "vampire"
        ]
      }
    },
    {
      "id": "fleetness",
      "requirements": {
        "all": [
          {
            "id": "celerity",
            "min": 1
          }
        ]
      }
    },
    {
      "id": "flexible_limbs",
      "requirements": {}
    },
    {
      "id": "forgettable_face",
      "requirements": {}
    },
    {
      "id": "friends_in_high_places",
      "requirements": {}
    },
    {
      "id": "hunger_strength",
      "requirements": {
        "creatureKinds": [
          "duskborn",
          "vampire"
        ]
      }
    },
    {
      "id": "intimidating_presence",
      "requirements": {}
    },
    {
      "id": "might",
      "requirements": {
        "all": [
          {
            "id": "potence",
            "min": 1
          }
        ]
      }
    },
    {
      "id": "prestigious_sire",
      "requirements": {}
    },
    {
      "id": "subdued_hunger",
      "requirements": {
        "creatureKinds": [
          "duskborn",
          "vampire"
        ]
      }
    },
    {
      "id": "tough_skin",
      "requirements": {
        "attributes": [
          {
            "id": "stamina",
            "min": 5
          }
        ]
      }
    },
    {
      "id": "wrecker",
      "requirements": {
        "all": [
          {
            "id": "potence",
            "min": 2
          }
        ]
      }
    }
  ],
  "natures": [
    {
      "id": "autocrat"
    },
    {
      "id": "bon_vivant"
    },
    {
      "id": "bravo"
    },
    {
      "id": "gallant"
    },
    {
      "id": "perfectionist"
    },
    {
      "id": "romantic"
    },
    {
      "id": "scientist"
    },
    {
      "id": "survivor"
    }
  ],
  "clans": [
    {
      "id": "banu_haqim",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "blood_sorcery",
          "celerity",
          "obfuscate"
        ]
      },
      "traits": []
    },
    {
      "id": "brujah",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "celerity",
          "potence",
          "presence"
        ]
      },
      "traits": [
        {
          "id": "prowess",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "potence",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "spark_of_rage",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "potence",
                "min": 1
              },
              {
                "id": "presence",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "wrestler",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "potence",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "combat_reflexes",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "celerity",
                "min": 3
              }
            ]
          }
        },
        {
          "id": "living_weapon",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "potence",
                "min": 3
              }
            ]
          }
        }
      ]
    },
    {
      "id": "gangrel",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "animalism",
          "celerity",
          "fortitude"
        ]
      },
      "traits": [
        {
          "id": "enduring_beasts",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "animalism",
                "min": 1
              },
              {
                "id": "fortitude",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "feral_whispers",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "animalism",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "safety_of_the_earth",
          "tier": "neonate",
          "requirements": {}
        },
        {
          "id": "quick_and_tough",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "celerity",
                "min": 2
              },
              {
                "id": "fortitude",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "surrounded_prey",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "animalism",
                "min": 3
              }
            ]
          }
        }
      ]
    },
    {
      "id": "giovanni",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "auspex",
          "potence",
          "necromancy"
        ]
      },
      "traits": []
    },
    {
      "id": "lasombra",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "dominate",
          "potence"
        ],
        "choice": [
          "corruption",
          "oblivion"
        ]
      },
      "traits": [
        {
          "id": "eyes_of_the_night",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "oblivion",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "shadow_cloak",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "oblivion",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "tenebrous_reach",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "oblivion",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "night_blood",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "oblivion",
                "min": 3
              }
            ]
          }
        },
        {
          "id": "oppressing_dominance",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "dominate",
                "min": 2
              }
            ],
            "any": [
              {
                "min": 1,
                "disciplines": [
                  "oblivion",
                  "corruption"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "malkavian",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "auspex",
          "dominate",
          "obfuscate"
        ]
      },
      "traits": []
    },
    {
      "id": "ministry",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "corruption",
          "obfuscate",
          "presence"
        ]
      },
      "traits": [
        {
          "id": "beguiling_words",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "corruption",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "eyes_of_the_serpent",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "presence",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "serpent_speech",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "corruption",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "heart_of_darkness",
          "tier": "ancilla",
          "requirements": {}
        },
        {
          "id": "divine_image",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "corruption",
                "min": 1
              },
              {
                "id": "presence",
                "min": 1
              }
            ]
          }
        }
      ]
    },
    {
      "id": "nosferatu",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "animalism",
          "obfuscate",
          "potence"
        ]
      },
      "traits": [
        {
          "id": "feral_whispers",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "animalism",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "ghost_in_the_machine",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "obfuscate",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "lingering_obscurement",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "obfuscate",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "obscured_power",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "obfuscate",
                "min": 2
              },
              {
                "id": "potence",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "shared_shadows",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "obfuscate",
                "min": 3
              }
            ]
          }
        }
      ]
    },
    {
      "id": "ravnos",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "obfuscate",
          "presence",
          "tellurgy"
        ]
      },
      "traits": []
    },
    {
      "id": "salubri",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "auspex",
          "fortitude",
          "obfuscate"
        ]
      },
      "traits": []
    },
    {
      "id": "toreador",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "auspex",
          "celerity",
          "presence"
        ]
      },
      "traits": [
        {
          "id": "addictive_kiss",
          "tier": "neonate",
          "requirements": {}
        },
        {
          "id": "star_magnetism",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "presence",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "throw_voice",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "presence",
                "min": 1
              },
              {
                "id": "auspex",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "entrancing_object",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "presence",
                "min": 3
              },
              {
                "id": "auspex",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "powerful_presence",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "presence",
                "min": 3
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tremere",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "auspex",
          "dominate"
        ],
        "choice": [
          "blood_sorcery",
          "necromancy"
        ]
      },
      "traits": []
    },
    {
      "id": "tzimisce",
      "complete": false,
      "disciplineRule": {
        "fixed": [
          "animalism",
          "dominate"
        ],
        "choice": [
          "tellurgy",
          "vicissitude"
        ]
      },
      "traits": []
    },
    {
      "id": "ventrue",
      "complete": true,
      "disciplineRule": {
        "fixed": [
          "dominate",
          "fortitude",
          "presence"
        ]
      },
      "traits": [
        {
          "id": "obedience",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "dominate",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "rationalize",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "dominate",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "unwavering_devotion",
          "tier": "neonate",
          "requirements": {
            "all": [
              {
                "id": "dominate",
                "min": 1
              },
              {
                "id": "presence",
                "min": 1
              }
            ]
          }
        },
        {
          "id": "commanding_leader",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "fortitude",
                "min": 2
              },
              {
                "id": "presence",
                "min": 2
              }
            ]
          }
        },
        {
          "id": "imposing_physique",
          "tier": "ancilla",
          "requirements": {
            "all": [
              {
                "id": "fortitude",
                "min": 2
              }
            ],
            "any": [
              {
                "min": 1,
                "disciplines": [
                  "dominate",
                  "presence"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "caitiff",
      "complete": false,
      "disciplineRule": {
        "random": 3
      },
      "traits": []
    }
  ],
  "resourceTypes": [
    {
      "id": "haven",
      "category": "physical_asset"
    },
    {
      "id": "property",
      "category": "physical_asset"
    },
    {
      "id": "repository",
      "category": "physical_asset"
    },
    {
      "id": "vehicle",
      "category": "physical_asset"
    },
    {
      "id": "ally",
      "category": "social_asset"
    },
    {
      "id": "minions",
      "category": "social_asset"
    },
    {
      "id": "retainer",
      "category": "social_asset"
    },
    {
      "id": "contact",
      "category": "social_asset"
    },
    {
      "id": "fame",
      "category": "social_asset"
    },
    {
      "id": "herd",
      "category": "social_asset"
    },
    {
      "id": "mask",
      "category": "social_asset"
    },
    {
      "id": "status",
      "category": "social_asset"
    },
    {
      "id": "wealth",
      "category": "wealth"
    }
  ],
  "generationByTier": {
    "neonate": [
      13,
      12,
      11
    ],
    "ancilla": [
      10,
      9
    ],
    "elder": [
      8,
      7,
      6
    ]
  },
  "generationModifiers": {
    "6": 3,
    "7": 3,
    "8": 3,
    "9": 2,
    "10": 2,
    "11": 1,
    "12": 1,
    "13": 1
  },
  "tierRank": {
    "neonate": 1,
    "ancilla": 2,
    "elder": 3
  }
};
