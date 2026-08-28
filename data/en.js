window.V6_LOCALES = window.V6_LOCALES || {}; window.V6_LOCALES.en = {
  "locale": "en",
  "categories": {
    "attributes": {
      "physical": "Physical",
      "social": "Social",
      "mental": "Mental"
    },
    "attributeSingular": {
      "physical": "Physical",
      "social": "Social",
      "mental": "Mental"
    },
    "resources": {
      "physical_asset": "Physical Asset",
      "social_asset": "Social Asset",
      "wealth": "Wealth"
    }
  },
  "rules": {
    "attributes": [
      {
        "id": "strength",
        "name": "Strength",
        "description": "Physical prowess, brute force, and how much weight you can lift. Influences how much damage you can inflict in Melee combat, the strength of your grip, and how much Vitae you can drain from a victim in a single turn.",
        "ratings": {
          "1": "You are weak and struggle to carry heavy objects. You can lift up to 20 kg.",
          "2": "You have an average build and can carry heavy objects for a while before you need to rest. You can lift up to 50 kg.",
          "3": "You are strong and can probably break down a wooden door without much effort. You can lift up to 100 kg.",
          "4": "You are exceptionally strong and can bend pipes and other sturdy objects. You can lift up to 200 kg.",
          "5": "You are one of the strongest individuals in the world and could break down a reinforced iron door. You can lift up to 300 kg."
        },
        "mechanics": [
          "Influences melee damage, grip strength, and how much Vitae you can drain from a victim in one turn.",
          "Unarmed weapon damage is 1/2 Strength."
        ]
      },
      {
        "id": "dexterity",
        "name": "Dexterity",
        "description": "Agility, reflexes, and hand-eye coordination. Influences how precise you are in combat, how hard it is to hit you, and how much fine skill you can display when working against the clock.",
        "ratings": {
          "1": "You are a bit clumsy and have a hard time keeping your balance.",
          "2": "You do alright but would not do well walking a tight rope.",
          "3": "You are well-coordinated and are known to have quick reflexes.",
          "4": "You are a natural acrobat and could perform impressive stunts if needed to.",
          "5": "Your reflexes and coordination seem almost supernatural."
        },
        "mechanics": [
          "Used for agility, reflexes, hand-eye coordination, and precise work under pressure."
        ]
      },
      {
        "id": "stamina",
        "name": "Stamina",
        "description": "Endurance, vigor, and constitution in the face of physical and biological threats. Influences how much Vitae your body can hold, how long you can keep running, and how well you resist threats to your body’s functions. This Attribute is often used when defending yourself against physical Discipline powers.",
        "ratings": {
          "1": "You have a weak constitution and tire easily during physical activity.",
          "2": "You have an average constitution and can handle a good workout here and there.",
          "3": "You have a strong constitution and could probably run a marathon.",
          "4": "Your endurance is impressive and you could probably win a marathon.",
          "5": "You could endure the most extreme conditions and come through without losing your breath."
        },
        "mechanics": [
          "Vitae Maximum = 10 + Stamina.",
          "Often used to defend against physical Discipline powers."
        ]
      },
      {
        "id": "charisma",
        "name": "Charisma",
        "description": "Personal magnetism, natural charm, and strength of personality. Often used when you are trying to attract attention, make a good first impression, or leave a strong impact on someone.",
        "ratings": {
          "1": "Few people pay much attention to what you have to say.",
          "2": "You can get some people to notice you and consider your ideas.",
          "3": "You are easy to trust and can win a room’s attention with a few words.",
          "4": "You have a captivating presence, and people are drawn to you.",
          "5": "You could become a world leader if you set your mind to it."
        },
        "mechanics": [
          "Used for attraction, first impressions, and force of personality."
        ]
      },
      {
        "id": "manipulation",
        "name": "Manipulation",
        "description": "The ability to sway the truth, craft convincing lies, and bend others to your needs. Often used when you need to twist facts and convince others of things that aren’t true.",
        "ratings": {
          "1": "You have a hard time convincing others of your points.",
          "2": "You can fool some of the people some of the time.",
          "3": "You rarely walk away from a situation with less than what you entered.",
          "4": "You are skilled in convincing others and could pass for a politician or religious leader.",
          "5": "You could make someone believe in just about anything."
        },
        "mechanics": [
          "Used to sway the truth, craft convincing lies, and bend others to your needs."
        ]
      },
      {
        "id": "composure",
        "name": "Composure",
        "description": "Calm, collected, controlled emotions, and equilibrium in difficult situations. Composure helps you keep level when others are trying to rattle you, acting as you normally would rather than giving in to a storm of emotions. This Attribute is often used when defending yourself against social Discipline powers.",
        "ratings": {
          "1": "You are quick to anger and lose your temper at the slightest insult.",
          "2": "You can keep your calm in an argument. Most of the time, at least.",
          "3": "You keep your wits even when things turn nasty, and others look to follow your lead.",
          "4": "People can rarely see beyond your facade of calm determination, making you an expert in any type of negotiation.",
          "5": "You show only the emotions you want to show and control your Beast as few vampires can."
        },
        "mechanics": [
          "Willpower Maximum = 5 + Composure + Resolve.",
          "Self Control tests use Composure + Resolve.",
          "Often used to defend against social Discipline powers."
        ]
      },
      {
        "id": "intelligence",
        "name": "Intelligence",
        "description": "Reason, memory, and the ability to apply logic to solve problems. It is often used when analyzing large volumes of information, remembering obscure facts, and solving logical puzzles.",
        "ratings": {
          "1": "You know the basics, but not much beyond that.",
          "2": "You are smart enough to know that you aren’t that smart.",
          "3": "You are bright and can piece together information from disparate sources.",
          "4": "You are brilliant and can process information at remarkable speed.",
          "5": "Most who get to know you come to consider you a genius."
        },
        "mechanics": [
          "Used for reason, memory, logic, analysis, and recalling obscure facts."
        ]
      },
      {
        "id": "wits",
        "name": "Wits",
        "description": "Intuition, perception and the ability to react quickly to changing circumstances. It is often used to perceive hidden information and to react quickly in rapidly evolving situations.",
        "ratings": {
          "1": "You seem to always be somewhere else.",
          "2": "You can sense sudden changes around you, most of the time.",
          "3": "You are rarely caught off guard and read situations faster than most.",
          "4": "You have a sharp mind and catch even the smallest of changes in your surroundings.",
          "5": "It is almost as if you knew what was about to happen."
        },
        "mechanics": [
          "Used for intuition, perception, and reacting quickly to changing circumstances."
        ]
      },
      {
        "id": "resolve",
        "name": "Resolve",
        "description": "Determination, mental fortitude, and the capacity to keep going even when your energy is faltering. Often used to maintain focus in mentally stressful circumstances and to push through mental blocks. This Attribute is often used when defending against mental Discipline powers.",
        "ratings": {
          "1": "You have the attention span of a 5-year-old.",
          "2": "You can hold your focus for quite a while, though you still drift if it’s for too long.",
          "3": "Your focus is sharp and hard to break, even by something that interests you.",
          "4": "Your determination and focus are so impressive that others look to you as an example.",
          "5": "All hell can break loose around you, and you would still keep your mind focused on what you want."
        },
        "mechanics": [
          "Willpower Maximum = 5 + Composure + Resolve.",
          "Self Control tests use Composure + Resolve.",
          "Often used to defend against mental Discipline powers."
        ]
      }
    ],
    "skills": [
      {
        "id": "athletics",
        "name": "Athletics",
        "description": "Your physical training and aptitude for athletic activities, such as running after someone or climbing the side of a building.",
        "focuses": [
          {
            "id": "climbing",
            "name": "Climbing",
            "description": "Training in climbing rough surfaces with or without appropriate equipment."
          },
          {
            "id": "lifting",
            "name": "Lifting",
            "description": "Training to lift heavier weights in safe ways, using your strength more efficiently."
          },
          {
            "id": "running",
            "name": "Running",
            "description": "Training to run greater distances and reach higher speeds."
          },
          {
            "id": "throwing",
            "name": "Throwing",
            "description": "Training with throwing, typically aerodynamic, objects with a focus on accuracy and distance."
          }
        ]
      },
      {
        "id": "awareness",
        "name": "Awareness",
        "description": "Your ability to perceive subtle changes in behavior, strange patterns in the environment, and even signs of the supernatural.",
        "focuses": [
          {
            "id": "empathy",
            "name": "Empathy",
            "description": "Reading and internalizing the emotions of others."
          },
          {
            "id": "insight",
            "name": "Insight",
            "description": "Reading nuances of body language, inflection, tone, and similar to better understand an individual’s true meaning, discerning truth from lies and understanding implications versus spoken words."
          },
          {
            "id": "instinct",
            "name": "Instinct",
            "description": "Natural intuition about the environment and nearby people and recognizing the threats within them."
          },
          {
            "id": "supernatural",
            "name": "Supernatural",
            "description": "Innate perception and sensitivity to things that aren’t quite natural, such as supernatural creatures, objects, and powers."
          }
        ]
      },
      {
        "id": "craft",
        "name": "Craft",
        "description": "Your technical abilities regarding building, fixing, and improvising improvements to technical equipment, from carpentry to computers.",
        "focuses": [
          {
            "id": "carpentry",
            "name": "Carpentry",
            "description": "Working with wood, including making wooden objects, repairing structures, and even tearing them down."
          },
          {
            "id": "computers",
            "name": "Computers",
            "description": "Working with computer hardware, including quickly putting together an electronic device, fixing burned boards, or even modifying the hardware components of a computer."
          },
          {
            "id": "engines",
            "name": "Engines",
            "description": "Working with engines, including putting them together, taking them apart, repairing them, and even forcing them to turn on or off. This focus is typically divided into small engines and large engines."
          },
          {
            "id": "forgery",
            "name": "Forgery",
            "description": "Creating and detecting fake pieces of art, false documents, and other counterfeit objects."
          },
          {
            "id": "improvised",
            "name": "Improvised",
            "description": "Creating an improvised, and typically temporary, mechanism or tool to solve an immediate problem with only the parts and other objects at hand."
          }
        ]
      },
      {
        "id": "expression",
        "name": "Expression",
        "description": "Your ability to express yourself in different artistic ways, from writing to playing music to acting.",
        "focuses": [
          {
            "id": "acting",
            "name": "Acting",
            "description": "Portraying people, caricatures, and personas, typically through physical storytelling."
          },
          {
            "id": "drawing",
            "name": "Drawing",
            "description": "Drawing with pencil, pen, charcoal, or similar."
          },
          {
            "id": "music",
            "name": "Music",
            "description": "Creating or performing music through composing, playing an instrument, singing or similar."
          },
          {
            "id": "sculpting",
            "name": "Sculpting",
            "description": "Shaping material, typically clay, marble, or some other earthen medium, into three-dimensional objects for artistic expression rather than practical application."
          },
          {
            "id": "writing",
            "name": "Writing",
            "description": "Creating cogent text, inspiring prose, or humorous poetry."
          }
        ]
      },
      {
        "id": "fighting",
        "name": "Fighting",
        "description": "Your training in physical combat, such as brawling, knife fights, and even medieval melee weaponry.",
        "focuses": [
          {
            "id": "fighting_dirty",
            "name": "Fighting Dirty",
            "description": "Using every advantage in the environment to win a fight, such as throwing dirt in an opponent’s eyes to blind them, typically in a way that might be considered dishonorable in a more formal duel."
          },
          {
            "id": "hand_to_hand",
            "name": "Hand-to-Hand",
            "description": "Using weaponless combat, which often uses punches, kicks, knees, or the whole body to fight."
          },
          {
            "id": "improvised_weaponry",
            "name": "Improvised Weaponry",
            "description": "Using whatever objects are at hand to fight an opponent, such as using a broken plate to slash at someone in a restaurant."
          },
          {
            "id": "medieval_weaponry",
            "name": "Medieval Weaponry",
            "description": "Using swords, axes, spears, and other ancient, melee weaponry."
          }
        ]
      },
      {
        "id": "investigation",
        "name": "Investigation",
        "description": "Your ability to apply attention and deductive reasoning to acquire scattered or hidden information, whether searching a crime scene or digging through old tomes in a library.",
        "focuses": [
          {
            "id": "crime_scene",
            "name": "Crime Scene",
            "description": "Assessing crime scenes and other areas with evidence of conflict or illicit activity for clues and other details about the happenings there."
          },
          {
            "id": "digital_media",
            "name": "Digital Media",
            "description": "Discovering information through digital media, from diving through digital archives, to scouring the right places on the internet, to finding hidden data on hard drives. Also represents the ability to quickly analyze large amounts of data for the necessary information."
          },
          {
            "id": "gossip",
            "name": "Gossip",
            "description": "Talking to the right people and asking the right questions to learn the latest information and rumors about others and their activities, typically those inside society, especially higher society."
          },
          {
            "id": "physical_media",
            "name": "Physical Media",
            "description": "Discovering information through physical media, from poring through ancient tomes, to reading dozens of case files, to understanding and utilizing an old filing system. Also represents the ability to quickly analyze large amounts of data for the necessary information."
          },
          {
            "id": "streetwise",
            "name": "Streetwise",
            "description": "Talking to the right people and asking the right questions to learn the latest information and rumors about others and their activities, typically those that lurk in the shadows and beneath or outside standard society."
          }
        ]
      },
      {
        "id": "knowledge",
        "name": "Knowledge",
        "description": "Your grasp of facts and ability to recall information on various topics.",
        "focuses": [
          {
            "id": "chemistry",
            "name": "Chemistry",
            "description": "The study of chemical processes of the world, including how certain chemicals interact with each other, the human body, and the environment."
          },
          {
            "id": "history",
            "name": "History",
            "description": "The study of history of the world, including when major events happened, who was involved, and what resulted from them."
          },
          {
            "id": "law",
            "name": "Law",
            "description": "The study of laws of a country and how to use and manipulate them."
          },
          {
            "id": "linguistics",
            "name": "Linguistics",
            "description": "The study of how languages work, including being able to decipher ancient languages or create new ones."
          },
          {
            "id": "occult",
            "name": "Occult",
            "description": "The study of the supernatural and other mystic occurrences, often through strange and ancient tomes and myths."
          },
          {
            "id": "politics",
            "name": "Politics",
            "description": "The study of government structures and functions, especially in how they relate to the power play between the various parties and entities within them."
          }
        ]
      },
      {
        "id": "medicine",
        "name": "Medicine",
        "description": "Your training in medical practices, from first aid to surgery to psychology.",
        "focuses": [
          {
            "id": "animals",
            "name": "Animals",
            "description": "Treatment of animals for various ailments, including knowledge of animal-specific medications and the ability to perform surgeries. This focus is typically divided into exotic animals, large animals, and small animals."
          },
          {
            "id": "first_aid",
            "name": "First Aid",
            "description": "Performing emergency medical assistance, such as resuscitation or halting bleeding, until the injured party can receive full medical attention."
          },
          {
            "id": "psychology",
            "name": "Psychology",
            "description": "The treatment of mental and intellectual conditions, including knowledge of various therapeutic activities and the appropriate medications for psychiatric treatments."
          },
          {
            "id": "surgery",
            "name": "Surgery",
            "description": "Performing medical treatments with instruments, particularly treatments that involve the removal or replacement of diseased tissue."
          },
          {
            "id": "toxicology",
            "name": "Toxicology",
            "description": "The treatment and application of poisons and toxins."
          }
        ]
      },
      {
        "id": "persuasion",
        "name": "Persuasion",
        "description": "Your training in the social game of influencing others to do what you want, whether through subtle or imposing ways.",
        "focuses": [
          {
            "id": "fraternize",
            "name": "Fraternize",
            "description": "Forging positive connections with people and easily making friends, especially with individuals typically considered opposing or unfriendly."
          },
          {
            "id": "intimidation",
            "name": "Intimidation",
            "description": "Using your appearance, strength, or position to bully others or get what you want."
          },
          {
            "id": "negotiation",
            "name": "Negotiation",
            "description": "The art of give and take, compromise, and finding middle grounds between opposing parties."
          },
          {
            "id": "seduction",
            "name": "Seduction",
            "description": "Using your charm and appearance to entice others in a romantic or sensual way."
          }
        ]
      },
      {
        "id": "sabotage",
        "name": "Sabotage",
        "description": "Your ability to overcome and undo security measures, as well as your ability to use destructive methods, such as explosives, to take down and damage things.",
        "focuses": [
          {
            "id": "burglary",
            "name": "Burglary",
            "description": "Breaking and entering, opening coffers, and kicking in or unlocking doors, typically in a destructive way or without regard for keeping the barrier to entry, such as a door, intact."
          },
          {
            "id": "explosives",
            "name": "Explosives",
            "description": "Training with demolition tools and explosives."
          },
          {
            "id": "hacking",
            "name": "Hacking",
            "description": "Gaining access to restricted information, data, and networks, typically through rewriting or disrupting software code."
          },
          {
            "id": "security_systems",
            "name": "Security Systems",
            "description": "Circumventing complex security systems, from disabling or fooling a network of security cameras to bypassing biometric scanners to breaking into encrypted files and networks."
          }
        ]
      },
      {
        "id": "shooting",
        "name": "Shooting",
        "description": "Your training in ranged combat, such as firing a gun, loosing an arrow, or even operating artillery.",
        "focuses": [
          {
            "id": "heavy_firearms",
            "name": "Heavy Firearms",
            "description": "Using high caliber guns and similar ranged weapons, such as rifles, machine guns, and powerful handguns."
          },
          {
            "id": "improvised_weaponry",
            "name": "Improvised Weaponry",
            "description": "Using makeshift ranged weapons, homemade guns, and whatever objects are at hand to fight an opponent at a distance."
          },
          {
            "id": "light_firearms",
            "name": "Light Firearms",
            "description": "Using low caliber guns and similar ranged weapons, such as pistols, revolvers, and submachine guns."
          },
          {
            "id": "medieval_weaponry",
            "name": "Medieval Weaponry",
            "description": "Using bows, crossbows, and other ancient, ranged weaponry."
          }
        ]
      },
      {
        "id": "subterfuge",
        "name": "Subterfuge",
        "description": "Your ability to be an accomplished thief or con artist, from moving around unseen to lying your way out of complicated situations.",
        "focuses": [
          {
            "id": "deceit",
            "name": "Deceit",
            "description": "Lying and deceiving others into believing what you say is true."
          },
          {
            "id": "disguise",
            "name": "Disguise",
            "description": "Appearing to be who you are not. This focus encompasses the ability to mimic speech and behavior patterns as well as the ability to create physical costumes and similar objects related to disguising."
          },
          {
            "id": "skulking",
            "name": "Skulking",
            "description": "Following others without drawing attention from them, often appearing as part of the surrounding crowd or environment."
          },
          {
            "id": "sleight_of_hand",
            "name": "Sleight of Hand",
            "description": "Manipulating objects without the manipulation being seen or detected, such as stealing something from someone’s pocket or performing a “magic” trick in front of an audience."
          },
          {
            "id": "stealth",
            "name": "Stealth",
            "description": "Remaining undetected by anyone around you, typically through hiding or keeping silent."
          }
        ]
      },
      {
        "id": "survival",
        "name": "Survival",
        "description": "Your practical resourcefulness and aptitude for surviving despite your situation, especially when it comes to finding shelter, dealing with animals, or following tracks.",
        "focuses": [
          {
            "id": "animal_handling",
            "name": "Animal Handling",
            "description": "Dealing with animals in a peaceful way, typically through calming them. This focus also encompasses making yourself understood by an animal and understanding the behavior of an animal."
          },
          {
            "id": "foraging",
            "name": "Foraging",
            "description": "Finding resources and shelter in inhospitable environments or when resources and shelter are otherwise unavailable. This focus is typically divided into urban foraging and wilderness foraging."
          },
          {
            "id": "hunting",
            "name": "Hunting",
            "description": "Finding and hunting non-human prey. This focus is typically divided into urban hunting and wilderness hunting."
          },
          {
            "id": "shelter",
            "name": "Shelter",
            "description": "Creating shelter and finding basic resources, such as water, firewood, and other material for camping, keeping warm, or otherwise making it through a sleep cycle in an inhospitable location."
          },
          {
            "id": "tracking",
            "name": "Tracking",
            "description": "Finding and following the tracks left by a creature. This focus is typically divided into urban tracking and wilderness tracking."
          }
        ]
      }
    ],
    "sires": [
      {
        "id": "adoptive_sire",
        "name": "Adoptive Sire",
        "discipline": "One Discipline from your adoptive sire’s clan",
        "description": "Another vampire took you under their wing.",
        "details": "You were taught by another vampire who took you under their wing. Your sire may have abandoned you or may still be in your life and resent your bond with your adoptive sire. Whatever the case, you learned what you know about vampires and vampire society from a member of another clan."
      },
      {
        "id": "brood_child",
        "name": "Brood Child",
        "discipline": "One Discipline from a broodmate’s clan",
        "description": "You were one among a brood of other “newborn” vampires.",
        "details": "You were raised in a brood of vampires, either created by the same sire or different ones. From your first awakening, you learned how to work as a team and how to fight for resources. Most of your broodmates didn’t survive, but you proved to be strong."
      },
      {
        "id": "caring_sire",
        "name": "Caring Sire",
        "discipline": "Fortitude, Potence, or Presence",
        "description": "Your sire took care of and tutored you in the ways of vampires.",
        "details": "You had the luck to have a caring sire. They taught you the ins and outs of vampire society, guided your first explorations in the powers of the blood, and showed you who was who and what was whose. You owe them a great deal to this day."
      },
      {
        "id": "cruel_sire",
        "name": "Cruel Sire",
        "discipline": "Dominate, Fortitude, or Obfuscate",
        "description": "Your sire was cruel and abusive.",
        "details": "Your sire was cruel and abusive. You learned what you could to survive and grew stronger for it. You couldn’t wait to escape, and to this day you dread the thought of facing them again."
      },
      {
        "id": "manipulative_sire",
        "name": "Manipulative Sire",
        "discipline": "Dominate, Potence, or Presence",
        "description": "Your sire was a master of manipulation, and you were often a pawn in their schemes.",
        "details": "Your sire was a master of manipulation, playing people and vampires like pawns on a chessboard. You were often a piece in your sire’s schemes, and though it took you a while to realize it, you learned how people’s emotions and beliefs can be used to sway them in the direction you want."
      },
      {
        "id": "secretive_sire",
        "name": "Secretive Sire",
        "discipline": "Auspex, Celerity, or Obfuscate",
        "description": "Your sire was mysterious and secretive.",
        "details": "Your sire was mysterious and secretive, always skulking in the shadows and giving you cryptic advice. You spent most of your time hiding from others of your kind, since your sire warned you that most of them would want you dead. You learned how to remain unseen just as your sire."
      },
      {
        "id": "unknown_sire",
        "name": "Unknown Sire",
        "discipline": "Celerity, Fortitude, or Potence",
        "description": "You never knew your sire.",
        "details": "You never knew your sire. When you awoke from your Embrace, they were already gone. You learned what you could as you prowled those early nights alone, surviving on your wits and maybe more than a little luck."
      },
      {
        "id": "vigilant_sire",
        "name": "Vigilant Sire",
        "discipline": "Auspex, Dominate, or Fortitude",
        "description": "Your sire was demanding and vigilant to your every move.",
        "details": "Your sire was very demanding and watchful of your every move. You couldn’t afford mistakes; each one brought reprisals at best and severe punishment at worst. You became very good at what you do, even if it might have cost your soul."
      }
    ],
    "creatures": [
      {
        "id": "ghoul",
        "name": "Ghoul",
        "description": "A mortal empowered by vampire Vitae and bound to a vampiric patron.",
        "details": "Ghouls remain mortal, but vampire Vitae can grant them supernatural resilience, longevity, and limited access to the power of the Blood."
      },
      {
        "id": "duskborn",
        "name": "Duskborn",
        "description": "A very high-generation vampire whose Blood carries a weaker expression of the Curse.",
        "details": "Duskborn stand at the edge of vampiric society. Their Blood is thinner, their relationship to clan inheritance is less stable, and many of the usual assumptions about Kindred apply to them differently."
      },
      {
        "id": "vampire_neonate",
        "name": "Vampire (Neonate)",
        "description": "A recently Embraced vampire, usually within the first 50 years of unlife.",
        "details": "Most player characters begin as neonates. They are commonly 11th–13th generation: formidable compared with mortals, but still young and relatively unproven by the standards of older Kindred."
      },
      {
        "id": "vampire_ancilla",
        "name": "Vampire (Ancilla)",
        "description": "An established vampire who has survived at least 50 years and proven themselves among other Kindred.",
        "details": "Ancillae have had time to accumulate broader experience, obligations, rivals, and standing in vampire society. This tier uses the 9th–10th generation band."
      },
      {
        "id": "vampire_elder",
        "name": "Vampire (Elder)",
        "description": "An old vampire who has endured at least two centuries of unlife.",
        "details": "Elders have survived for centuries and usually carry substantial accumulated experience, power, and influence. This tier uses the 6th–8th generation band."
      }
    ],
    "lifepaths": [
      {
        "id": "artist",
        "name": "Artist",
        "description": "You are a writer, actor, painter, designer, sculptor, or a creative of any other kind. You might have focused on one art form or have explored many different forms of expression, as you figured out how to express yourself.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "craft",
            "recommendationLabels": {}
          },
          {
            "id": "expression",
            "recommendationLabels": {},
            "focusPrompt": "choose an art form"
          },
          {
            "id": "knowledge",
            "recommendationLabels": {
              "lp_art": "Art"
            }
          },
          {
            "id": "persuasion",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "wealth:default:0",
            "label": ""
          },
          {
            "id": "contact:art_dealer:1",
            "label": "Art Dealer"
          },
          {
            "id": "ally:patron:2",
            "label": "Patron"
          }
        ]
      },
      {
        "id": "corporate_executive",
        "name": "Corporate Executive",
        "description": "Your battlefield is the corporate boardroom, where you exercise your quick wits and sharp acumen. You do what you need to get what you want, and you know how to use people that are standing in your way.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "investigation",
            "recommendationLabels": {
              "gossip": "Gossip"
            }
          },
          {
            "id": "knowledge",
            "recommendationLabels": {
              "lp_business": "Business"
            }
          },
          {
            "id": "persuasion",
            "recommendationLabels": {}
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {
              "deceit": "Deceit"
            }
          }
        ],
        "resources": [
          {
            "id": "wealth:default:0",
            "label": ""
          },
          {
            "id": "property:default:1",
            "label": ""
          },
          {
            "id": "haven:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "criminal",
        "name": "Criminal",
        "description": "You make your living by breaking the law, either by taking what you want from others who have it, or by more subtle means. You might have spent some time in prison or worked with other criminals in an organized fashion, and now you count some of them among your contacts.",
        "skills": [
          {
            "id": "athletics",
            "recommendationLabels": {
              "running": "Running"
            }
          },
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "fighting",
            "recommendationLabels": {
              "fighting_dirty": "Fighting Dirty"
            }
          },
          {
            "id": "sabotage",
            "recommendationLabels": {
              "burglary": "Burglary"
            }
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "contact:fencer:0",
            "label": "Fencer"
          },
          {
            "id": "wealth:default:1",
            "label": ""
          },
          {
            "id": "mask:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "holy_person",
        "name": "Holy Person",
        "description": "You dedicated part of your life to the study and dissemination of a religious faith. You might have delved deep into mythological studies and discovered a lot about the hidden world before you became what you are today.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "expression",
            "recommendationLabels": {
              "lp_oratory": "Oratory"
            }
          },
          {
            "id": "knowledge",
            "recommendationLabels": {
              "lp_religion": "Religion"
            }
          },
          {
            "id": "medicine",
            "recommendationLabels": {}
          },
          {
            "id": "persuasion",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "contact:local_church:0",
            "label": "Local Church"
          },
          {
            "id": "status:mortal_church_member:1",
            "label": "Mortal: Church member"
          },
          {
            "id": "wealth:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "hunter",
        "name": "Hunter",
        "description": "You know how to track prey, set traps, and survive in the areas where your quarry is located. You might have grown up near the wilderness, or you might have just hunted for sport. Either way, you understand your quarry’s behavior and use it to your advantage.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "craft",
            "recommendationLabels": {
              "lp_traps": "Traps"
            }
          },
          {
            "id": "fighting",
            "recommendationLabels": {}
          },
          {
            "id": "shooting",
            "recommendationLabels": {}
          },
          {
            "id": "survival",
            "recommendationLabels": {
              "lp_wilderness_hunting": "Wilderness Hunting"
            }
          }
        ],
        "resources": [
          {
            "id": "haven:default:0",
            "label": ""
          },
          {
            "id": "ally:fellow_hunter:1",
            "label": "Fellow hunter"
          },
          {
            "id": "repository:armory:2",
            "label": "Armory"
          }
        ]
      },
      {
        "id": "military",
        "name": "Military",
        "description": "You served your country in its armed forces and received extensive training in the art of war and survival. Weapons are your most trusted tools, and you rarely leave your companions behind. You might still have contact with some of your former comrades, as you survived hell together.",
        "skills": [
          {
            "id": "athletics",
            "recommendationLabels": {}
          },
          {
            "id": "fighting",
            "recommendationLabels": {}
          },
          {
            "id": "medicine",
            "recommendationLabels": {
              "first_aid": "First Aid"
            }
          },
          {
            "id": "shooting",
            "recommendationLabels": {
              "lp_heavy_weapons": "Heavy Weapons"
            }
          },
          {
            "id": "survival",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "repository:weapons:0",
            "label": "Weapons"
          },
          {
            "id": "contact:military:1",
            "label": "Military"
          },
          {
            "id": "ally:former_comrades:2",
            "label": "Former comrades"
          }
        ]
      },
      {
        "id": "politician",
        "name": "Politician",
        "description": "You worked in the political arena, making policies, negotiating deals, and battling for the public’s attention. You learned that the political game runs on negotiation, and that most of it happens well outside the legal boundaries.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {
              "insight": "Insight"
            }
          },
          {
            "id": "investigation",
            "recommendationLabels": {}
          },
          {
            "id": "knowledge",
            "recommendationLabels": {
              "politics": "Politics"
            }
          },
          {
            "id": "persuasion",
            "recommendationLabels": {
              "negotiation": "Negotiation"
            }
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {
              "deceit": "Deceit"
            }
          }
        ],
        "resources": [
          {
            "id": "wealth:default:0",
            "label": ""
          },
          {
            "id": "status:political:1",
            "label": "Political"
          },
          {
            "id": "haven:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "technician",
        "name": "Technician",
        "description": "You learned how to work with your hands, even without the deep theoretical knowledge to back it up. You are resourceful and can usually figure your way out of most problems you face.",
        "skills": [
          {
            "id": "athletics",
            "recommendationLabels": {}
          },
          {
            "id": "craft",
            "recommendationLabels": {
              "improvised": "Improvised"
            }
          },
          {
            "id": "fighting",
            "recommendationLabels": {}
          },
          {
            "id": "sabotage",
            "recommendationLabels": {
              "security_systems": "Security Systems"
            }
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "vehicle:default:0",
            "label": ""
          },
          {
            "id": "repository:tools:1",
            "label": "Tools"
          },
          {
            "id": "haven:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "blood_deliverer",
        "name": "Blood Deliverer",
        "description": "Vampires need blood, and some have specific tastes and requirements. That’s where you come in. You hunt down the blood they need and deliver it to them. You might have discovered a way to get rich after becoming a vampire, or you were simply coerced into service by the elders, possibly with the promise of greater status.",
        "skills": [
          {
            "id": "athletics",
            "recommendationLabels": {}
          },
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "persuasion",
            "recommendationLabels": {}
          },
          {
            "id": "sabotage",
            "recommendationLabels": {}
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {
              "skulking": "Skulking"
            }
          }
        ],
        "resources": [
          {
            "id": "vehicle:default:0",
            "label": ""
          },
          {
            "id": "wealth:default:1",
            "label": ""
          },
          {
            "id": "contact:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "clean_up_crew",
        "name": "Clean Up Crew",
        "description": "When things get messy, you are called to make the trouble disappear. It’s a dirty job, but someone has to do it. That someone is you. You might have been forced into this role, or you might have taken it to earn favors and boons from those that need your services.",
        "skills": [
          {
            "id": "athletics",
            "recommendationLabels": {}
          },
          {
            "id": "fighting",
            "recommendationLabels": {}
          },
          {
            "id": "investigation",
            "recommendationLabels": {
              "crime_scene": "Crime Scene"
            }
          },
          {
            "id": "sabotage",
            "recommendationLabels": {}
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "contact:vampiric_authority:0",
            "label": "Vampiric Authority"
          },
          {
            "id": "vehicle:default:1",
            "label": ""
          },
          {
            "id": "repository:cleaning_materials:2",
            "label": "Cleaning Materials"
          }
        ]
      },
      {
        "id": "hound",
        "name": "Hound",
        "description": "You can also use this [lifepath] to represent a Sweeper or Ductus. You were the muscle for the local authority, using your martial training and limited authority to keep the domain safe and make others follow the rules. Whether you wielded that power wisely or abused it is up to you, but other vampires will resent you either way.",
        "skills": [
          {
            "id": "fighting",
            "recommendationLabels": {}
          },
          {
            "id": "investigation",
            "recommendationLabels": {
              "streetwise": "Streetwise"
            }
          },
          {
            "id": "shooting",
            "recommendationLabels": {}
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {}
          },
          {
            "id": "survival",
            "recommendationLabels": {
              "lp_urban_tracking": "Urban Tracking"
            }
          }
        ],
        "resources": [
          {
            "id": "status:sect:0",
            "label": "Sect"
          },
          {
            "id": "repository:armory:1",
            "label": "Armory"
          },
          {
            "id": "contact:vampiric_authority:2",
            "label": "Vampiric Authority"
          }
        ]
      },
      {
        "id": "diplomat",
        "name": "Diplomat",
        "description": "You can also use this [lifepath] to represent an Emissary or Herald. You were chosen for your exceptional charisma, your skill with words, and your ability to blend in. You traveled to another sect’s domain and opened communications with them, or some faction of them. Sometimes you simply weren’t chased out, and other times you forged alliances.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {
              "empathy": "Empathy"
            }
          },
          {
            "id": "expression",
            "recommendationLabels": {
              "lp_oratory": "Oratory"
            }
          },
          {
            "id": "investigation",
            "recommendationLabels": {}
          },
          {
            "id": "persuasion",
            "recommendationLabels": {
              "lp_fraternizing": "Fraternizing",
              "negotiation": "Negotiation"
            }
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {}
          }
        ],
        "resources": [
          {
            "id": "haven:default:0",
            "label": ""
          },
          {
            "id": "status:sect:1",
            "label": "Sect"
          },
          {
            "id": "mask:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "harpy",
        "name": "Harpy",
        "description": "You set the tone of vampiric society, shaping how others behaved and even how they thought. You kept the ledger of who owed favors to whom, you could raise a reputation or ruin one, and you often held secrets and information that everyone else worked to keep hidden.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {}
          },
          {
            "id": "expression",
            "recommendationLabels": {}
          },
          {
            "id": "knowledge",
            "recommendationLabels": {
              "lp_vampire_society": "Vampire Society"
            }
          },
          {
            "id": "persuasion",
            "recommendationLabels": {}
          },
          {
            "id": "subterfuge",
            "recommendationLabels": {
              "deceit": "Deceit"
            }
          }
        ],
        "resources": [
          {
            "id": "haven:default:0",
            "label": ""
          },
          {
            "id": "status:sect:1",
            "label": "Sect"
          },
          {
            "id": "ally:default:2",
            "label": ""
          }
        ]
      },
      {
        "id": "sheriff",
        "name": "Sheriff",
        "description": "You can also use this [lifepath] to represent a Warlord. You enforced the laws of vampiric society and punished those who broke them. This role came with great authority and freedom, but with heavy responsibility as well. You might have abused that authority for your own ends, but others fear the consequences of crossing you anyway.",
        "skills": [
          {
            "id": "awareness",
            "recommendationLabels": {
              "insight": "Insight"
            }
          },
          {
            "id": "investigation",
            "recommendationLabels": {}
          },
          {
            "id": "knowledge",
            "recommendationLabels": {
              "lp_vampire_politics": "Vampire Politics"
            }
          },
          {
            "id": "persuasion",
            "recommendationLabels": {
              "intimidation": "Intimidation"
            }
          },
          {
            "id": "survival",
            "recommendationLabels": {
              "lp_urban_tracking": "Urban Tracking"
            }
          }
        ],
        "resources": [
          {
            "id": "ally:hound_sweeper:0",
            "label": "Hound/Sweeper"
          },
          {
            "id": "repository:armory:1",
            "label": "Armory"
          },
          {
            "id": "status:sect:2",
            "label": "Sect"
          }
        ]
      }
    ],
    "disciplines": [
      {
        "id": "animalism",
        "name": "Animalism",
        "clans": "Gangrel, Nosferatu, Tzimisce",
        "description": "Interacting with, manipulating, and taking on aspects of animals, including shapechanging into animals and summoning animals.",
        "powers": [
          {
            "id": "aspect_of_the_beast",
            "name": "Aspect of the Beast",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Wits",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You invoke your Beast to lend you its talents, partially assuming the abilities of an animal to help you with the task at hand. You can gain the snout of a wolf to track your prey by scent, the eyes of an owl to see in the dark, the ears of a bat to hear far beyond your normal range, the legs of a frog to jump farther, or the tail of a cat to balance better.\n\nWhen you use this power, choose a specific animal aspect to assume, such as a wolf’s snout, an owl’s eyes, a bat’s ears, a frog’s legs, or a cat’s tail. You gain a bonus equal to your dots in this Discipline to all non-conflict tests where the aspect would help.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●: You can assume 2 animal aspects at once.\n\n●●●●●: You can assume 3 animal aspects at once."
          },
          {
            "id": "bestial_instinct",
            "name": "Bestial Instinct",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Wits",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You hone your senses, becoming more in tune with your Beast and instinctively noticing the presence of the supernatural. You can sense other vampires and supernatural beings within Short distance, even when you aren’t actively searching for them.\n\nWhile this power is active, you can add your dots in this Discipline to any Awareness or Investigation tests that involve a supernatural presence. This power can’t help you sense creatures that are supernaturally hidden, such as a vampire using an Obfuscate power to conceal itself."
          },
          {
            "id": "shared_soul",
            "name": "Shared Soul",
            "category": "Unknown",
            "summary": "Learn an animal’s memories.",
            "text": "The Discipline Powers List includes Shared Soul as a 1-dot Animalism power, but the supplied Alpha packet does not include a full power entry with activation, cost, test, or duration details."
          },
          {
            "id": "sweet_whispers",
            "name": "Sweet Whispers",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One night or until completed",
            "text": "You give a simple, one-sentence, verbal command to an animal you can see within Short distance. You need to make a Power test only if the target is a ghoul, familiar, or other animal supernaturally connected to a supernatural creature that isn’t you. In these cases, make a Power test against the target’s Resolve.\n\nThe animal performs the command in a literal way, unable to interpret or infer subtle meaning behind your command. If you can speak with animals, you can make yourself more clearly understood, allowing for a slightly more complex command that might require some interpretation or that might have an extra condition. For example, if you can’t speak with the animal, you can command it to guard a location, and it will attack anyone except you that enters the location. If you can speak with the animal, you can command it to guard a location but to allow those that smell a certain way, carry a certain object, or hum a specific tune to pass. The command can’t force the target to do something harmful to itself or to put itself in direct danger.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: You can command an additional 3 animals of the target’s animal family (such as canidae, corvidae, felidae, or muridae) for each dot you have in this Discipline when you use this power. If you have to make a test, you make it against the strongest member of the group. All targets receive the same command.\n\n●●●●●: You can command an entire flock, pack, herd, or similar collection of unrelated animals, making a test, if needed, against the strongest member, and the command you give can force a target or targets to do something harmful to themselves or that would put them in direct danger."
          },
          {
            "id": "animal_messenger",
            "name": "Animal Messenger",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Touch",
            "duration": "One night",
            "text": "You touch an animal and imbue it with a short message (no more than 1 minute of speech) to deliver. You must know where the recipient is, or hold an object connected to the recipient, so the animal can track it down. If the animal is unwilling, you must succeed on a Power test against the animal’s Resolve to establish the link.\n\nThe animal seeks out the recipient and, when it finds them, delivers the message in your voice. If the animal can’t find the recipient before this power ends, the message is lost.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: The duration increases to 1 week, and the message can be up to 5 minutes long.\n\n●●●●● ●: The duration increases to 1 month, and the message can be up to 10 minutes long."
          },
          {
            "id": "call_of_the_wild",
            "name": "Call of the Wild",
            "category": "Social",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "2 Willpower",
            "difficulty": "Composure",
            "distance": "Medium",
            "duration": "One scene",
            "text": "You mimic the call of a specific animal, summoning creatures of that type to your vicinity. Animals of that type within range have a chance to be drawn by the call and arrive as soon as they can.\n\nWhen you use this power, make a Power test with a Difficulty equal to the nearest animal of that type's Composure. The number of successes determines how many animals answer your call. If there aren’t enough animals of that type within range, you get as many as there are; if there are none, the power has no effect.\n\n1 success: One animal of that type within range responds.\n\n2 successes: One-quarter of the animals of that type within range respond.\n\n3 successes: Half of the animals of that type within range respond.\n\n4 successes: Most of the animals of that type within range respond.\n\n5 successes: All the animals of that type within range respond.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●: You can summon 2 types of animals at once.\n\n●●●●: You can summon 4 types of animals at once.\n\n●●●●●: You can summon all animals within range at once."
          },
          {
            "id": "feral_claws",
            "name": "Feral Claws",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Strength",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You reach to your Beast and borrow its ferocity, turning your nails into sharp claws, extending your mouth into a feral maw, or making a similar transformation. For the duration of this power, your unarmed attacks with this transformed weapon inflict damage equal to your dots in Strength.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●● ●: Your unarmed attacks with this power inflict baneful damage instead of normal damage."
          },
          {
            "id": "beast_shape",
            "name": "Beast Shape",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Stamina",
            "cost": "3 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You commune with your Beast and assume the form of an animal you know well, which must be roughly the same size as you. While in animal form, you retain all your normal stats but gain a +2 dice bonus to tests the assumed animal would have an advantage on, like tracking prey when in wolf form. While in animal form, you can’t speak and can’t use Social or Mental Discipline powers unless the target is an animal of your type. If you have the Feral Whispers trait, you can speak to animals while in animal form.\n\nYou know a number of animal forms equal to your dots in this Discipline, and you can take only those forms. To change your known forms, you must drink the blood of the new animal you want to transform into and meditate on its taste, shape, smell, and overall physicality while you lie dormant during the day. At the same time, you choose one of your other known forms to forget.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can also assume the form of an animal from half to one and a half times your size.\n\n●●●●● ●: You can also assume the form of an animal from a quarter to double your size.\n\n●●●●● ●●●: You can assume the form of any animal whose blood you have tasted."
          },
          {
            "id": "plague_of_beasts",
            "name": "Plague of Beasts",
            "category": "Social",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "3 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "You place a supernatural mark upon a target, making it attract hostile attention from all animals nearby. These animals attack and pester the target, harassing its every action and leaving it distracted.\n\nWhen you use this power, you must succeed on a Power test against the target’s Composure. The number of successes determines how many animals appear to harass the target, and how much they affect it. If there are no animals nearby, the power has no effect. The target suffers the effects until the power ends, the animals can’t reach the target, or the animals leave or die.\n\n1: One animal responds. The target suffers a -1 dice penalty to all tests.\n\n2: As 1 success, except one-quarter of the animals within range respond, and the penalty increases to -2.\n\n3: As 2 successes, except half the animals within range respond. In addition, the animals attack the target at the start of each the target’s turns, dealing damage equal to half your dots in this Discipline.\n\n4: As 3 successes, except most of the animals within range respond, and the damage is equal to your dots in this Discipline.\n\n5: As 4 successes, except all the animals within range respond, and the penalty increases to -3.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: You can use this power on a number of targets equal to half your dots in this Discipline.\n\n●●●●● ●●: You can use this power on any number of targets within range."
          }
        ]
      },
      {
        "id": "auspex",
        "name": "Auspex",
        "clans": "Giovanni, Malkavian, Salubri, Toreador, Tremere",
        "description": "Enhancing existing senses, tapping into a “sixth” sense, and sensing and connecting with the minds of those nearby.",
        "powers": [
          {
            "id": "analyze",
            "name": "Analyze",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Touch",
            "duration": "One turn",
            "text": "You can project your extraordinary powers of perception to quickly analyze the information contained in an object you touch.\n\nWhen you activate this power on an object, you gain access to its contents as if you had briefly flipped through them. This power allows you to bypass passwords and locks that would otherwise enclose the object’s contents. You have access to that information only while you are holding the object; if you drop it, you lose access.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You gain access to all the information freely available on the object, as if you had carefully read all through all its contents.\n\n●●●●●: You gain any hidden knowledge within the object, such as the cipher for a coded text, files locked behind security measures, or contents concealed by a riddle.\n\n●●●●● ●●: You discover any knowledge within the object hidden by supernatural means, such as those hidden by Obfuscate powers, provided you have more dots in this Discipline than that power’s dot rank."
          },
          {
            "id": "heightened_senses",
            "name": "Heightened Senses",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Wits",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You enhance your senses to extreme degrees, doubling your normal range of hearing, sight, and smell. While this power is active, you gain a bonus equal to your dots in this Discipline to your Awareness and Investigation tests. However, if you are exposed to loud noises, bright lights, or overpowering smells, you must succeed on a Dexterity + Wits test against a Difficulty determined by the intensity of the sensory input or suffer a -2 dice penalty to all perception-based tests until the end of the scene."
          },
          {
            "id": "sense_the_unseen",
            "name": "Sense the Unseen",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Wits",
            "cost": "1 Willpower",
            "difficulty": "Resolve",
            "distance": "Self",
            "duration": "One scene",
            "text": "You attune your senses to perceive supernatural presences normally hidden from the naked eye, letting you detect supernatural beings concealed by their powers, or even lingering traces of Discipline powers.\n\nUntil this power ends, you can sense supernatural creatures and their powers within Short distance. If a creature is hidden by a supernatural power, make a contested Power test against that power’s creator. If an object is hidden, make a Power test against a Difficulty equal to that power’s dot rank. This power has no effect against objects and creatures hidden by non-supernatural means."
          },
          {
            "id": "premonition",
            "name": "Premonition",
            "category": "Mental",
            "activate": "Minor action or reaction",
            "attribute": "Wits",
            "cost": "2 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your supernatural perception now extends through time, letting you experience flashes of insight that reveal information or warn you of harm. To activate this as a reaction, you must be the target of an attack, and the attacker becomes the power’s target.\n\nOutside a conflict, this power reveals visions that hint at hidden or hard-to-reach information, letting you find a clue you might have missed or learn of potential dangers nearby. It lets the Storyteller subtly speed up play by revealing important information to you, even if it’s cryptic or incomplete.\n\nDuring a conflict, this power gives you strong impressions a target you can see within Short distance. For the duration of the power, you can spend 1 Willpower per turn to gain a dice bonus equal to half your dots in this Discipline to defend against attacks made by that target."
          },
          {
            "id": "psychometry",
            "name": "Psychometry",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "Varies",
            "distance": "Touch",
            "duration": "One turn",
            "text": "Your extraordinary perception can read the emotional and psychic residue left on an object that was used in an emotionally intense situation. As part of activating this power, touch an object and make a Power test against a Difficulty determined by how long ago and how intense the circumstances of its use were. Gleaning information about the wielder of a murder weapon used a few days earlier is Difficulty 2, while sensing the surroundings in which a 300-year-old letter was written approaches Difficulty 5 or higher. Each success lets you learn the answer to one question you have regarding the object’s use or what happened around it."
          },
          {
            "id": "telepathy",
            "name": "Telepathy",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your supernatural perception can now pierce the minds of others, letting you read their thoughts, and project your own into them. You can project your thoughts into the mind of a target you can see within range without a test. At first, you can transmit only simple phrases, emotions, and sensations. You can also read the surface thoughts of a willing target without a test, but doing so against an unwilling target requires a Power Test against its Resolve. Each success lets you sense one of its surface thoughts.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can project and detect more complex thoughts and phrases, the kind that usually lie beneath surface thoughts and actions. You can now hold a two-way, telepathic conversation with a target.\n\n●●●●● ●: You can create a network of telepathic communication among yourself and a number of willing targets equal to half your dots in this Discipline."
          },
          {
            "id": "clairvoyance",
            "name": "Clairvoyance",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Wits",
            "cost": "3 Willpower",
            "difficulty": "None",
            "distance": "Medium",
            "duration": "One scene",
            "text": "You hone your extrasensory powers to project your senses of sight and hearing to distant places. While this power is active, you project both your sight and hearing to a spot within Medium distance. The location must be one you can see, even remotely through a security camera, or one you have visited previously, as long as it’s in range.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: You can project your sight and hearing to a spot within Long distance. You must still be able to see the location.\n\n●●●●● ●●: You can project your sight and hearing to a spot within Far Away distance. You no longer need to be able to see the location."
          },
          {
            "id": "share_senses",
            "name": "Share Senses",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Wits",
            "cost": "3 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "You extend your extraordinary perception through the senses of other individuals while still perceiving your own surroundings. When you activate this power, choose one creature you can see within range and decide whether to tap into only one, some, or all the target’s senses. If a creature has your blood in its body, you can target it no matter the distance. The target is unaware of the intrusion, though Sense the Unseen and similar powers can detect that it is under the power’s influence. If you tap into all a target’s senses, you suffer a -1 dice penalty to all tests due to the distraction of sensing from two perspectives at once.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●● ●: Increase the duration to a single night.\n\n●●●●● ●●●: Increase the duration to until you end it, you go into torpor, or you reach Final Death. You can have this power affect, at a most, a number of targets at once equal to half your dots in this Discipline."
          }
        ]
      },
      {
        "id": "blood_sorcery",
        "name": "Blood Sorcery",
        "clans": "Banu Haqim, Tremere",
        "description": "Manipulating blood to cause fantastical and magical effects.",
        "powers": []
      },
      {
        "id": "celerity",
        "name": "Celerity",
        "clans": "Banu Haqim, Brujah, Gangrel, Toreador",
        "description": "Moving quickly and gracefully, including dodging incoming attacks, moving nimbly across precarious surfaces, and even catching or deflecting bullets.",
        "powers": [
          {
            "id": "cat_s_grace",
            "name": "Cat's Grace",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You can walk and even run across ledges and wires effortlessly, keeping your balance on the slimmest of supports. You automatically succeed on Dexterity tests to keep your balance while moving across ledges, wires, and other narrow supports. The surface you move across must still be able to support your weight.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: You can run up and along walls, ledges, and other vertical surfaces.\n\n●●●: You can run up and along ceilings.\n\n●●●●●: You can run across water.\n\nWhen moving across a wall, ceiling, water, or other vertical, upside down, or non-solid surface, you must start and end your turn upright on a solid surface. If you end your turn on a wall, ceiling, or water, you fall (or sink) unless you have a means of clinging to that surface or staying afloat."
          },
          {
            "id": "rapid_reflexes",
            "name": "Rapid Reflexes",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "Your supernatural speed and agility make you a hard target to pin down and help you avoid attacks. You gain a +1 dice bonus to Dodge defense tests for the duration.\n\nWhen you use this power, make a Power test against a Difficulty of 0. The power lasts for a number of additional turns equal to the successes you obtain.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: The bonus increases to +2 to Dodge tests.\n\n●●●●●: The bonus increases to +3 to Dodge tests.\n\n●●●●● ●●: The bonus increases to +4 to Dodge tests."
          },
          {
            "id": "vibrating_hands",
            "name": "Vibrating Hands",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Dexterity",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Close",
            "duration": "Instantaneous",
            "text": "You harness all your speed to make your hands vibrate at an extraordinary rate, letting you touch objects and warp, crack, or otherwise damage them with little effort. When you activate this power, make a Power test against a Difficulty of 0 and touch an object within range. The number of successes determines what kind of object you can damage. A damaged object is no longer fit for use, imposing a -2 dice penalty to any test using it, but it can still be repaired.\n\n1: Plastic, wood, and glass.\n\n2: Iron, concrete, and granite.\n\n3: Reinforced iron, steel, and bulletproof glass.\n\n4: Hardened steel.\n\n5: Titanium and diamond.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: The target object is shattered or otherwise destroyed.\n\n●●●: You can instead attack a creature, adding half your dots in this Discipline to damage with unarmed attacks and light melee weapons.\n\n●●●●●: When you use this power to attack, the extra damage now also applies to medium melee weapons.\n\n●●●●● ●●: When you use this power to attack, the extra damage now also applies to heavy melee weapons."
          },
          {
            "id": "blink",
            "name": "Blink",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You move extraordinarily fast, leaving any pursuer behind and your enemies dumbfounded by your speed. While this power is active, you can move twice each turn, letting you move up to Medium distance in a single turn.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: If you move during your turn, the first melee attack you make that turn treats the target as if it had the surprised condition."
          },
          {
            "id": "rush_job",
            "name": "Rush Job",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your supernatural speed and grace let you perform complex and time consuming tasks in the blink of an eye. While this power is active, you can perform tasks in a fraction of the time they normally take. A tasks that requires a full turn is completed in a few seconds, and you can use a minor action for something that would otherwise require a full action. Likewise, a task that would take a full scene, or up to 30 minutes, can be completed in 1 minute. This power can’t speed up attacks, defenses, or any other actively resisted task.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can perform 2 time-consuming tasks at once.\n\n●●●●● ●: You can perform 3 time-consuming tasks at once."
          },
          {
            "id": "willful_grace",
            "name": "Willful Grace",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Resolve",
            "cost": "2 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You concentrate, harnessing your supernatural agility to hone your reflexes and grace. When you activate this power, increase your Dexterity by 1 until the end of the scene. This increase counts a form of [Blood Surge] and is bound by its limits.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can spend additional Willpower to increase your Dexterity further. Each Willpower spent increases Dexterity by 1. This effect must still follow the limits of [Blood Surge]."
          },
          {
            "id": "blurred_passage",
            "name": "Blurred Passage",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "3 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "Your supernatural speed lets you vibrate parts of your body fast enough to pass through solid objects and materials. You can reach through a wall to grab something on the other side and bring it back; or kick through a door to knock a chair blocking it, and the like.\n\nWhen you activate this power, choose a part of your body to affect, such as your left arm, right leg, or head, and you can use that part to pass through solid objects. If that part is inside an object at the end of your turn, that limb suffers the Mangled condition. At the end of your turn, before determining whether the limb is harmed, you can spend 1 Willpower to extend the duration until the end of your next turn.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: You can now vibrate your entire body to pass through solid objects. If you are inside an object at the end of your turn, you are shunted to the nearest open space outside it and take 10 damage."
          },
          {
            "id": "fighter_s_alactrity",
            "name": "Fighter's Alactrity",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "3 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "Your mastery of this Discipline lends you extraordinary agility, letting you act twice as often as anyone else in a turn. When you activate this power, you gain 1 extra action this turn. You can prolong the effect by spending 1 Willpower at the start of each subsequent turn to keep the extra action. The effect ends if you don’t pay that upkeep.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●● ●: You can gain up to 2 additional actions per turn, but you must pay 1 Willpower per extra action to maintain the effect.\n\n●●●●● ●●●: You can gain up to 3 additional actions per turn, but you must pay 1 Willpower per extra action to maintain the effect."
          }
        ]
      },
      {
        "id": "corruption",
        "name": "Corruption",
        "clans": "Lasombra, Ministry",
        "description": "Tempting others away from firmly held beliefs, and poisoning their minds and bodies.",
        "powers": [
          {
            "id": "contradict",
            "name": "Contradict",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Willpower",
            "difficulty": "Resolve",
            "distance": "Self",
            "duration": "One turn",
            "text": "Your words carry a subtle hypnotic effect that makes others quickly change their minds, saying or doing the opposite of what they originally intended. An arresting officer lets the prisoner go, a marriage proposal turns into a bitter denunciation, and a left turn becomes a right turn. Make a Power test against the target’s Resolve. On a success, on its next action, the target is compelled to say or do the opposite of what it intended.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: The duration increases to one scene, and the target is compelled to change its goals, arguments, or course of action for the duration."
          },
          {
            "id": "nightmare_glimpses",
            "name": "Nightmare Glimpses",
            "category": "Social",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "1 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "As you look the target in the eye, you make it see you as a manifestation of its worst fears, leaving it shivering with fear at the sight of you. Make a Power test against the target’s Composure. On a success, the target suffers the Scared condition for the duration. This effect ends early if the target can no longer see you.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: The target instead suffers the Terrified condition.\n\n●●●●●: You can affect a number of targets equal to your dots in this Discipline."
          },
          {
            "id": "self_doubt",
            "name": "Self Doubt",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "By questioning an individual’s competence, you feed its insecurities and make it doubt itself. Choose an activity or task, such as painting or attacking, and make a Power test against the target’s Composure. On a success, the target suffers a -1 dice penalty to all tests related to that activity or task. The effect ends early if the target succeeds on a task related to that activity with at least 3 successes. Since NPCs don’t roll dice, the effect ends early on an NPC only if the activity performed requires a PC to defend against it, and that PC suffers a painful failure.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: If the target is a vampire, it must spend 1 extra Willpower in addition to the normal cost for any Discipline power it activates.\n\n●●●●●: You can affect a number of targets equal to your dots in this Discipline."
          },
          {
            "id": "dark_secrets",
            "name": "Dark Secrets",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "2 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One turn",
            "text": "As you talk, your words infiltrate the minds of others and pull their darkest secrets out of them. Make a Power test against the target’s Composure. On a success, the target blurts out one of its deepest, darkest secrets. This should be something the target feels shame over, and not necessarily information the target is hiding on someone else’s behalf; the secret should be something personal. If you use this information against the target in a social situation, you gain a +2 dice bonus on social attacks against it.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You compel the target to indulge its darkest urges, making it suffer a -2 dice penalty to tests unrelated to doing so, but it will also gain a +2 dice bonus to tests related to indulging in those urges."
          },
          {
            "id": "poison_heart",
            "name": "Poison Heart",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "2 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One turn",
            "text": "You feed the Beast of other vampires with poisoned words, making them more likely to lose control and act like the monsters they truly are. Make a Power test against the target’s Composure. On a success, the target marks a number of boxes on its Beast tracker equal to the successes you obtained. If the target is an NPC, it instead suffers Willpower damage equal to your dots in this Discipline plus 1 for each success obtained beyond the first.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can affect a number of targets equal to half your dots in this Discipline."
          },
          {
            "id": "tainted",
            "name": "Tainted",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "2 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your words make a creature recall its most shameful acts and thoughts, leaving it ashamed and unstable. Make a Power test against the target’s Composure. On a success, the target suffers the [Emotional] and Held conditions. On its turn, it can use a minor action and spend 2 Willpower to force you to repeat the Power test, losing the [Emotional] and Held conditions on a failure.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can affect a number of targets equal to half your dots in this Discipline."
          },
          {
            "id": "dissociate",
            "name": "Dissociate",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "3 Willpower",
            "difficulty": "Composure",
            "distance": "Touch",
            "duration": "One scene",
            "text": "You weaken the ties of interpersonal relationships, cutting off a target from its allies and leaving it feel distant from them. Make a Power test against the target’s Composure. On a success, the target feels disconnected from its allies. It can’t use the assist action, suffers a -2 dice penalty to tests to defend or aid its allies, has the intensity of all its Blood Bonds reduced by one step, and ignores any vinculum it has for the duration.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: You can affect a number of targets equal to half your dots in this Discipline, and the Distance increases to Short."
          },
          {
            "id": "fool_the_heart_s_eye",
            "name": "Fool the Heart's Eye",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your powers of manipulation make a target feel like you are a trusted ally, and it confides in you. Make a Power test against the target’s Composure. On a success, the target treats you as a loved one: it trusts what you say, helps you anyway it can, and defends you from threats. Any social test you make against it gains a +2 dice bonus, as it is more inclined to trust you. The effect ends early if you or your allies take an aggressive action, including social attacks, against the target.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: You can affect a number of targets equal to half your dots in this Discipline."
          }
        ]
      },
      {
        "id": "dominate",
        "name": "Dominate",
        "clans": "Lasombra, Malkavian, Tremere, Tzimisce, Ventrue",
        "description": "Controlling the actions, mind, and sometimes emotions of a person or a group, turning them into puppets with limited autonomy or self-awareness.",
        "powers": [
          {
            "id": "apathy",
            "name": "Apathy",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "You use your supernatural powers to suppress a target's emotions, leaving it numb. Make a Power test against the target’s Composure. On a success, the target no longer suffers the effects of the [Emotional] or [Greater Emotional] conditions for the duration, and it suffers a -1 dice penalty to all tests not related to self-preservation.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You completely remove the [Emotional] or [Greater Emotional] conditions from the target, and the penalty increases to -2.\n\n●●●●●: You can affect a number of targets equal to half your dots in this Discipline. In addition, affected targets become immobilized, unable to summon the energy to move at all."
          },
          {
            "id": "cloud_memory",
            "name": "Cloud Memory",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "Permanent",
            "text": "You make a non-animal target forget the present moment and the last few minutes. Make a Power test against the target’s Resolve. On a success, the target forgets up to the last 5 minutes (you choose how long). This power doesn’t let you see the target’s memories; it works more like a blanket wipe of that stretch of time. The target is aware of the gap but not its source.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You can create, change, or remove up to 10 minutes’ worth of memories, but all memories must have happened within the last 24 hours. Since you can’t read the target’s memories, this power resembles blindly painting over an existing canvas, though you can target specific moments, such as “between 10:04 and 10:05 this morning” or “the 2 minutes when we met earlier this evening.”\n\n●●●●●: You can create, change, or remove up to 1 hour’s worth of memories from up to 5 years ago. At this rank, your manipulation is as precise as a surgeon’s. While you still can’t read the target’s memories, you know the general content of the memories you seek to change, and you can make fine modifications, such as replacing one person’s face in a memory with another’s.\n\n●●●●● ●●: You can create, change, or remove up to 24 hours’ worth of memories, regardless of how long ago they occurred."
          },
          {
            "id": "command",
            "name": "Command",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One night or until completed",
            "text": "You give a simple, one-sentence, verbal command to a non-animal target you can see within Short distance. The target must be able to hear you and understand the language you speak. Make a Power test against the target’s Resolve. On a success, the target must obey the command. This power suppresses the target’s mind, desires, and sense of self, effectively turning it into a semi-autonomous puppet, limited to basic actions and to literal interpretations of your command.\n\nThe target can’t be commanded to tell you its life story, secrets, hidden knowledge, or darkest desires, as such deeper thoughts and memories are suppressed by this power. Nor can it infer subtle meaning behind your command. A vague command of “take me to your leader” is as likely to have a ghoul worker take you to its vampire master as to take you to its manager at work, depending on where it is when you ask. The command can’t force the target to do something harmful to itself or to put itself in direct danger.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You can target up to 3 additional non-animal targets for each dot you have in this Discipline. You make your test against the strongest member of the group, and all targets receive the same command.\n\n●●●●●: The command can force a target or targets to do something harmful to itself or to put itself in direct danger."
          },
          {
            "id": "stifle_will",
            "name": "Stifle Will",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One turn",
            "text": "You look a target in the eye and stifle its individualism and access to its mental reserves, leaving it unable to draw on its inner strength. Make a Power test against the target’s Resolve. On a success, the target can’t use powers, abilities, or other features that require or expend Willpower to activate them for the duration. For each success beyond the first, this power lasts an additional turn. If the target is an NPC, it is instead cut off from a number of its abilities equal to half your dots in this Discipline, determined randomly.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can affect a number of targets equal to half your dots in this Discipline."
          },
          {
            "id": "submerged_directive",
            "name": "Submerged Directive",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "Instantaneous or one night",
            "text": "You use your powers of dominance to implant a suggestion in a target’s subconscious.\n\nYou can cause the effect to happen immediately or designate the events that trigger the suggestion’s release. You can’t force a creature to do something innately against its nature or harmful to it.\n\nMake a Power test against the target’s Resolve. On a success, you implant a complex command it must perform immediately, or when the conditions are met. The conditions themselves can’t be complex, however, and must be triggered by simple sensory input, such as seeing a particular person, hearing a certain song, or touching grass.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: The implanted suggestion can lie dormant indefinitely, activating when the conditions are met.\n\n●●●●● ●: You can affect a number of targets equal to half your dots in this Discipline."
          },
          {
            "id": "suppress_mind",
            "name": "Suppress Mind",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your power to subjugate the minds of others can now suppress a target’s intellectual prowess. Make a Power test against the target’s Resolve. On a success, you can reduce one of the target’s Mental Attributes by a number of points equal to half your dots in this Discipline. Against an NPC, this instead reduces the Difficulty of tests to affect its mental state by the same amount."
          },
          {
            "id": "deliver_command",
            "name": "Deliver Command",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your power to manipulate the minds of others is now contagious, letting you extend your control through your subjects. Choose a Dominate power you know with a rank at least one lower than your number of dots in this Discipline. You can implant that power into a target you can see within range and have the target deliver that power to another individual. The target of this power doesn’t need to know it carries your power.\n\nWhen you use this power, you must either specify the final target or establish a trigger for when the implanted power is delivered, such as the next person to walk through a particular door, or the first person the subject meets when entering a specific building. You must pay this power’s and the implanted power’s costs. If the implanted power requires a Power test, you make that test when it is delivered; you know when it is delivered.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: The duration becomes indefinite, as the subject carries the implanted power until it can make the delivery or dies."
          },
          {
            "id": "sap_will",
            "name": "Sap Will",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Intelligence",
            "cost": "3 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your power claws at a target’s mind, sapping at its motivation, personality, and vibrancy, until it collapses. When you activate this power, choose a target you can see within range. Until this power ends, each time you make a social attack against the target, make a Power test against its Resolve instead. On a success, you deal damage to its Willpower equal to your dots in this Discipline.\n\nA mortal reduced to 0 Willpower experiences a nervous breakdown, its shape and nature determined by the mortal’s personality. A vampire reduced to 0 Willpower risks a rage frenzy, as normal."
          }
        ]
      },
      {
        "id": "fortitude",
        "name": "Fortitude",
        "clans": "Gangrel, Salubri, Ventrue",
        "description": "Fortifying both your body and mind against external forces, maintaining control of yourself physically and mentally, and sharing some of your superior vitality and sturdiness with your allies.",
        "powers": [
          {
            "id": "endure",
            "name": "Endure",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Stamina",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your supernatural endurance makes you more resistant to physical exhaustion, letting you keep going when others would collapse. You gain a +2 dice bonus to tests to resist the Tired and Exhausted conditions for the duration.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You don’t experience the Starving aspect of the Hungry Vitae threshold.\n\n●●●●: You are immune to the Tired and Exhausted conditions.\n\n●●●●●: If you are reduced to 0 Vitae, you don’t enter torpor. While in this state, you can’t spend Vitae on Discipline powers, and any damage you take becomes baneful damage."
          },
          {
            "id": "fortify",
            "name": "Fortify",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Stamina",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "When you are the target of a melee attack, you can use a reaction to activate this power, thickening your skin and hardening your muscles to block the attack. Make a Power test against the Difficulty instead of a standard defense test. On a success, you take no damage, as normal for a successful defense test. Until the start of your next turn, you can use a reaction to make this Power test in place of a standard defense test, provided you have available reactions. You pay the Vitae cost only the first time you activate the power, not each time you use this reaction while the power is active.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: You can use this power to defend against ranged attacks.\n\n●●●: This power lasts for two turns.\n\n●●●●●: This power lasts for one scene."
          },
          {
            "id": "unswayable_mind",
            "name": "Unswayable Mind",
            "category": "Mental",
            "activate": "Minor action or reaction",
            "attribute": "Composure",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "You bolster yourself against attempts to sway you through charm, coercion, and wiles. To activate this as a reaction, you must be the target of a social attack in a conflict or of an effect that would affect your mind or emotions.\n\nFor the duration, you gain a dice bonus equal to half your dots in this Discipline to your Social defense tests. This bonus also applies against Discipline powers that would affect your mind, such as those in the Dominate Discipline."
          },
          {
            "id": "restore_limbs",
            "name": "Restore Limbs",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Stamina",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "Permanent",
            "text": "Your restorative powers are so strong that you can recover the use of wounded limbs almost instantly. When you activate this power, you remove the Mangled condition from one of your limbs, making it whole again.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●: Feed a willing target within Close distance 1 Vitae as part of activating this power to restore its Mangled limb.\n\n●●●●: Restore one of your own lost limbs, provided you have most of the limb available.\n\n●●●●●: Feed a willing target within Close distance 1 Vitae as part of activating this power to restore one of its lost limbs, provided you have most of the limb available."
          },
          {
            "id": "shared_resilience",
            "name": "Shared Resilience",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Stamina",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Close",
            "duration": "One scene",
            "text": "By sharing your Vitae with a target, you lend it your supernatural resilience, making it more resistant to damage while weakening your own resistance. Choose a willing target within range and feed it the 2 Vitae this power costs. For the duration, the target reduces any damage it takes by your generation modifier (this is in addition to any reduction it might have from its own generation modifier), and you no longer reduce damage you take by your generation modifier."
          },
          {
            "id": "unmoving",
            "name": "Unmoving",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Stamina",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You set your feet on the floor and draw on your supernatural blood to ground yourself. You move only if you choose to and otherwise can’t be moved against your will. In addition, you gain a dice bonus equal to half your dots in this Discipline to tests to defend yourself against [tussle] attacks. This power lasts until the end of the scene or until you choose to end it."
          },
          {
            "id": "purification",
            "name": "Purification",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Resolve",
            "cost": "3 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "Permanent",
            "text": "Your blood makes you resilient in body and mind, letting you escape the bonds of lesser powers. You can remove the effects of one 1-dot Social or Mental power from yourself. This power affects only the base form of a power, not its [Maturing] aspects. For example, this power can clear the base, 1-dot version of the Cloud Memory power, but not that power’s 3-dot effects. If a power is ongoing, such as the Awe power, you remove the effect and protect yourself against that effect from that vampire until the end of the scene.\n\nYou can remove the effects of a higher-rank power, but you must succeed on a contested Power test against that power’s creator. On a failure, you can’t try to remove that power again until the next night.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can remove one Social or Mental power with up to a 2-dot rank without needing a contested Power test.\n\n●●●●●: You can remove one Social or Mental power with up to a 3-dot rank without needing a contested Power test."
          },
          {
            "id": "retributive_hide",
            "name": "Retributive Hide",
            "category": "Physical",
            "activate": "Minor action or reaction",
            "attribute": "Stamina",
            "cost": "3 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You fortify your body to turn some of the harm done to you back on its source. Bullets shatter when they hit you, swords dull as they slice your tough skin, and punches crack against your hide. To activate this power as a reaction, you must be the target of an attack.\n\nFor the duration, damage you take to your Vitae from attacks is also felt by whatever struck you. If it was a projectile from a ranged weapon, the projectile is destroyed. If it was a melee weapon, the weapon dulls, cracks, or is similarly damaged, becoming useless until repaired. If what struck you is part of a creature, that creature takes damage to its health or Vitae equal to half the damage you take, after any reductions from powers or your generation modifier are calculated. Baneful damage isn’t impacted by this power.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●● ●: You can spend 1 extra Vitae for an affected creature to take damage equal to the damage you take instead."
          }
        ]
      },
      {
        "id": "necromancy",
        "name": "Necromancy",
        "clans": "Giovanni, Tremere",
        "description": "Communing with spirits, speaking with the dead, inducing and controlling decay, and commanding the dead and undead.",
        "powers": []
      },
      {
        "id": "obfuscate",
        "name": "Obfuscate",
        "clans": "Banu Haqim, Malkavian, Ministry, Nosferatu, Ravnos, Salubri",
        "description": "Bewildering and mystifying the senses, typically via illusions and mind tricks only the sufferer can perceive, leaving them unable to trust their own senses and keeping you safe.",
        "powers": [
          {
            "id": "cloak_of_shadows",
            "name": "Cloak of Shadows",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Dexterity",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You use some form of cover to hide yourself. While motionless, you remain obscured and difficult to detect. For the duration, you gain a dice bonus equal to your dots in this Discipline to any tests you make to sneak or hide.\n\nThis effect extends to what you are wearing and carrying. It doesn’t affect another creature, unless that creature is small enough to fit in one of your pockets or inside your coat, or is otherwise disguised or hidden on your person. This power ends early if you move, attack, make a sound, or if someone detects you.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: Moving no longer ends this power early. As long as you emit no overpowering odors, make no sound louder than a whisper, and take no action that would obviously reveal you, you remain hidden from those around you, as your power manipulates their senses to obscure your presence.\n\n●●●●: You no longer need cover to hide when you activate this power; you can simply disappear even while under direct observation. In addition, you can now activate this power as a Minor Action.\n\n●●●●●: You can extend this power’s effect to a number of friendly targets of your choice equal to your dots in this Discipline, but you must spend 1 Willpower at the start of each of your turns to maintain the extended effect. Each target must be within Close distance when you activate this power and must stay within Short distance to remain affected. If one target performs an action that would end the power early, the power ends for that target only. If you end the power early, such as by not spending the Willpower that turn, it ends for all targets."
          },
          {
            "id": "conceal",
            "name": "Conceal",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "Wits",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your powers of subterfuge help you hide objects you carry, making others overlook them. When you activate this power, choose a number of small objects, including light weapons, equal to your dots in this Discipline. The objects become supernaturally hidden, and anyone who makes a cursory inspection of you can’t detect them. If someone inspects you carefully, you must make a Power test against its Wits. On a success, it fails to detect the objects.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You can also hide medium objects, including medium weapons.\n\n●●●●●: You can also hide large objects, including heavy weapons."
          },
          {
            "id": "silence_of_death",
            "name": "Silence of Death",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Dexterity",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You become silent, nullifying all sound you make. This works only on creatures within earshot and doesn’t fool microphones or other electronic sound detectors. It affects only the sense of hearing, and it doesn’t eliminate sounds you make outside of yourself, such as throwing or dropping objects or slamming doors.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You can choose for the silence to extend outward from you up to Close distance and nullify the sound of 1 additional creature you can see for each dot you have in this Discipline. This effect is centered on you and moves with you, silencing the sounds of you and your additional targets in that area.\n\n●●●●: You can activate this power as a minor action.\n\n●●●●● ●: You can choose for the silence to extend outward from you up to Short distance."
          },
          {
            "id": "double_talk",
            "name": "Double Talk",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "Wits",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your supernatural subterfuge can now infuse your speech, letting you transmit hidden messages that unwitting listeners can’t perceive. When you activate this power, choose a number of targets equal to your dots in this Discipline. These targets can fully understand the hidden message. All others who can hear you can’t perceive the secret information. However, if someone suspects something is afoot, it can try to resist this power. You must succeed on a Power test against its Wits to keep it from understanding your hidden message."
          },
          {
            "id": "fool_s_gold",
            "name": "Fool's Gold",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "Wits",
            "distance": "Short",
            "duration": "One scene",
            "text": "You project your subterfuge powers to mask an object, making it appear to be something it’s not. When you activate this power, choose a number of small objects within range, including light weapons, equal to half your dots in this Discipline. These objects appear to be something other than what they are. Someone who touches the object for more than a brief moment feels its true texture and can attempt to see through the disguise. If this happens, make a Power test against the target’s Wits. On a success, the target keeps believing what it sees rather than what it feels.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can also disguise medium objects, including medium weapons.\n\n●●●●● ●: You can also disguise large objects, including heavy weapons."
          },
          {
            "id": "mind_tricks",
            "name": "Mind Tricks",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "You can hinder the perception of others, manifesting brief hallucinations at the edges of their sensory ranges, like a whisper they thought they heard, movement in their peripheral vision, or a brief but pungent scent.\n\nWhen you activate this power, choose a number of targets equal to half your dots in this Discipline. Make a Power test against each target’s Resolve. On a success, the target is confused and suffers a -1 dice penalty to all actions that rely on its senses."
          },
          {
            "id": "horrid_reality",
            "name": "Horrid Reality",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "3 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "You make a creature see its most horrific fears manifest before it. When you activate this power, choose a target you can see within range. If the target is a mortal, it is affected automatically. To affect a supernatural being, you must make a Power test against its Composure. On a success, you cause the target to see, smell, hear, and feel something frightening and specific to it, and it suffers the Terrified condition. You don’t know the nature of the frightening thing, but the target believes it to be real for the scene.\n\nThis effect can end early if someone convinces the target what it senses isn’t there, such as by standing unscathed in a fire only the target perceives. If a creature tries to convince the target of the truth while the target is in combat or another situation of heightened danger, you can stop that creature by succeeding on a Power test against its Charisma."
          },
          {
            "id": "mask_of_a_thousand_faces",
            "name": "Mask of a Thousand Faces",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "3 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "Your powers of subterfuge allow you to blend into the crowd, making you nondescript and above suspicion. You make yourself appear as a nondescript stranger, someone expected to be in the area, such as a construction worker at a construction site. You arouse little suspicion as long as your presence is at all plausible, and you can even safely converse with individuals at the location. This power doesn’t provide any personal identification or other means of passing an identity check. Anyone who looks at you sees a forgettable face of the same gender and roughly the same build and height as you. Even your clothing takes on a forgettable appearance suited to your location.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●● ●: You can affect a number of additional willing creatures within Short distance equal to half your dots in this Discipline. A creature must stay within range to remain affected."
          }
        ]
      },
      {
        "id": "oblivion",
        "name": "Oblivion",
        "clans": "Lasombra",
        "description": "Manipulating shadows to hide or transport you or your words, frighten or capture potential prey, and transform you into an unliving shadow.",
        "powers": [
          {
            "id": "cloud_of_darkness",
            "name": "Cloud of Darkness",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Short",
            "duration": "One scene",
            "text": "You harness the nearby shadows to create a cloud of darkness that obscures those inside it. You create a cloud of darkness at a point you can see within range. Every creature within Close distance of the cloud gains a +2 dice bonus to tests related to sneaking and hiding. Mundane light sources within Close distance of the cloud are dimmed: electric lights flicker and dim, torches get low, and so on.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You can move the cloud up to a Short distance as a minor action, and the cloud also dims sounds within it.\n\n●●●●●: The cloud now affects everyone within Short distance."
          },
          {
            "id": "shadow_play",
            "name": "Shadow Play",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "1 Willpower",
            "difficulty": "None",
            "distance": "Short",
            "duration": "One Scene",
            "text": "Your connection with the Abyss lets you reshape the shadows around you, making them appear however you want. You can reshape shadows into two-dimensional images. You might make the shadow you project on the wall appear as the shadow of a large wolf or as the silhouette of another creature. You can reshape 1 shadow per dot in this Discipline, and each image must be no larger than yourself.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: The shadow images can now be twice your size as large as yourself.\n\n●●●●●: The shadow images can now be three times your size."
          },
          {
            "id": "shadow_tools",
            "name": "Shadow Tools",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Dexterity",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Close",
            "duration": "One scene",
            "text": "You manipulate nearby shadows, compressing them into useful forms and creating tools and small objects of solid shadow. You can create a number of simple objects, tools, or garments equal to your dots in this Discipline. These objects can have no complex mechanical parts, can’t be weapons, and must be no larger than yourself. Each acts as its real counterpart, as long as it remains in shadow, and disappears when exposed to bright light.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: You can create weapons, though not any that require ammunition."
          },
          {
            "id": "draining_darkness",
            "name": "Draining Darkness",
            "category": "Social",
            "activate": "Minor action",
            "attribute": "Manipulation",
            "cost": "2 Willpower",
            "difficulty": "None",
            "distance": "Short",
            "duration": "One scene",
            "text": "The eternal hunger of the Abyss suffuses the shadow you project over your enemies, sapping their force of will and leaving them more vulnerable. When you activate this power, you project a shadow along the ground from yourself toward a target within range. While that target remains within the shadow, it takes additional Willpower damage from your social attacks equal to half your dots in this Discipline. On your turn, you can move the shadow, but it must always end beneath a target within range."
          },
          {
            "id": "grasping_shadows",
            "name": "Grasping Shadows",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Intelligence",
            "cost": "2 Vitae",
            "difficulty": "Dexterity",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your command over shadows grows so strong that you can now make a target’s own shadow physically grasp its owner. Make a Power test with a Difficulty equal to the target’s Dexterity. On a success, the target suffers the Held condition. On its turn, the target can use an action to try to break free, and you must succeed on a Power test to stop it; on a failure, the target ends the condition on itself.\n\nWhile this power is active, you can use an action to make the shadow tighten its hold. Treat this as a crush attack as though you were [tussling] the target, making a Power test against the target’s Dexterity. The damage inflicted is equal to half your dots in this Discipline, plus 1 per extra success. This power ends early if the shadow is touched by sunlight."
          },
          {
            "id": "shadow_mask",
            "name": "Shadow Mask",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Intelligence",
            "cost": "2 Willpower",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One scene",
            "text": "You find shelter in the shadows, disappearing from the world while the shadows hide you. While motionless in an area of shadow or darkness, you are undetectable unless you deliberately draw attention to yourself. For example, a passing dog can’t hear or smell you unless you speak. While benefiting from this power, you can use any power that doesn’t require movement.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can affect a number of additional targets within Close distance equal to half your dots in this Discipline. The targets must remain motionless, losing the power’s benefits if they move."
          },
          {
            "id": "night_terrors",
            "name": "Night Terrors",
            "category": "Mental",
            "activate": "Minor action",
            "attribute": "Manipulation",
            "cost": "3 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "You project a wave of shadows and make others see their worst nightmares within it, instilling a powerful fear in their hearts. Choose a number of targets within range up to your dots in this Discipline, and make a Power test against each target’s Composure. On a success, a target suffers the Scared condition for the duration.\n\nOn a later turn, you can take a minor action and make a Power test against a target’s Composure. On a success, you enhance the terrors in the target’s mind’s eye, escalating it from the Scared condition to the Terrified condition. To escalate the terror in more than one target with this minor action, you must spend 1 Willpower per target beyond the first. You must make a separate Power test for each target."
          },
          {
            "id": "shadow_step",
            "name": "Shadow Step",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Dexterity",
            "cost": "3 Vitae",
            "difficulty": "None or Strength",
            "distance": "Short",
            "duration": "One turn",
            "text": "All shadows are connected through the Abyss, and you know how to use them as a shortcut to get where you want to go. You can step into a shadow large enough to cover you within Close distance and reappear in another shadow large enough to cover you within range. You must be able to see the destination shadow.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can bring a number of willing targets within Close distance with you equal to half your dots in this Discipline.\n\n●●●●●: You can now also bring unwilling targets within Close distance with you. Unwilling targets must be dragged by force, possibly through [tussling], by already being bound, or by succeeding on a Power test against the target’s Strength.\n\n●●●●● ●: You can now reappear from a shadow that is within Medium distance."
          }
        ]
      },
      {
        "id": "potence",
        "name": "Potence",
        "clans": "Brujah, Giovanni, Lasombra, Nosferatu",
        "description": "Drawing on immense physical strength and martial prowess, including leaping great distances, slamming the ground hard enough to cause a localized earthquake, and ripping opponents limb from limb.",
        "powers": [
          {
            "id": "bull_rush",
            "name": "Bull Rush",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Strength",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "You concentrate all your extraordinary strength into a charging attack, damaging your target and knocking it down. When you activate this power, you must run toward a character within Short distance and make a melee attack, gaining a number of bonus dice equal to half your dots in this Discipline. If you succeed, you inflict damage as normal and knock the target prone.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: The target is pushed up to Close distance away from you. If it strikes a solid object, the target takes extra damage equal to half your dots in this Discipline. If it hits another creature, that creature takes the same damage.\n\n●●●●: The target is pushed up to Short distance away from you.\n\n●●●●●: The target is pushed up to Medium distance away from you."
          },
          {
            "id": "imprint",
            "name": "Imprint",
            "category": "Physical",
            "activate": "Minor action or reaction",
            "attribute": "Strength",
            "cost": "1 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "You call on your superior strength to dig into a solid surface and steady yourself. To activate this power as a reaction, you must be the target of an effect that would move you against your will. For the duration, you can curl your fingers or toes into a solid surface, even steel, and gain a dice bonus equal to your dots in this Discipline against any attempts to move you.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: While this power is active, you can also climb vertical surfaces and even upside down on ceilings (provided the surface can hold your weight), leaving a trail of tiny imprints. In addition, the power now lasts until the end of the scene."
          },
          {
            "id": "soaring_leap",
            "name": "Soaring Leap",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Strength",
            "cost": "1 Vitae",
            "difficulty": "None or Stamina",
            "distance": "Self",
            "duration": "One turn",
            "text": "You focus your supernatural strength into your legs, enhancing your ability to jump. For the duration, you can jump anywhere within Short distance, leaping over obstacles and even creatures with ease. In addition, if a jump would require a test, such as leaping over a very large obstacle or up to another floor, you reduce that test’s Difficulty by your dots in this Discipline.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: You can spend 1 Willpower when you leap to land with great force. When you land, make a Power test against the Stamina of each target within Close distance. On a success, that target is knocked prone."
          },
          {
            "id": "bone_breaker",
            "name": "Bone Breaker",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Strength",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "Instantaneous",
            "text": "You concentrate your prowess into a single attack that breaks the target’s bones and mangles its muscles. As part of activating this power, make a called shot melee attack aimed at a part of the target’s body. On a success, the attack inflicts damage as normal, but the target’s body part suffers the Mangled condition. If the attack fails, you can spend 1 Willpower to maintain this effect into your next turn, applying it to an attack during that turn.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●●: If you spend 2 additional Vitae, the attack can dismember the target, ripping out the targeted body part."
          },
          {
            "id": "earthshock",
            "name": "Earthshock",
            "category": "Physical",
            "activate": "Action",
            "attribute": "Strength",
            "cost": "2 Vitae",
            "difficulty": "Stamina",
            "distance": "Short",
            "duration": "One scene",
            "text": "You slam your fists on the ground, using your tremendous strength to send the force of the blow travel through the surface until it reaches a target within range that is also in contact with that surface.\n\nWhen you activate this power, make a Power test against the target’s Stamina. The target must be within range and touching the surface you struck. On a success, you inflict damage equal to your dots in this Discipline, and the target is knocked prone. This power leaves physical evidence of its passage, such as causing earth to crack, glass to shatter, wood to warp, or tiles to snap.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: The attack can affect a number of targets within range equal to your dots in this Discipline, but the damage inflicted is equal to half your dots in this Discipline.\n\n●●●●● ●: The attack can affect all creatures within range, but the damage inflicted is equal to half your dots in this Discipline. You can exclude a number of creatures equal to your dots in this Discipline."
          },
          {
            "id": "powerful_strike",
            "name": "Powerful Strike",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Strength",
            "cost": "2 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "Your supernatural strength allows you to make devastating attacks, capable of killing a mortal with a single blow. When you activate this power, your next attack inflicts additional damage equal to half your dots in this Discipline."
          },
          {
            "id": "strike_true",
            "name": "Strike True",
            "category": "Physical",
            "activate": "Minor action",
            "attribute": "Strength",
            "cost": "3 Vitae",
            "difficulty": "None",
            "distance": "Self",
            "duration": "One turn",
            "text": "You focus your supernatural strength to make an attack strike true. When you activate this power, your next melee attack hits automatically. It counts as a basic success. The attack can’t be dodged or parried, and its damage is calculated a successful attack with no extra successes."
          },
          {
            "id": "war_cry",
            "name": "War Cry",
            "category": "Mental",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "3 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "You let loose a powerful and intimidating cry, instilling fear in your enemies and fortifying your own force of will. When you activate this power, make a Power test against a number of targets within range equal to your dots in this Discipline. On a success, the target suffers the Scared condition for the duration. Until this power ends, you gain a bonus equal to half your dots in this Discipline to tests to resist the Scared or Terrified conditions and tests to avoid a fear frenzy."
          }
        ]
      },
      {
        "id": "presence",
        "name": "Presence",
        "clans": "Brujah, Ministry, Ravnos, Toreador, Ventrue",
        "description": "Understanding and manipulating the emotions of those around you, stupefying onlookers, calming agitated allies, and forging or disrupting bonds between people.",
        "powers": [
          {
            "id": "awe",
            "name": "Awe",
            "category": "Social",
            "activate": "Minor action",
            "attribute": "Charisma",
            "cost": "1 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your presence awes those around you, amazing them, inspiring them, or striking them with trepidation. When you activate this power, choose whether to awe, inspire, or menace, producing one of the following effects for the duration. At the start of your turn while this power is active, you can spend 1 Willpower to change the effect. The effect is centered on you and moves with you.\n\nAwe: You gain bonus dice equal to your dots in this Discipline to Social tests involving Expression or Persuasion against hostile targets within range.\n\nInspire: Each friendly target other than you within range gains bonus dice equal to half your dots in this Discipline to social tests involving Expression or Persuasion.\n\nMenace: Choose a number of hostile, non-animal targets within range equal to twice your dots in this Discipline. Make a Power test against the Composure of the strongest target. On a success, each target suffers a dice penalty equal to half your dots in this Discipline to social tests to resist Intimidation and on tests to resist effects that inflict the Scared or Terrified condition."
          },
          {
            "id": "dread_gaze",
            "name": "Dread Gaze",
            "category": "Social",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "1 Willpower",
            "difficulty": "None or Composure",
            "distance": "Medium",
            "duration": "One Scene",
            "text": "Your dreadful gaze fills a target you can see within Medium distance with the sense that you are judging its every action. The target suffers a -1 dice penalty to all tests while it can see you. This power ends early if you end your turn unable to see the target, or if you end your turn more than Medium distance from it.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●●: The target feels fear while under your gaze. While you can see each other, you can spend 1 Willpower as a reaction at the start of each of the target’s turns and make a Power test against the target’s Composure. On a success, the target suffers the Scared condition until the start of its next turn.\n\n●●●●: You can affect 1 additional target for each dot you have in this Discipline. The power ends early only if you end your turn unable to see any targets.\n\n●●●●●: You can now affect targets you can see or hear and who can see or hear you."
          },
          {
            "id": "impassion",
            "name": "Impassion",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "1 Willpower",
            "difficulty": "Composure",
            "distance": "Self",
            "duration": "One scene",
            "text": "You supernaturally manipulate one non-animal target you can see within a Short distance, causing it to feel an emotion strongly. Describe the emotion and what you hope to make the target feel. If the target is unwilling, make a Power test against its Composure. On a success, the target suffers the [Emotional] condition and feels the emotion you described. This power ends early on a target if it is cured of the [Emotional] condition or starts its turn more than Medium distance away from you.\n\n[Maturing]. Once you have more than 1 dot in this Discipline, you can use this power in new ways:\n\n●●: When you activate this power, you can target up to 3 additional non-animal targets for each dot you have in this Discipline. You make your test against the strongest member of the group, and all targets suffer the same emotion.\n\n●●●: While this power is active, you can use an action and spend 2 Willpower to throw one affected mortal target into an emotional crisis. Make a Power test against the target's Composure. On a success, the target gains the [Greater Emotional] condition, and its emotions boil out of control for the duration of this power, or until the [Greater Emotional] condition is reduced to [Emotional] orcured. The details are up to the Storyteller; an irritated target might spend its turns punching anyone nearby, a sad one might burst into tears, or a lustful one might aggressively pursue someone nearby.\n\n●●●●●: You can now target a vampire with the emotional crisis. On a success, the vampire suffers a frenzy instead of a crisis. The Storyteller decides the type of frenzy based on the situation and the emotion."
          },
          {
            "id": "captivating_gaze",
            "name": "Captivating Gaze",
            "category": "Social",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "2 Willpower",
            "difficulty": "Resolve",
            "distance": "Medium",
            "duration": "One scene",
            "text": "You lock eyes with a target and project all your will to subjugate its mind, holding it in place as long as you sustain your stare. Make a Power test against the target’s Resolve. On a success, the target suffers the Immobilized condition for the duration, or until you break eye contact with it.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You no longer need to maintain eye contact with the target, but the target must still be able to see you to remain affected.\n\n●●●●● ●●●: You can affect a number of targets equal to half your dots in this Discipline."
          },
          {
            "id": "compose_yourself",
            "name": "Compose Yourself",
            "category": "Social",
            "activate": "Action",
            "attribute": "Composure",
            "cost": "2 Willpower",
            "difficulty": "None",
            "distance": "Touch",
            "duration": "One scene",
            "text": "Your extraordinary confidence instills courage and force of will in those you touch, making them less likely to lose control. For the duration, a touched target doesn’t risk a rage frenzy when it rolls a painful failure at 3 Willpower or lower, though it can still risk one if reduced to 0 Willpower. In addition, it gains a +1 dice bonus to all tests to avoid the Scared and Terrified conditions and fear frenzy.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can affect a number of targets within Short distance equal to half your dots in this Discipline."
          },
          {
            "id": "redirect_desire",
            "name": "Redirect Desire",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "2 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your dominion over emotions grows so strong that you can manipulate others’ desires, changing their intentions and actions. You might make a target desire another person in the room, crave a beer, or want to wander off to another part of the room.\n\nMake a Power test against the target’s Composure. On a success, the target’s intentions and goals shift toward the desire you choose, and it suffers a -2 dice penalty to all tests not related to its new desire.\n\nMortals can’t normally resist this power, unless you try to shift a mortal’s intentions or passions against its core beliefs, such as making a hunter attacking a vampire give up and befriend its target. You can’t shift a person’s desire toward something that would directly and obviously harm to it or its loved ones.\n\n[Maturing]. Once you have more than 2 dots in this Discipline, you can use this power in new ways:\n\n●●●●: You can affect a number of targets equal to half your dots in this Discipline."
          },
          {
            "id": "friends_to_enemies",
            "name": "Friends to Enemies",
            "category": "Social",
            "activate": "Action",
            "attribute": "Manipulation",
            "cost": "3 Willpower",
            "difficulty": "Composure",
            "distance": "Short",
            "duration": "One scene",
            "text": "You can manipulate the emotions and ties that bind individuals, strengthening a connection or weakening it. You can make allies grow indifferent to one another or turn rivals into temporary friends. Make a Power test against the higher of the two targets’ Composure. On a success, you can opt whether to strengthen or weaken their bond.\n\nStrengthening: The targets treat each other as allies and gain a +2 bonus to any test related to helping or protecting each other.\n\nWeakening: The Targets can’t use the assist action with each other and suffer a -2 penalty to any test related to helping or protecting each other.\n\n[Maturing]. Once you have more than 3 dots in this Discipline, you can use this power in new ways:\n\n●●●●● ●: You can affect a number of targets equal to half your dots in this Discipline, strengthening or weakening the bonds between any set of two of them."
          },
          {
            "id": "transcendent_aura",
            "name": "Transcendent Aura",
            "category": "Social",
            "activate": "Action",
            "attribute": "Charisma",
            "cost": "3 Willpower",
            "difficulty": "Resolve",
            "distance": "Short",
            "duration": "One scene",
            "text": "Your magnetism is so powerful that you can exude an aura deterring others from approaching you without your permission. Until the end of the scene, or until you take an aggressive action against a creature affected by this power, you make others believe you are untouchable and matchless. If a creature within range tries to approach you without your permission, make a Power test against its Resolve. On a success, it can’t come within Close distance of you.\n\nA creature can’t be “trapped” by this aura or forced to approach you by you deliberately moving to drive it into or against the aura. When you activate this power, you can choose a number of creatures equal to your dots in this Discipline to be unaffected."
          }
        ]
      },
      {
        "id": "tellurgy",
        "name": "Tellurgy",
        "clans": "Ravnos, Tzimisce",
        "description": "Using a twisted connection to the natural world to manipulate it, curse the living, twist fate, and subvert the natural order to keep you and your allies safe.",
        "powers": []
      },
      {
        "id": "vicissitude",
        "name": "Vicissitude",
        "clans": "Tzimisce",
        "description": "Manipulating, reshaping, and enhancing your body and the bodies of others.",
        "powers": []
      }
    ],
    "merits": [
      {
        "id": "bond_famulus",
        "name": "Bond Famulus",
        "prerequisites": "Duskborn or vampire. At least 1 dot in Animalism.",
        "summary": "Turn an animal ghoul into a powerful bond famulus.",
        "text": "You can elevate one animal ghoul of yours into a unique familiar. The process takes at least 1 hour and consumes 3 Vitae. You must spend this time bonding with the animal both emotionally and supernaturally, whether by something as simple as meditating with it or as active as hunting alongside it.\n\nThe animal you choose must already be your ghoul, and its NPC Level must be no higher than your dots in Animalism. Once bonded, your famulus increases its NPC Level by your generation modifier (to a total no higher than twice your dots in Animalism) and increases one tier (minion to standard, standard to elite, and so on). Your Animalism powers also cost 1 less when used on your famulus, which can reduce a power’s cost to 0. You can have only one famulus at a time.\n\nIf you have at least 5 dots in Animalism, you can maintain up to two famulus at once, and your Animalism powers used on them are reduced by an amount equal to your generation modifier, which can also reduce a power’s cost to 0.\n\nWhen a famulus dies, or when the bond is otherwise broken, you lose Willpower equal to your dots in Animalism, and can’t form this bond with another of your animal ghouls until the next night."
      },
      {
        "id": "bond_resistant",
        "name": "Bond Resistant",
        "prerequisites": "—",
        "summary": "You are better at resisting Blood Bonds and their effects.",
        "text": "Your will runs strong in your blood, making the bonding power of a vampire’s Vitae less likely to shackle your mind. You gain a +1 dice bonus to tests to resist the effects of a Blood Bond, including resisting orders from a vampire who may have become your master.\n\nActivation. When you drink a vampire’s Vitae for the first time, you can activate this [merit] as a reaction to keep that drink from forming a Blood Bond."
      },
      {
        "id": "chain_the_psyche",
        "name": "Chain the Psyche",
        "prerequisites": "At least 2 dots in Dominate.",
        "summary": "Those under your control feel pain when disobedient.",
        "text": "Your control over another’s mind is so complete that defying you causes physical pain. If a target under the effects of one of your Dominate powers tries to act against your commands, or if a target whose memory you have altered tries to recover its original memories, that target feels intense pain. It suffers a -1 dice penalty to all tests that are unrelated to carrying out your command.\n\nIf you have at least 5 dots in Dominate, the penalty is -2 dice instead."
      },
      {
        "id": "code_of_honor",
        "name": "Code of Honor",
        "prerequisites": "—",
        "summary": "Your personal code helps you keep your cool and reaffirm your beliefs.",
        "text": "You live by a personal code that guides your actions and thoughts. Work with your Storyteller to determine what that code is and how your character interprets it. You gain a +1 dice bonus to Self Control tests when your code of honor would help you keep your head.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "enchanting_presence",
        "name": "Enchanting Presence",
        "prerequisites": "Duskborn or vampire. At least 2 dots in Presence.",
        "summary": "Creatures suffer a penalty to resist your Presence powers.",
        "text": "Your presence is so enchanting that others fall willingly under your sway. Mortals you target with your Presence powers suffer a -1 dice penalty to resist them.\n\nIf you have at least 5 dots in Presence, the penalty is -2 dice instead.\n\nIf you are an Ancilla vampire or stronger, this [merit] also affects supernatural creatures."
      },
      {
        "id": "fleetness",
        "name": "Fleetness",
        "prerequisites": "At least 1 dot in Celerity.",
        "summary": "You gain a bonus to non-conflict Dexterity tests.",
        "text": "You can move and act with dizzying speed. You gain a bonus to non-conflict Dexterity tests equal to your dots in Celerity.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "flexible_limbs",
        "name": "Flexible Limbs",
        "prerequisites": "—",
        "summary": "You are flexible and gain a bonus to escape bonds.",
        "text": "Your body is unusually limber, letting you squeeze through tight spaces and slip free of restraints. You gain a +1 dice bonus to tests where your flexibility would aid your movement or your escape.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "forgettable_face",
        "name": "Forgettable Face",
        "prerequisites": "—",
        "summary": "Your face is forgettable, giving you a bonus to Subterfuge tests.",
        "text": "You have an easily forgettable face. To most people, you look like an average person, with no features that stand out, unless you deliberately display one, such as a bright, multicolored coat or a distinct facial tattoo. You gain a +1 dice bonus to Subterfuge tests to blend into a crowd or otherwise go unnoticed in a group.\n\nActivation. You can use a minor action to activate this [merit] and cause one target you can see within Medium distance to ignore you for the rest of the scene, unless you purposefully make it acknowledge you, by shouting at it, hitting it, or similar."
      },
      {
        "id": "friends_in_high_places",
        "name": "Friends in High Places",
        "prerequisites": "—",
        "summary": "You know people in high society and gain a bonus when interacting with such people.",
        "text": "You know many people in the upper echelons of society and may still move among them regularly. Your comfort in those circles makes you adept at navigating their social minefields. You gain a +1 dice bonus to all social tests, including attacks in social conflict, when dealing with the social elite. You also gain this bonus when you name-drop or otherwise trade on your connections to gather information or to get into a place normally closed off to outsiders.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success. This activation can’t be used on a social attack."
      },
      {
        "id": "hunger_strength",
        "name": "Hunger Strength",
        "prerequisites": "Duskborn or vampire.",
        "summary": "When hungry, you gain a bonus to Strength tests.",
        "text": "Hunger awakens the Beast inside you, lending you its supernatural strength. You gain a +1 dice bonus to Strength tests, including tests made during a physical conflict, when you have 5 or less Vitae.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "intimidating_presence",
        "name": "Intimidating Presence",
        "prerequisites": "—",
        "summary": "You gain a bonus when intimidating or scaring others.",
        "text": "You have an intimidating presence that inspires fear and unease in anyone who can see you. You gain a +1 dice bonus to tests that involve intimidating others or unsettling them, provided the target can see you.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "might",
        "name": "Might",
        "prerequisites": "At least 1 dot in Potence.",
        "summary": "You gain a bonus to non-conflict Strength tests.",
        "text": "You possess superior strength, outlifting even the most well-conditioned mortal bodybuilder. You gain a bonus to non-conflict Strength tests equal to your dots in Potence.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "prestigious_sire",
        "name": "Prestigious Sire",
        "prerequisites": "—",
        "summary": "Your sire’s reputation provides you a bonus or penalty to social tests, depending on the target's sect or clan.",
        "text": "Your sire (or master, if you are a ghoul) holds great status within their sect or clan, and some of that prestige reflects on you, earning you a measure of respect. You gain a +1 dice bonus to social tests when your sire’s reputation could work in your favor.\n\nWhen you choose this [merit], specify which sect or clan values your sire. Your bonus applies only in dealings with that group. Your sire’s standing may also mean a poor reputation with a rival sect or clan. At the Storyteller’s discretion, the same value can apply as a penalty when your sire’s reputation would hinder your interactions with that rival.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "subdued_hunger",
        "name": "Subdued Hunger",
        "prerequisites": "Duskborn or vampire.",
        "summary": "You have some control over your hunger and gain a bonus to resist hunger frenzy.",
        "text": "Hunger is one of a vampire’s worst enemies, but you have learned how to manage it better than most, honing some measure of control over the Beast inside you. You gain a +1 dice bonus to Self Control tests to resist entering a hunger frenzy.\n\nActivation. When you make such a test, you can activate this [merit] as a reaction for a basic success."
      },
      {
        "id": "tough_skin",
        "name": "Tough Skin",
        "prerequisites": "A generation modifier. At least 5 dots in Stamina.",
        "summary": "Damage you take is reduced by 1 more than normal.",
        "text": "Your skin has toughened to the texture of hard leather, making you more resistant to physical damage from common weapons and claws. Your generation modifier counts as 1 higher when calculating the damage you take. As with other damage reduction, this doesn’t apply to baneful damage."
      },
      {
        "id": "wrecker",
        "name": "Wrecker",
        "prerequisites": "At least 2 dots in Potence.",
        "summary": "You gain a bonus to tests that involve smashing objects.",
        "text": "You exert extra power over inanimate objects, shattering, smashing, and destroying them with ease. When you make a melee attack test against an inanimate object, you gain a bonus to the test equal to your dots in Potence."
      }
    ],
    "natures": [
      {
        "id": "autocrat",
        "name": "Autocrat",
        "summary": "You want to be in charge, and you crave power and control.",
        "text": "As an Autocrat, you want to be in charge. You seek prominence for its own sake, not because you have an operation’s best interests at heart or because you have the best ideas (though you often think you do). You may genuinely believe everyone around you is incompetent, but what you truly crave is power and control.\n\nIndulging. You order others around you as though you are in command. You cast yourself as the leader. You wave off others’ suggestions as plainly beneath your standards. You make decisions for others without consulting them.\n\nAutocrat Outburst: Listen to Me. Others simply aren’t following your directions, so you have to take control. You can’t use physical Discipline powers, and you must convince others to do as you say. Pick two targets you can see, at least one of them an NPC. On each of their turns, you dictate what each target should do. For every target that spends its turn doing otherwise, you suffer a dice penalty equal to your generation modifier to all tests."
      },
      {
        "id": "bon_vivant",
        "name": "Bon Vivant",
        "summary": "You know that life is shallow and fleeting. You live in the here and now and aim to have a good time no matter what.",
        "text": "As a Bon Vivant, you know that life and unlife are shallow and fleeting. So you have decided to enjoy your time here and now. You aren’t necessarily irresponsible; you are simply predisposed to having a good time along the way, and you love giving in to the pleasures that life and unlife can offer.\n\nIndulging. You seek out the blood of the intoxicated to catch a little of their buzz. You abandon your responsibilities to chase off boredom with parties and other activities. You talk others into joining you in some frivolous pursuit.\n\nBon Vivant Outburst: Seek Fun. You are going to have a good time, even if it kills you. You can’t use mental Discipline powers, and you must fight off boredom, because all at once, everything feels unbearably dull. You suffer a cumulative -1 dice penalty each time you take an action or make a test you already took earlier in this scene. For this outburst, an attack counts as a different (and therefore not boring) action so long as the target is different each time."
      },
      {
        "id": "bravo",
        "name": "Bravo",
        "summary": "You believe in the rule of the strong over the weak and make sure you are always the strongest around.",
        "text": "As a Bravo, you believe in the rule of the strong over the weak, and you make sure you are the strongest in the room. You use your powers to push others around, and you have no qualms about it. If they want respect, and a chance to act on their own, they must prove they are strong enough to stand against you.\n\nIndulging. You use your strength and powers to make others fear and obey you. You prey on the weak, teaching them the lesson you think they need. You challenge others to prove your strength and dominance over them.\n\nBravo Outburst: Rule of Might. You are the strongest one here, and you will make them obey, even if it means you have to beat them into submission. You can’t use Social or Mental Discipline powers, and you must use force to make others obey you, fear you, or bow to you. You gain a dice bonus equal to your generation modifier to tests to subjugate, attack, intimidate, or otherwise act aggressively against the strongest individual you can see. All your other actions suffer a dice penalty equal to twice your generation modifier."
      },
      {
        "id": "gallant",
        "name": "Gallant",
        "summary": "You are the star of the show, always seeking the spotlight.",
        "text": "As a Gallant, you always seek attention and the chance to be the brightest star in the room. You seek the company of others, if only to earn their adoration. Attention drives you, and the chase is often as important as its end. Nothing excites you more than a new audience to woo.\n\nIndulging. You hunger for attention and do anything to draw eyes. You might make a big entrance wherever you go, and you don’t shy away from explaining why you are so important.\n\nGallant Outburst: Showstopper. Everything must be about you. While in a Gallant outburst, you can’t use mental Discipline powers, and you must make everything about you. You must draw the attention of as many creatures as possible, by attacking, using a power that affects multiple creatures, or similar. You can’t hide, disappear into the shadows, or speak quieter than a shout. At the start of each of your turns, choose one enemy you can see. Until the start of your next turn, that target has a dice bonus equal to twice your generation modifier on all tests to notice, attack, or engage with you."
      },
      {
        "id": "perfectionist",
        "name": "Perfectionist",
        "summary": "You demand flawless execution in yourself and sometimes others.",
        "text": "As a Perfectionist, you demand flawless execution. You expect total commitment to tasks and close attention to detail from yourself and others. You may be exacting, but it is the achievement of your goals that drives you.\n\nIndulging. You throw yourself into a task for hours, until it is exactly the way you want it to be. You criticize others over the slightest mistakes. You pore over your own perceived failings, working out how to correct them.\n\nPerfectionist Outburst: Perfectionism. Nothing is going the way it should, and everything must be perfect. You can’t use social Discipline powers, and for the rest of the scene, you must spend each turn redoing failed tasks. If you failed a test on your previous turn, you must repeat that test on your next turn. If you didn’t fail a test, you can’t simply repeat your last action; instead, you must attempt a test that an ally failed on their previous turn, correcting their mistakes. If neither you nor your allies failed a test on the previous turn by you or your allies (or if a failed test is impossible for you to repeat), you may act freely, but you suffer a dice penalty equal to your generation modifier to all tests, as you are distracted by every imperfection around you."
      },
      {
        "id": "romantic",
        "name": "Romantic",
        "summary": "You feel existence is only fulfilling when you have others you love and who love you back.",
        "text": "As a Romantic, you feel that existence is only fulfilling when you love someone and are loved in return. You are easily enchanted by others’ looks, personality, or deeds, and you often imagine romances where none exist. When your feelings are returned, it can lift you; when they aren’t, it can plunge you into deep sadness.\n\nIndulging. You try to impress others and forge connections with them, especially anyone who sparks your romantic interest. You put yourself at risk for the sake of thatinterest. You spend more time than you should daydreaming about relationships. You neglect your obligations to be near someone you love.\n\nRomantic Outburst: Romantic Sacrifice. All that matters is love, and even your own existence might be a worthy sacrifice in its name. You can’t use Mental Discipline powers, and you must do everything you can to protect, impress, or benefit a romantic interest. You gain a dice bonus equal to your generation modifier to all tests to protect or benefit that interest. This bonus is doubled if such an action puts you in danger or risks compromising what you originally set out to do. You suffer a dice penalty equal to twice your generation modifier to all tests not related to such activities."
      },
      {
        "id": "scientist",
        "name": "Scientist",
        "summary": "You know existence is a puzzle and you aim to help reassemble and solve it.",
        "text": "As a Scientist, you see existence as a puzzle you can help reassemble. You examine every situation and maneuver logically and methodically, looking for likely outcomes and patterns. You don’t always reach for a scientific or rational explanation, but you examine your surroundings rigorously and with a critical eye.\n\nIndulging. You notice the systems and patterns of the world and often point them out to others. You read patterns of behavior and use that knowledge to your advantage. You are forever searching for the pattern in a situation, trying to tie everything together logically.\n\nScientist Outburst: Critical Eye. Every little detail seizes your attention. You can’t use social Discipline powers, and your mind fixates on everything around you, from the faint smell of cigarettes on a rival’s coat to a fleck of dust drifting past as you move. You suffer a dice penalty equal to your generation modifier to all tests, as you struggle through the distractions. If you roll a 10 on any test before the outburst ends, you cut through the noise enough to notice a new detail, which becomes apparent to you after the outburst ends. The Storyteller decides what you noticed, such as an old blood stain peeking out from under a nearby chair or a name whispered between your opponents."
      },
      {
        "id": "survivor",
        "name": "Survivor",
        "summary": "You always pull through, surviving whatever the world throws at you.",
        "text": "As a Survivor, you always pull through, surviving whatever life or unlife throws at you. Alone or in a group, your sheer refusal to accept defeat is often the difference between success and failure. You are frustrated by the way others accept “what fate has in store,” and you fight constantly to hold or improve your position in the world.\n\nIndulging. You are always preparing for the next threat, whether it is real or not. You act to secure your survival, refusing what you see as unnecessary risks. You help others pull back from the brink of their own ruin.\n\nSurvivor Outburst: Survivor’s Instinct. The situation is dangerous, and you must survive it. You can’t use social Discipline powers, and you must focus on defending yourself. Your heightened alertness to every threat leaves your attention split, making it hard for you to do anything other than survive the situation intact. You gain a dice bonus equal to your generation modifier to tests to defend yourself, escape danger, or hide, but you suffer a dice penalty equal to twice your generation modifier to attack rolls, offensive tests, and tests that would draw extra attention to yourself."
      }
    ],
    "clans": [
      {
        "id": "banu_haqim",
        "name": "Banu Haqim",
        "description": "Known to be adept killers, these vampires have assumed the role of vigilantes, judges, and executioners among their brethren.",
        "disciplineText": "Blood Sorcery, Celerity, Obfuscate",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "brujah",
        "name": "Brujah",
        "description": "Rebels, revolutionaries, extremists, and troublemakers. Their blood burns with the desire for change and an almost uncontrollable rage.",
        "disciplineText": "Celerity, Potence, Presence",
        "curseName": "Boiling Passion",
        "frenzyName": "Rebellion",
        "overview": "Revolution requires passion and strength.\n\nBrujah typically believe that no authority deserves obedience simply for being authority, and that the structures others accept without question are exactly the ones worth tearing down. To be Brujah is often expressed as standing against tyranny wherever it appears, and tyranny, to them, appears everywhere, in vampire society as readily as in the mortal world around it. Their sires usually look for that same fire in mortals, choosing those who already refuse to bow. Some come from obvious places like the protest and picket lines, but just as many are pulled from quieter discontents, anywhere someone has decided the way things are isn’t the way they have to stay. Activists and agitators, organizers and street leaders, idealists and the merely furious; anyone who voices their discontent rather than swallowing it. The clan generally looks for proof a candidate will fight, because the Beast it puts in their blood will give them no shortage of reasons to do so.\n\nArchetypes: Political agitator, eco-terrorist, community leader, street gang leader, naive politician.\n\nBrujah Beast: Anti-Authority\n\nBrujah Curse: Boiling Passion\n\nBrujah Disciplines: Celerity, Potence, Presence\n\nBrujah Frenzy: Rebellion",
        "curseText": "Curse: Boiling Passion\n\nYour blood simmers with fiery passion. You laugh louder, cry harder, and rage longer than other vampires, your every emotion bubbling just beneath the surface, ready to burst. This deeper connection to your emotions leaves you more vulnerable to frenzy. When you attempt to resist a frenzy, the Difficulty increases by an amount equal to your generation modifier.",
        "frenzyText": "Frenzy: Rebellion\n\nWhen you frenzy, you act against whatever or whomever you see as an authority figure in the scene. This act can be as simple as refusing to do what you were sent there to do, or as elaborate as actively trying to undermine an authority figure, such as urging a crowd to heckle the person giving a speech. All your other actions suffer a dice penalty equal to your generation modifier.",
        "beastText": "Clan Beast: Anti-Authority\n\nThe Beast inside you demands that you challenge authority and break the rules that bind you. You satisfy it by challenging leaders, disobeying orders, destroying symbols of authority, and any other action that defies or sabotages structures of power and hierarchy.",
        "traits": [
          {
            "id": "prowess",
            "name": "Prowess",
            "prerequisites": "Neonate or stronger. At least 2 dots in Potence.",
            "text": "When you hit with an unarmed attack or a light melee weapon attack, you add your dots in Potence to the damage you deal."
          },
          {
            "id": "spark_of_rage",
            "name": "Spark of Rage",
            "prerequisites": "Neonate or stronger. At least 1 dot in Potence and at least 1 dot in Presence.",
            "text": "You can easily stoke anger and violence in others. When you make a test, or use a power that requires a test, to rile up or incite an individual or crowd to anger or violence, you gain a bonus to the test equal to your dots in Potence. You also gain this bonus to any tests you make that would force another creature to frenzy.\n\nActivation. When you make such a test, you can activate this [trait] as a reaction for a basic success."
          },
          {
            "id": "wrestler",
            "name": "Wrestler",
            "prerequisites": "Neonate or stronger. At least 1 dot in Potence.",
            "text": "Your knack for wrestling makes you unstoppable while you [tussle] your enemies. Add your generation modifier to any [tussle] attack test you make, including crush and tie up. In addition, if you make a crush attack while [tussling] an opponent, the attack deals your full Strength in damage instead of half."
          },
          {
            "id": "combat_reflexes",
            "name": "Combat Reflexes",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Celerity.",
            "text": "While prone, you can stand up without spending your movement, but you can’t stand up from prone outside of your turn. If surprised, you can still move and act, but you continue to suffer the penalty from the surprised condition while you have it.\n\nActivation. You can activate this [trait] as a reaction when you start your turn with the surprised condition to be cured of it."
          },
          {
            "id": "living_weapon",
            "name": "Living Weapon",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Potence.",
            "text": "Your extraordinary strength allows you to use a creature you are [tussling] as an improvised melee weapon, provided the creature is roughly your size or smaller.\n\nIf you have at least 5 dots in Potence, you can use a creature you are [tussling] as an improvised ranged weapon with a Short distance. If a thrown creature hits a solid object, such as a wall, it takes damage equal to half your Strength. If it hits another creature, that creature takes the same damage."
          }
        ]
      },
      {
        "id": "gangrel",
        "name": "Gangrel",
        "description": "Lone survivors who are proud to be closer to beasts than humans and other vampires. Members of this clan are some of the few undead who can call the wilds home.",
        "disciplineText": "Animalism, Celerity, Fortitude",
        "curseName": "Embraced Beast",
        "frenzyName": "Feral Impulses",
        "overview": "Ferocity is the path to authenticity and wisdom.\n\nGangrel typically hold that freedom comes from accepting what the Embrace makes of them, both the predator and the person it leaves behind. To be Gangrel is often expressed as being a hunter and a survivor first. Their sires look for that same quality in mortals, choosing those who already endure where others wouldn’t. Some come from the literal wild, but just as many are pulled from the hardest edges of the city, anywhere survival runs on instinct, nerve, and luck. Hunters and trackers, drifters and long-haul drivers, traveling performers, runaways, anyone who survives with no safety net. The clan wants proof a candidate can make it alone, because once the Beast is in the blood, sooner or later they may have to.\n\nArchetypes: Disgruntled Detective, Vigilant Hunter, Unattached Drifter, Obsessed Survivalist, Resourceful Backpacker.\n\nGangrel Beast: Animalistic\n\nGangrel Curse: Embraced Beast\n\nGangrel Disciplines: Animalism, Celerity, Fortitude\n\nGangrel Frenzy: Feral Impulses",
        "curseText": "Curse: Embraced Beast\n\nGangrel are closer to their Beast than most vampires, and that closeness is what lets them connect so readily with animals. It also leaves its mark on any Gangrel who loses control. When a frenzy or Nature outburst ends, your bond with the animal world manifests physically, giving you one or more animalistic characteristics until the end of the next night. You gain a number of characteristics equal to your generation modifier, though you can reduce this number by 1 if you ride the wave and accept the frenzy or outburst.\n\nEach characteristic reduces one of your Attributes by 1, to a minimum of 1. These penalties are additive, and repeated frenzies and outbursts can leave you with severely reduced Attributes and a monstrous, disjointed form. This might manifest as a bearlike musk reducing your Charisma or a single reverse knee reducing your Dexterity. The characteristic and its penalty are up to you and the Storyteller, but they typically reflect the events of the frenzy or outburst, both what caused it and what you did while in its grip.",
        "frenzyText": "Frenzy: Feral Impulses\n\nWhen you frenzy, your Beast’s instincts get the best of you, and you begin to act on impulse. Thinking clearly and rationally becomes harder, as you just want to rip apart what’s in your way, solving every problem as directly as possible. You suffer a penalty equal to your generation modifier to all tests in which you aren’t acting as an animal would, and you suffer twice that penalty to tests that use the Intelligence or Manipulation Attributes, unless those tests are against animals.",
        "beastText": "Clan Beast: Animalistic\n\nGangrel’s Beast is simple and animalistic. It desires only that you live by instinct, seeking the thrill of the hunt whenever you can. You satisfy its urges through animalistic behavior, running with wolves, hunting prey like a predator, and reacting on instinct to threats and opportunities.",
        "traits": [
          {
            "id": "enduring_beasts",
            "name": "Enduring Beasts",
            "prerequisites": "Neonate or stronger. At least 1 dot in Animalism and 1 dot in Fortitude.",
            "text": "Animals you influence gain a small portion of your toughness. When you use an Animalism power on an animal, including calling or summoning an animal to you, you can choose to share some of your toughness with it. If you do so, the animal gains additional health equal to your dots in Fortitude for the duration of the Discipline power. When the animal takes damage, this bonus health is removed first.\n\nIf your Animalism power affects more than one animal, you can apply the effects of this [trait] to a number of animals equal to your generation modifier."
          },
          {
            "id": "feral_whispers",
            "name": "Feral Whispers",
            "prerequisites": "Neonate or stronger. At least 1 dot in Animalism.",
            "text": "You can communicate with animals, and animals aren’t immediately put off by your unnatural presence (see Vampire Characteristics in Chapter 2: Making Your Monster). When communicating with animals, you can address only one animal family (such as canidae, corvidae, felidae, or muridae) at a time. For example, you could address a group of corvids, which includes ravens and jays, but you would need to repeat yourself in different “languages” if you wanted to speak with a mixed flock of ravens, songbirds, and seagulls. You can’t use this power through electronic devices.\n\nIf you have at least 3 dots in Animalism, you can address a number of different animal families at one time equal to your dots in Animalism, provided the animals are within range of your voice."
          },
          {
            "id": "safety_of_the_earth",
            "name": "Safety of the Earth",
            "prerequisites": "Neonate or stronger.",
            "text": "When you enter [daysleep] or torpor, and you are in contact with a natural earthen, grassy, or stone surface, such as a grassy park or a rocky cliff (but not the stone floor of a castle), you can choose to meld into that surface. The earth there must be big enough to contain your body, but your point of contact with that earth when this effect is triggered can be as small as your fingertip. It takes one turn for you to sink into the earth, leaving behind carried objects (other than basic clothing) atop the soil. While in the earth, you aren’t aware of your surroundings, unless you can normally be aware of your surroundings while in [daysleep] or torpor, and you are protected from sunlight and other effects on the surface, like rain or a forest fire.\n\nThe effect ends when you rise for the night, when torpor ends, or when the earth where you are resting is disturbed, such as from a machine digging up the soil or a flood washing away the earth around you. When the effect ends, you slowly rise out of the soil, earth and dirt cascading down from your prone body."
          },
          {
            "id": "quick_and_tough",
            "name": "Quick and Tough",
            "prerequisites": "Ancilla or stronger. At least 2 dots in Celerity and 1 dot in Fortitude.",
            "text": "While a Celerity power is active on you, your Fortitude powers can be activated as minor actions instead of actions."
          },
          {
            "id": "surrounded_prey",
            "name": "Surrounded Prey",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Animalism.",
            "text": "When you make an attack test and an animal ally is within Close distance of you, you gain a bonus to the test equal to your generation modifier."
          }
        ]
      },
      {
        "id": "giovanni",
        "name": "Giovanni",
        "description": "Vampires obsessed with death and the exploitation of its ramifications. Members of this clan are known to dabble in necromantic rituals and to deal with other undead creatures.",
        "disciplineText": "Auspex, Potence, Necromancy",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "lasombra",
        "name": "Lasombra",
        "description": "The hidden hand in the shadows that manipulates people like pieces on a chessboard. Masters of manipulation and deception, these vampires would go to any lengths to secure what they want.",
        "disciplineText": "Dominate, Potence, and Corruption or Oblivion",
        "curseName": "Shadow Presence",
        "frenzyName": "Ruthlessness",
        "overview": "As shadows cover the world, we control it.\n\nLasombra believe that the world belongs to those with the will to command it, and that power is wasted on anyone unwilling to use it. They have the talent to rule, the instinct to lead, and the stomach to do what leading demands. Their sires look for that same drive in mortals, choosing those who already bend others to their purpose. Some come from the obvious heights of power, the boardroom and the pulpit, but just as many are pulled from anywhere ambition outruns conscience. Executives and investors, bishops and commanders, anyone who has decided that winning is worth the cost others pay for it. Sires seek proof potential childer can wield power as readily as seize it, because their Beast will demand they wield it well.\n\nArchetypes: Corrupt Politician, Savvy Stockbroker, Ambitious Executive, Religious Leader, Commanding Agent.\n\nLasombra Beast: Punisher\n\nLasombra Curse: Shadow Presence\n\nLasombra Disciplines: Dominate, Potence, and Corruption or Oblivion\n\nLasombra Frenzy: Ruthlessness",
        "curseText": "Curse: Shadow Presence\n\nYour connection with the shadows of the Abyss interferes with your reflection in mirrors or recordings of any kind. An image of you caught by a security camera appears blurred, obscured, or affected by strange interferences. Anyone familiar with the clan’s curse can easily identify what is going on, but most mortals write off the distortion as a technical fault.\n\nThis connection also disrupts your ability to use anything more technologically complex than a pulley or a padlock, especially devices with a computer chip or similar technology. The first time you attempt to use such a device in a given night, you fail unless you succeed on an Intelligence or Charisma test (your choice) with a Difficulty equal to twice your generation modifier, using your mental strength or force of personality to overcome the disruption. Once you have made this test, you can’t make it again for that device until the next night.",
        "frenzyText": "Frenzy: Ruthlessness\n\nWhen you frenzy, your tolerance for mistakes and incompetence drops to nothing, and you will do anything to correct the errors you make. While in this frenzy, any time you fail a test, you suffer a dice penalty equal to your generation modifier to all tests until you succeed on a later test or the frenzy ends. You also can suffer this penalty if an ally within Short distance of you suffers a painful failure. In that case, the penalty lasts until you or your ally succeeds on another attempt of that same action or the frenzy ends.",
        "beastText": "Clan Beast: Punisher\n\nThe Beast in your blood despises failure, and it seeks to punish and humiliate those that fail you. You satiate it by punishing those who fail at the tasks assigned to them, humiliating those you consider beneath you, and turning that punishment on yourself when you are the one who made a mistake.",
        "traits": [
          {
            "id": "eyes_of_the_night",
            "name": "Eyes of the Night",
            "prerequisites": "Neonate or stronger. At least 1 dot in Oblivion.",
            "text": "You can see anything that goes on within any darkness you create with your Oblivion Discipline. For example, you can create a Cloud of Darkness and scan the area within it, as if you were inside the cloud. In addition, if you aren’t in a well-lit area, you can view your surroundings from anywhere within Short distance of you by closing your eyes and focusing for a turn."
          },
          {
            "id": "shadow_cloak",
            "name": "Shadow Cloak",
            "prerequisites": "Neonate or stronger. At least 2 dots in Oblivion.",
            "text": "Shadows coalesce around you, giving you a bonus equal to your generation modifier to tests related to hiding or sneaking and to tests to frighten or coerce mortals.\n\nActivation. When you make such a test, you can activate this [trait] as a reaction for a basic success."
          },
          {
            "id": "tenebrous_reach",
            "name": "Tenebrous Reach",
            "prerequisites": "Neonate or stronger. At least 1 dot in Oblivion.",
            "text": "You can command nearby shadows within Short distance of you to perform simple actions, such as opening doors and pulling levers. These shadows can do anything that can be done with a minor action, but they can’t activate Discipline powers or perform tasks as advanced as typing or controlling a vehicle. You can’t use this [trait’s] effects while the target area or object is in bright light."
          },
          {
            "id": "night_blood",
            "name": "Night Blood",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Oblivion.",
            "text": "Any ghoul you create can see in natural darkness as if the area was well-lit, and it gains a bonus to tests to intimidate others equal to your generation modifier."
          },
          {
            "id": "oppressing_dominance",
            "name": "Oppressing Dominance",
            "prerequisites": "Ancilla or stronger. At least 2 dots in Dominate and 1 dot in either Oblivion or Corruption.",
            "text": "When you use a Dominate power against a target suffering the effects of one of your Corruption powers or a target in shadow or darkness, you gain a bonus on the Power test equal to your generation modifier."
          }
        ]
      },
      {
        "id": "malkavian",
        "name": "Malkavian",
        "description": "With their unique minds that can see beyond reality, these vampires are unified in an otherworldly network that allows them to share knowledge and visions.",
        "disciplineText": "Auspex, Dominate, Obfuscate",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "ministry",
        "name": "Ministry",
        "description": "Liberators, corruptors, and preachers of self-discovery and freedom. These vampires believe that the only way to freedom is through liberating oneself from one’s own bonds.",
        "disciplineText": "Corruption, Obfuscate, Presence",
        "curseName": "Sunlight Bane",
        "frenzyName": "Transgression",
        "overview": "To be truly free, you must surrender to yourself.\n\nTransgression and the desire to be free from any restraints, no matter the cost, is at the core of the Ministry’s belief system. This often shows up as a refusal to be bound by anyone's rules, including one’s own. Ministry sires seek out that same hunger in mortals, attracting those who bend the rules to get what they want and who test their own limits without flinching. Some come by way of faith, drawn to the clan’s promise of spiritual liberation, but just as many are pulled from anywhere that appetite can outpace restraint. Con artists and performers, dealers and lobbyists, fallen preachers, anyone who has decided the only sin is the limit they have not yet broken. They look for those who will chase liberation down whatever path opens as their Beast always thirsts for bigger thrills.\n\nArchetypes: Daring Con Artist, Inconsequential Performer, Witty Drug Lord, Uncaring Lobbyist, Outcast Preacher.\n\nMinistry Beast: Enticer\n\nMinistry Curse: Sunlight Bane\n\nMinistry Disciplines: Corruption, Obfuscate, Presence\n\nMinistry Frenzy: Transgression",
        "curseText": "Curse: Sunlight Bane\n\nYour blood is steeped in deception and temptation, which leaves it more vulnerable to the clarifying essence of the light. You are unusually sensitive to bright light, even from artificial sources, and suffer a dice penalty equal to your generation modifier to all tests whenever you are exposed directly to it. In addition, when you take baneful damage from sunlight, you take additional damage equal to your generation modifier.",
        "frenzyText": "Frenzy: Transgression\n\nWhen you frenzy, all your Beast wants is to break the chains that keep others from indulging in their darkest desires. For the duration of the frenzy, you feel an uncontrollable urge to entice others to indulge in their most debased desires, whether giving in to a vice, acting selfishly, or sinking into some hedonistic pleasure. You suffer a dice penalty equal to your generation modifier to all tests not aimed at corrupting others in this way.",
        "beastText": "Clan Beast: Enticer\n\nYour Beast rejoices in corrupting others, in making them chase their repressed desires and darkest wishes. You satiate it by indulging in hedonistic practices, enticing others to do the same, and by helping individuals discover what their secret desires are.",
        "traits": [
          {
            "id": "beguiling_words",
            "name": "Beguiling Words",
            "prerequisites": "Neonate or stronger. At least 1 dot in Corruption",
            "text": "Your tongue becomes forked and slightly elongated, and your words carry the subtle guile of the snake. You gain a dice bonus equal to your generation modifier to tests to deceive, lie, or deny or obscure the truth. You also gain the same dice bonus to tests to detect if someone is attempting to withhold or hide information.\n\nActivation. When you make such a test, you can activate this [trait] as a reaction for a basic success."
          },
          {
            "id": "eyes_of_the_serpent",
            "name": "Eyes of the Serpent",
            "prerequisites": "Neonate or stronger. At least 1 dot in Presence.",
            "text": "Your eyes are slitted and serpent-like, though you can temporarily suppress this. At the start of a scene, you choose if your eyes are human-like or serpent-like.\n\nIf your eyes are serpent-like, the first time you and a mortal look at each other, you can choose for the mortal to be captivated by you. If the mortal is a ghoul, you must make a Charisma + Presence test against its Composure to captivate it (no action required). While captivated, the mortal views your thoughts and opinions favorably, and you have a dice bonus equal to your generation modifier on tests that tempt or persuade the mortal to take risks, act outside its typical morals, or that similarly attempt to corrupt the mortal in some way. This effect lasts as long as you and the mortal can see each other. Once this effect ends, a mortal can’t be affected by this trait again until the next night. Any mortal not captivated by you is unnerved by your unusual eyes, and you suffer a dice penalty equal to your generation modifier to all social tests against it. If you are Ancilla or stronger, this Trait also affects vampires, but you must succeed on a Charisma + Presence test to affect the vampire.\n\nActivation. You can activate this trait as a reaction when you make a social test against a captivated mortal to have the test result in a basic success."
          },
          {
            "id": "serpent_speech",
            "name": "Serpent Speech",
            "prerequisites": "Neonate or stronger. At least 1 dot in Corruption.",
            "text": "Your cursed blood allows you to speak with serpents and reptiles, and these animals aren’t immediately put off by your unnatural presence (see Vampire Characteristics in Chapter 2: Making Your Monster). In addition, you gain a dice bonus equal to your generation modifier to social tests to influence serpents and reptiles."
          },
          {
            "id": "heart_of_darkness",
            "name": "Heart of Darkness",
            "prerequisites": "Ancilla or stronger.",
            "text": "With an hour-long rite that costs you 5 Vitae, you can remove your heart. The heart must be stored in a clay urn, jar, or similar clay container, otherwise a new heart regrows inside of you. While your heart remains in that container, you can’t be staked, and you gain a bonus equal to your generation modifier to tests to resist all types of frenzy except hunger. Your heart doesn’t gain any special protection from the jar and can be destroyed or staked as normal. If your jarred heart is destroyed, you suffer a penalty to all tests equal to your generation modifier until the next night, when your heart regrows in your body. If your jarred heart is staked, the penalty is doubled and lasts until the stake is removed or the heart withers, whichever happens first.\n\nIf you aren’t in torpor, your heart regrows within your body and withers to dust in the clay container after 30 days. If you are in torpor, the heart remains preserved in the clay container until 24 hours after you rise from torpor, withering to dust at that time, returning your heart to you, even if you return to torpor. You must repeat this rite to gain its effects again."
          },
          {
            "id": "divine_image",
            "name": "Divine Image",
            "prerequisites": "Ancilla or stronger. At least 1 dot in Corruption and 1 dot in Presence.",
            "text": "Once each night, you can use an action to transform into a divine form, channeling the power of your vampire ancestors. Your divine form is always the same for you, no matter how often you activate this [trait]. While transformed, your head changes to that of an animal, you gain a bonus equal to your generation modifier to your Strength, Charisma, and Intelligence Attributes, and your maximum Vitae increases by the same amount. While in this form, you are obviously inhuman. This transformation and all its effects last for one scene."
          }
        ]
      },
      {
        "id": "nosferatu",
        "name": "Nosferatu",
        "description": "The clan of secrets, information, and stealth. They can’t hide their monstrous nature as other vampires can, but they are experts in hiding everything else, and in discovering what everyone else hides.",
        "disciplineText": "Animalism, Obfuscate, Potence",
        "curseName": "External Beast",
        "frenzyName": "Cryptophilia",
        "overview": "Truth can come only through those who can’t hide it.\n\nNosferatu wear their true faces wherever they go, as the only truth worth trusting comes from those who can’t hide their own, and secrets are the surest currency in a world built on lies. Some seek childer with a sense of resourcefulness, a comfort with solitude, and the will to survive on little more than courage and wits, knowing how hard the blood’s curse is to endure; others Embrace those they mean to bring low, teaching a brutal lesson in survival and unlocking what potential the mortal has, if it survives at all. Spies and messengers, investigators and information brokers, petty influencers, haughty actors, anyone who lives close to secrets others would rather keep. A Nosferatu must be able to endure being seen for what it is, because their curse will allow them to hide nothing.\n\nArchetypes: Haughty model, unrelenting detective, solitary exterminator, homeless philosopher, retired spy.\n\nNosferatu Beast: Secretive\n\nNosferatu Curse: External Beast\n\nNosferatu Disciplines: Animalism, Obfuscate, Potence\n\nNosferatu Frenzy: Cryptophilia",
        "curseText": "Curse: External Beast\n\nWhile the Beast of other vampires sits just below the surface, yours is written plainly on your skin. For many in the clan, this is a mark of pride, a hidden truth laid bare. Your appearance unsettles most mortals and reminds other vampires of the inner truth none of them can escape. When dealing with mortals, you suffer a dice penalty equal to your generation modifier to all social tests not meant to frighten, coerce, or assert dominance. Against vampires, this dice penalty applies only when your physical appearance negatively impacts the interaction.",
        "frenzyText": "Frenzy: Cryptophilia\n\nWhen you frenzy, the need to know consumes you. You hunger for secrets and knowledge, driven to learn something, anything, no matter how large or small. All your other actions suffer a dice penalty equal to twice your generation modifier. This frenzy can end early if you uncover a secret significant enough to matter in the scene. For example, if you learn that a vampire in this scene, one who holds information you need, has a ghoul it plans to Embrace without permission, your frenzy can end early, since you now hold leverage against that vampire.",
        "beastText": "Clan Beast: Secretive\n\nYour Beast hungers for secrets and knowledge, hoarding all it can. You pry secrets from others to use against them or to serve you when the moment comes. You satiate it by uncovering the secrets of others, hiding information, and turning what you know against them.",
        "traits": [
          {
            "id": "feral_whispers",
            "name": "Feral Whispers",
            "prerequisites": "Neonate or stronger. At least 1 dot in Animalism.",
            "text": "You can communicate with animals, and animals aren’t immediately put off by your unnatural presence (see Vampire Characteristics in Chapter 2: Making Your Monster). When communicating with animals, you can address only one animal family (such as canidae, corvidae, felidae, or muridae) at a time. For example, you could address a group of corvids, which includes ravens and jays, but you would need to repeat yourself in different “languages” if you wanted to speak with a mixed flock of ravens, songbirds, and seagulls. You can’t use this power through electronic devices.\n\nIf you have at least 3 dots in Animalism, you can address a number of different animal families at one time equal to your dots in Animalism, provided the animals are within range of your voice."
          },
          {
            "id": "ghost_in_the_machine",
            "name": "Ghost in the Machine",
            "prerequisites": "Neonate or stronger. At least 1 dot in Obfuscate.",
            "text": "When you use an Obfuscate power to hide or obscure your presence, whether by sight or sound, you can spend 1 Willpower (in addition to the power’s normal cost) to extend the obscurement to electronic devices. Microphones and similar devices don’t pick up the sounds you make when using Silence of Death, and photographs and videos show you as blurry or indistinct when using Cloak of Shadows. If you are seen on a live feed while using Cloak of Shadows, you are invisible, blurry, or masked in some way, obscuring your identity.\n\nIf you have at least 5 dots in Obfuscate, this effect can extend to all creatures or objects obscured by your Obfuscate powers, not just you. At the Storyteller’s discretion, a large object, such as a car or house, might appear plain, ordinary, or not easily identifiable rather than invisible in photographs and recordings."
          },
          {
            "id": "lingering_obscurement",
            "name": "Lingering Obscurement",
            "prerequisites": "Neonate or stronger. At least 2 dots in Obfuscate.",
            "text": "You don’t need to be present to maintain an Obfuscate power. You must be present when you first activate the power, but you can then leave the area without the power ending early. For example, you don’t need to be near a targeted ally to maintain the Maturing aspect of Cloak of Shadows on an ally, though the ally must still be near you when you first activate the power. Similarly, you don’t need to spend the extra Willpower to keep an object hidden with the Conceal power when you leave it."
          },
          {
            "id": "obscured_power",
            "name": "Obscured Power",
            "prerequisites": "Ancilla or stronger. At least 2 dots in Obfuscate and 2 dots in Potence.",
            "text": "You can harness the supernatural energy empowering your obscurement to enhance your strength. When you use a Potence power while under the effects of an Obfuscate power, you can choose to immediately end the Obfuscate power and add your dots in Obfuscate to any test that is part of that Potence power."
          },
          {
            "id": "shared_shadows",
            "name": "Shared Shadows",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Obfuscate.",
            "text": "Your command over the obscuring powers of your blood can be extended to your animal companions. When you use an Obfuscate power on yourself, any ghoul animal under your control or any animal affected by one of your Animalism powers within Short distance of you also gains the effects of that Obfuscate power."
          }
        ]
      },
      {
        "id": "ravnos",
        "name": "Ravnos",
        "description": "Survivors, travelers, and deceivers. The clan seeks truth through lies and is recovering from a great loss, as many of its members were consumed by their own ancestors.",
        "disciplineText": "Obfuscate, Presence, Tellurgy",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "salubri",
        "name": "Salubri",
        "description": "A clan divided into two castes: the healers who seek redemption through service, and the warriors who seek revenge on their persecutors.",
        "disciplineText": "Auspex, Fortitude, Obfuscate",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "toreador",
        "name": "Toreador",
        "description": "A clan of passionate artists, tastemakers, critics, and others who embody beauty and creation. Passion and obsession for beauty run in their veins.",
        "disciplineText": "Auspex, Celerity, Presence",
        "curseName": "Starved for Beauty",
        "frenzyName": "Obsession",
        "overview": "Beauty is eternal, as is our appetite for it.\n\nToreador appreciate that beauty is the only thing worth an eternity, and that to feel it fully, in the blood, is the truest reason to go on existing. Well, that, and the power to stir the same passion in others. They typically Embrace those with good taste and an eye for detail, though their obsession often leads a Toreador astray, attracting them to those who were only meant to be appreciated. As the clan’s concept of art keeps expanding, it now claims not only painters, sculptors, and writers, but anyone who brings real creativity to a craft. Artists and collectors, poets and performers, influencers, anyone who makes or curates something worth feeling. The clan best suits those that can recognize beauty in many forms, as they will starve without it.\n\nArchetypes: Accomplished painter, forgotten writer, avid collector, passionate poet, charismatic influencer.\n\nToreador Beast: Idol\n\nToreador Curse: Starved for Beauty\n\nToreador Disciplines: Auspex, Celerity, Presence\n\nToreador Frenzy: Obsession",
        "curseText": "Curse: Starved for Beauty\n\nYour blood craves beauty above all else, making you suffer when you can perceive none of it around you. Any time you find yourself in surroundings devoid of beauty, you suffer a dice penalty equal to your generation modifier to all Power tests, your distress disrupting your ability to harness the power within you. The Storyteller is the arbiter of an environment’s aesthetic affects your curse. You can try to carry beauty with you, but depending on what you bring, you risk losing it or marring it along the way.",
        "frenzyText": "Frenzy: Obsession\n\nWhen you frenzy, you become obsessed with a single, beautiful thing, unable to think of anything else. Pick one feature of the scene, such as a person, a song, a striking blood splatter, or a work of art. You can barely look away from it, and if spoken to, you talk about only about that subject. All tests not related to enjoying, praising, or protecting it suffer a dice penalty equal to your generation modifier. This frenzy can end early if the object of your obsession is destroyed or leaves the scene, slipping beyond your perception.",
        "beastText": "Clan Beast: Idol\n\nYour Beast desires adoration and seeks to make others enamored of your presence. You look for individuals who see you as the most fascinating person they have ever met. You satiate it by seducing others, making them beg for your attention, and drinking in their flattery.",
        "traits": [
          {
            "id": "addictive_kiss",
            "name": "Addictive Kiss",
            "prerequisites": "Neonate or stronger.",
            "text": "When you feed on a creature, you can choose for the feeding to be especially pleasurable and addictive. If you feed in this way, the target gains a dice bonus equal to your generation modifier to social tests for the rest of the night. After that, the target suffers a dice penalty equal to your generation modifier to all social tests until it is bitten by you again or until 3 days have passed. This [trait] has no effect on vampires, and you can’t feed this way when you feed during physical conflict.\n\nIf you are an ancilla, the penalty lasts for up to a week."
          },
          {
            "id": "star_magnetism",
            "name": "Star Magnetism",
            "prerequisites": "Neonate or stronger. At least 2 dots in Presence.",
            "text": "You can spend 1 Willpower (in addition to the power’s normal cost) when you use a Presence power to transmit that power through an electronic device. You can affect targets who are viewing or hearing you, provided they are seeing or hearing a live feed and not a recording. If the power affects only one target, you must name it, though the name can be an online name or similar identifier chosen by the target rather than the target’s real name. If the power affects all targets within a specified distance, the targets are chosen at random from those viewing or hearing you, up to a maximum of 5 targets per dot you have in Presence."
          },
          {
            "id": "throw_voice",
            "name": "Throw Voice",
            "prerequisites": "Neonate or stronger. At least 1 dot in Presence and 1 dot in Auspex.",
            "text": "You can supernaturally project your entrancing voice to any point within Medium distance that you can see. You can spend 1 Willpower (in addition to the power’s normal cost) to manifest a Presence power from that point as if you were there, allowing you to affect targets that you otherwise might not be able to affect."
          },
          {
            "id": "entrancing_object",
            "name": "Entrancing Object",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Presence and 1 dot in Auspex.",
            "text": "Your entrancing powers can now be transmitted through objects. You can touch an object and imbue it with a Presence power of 3-dot rank or lower. The next time a non-animal creature touches it, the power activates as if you had just used it on the creature. You know when the power has been activated. If the power requires a test, you make the test when a creature activates it. At the Storyteller’s discretion, some Presence powers might not be applicable for use with this [trait]. For example, Friends to Enemies might not work well if imbued into a couch, but it might make someone feel similar effects of a Blood Bond if looking at a portrait of you."
          },
          {
            "id": "powerful_presence",
            "name": "Powerful Presence",
            "prerequisites": "Ancilla or stronger. At least 3 dots in Presence.",
            "text": "The base range for any Presence power you use increases by one step; Close becomes Short distance, Short becomes Medium distance, and Medium becomes Long distance. This [trait] can’t extend a power’s effects beyond Long distance. In addition, if a Presence power allows you to affect multiple targets, you can affect a number of additional targets equal to twice your generation modifier."
          }
        ]
      },
      {
        "id": "tremere",
        "name": "Tremere",
        "description": "These vampires were once mages who used magic to steal the curse of vampirism in the hopes of achieving immortality. Now their sorcery is bound by blood, and they study tirelessly to perfect their craft.",
        "disciplineText": "Auspex, Dominate, and Blood Sorcery or Necromancy",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "tzimisce",
        "name": "Tzimisce",
        "description": "Obsessed with ownership and transformation, this clan strives to bring the world, and the very flesh of those within it, under their control and design.",
        "disciplineText": "Animalism, Dominate, and Tellurgy or Vicissitude",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      },
      {
        "id": "ventrue",
        "name": "Ventrue",
        "description": "Self-proclaimed the Clan of Kings, these vampires were always involved with the ruling class throughout history, thanks to their ability to manipulate the minds and emotions of their subjects.",
        "disciplineText": "Dominate, Fortitude, Presence",
        "curseName": "Rarefied Palate",
        "frenzyName": "Arrogance",
        "overview": "To rule is both our birthright and greatest burden.\n\nThe clan of kings, the Ventrue believe that leadership is theirs by right, a destiny and a duty in equal measure, even if their glory days seem in these nights to be well behind them. Their conviction is that someone must rule, and that it is best for everyone if it’s them. They often treat the Embrace as a strategic acquisition, weighing a candidate’s worth as carefully as any investment, as whoever joins the clan must bring something of value and understand the duty that comes with it, gravitating toward natural leaders and politicians, community figures and executives, the heads of criminal families, anyone who would rather command than be commanded. They best be able to carry the weight of the crown if they will accept nothing less than the throne.\n\nArchetypes: Ambitious executive, unscrupulous banker, corrupt senator, vicious crime lord, portentous assistant.\n\nVentrue Beast: Superior\n\nVentrue Curse: Rarefied Palate\n\nVentrue Disciplines: Dominate, Fortitude, Presence\n\nVentrue Frenzy: Arrogance",
        "curseText": "Curse: Rareﬁed Palate\n\nYou have rarified tastes, finding only one specific type of mortal blood palatable. Choose a type of mortal, such as soldiers, natural brunettes, teachers, or the wealthy elite. If you can smell a mortal’s natural odor or its blood, you can tell whether it fits your preferred type. If you drink from one that doesn’t, you must make a Self Control test against a Difficulty equal to twice your generation modifier. On a success, you regain only 1 Vitae for every 3 you drink. On a failure, you vomit up the blood and gain no benefit from the feeding.",
        "frenzyText": "Frenzy: Arrogance\n\nWhen you frenzy, the need to rule rears its ugly head. You stop at nothing to take command of a situation. You strive to make someone obey an order from you, but that order can’t be supernaturally enforced, such as through the Dominate Discipline. All your other actions suffer a dice penalty equal to twice your generation modifier. This frenzy can end early if someone who isn’t your ally obeys your command without supernatural influence.",
        "beastText": "Clan Beast: Superior\n\nYour Beast demands loyalty and fealty, deeming your blood to be superior to all others. You satiate it by acting superior, making others obey you, and firmly establishing a hierarchy in which yours is the commanding voice.",
        "traits": [
          {
            "id": "obedience",
            "name": "Obedience",
            "prerequisites": "Neonate or stronger. At least 1 dot in Dominate.",
            "text": "You can use your Dominate powers on a target via eye contact, touch, or your voice, instead of the power’s normal limits, provided the target is within the power’s range. In addition, you can spend 1 Willpower (in addition to the power’s normal cost) when you use a Dominate power to transmit that power through an electronic device, such as a microphone, cellphone, or camera, using your voice, provided the electronic device is alive feed and not a recording. You must be able to see or hear each person you are targeting with the power, which can be via an electronic device."
          },
          {
            "id": "rationalize",
            "name": "Rationalize",
            "prerequisites": "Neonate or stronger. At least 2 dots in Dominate.",
            "text": "Victims of your Dominate powers believe that anything they do while under the influence of such powers was a result of their own free will, and they defend and rationalize their actions. A close, trusted friend of the victim who presses the victim on the rationalization can prompt them to make a Resolve test against a Difficulty equal to your dots in Dominate. On a success, the victim begins to question itself and its actions. At the Storyteller’s discretion, a victim that succeeds on this test multiple times may eventually become suspicious of your involvement in its life, recognizing its odd behavior often happens after interactions with you."
          },
          {
            "id": "unwavering_devotion",
            "name": "Unwavering Devotion",
            "prerequisites": "Neonate or stronger. At least 1 dot in Dominate and 1 dot in Presence.",
            "text": "Victims of your Dominate and Presence powers have their minds strengthened against the influence of similar powers used by others. A target currently affected by one of your Dominate or Presence powers gains a dice bonus equal to your dots in Dominate or Presence (whichever is greater) to its defenses against the Dominate and Presence powers of others. It also gains this bonus against any powers (other than yours) that would force it to act against its will or against your will while it is under the influence of your Dominate or Presence power."
          },
          {
            "id": "commanding_leader",
            "name": "Commanding Leader",
            "prerequisites": "Ancilla or stronger. At least 2 dots in Fortitude and 2 dots in Presence.",
            "text": "When you activate a Fortitude power that normally can affect only yourself, you can spend 1 Willpower (in addition to the power’s normal cost) to extend that Fortitude power to each creature of your choice within Short distance of you that is under the influence of your Dominate or Presence powers or that is Blood Bound to you. If an affected creature ends its turn more than Short distance from you, it loses this benefit. At the Storyteller’s discretion, some Fortitude powers might not be applicable for sharing with mortals, or for sharing in general."
          },
          {
            "id": "imposing_physique",
            "name": "Imposing Physique",
            "prerequisites": "Ancilla or stronger. At least 2 dots in Fortitude and 1 dot in either Dominate or Presence.",
            "text": "Your extraordinary physique makes your supernatural powers of influence stronger. When you use a Presence power while under the effects of a Fortitude power, you can choose to immediately end the Fortitude power and add your dots in Fortitude to any test that is part of that Presence power."
          }
        ]
      },
      {
        "id": "caitiff",
        "name": "Caitiff",
        "description": "Also known as the Clanless, these vampires are a mixed bag who don’t bear clear signs that they are descended from any of the 14 major clans. They are often viewed as little more than stray dogs by their kin.",
        "disciplineText": "3 randomly determined (see Chapter 3: The Clans)",
        "curseName": "[in development]",
        "frenzyName": "[in development]",
        "traits": []
      }
    ],
    "resourceTypes": [
      {
        "id": "haven",
        "name": "Haven",
        "description": "A place where you can hide, relax, and enter [daysleep] without fear of the sun. Each dot increases size/security and raises the Difficulty to find or break into it."
      },
      {
        "id": "property",
        "name": "Property",
        "description": "Places you own. Each dot increases the size, number, and overall value of your holdings."
      },
      {
        "id": "repository",
        "name": "Repository",
        "description": "A collection of a valuable resource such as books, weapons, or mechanical parts. Each dot increases size and complexity."
      },
      {
        "id": "vehicle",
        "name": "Vehicle",
        "description": "A vehicle from a motorcycle to a private jet. Each dot increases size, value, and prestige."
      },
      {
        "id": "ally",
        "name": "Ally",
        "description": "Someone you can count on for help when the cost or risk is not too high."
      },
      {
        "id": "minions",
        "name": "Minions",
        "description": "Each dot represents three weak individuals at your disposal."
      },
      {
        "id": "retainer",
        "name": "Retainer",
        "description": "A single servant who is not a minion. Dots indicate the retainer’s NPC Level."
      },
      {
        "id": "contact",
        "name": "Contact",
        "description": "A person in a field who provides information. Dots represent proficiency, knowledge, and access."
      },
      {
        "id": "fame",
        "name": "Fame",
        "description": "Recognition within a culture or subculture. Dots represent reach from a small niche to an international audience."
      },
      {
        "id": "herd",
        "name": "Herd",
        "description": "Mortals you can safely feed on. Each dot represents a small group available for feeding."
      },
      {
        "id": "mask",
        "name": "Mask",
        "description": "Established alternate identities. Each dot represents a distinct identity and improves their quality."
      },
      {
        "id": "status",
        "name": "Status",
        "description": "Political authority and respect within a specific mortal or vampiric society. One dot is a respectable member; five dots indicate a top authority figure."
      },
      {
        "id": "wealth",
        "name": "Wealth",
        "description": "Accessible financial worth. Each dot represents increasing ability to spend, from frugal purchases to very large donations and expenditures."
      }
    ],
    "resourceRuleText": "Physical and Social Assets must be specific. Each asset type has its own dots. Free Resource dots come from the Dot Distribution table in addition to Lifepath Resources.",
    "focusRuleText": "At each odd number of dots in a Skill (1, 3, and 5), you can acquire a Focus. A relevant Focus gives +1 die to the test. During character creation, Skills cannot exceed 3 dots.",
    "lifepathCompetence": "At the Storyteller’s discretion, when no other Skill applies but a Lifepath suggests competence, add 2 dice to the pool or gain a basic success.",
    "youngCharacter": {
      "description": "A young, relatively inexperienced character whose background is concentrated in a single Lifepath rather than spread across several roles.",
      "details": "Choose this option for a character who has not yet accumulated broad mortal or vampiric experience. It replaces the normal two Neonate Lifepaths with one Lifepath. That Lifepath receives 8 Skill dots and 5 Resource dots. Under the project Lifepath Skill Cap rule, Skills listed by the selected Lifepath can reach 4 dots during character creation; other Skills retain the normal chargen cap."
    }
  },
  "strings": {
    "messages": {
      "resourceNumber": "Resource {n}",
      "focusRowMeta": "Current {current} · Cap {cap}{lifepaths} · {slots} Focus {slotsLabel}",
      "focusRowLifepaths": " · Lifepaths: {names}",
      "focusSlotsOne": "slot",
      "focusSlotsOther": "slots",
      "powersLead": "Spend {dots} dots only among the three Clan Disciplines. The sire-granted dot is already present and cannot be removed. Then choose {powers} powers, {traits} Clan Traits, and {merits} Merits.",
      "variableClanUnresolved": "{clan}’s variable Clan Discipline has not been resolved.",
      "resolveClanChoiceNote": "Make that choice once on the Clan page before allocating Discipline dots.",
      "disciplineSpreadNote": "RAW says to distribute the listed dots among the three Clan Disciplines; it does not state a mandatory 3/2/1-style spread. Tier caps after character creation are Clan {clan} / Non-Clan {nonClan}.",
      "capDetail": "House-rule cap +{bonus} ({sources}){rest}",
      "lifepathDotsDetail": "Lifepath dots {dots}{rest}",
      "freePlus": "Free +{dots}",
      "disciplinePowerKicker": "{discipline} · {rank}-dot {category}",
      "rankDot": "{rank}-dot",
      "dotsCount": "{count} dots",
      "importantItemsAllowance": "RAW allowance: {items} additional Important {itemWord} because the character has {paths} {pathWord}. Each item should fit the character’s Lifepath background; slots are not permanently assigned one-to-one. Selected Lifepaths: {names}.",
      "importantItemSingular": "Item",
      "importantItemPlural": "Items",
      "lifepathSingular": "Lifepath",
      "lifepathPlural": "Lifepaths",
      "chooseExactPowers": "Choose exactly {count} Discipline powers.",
      "chooseExactTraits": "Choose exactly {count} Clan Traits.",
      "chooseExactMerits": "Choose exactly {count} Merits.",
      "requiredThirdDiscipline": "Required · choose {clan}’s variable Clan Discipline",
      "bonus": "Bonus: {value}",
      "chooseSireFirst": "Choose the sire type first.",
      "chooseSireAndClanFirst": "Choose the sire type and related Clan first.",
      "chooseLifepathsLead": "Choose {count} {pathWord}. Allocate {skillDots} Skill dots and {resourceDots} Resource dots inside each.",
      "skillDotsProgress": "Skill dots {used} / {total}",
      "resourceDotsProgress": "Resource dots {used} / {total}",
      "suggestedFocus": "Suggested Focus: {focus}",
      "currentCapHouse": "Current {current} · Cap {cap} · house-rule cap bonus +{bonus}",
      "skillsLead": "Ratings earned through Lifepaths stay in place. Spend {count} additional Skill dots without reducing any Lifepath rating.",
      "distributedLeftFinal": "{used} / {total} distributed · {left} left · final {final}",
      "categoryPriority": "{category} category priority",
      "setAttribute": "Set {attribute} to {rating}",
      "readDescriptionScale": "Read {name} description and rating scale",
      "readRules": "Read {name} rules",
      "readClanRules": "Read {name} clan rules",
      "readSireRules": "Read Sire rules: {name}",
      "sireClanDisciplinePlaceholder": "1 Clan Discipline",
      "generationForTier": "Generation — {tier}",
      "clanDisciplinesLabel": "Clan Disciplines — {clan}",
      "availableClans": "Available Clans",
      "unavailableClans": "Not available in the current Alpha",
      "unavailableClansLead": "These clans are retained for future V6 updates. Their narrative descriptions remain available for reference, but they cannot be selected yet.",
      "randomDisciplines": "{count} randomly determined Disciplines",
      "readNatureRules": "Read {name} Nature rules",
      "readNature": "Read {name} Nature",
      "readInformation": "Read {name} information",
      "generation": "Generation {generation}",
      "generationWithModifier": "{generation} · modifier {modifier}",
      "natureValue": "Nature: {name}",
      "disciplineRatingMeta": "Rating {rating} · Clan allocation {allocation}{sire}{gap}",
      "sireMarker": " · Sire +1",
      "powerGapMarker": " · powers in development",
      "sireOnlyDisciplineMeta": "Rating 1 · granted by Sire · non-Clan at chargen",
      "disciplineSelectedPowers": "Rating {rating} · {count} {powerWord} selected",
      "powerSingular": "power",
      "powerPlural": "powers",
      "clanTraitKicker": "Clan Trait · {tier}",
      "prerequisites": "Prerequisites: {value}",
      "disciplineLevel": "{discipline} {level}",
      "sireGrantInfo": "This Sire type grants 1 additional dot in: {discipline}. The bonus Discipline can be outside your character’s Clan. The selected bonus dot is already included in the Discipline rating and cannot be removed during chargen.",
      "lifepathSkillsBody": "Skills: {skills}",
      "lifepathResourcesBody": "Resources: {resources}",
      "lifepathSuggestedFocus": "{skill} (suggested Focus: {focus})",
      "chapter5Source": "Player Packet · Chapter 5: {discipline}",
      "attributeKicker": "{category} Attribute",
      "distributed": "{used} / {total} distributed",
      "validationStep": "Step {step}: {message}",
      "missingClanTraitSet": "The supplied Alpha packet does not provide a full Clan Trait set for {clan}.",
      "powersBudget": "Powers {used} / {total}",
      "traitsBudget": "Traits {used} / {total}",
      "meritsBudget": "Merits {used} / {total}",
      "clanDotsBudget": "Clan dots {used} / {total}",
      "sireBonus": "Sire bonus: {value}",
      "chargenMax": "Chargen max {max}",
      "ratingDots": "Rating {rating} · dots",
      "validationChooseVariableDiscipline": "Choose {clan}’s variable third Discipline.",
      "validationChooseLifepath": "Choose Lifepath {n}.",
      "validationCustomName": "Custom Lifepath {n} needs a name.",
      "validationCustomSkills": "Custom Lifepath {n} must define exactly 5 Skills.",
      "validationCustomResources": "Custom Lifepath {n} must define exactly 3 Resources.",
      "validationCustomResourceTypes": "Custom Lifepath {n}: choose all 3 Resource types.",
      "validationLpSkillDots": "{lifepath}: spend exactly {count} Lifepath Skill dots.",
      "validationLpResourceDots": "{lifepath}: spend exactly {count} Lifepath Resource dots.",
      "validationAttributeDots": "{category}: distribute exactly {count} Attribute dots above the three baseline dots ({distributed} distributed).",
      "validationAttributeRange": "{attribute} must be between 1 and {max}.",
      "validationFreeSkillDots": "Spend exactly {count} free Skill dots.",
      "validationSkillCap": "{skill} exceeds its house-rule character-creation cap of {cap}.",
      "validationFocusSlots": "{skill}: fill {count} Focus {slotWord} for rating {rating}.",
      "validationClanDisciplineDots": "Distribute exactly {count} Clan Discipline dots.",
      "validationDisciplineMax": "{discipline} exceeds maximum {max} dots for this tier.",
      "validationMissingPowerEntry": "{power} is listed in the Alpha power summary but its full rules entry is missing from the supplied packet.",
      "validationNoPowerDefinitions": "No power definitions are supplied for: {disciplines}.",
      "validationFreeResourceDots": "Spend exactly {count} free Resource dots.",
      "validationResourceMax": "{resource} exceeds the {max}-dot character-creation maximum after Lifepath sources are combined.",
      "validationResourceSpecific": "{resource} from Lifepaths must be made specific with a character description.",
      "validationFreeResourceUnknown": "Free Resource {n} has an unknown type.",
      "validationFreeResourceRating": "Free Resource {n} has an invalid rating.",
      "validationResourceLabel": "{resource} needs a specific label.",
      "validationImportantItem": "Important item {n} is empty.",
      "progressSelected": "{done}/1 selected",
      "progressClan": "{done}/1 Clan{extra}",
      "progressDisciplinesExtra": " · {done}/3 Disciplines",
      "progressChoices": "{done}/{total} choices · {left} left",
      "progressPaths": "{done}/{total} paths · {left} dots left",
      "progressDistributed": "{used}/{total} distributed · {left} left",
      "progressFreeDots": "{used}/{total} free dots · {left} left",
      "progressFocuses": "{used}/{total} Focuses · {left} left",
      "progressRequiredFields": "{done}/{total} required fields · {left} left",
      "progressPowers": "Dots {dotsUsed}/{dotsTotal} · Powers {powersUsed}/{powersTotal} · Traits {traitsUsed}/{traitsTotal} · Merits {meritsUsed}/{meritsTotal}",
      "progressNature": "{done}/1 Nature",
      "modifier": "Modifier {value}",
      "current": "Current {value}",
      "cap": "Cap {value}",
      "focusSlots": "{count} Focus {slotWord}",
      "focusAtRating": "Focus at rating {rating}",
      "selectedOf": "{used} of {total} selected",
      "distributedOf": "{used} of {total} distributed",
      "ratingMaxNow": "Rating {rating} · max now {max}",
      "lifepathNumber": "Lifepath {n}",
      "importantItemNumber": "Important Item {n}",
      "resourceSourceTag": "{source} +{dots}",
      "resourceFreeProgress": "{used} of {total} distributed",
      "sheetDotsAria": "{count} dots",
      "stepNumberedIssue": "Step {step}: {message}",
      "generationOrdinal": "{generation}th",
      "tierNameCount": "{count} Lifepaths",
      "resourceGuidanceBody": "{guidance}\n\nPhysical and Social Assets must be specific to the character. Most Resource types do not have an exact 1–5 shopping list in the Alpha; their dots scale the quality, size, reach, access, or NPC Level described by that type.",
      "creatureGenerationBand": "Generation {generations}",
      "creatureGenerationBandPlural": "Generations {generations}",
      "creatureAttributeBudgetValue": "{budgets} (primary / secondary / tertiary)",
      "creatureSireBonusValue": "+{bonus}",
      "creatureYoungStatus": "Young-character option active",
      "creatureYoungSkillDots": "{dots} Skill dots in the Lifepath",
      "creatureYoungResourceDots": "{dots} Resource dots in the Lifepath",
      "creatureYoungSkillCap": "{cap} dots for Skills listed by the Lifepath"
    },
    "text": {
      "s_0173e8962fec": "VTM V6 Alpha Character Generator",
      "s_8f7d030265a6": "Character Generator",
      "s_268e54a290da": "VTM V6 Alpha Chargen",
      "s_bc399052d420": "Export",
      "s_1a5894339f89": "Import",
      "s_f3e4fadb9e37": "Export",
      "s_d6fbc9d2bdd5": "Import",
      "s_44c57abd888a": "Reset",
      "s_37f710d1e891": "Reset",
      "s_4b631f698425": "Info",
      "s_b52b36b7269f": "Back",
      "s_bc981983e7f5": "Next",
      "s_e29a79fe0c34": "Review",
      "s_2751329afa45": "This step is complete.",
      "s_60fb9a19fe19": "Creature",
      "s_37894f731729": "Clan",
      "s_0a2795b612ad": "Sire",
      "s_51a33f5c1e2e": "Lifepath",
      "s_35136d138aa4": "Lifepaths",
      "s_a086d942884a": "Attribute",
      "s_a6652617f2c7": "Attributes",
      "s_ec9f630c8693": "Skill",
      "s_e09212c7d3ea": "Skills",
      "s_fe7f55b8bf68": "Focus",
      "s_7e5ef51d0b0a": "Focuses",
      "s_7548ab52c3d1": "Power",
      "s_236656bf9123": "Powers",
      "s_7869e66e6173": "Humanity",
      "s_021493f340d3": "Resource",
      "s_87df60de337f": "Resources",
      "s_56005f735049": "Merit",
      "s_12473ae7fbd7": "Merits",
      "s_94f47410b37b": "Clan Trait",
      "s_f2d358efc8f6": "Clan Traits",
      "s_bddc7adb1204": "Nature",
      "s_b74bdee9c34f": "Finish",
      "s_3879e6a38d9c": "Physical Asset",
      "s_d5368bedfd4d": "Social Asset",
      "s_9205f45e8fa1": "Wealth",
      "s_cbfd7f08c58a": "mortal",
      "s_c994f9e6adb6": "neonate",
      "s_6ca3aa935891": "ancilla",
      "s_f429030cf5c0": "elder",
      "s_6231e5600e85": "Neonate",
      "s_50546209b37b": "Ancilla",
      "s_71cc6a267b8c": "Elder",
      "s_11e84c992704": "What are you?",
      "s_c0dce5113590": "Your Clan",
      "s_91086a4d7284": "Sire & Generation",
      "s_ef478d3a5dc9": "Your Lifepaths",
      "s_230b50c19751": "Disciplines, Traits & Merits",
      "s_9a4cfa11b1ff": "Humanity & Nature",
      "s_06df75de05d2": "Your Resources",
      "s_576d45922f56": "Finishing Touches",
      "s_ff7f77cc88bd": "Step 1 · What Are You?",
      "s_17afcda150ef": "Step 2 · Your Clan",
      "s_1b63ea19f8e9": "Step 3 · Sire & Generation",
      "s_1c173828f39d": "Step 4 · Your Lifepaths",
      "s_d1491c761cf3": "Step 5 · Attributes",
      "s_4b9f7c999804": "Step 6 · Skills",
      "s_af3504b785ff": "Step 7 · Focuses",
      "s_5f7f7ffccf35": "Step 8 · Disciplines, Clan Traits & Merits",
      "s_4a03a519b095": "Step 9 · Humanity Scale & Nature",
      "s_b729875dd3e3": "Step 10 · Your Resources",
      "s_c543e29e315c": "Step 11 · Finishing Touches",
      "s_f59ac5cba69f": "Choose the vampire tier used for this character. It controls the RAW creation budgets and maximum ratings.",
      "s_2da1d5349de3": "Choose a Clan from those currently available in the Alpha. Use ? to open the full Clan information without selecting it.",
      "s_3915eebd224f": "Choose the Sire relationship that shaped your early nights. It grants 1 bonus Discipline dot; then choose the character’s generation within the current Alpha tier.",
      "s_ab9fee6941a5": "Choose a Lifepath.",
      "s_d1f8e5ea93b2": "Selection",
      "s_c3b69e661eec": "Choose…",
      "s_47388a3e9202": "Custom Lifepath (RAW)",
      "s_43397f29829c": "Optional young character rule",
      "s_160d9b4c3d17": "Use one Lifepath",
      "s_cfad8f685677": "Selected clan",
      "s_a55c248714f4": "Clan list",
      "s_eed6bfb41051": "Required",
      "s_f8c192193934": "Caitiff · 3 randomly determined Disciplines",
      "s_263a34e33825": "RAW says these are randomly determined. Use Randomize for a RAW selection; manual changes remain available for table adjudication.",
      "s_7322c289ed12": "Randomize 3",
      "s_fae0d8a2bb23": "Sire type",
      "s_8d441fb5f62f": "Generation",
      "s_89c526bf651d": "Adoptive sire Clan",
      "s_f6bcb7d6144e": "Broodmate Clan",
      "s_923461b005c9": "Bonus Discipline",
      "s_bb2ff987995e": "Lifepath Skills",
      "s_5590f2a6ebe7": "Lifepath Resources",
      "s_f3310e5bbc05": "Skill dots",
      "s_ab3884347a09": "Resource dots",
      "s_226781712bbe": "Read Lifepath details",
      "s_a9a96ec01949": "Primary",
      "s_025de599ea0a": "Secondary",
      "s_b710a1f98200": "Tertiary",
      "s_919b82a0b4b5": "Physical",
      "s_41a575086b73": "Social",
      "s_9e853f0d7cc6": "Mental",
      "s_5e4e5bd526ff": "Reset Attributes",
      "s_f4dd509ac115": "Reset Skills",
      "s_ae0cf17bafa8": "Reset Focuses",
      "s_d5ad6bf8fba7": "Free Skill dots remaining",
      "s_a99d31e819de": "Focus choices remaining",
      "s_70c343b19cd7": "Skills from selected Lifepaths",
      "s_946254b0a26e": "Other Skills",
      "s_4fc0e2bc8073": "Current",
      "s_b38fd978df2c": "Cap",
      "s_1d5d6e8f1778": "Player choice",
      "s_30df11dceb56": "Suggested by Lifepath",
      "s_b527157990fb": "RAW Skill examples",
      "s_1c85fd5e02c0": "Choose or type a Focus",
      "s_a7e985288ef7": "Suggestions are optional. Enter another relevant Focus if it better fits the character.",
      "s_8f09d2db07ce": "Discipline dots remaining",
      "s_283779715427": "Powers remaining",
      "s_7952542383b6": "Clan Disciplines",
      "s_49bea3830370": "Discipline Powers",
      "s_e708516e8be7": "Known powers",
      "s_6959e73a6779": "unlocks rank",
      "s_dc3a695ed2b8": "Starting Humanity",
      "s_03342dbb856b": "Balanced",
      "s_eb960eb41687": "Toward Beast",
      "s_46901c4814d9": "Toward Nature",
      "s_d2c94d04a851": "How Resource dots work:",
      "s_829318c8d255": "From Lifepaths",
      "s_d3fc0a9dc167": "Free Resources",
      "s_7020f74451f5": "Free Resource dots remaining",
      "s_99f57cd5f741": "Add Resource",
      "s_3deb74565196": "Type",
      "s_d15a04bf03ea": "Specific label",
      "s_4b4475f26b43": "Dots",
      "s_e963907dac5c": "Remove",
      "s_68f2dea03f3e": "Character details (optional)",
      "s_1c3a28365f55": "Make this asset specific",
      "s_709a23220f2c": "Name",
      "s_04259816ace1": "Alias",
      "s_ca051f59e015": "Apparent Age",
      "s_6272cf988e1c": "Actual Age",
      "s_a16df9616267": "Nostalgic Decade",
      "s_f836fce0ec05": "Important Items",
      "s_c16d9124ca48": "Weapons / combat gear (optional, Storyteller-adjudicated)",
      "s_05ab2829f589": "Flaws (optional, free text)",
      "s_16910c218ae6": "Character Review",
      "s_dd74d182c641": "Validation",
      "s_7e5a975b6add": "Identity",
      "s_a522e333addb": "Vitae Maximum",
      "s_815d46237b83": "Willpower Maximum",
      "s_2b3505197fe7": "Disciplines & Powers",
      "s_24bcb3f0be1e": "Weapons / Combat Gear",
      "s_73bd6bc4841a": "Flaws",
      "s_2bfbc2406946": "Rules reference",
      "s_0eb5ed506e49": "Information",
      "s_29dc4dcf1b49": "VTM V6 Alpha Player Packet",
      "s_d917a6a13dfc": "Current rating",
      "s_0e774a36d81a": "Tier Max Dots",
      "s_002aec72fe56": "Highest legal now",
      "s_3f80363119b9": "Category allocation",
      "s_a2221d5d58ed": "Final category total",
      "s_e5d078fd7ca2": "Chargen cap",
      "s_5deaef543a60": "Lifepath cap bonus",
      "s_a218e1d22bd1": "Focus slots",
      "s_3ed4ae577398": "Disciplines",
      "s_14877e80cbce": "Discipline",
      "s_92ef08325a48": "Activate",
      "s_64ae43e8fe76": "Cost",
      "s_7945d3c8f7a0": "Difficulty",
      "s_423208095dd7": "Distance",
      "s_1370004da76f": "Duration",
      "s_2bd9ab68600c": "Alpha powers",
      "s_eed036e414a3": "Prerequisites",
      "s_0cb84c5dbd1e": "Tier of Play",
      "s_23423b80c319": "Maximum Dots",
      "s_b672cc452b9f": "Maximum Discipline at chargen",
      "s_7fcd0b0c2ed7": "Generation Modifier",
      "s_0dc54af53c59": "How tests use it",
      "s_4d555de01caf": "Resource dots + an Attribute chosen by the Storyteller",
      "s_e91dc373ffba": "Straining a Resource",
      "s_db0a99516418": "Temporarily spend a dot for a greater effect",
      "s_ea924f72d31e": "Recovery",
      "s_08c8c44610b3": "Spent dots recover through downtime",
      "s_87ae4f621925": "One scene",
      "s_6ab1b6c211e1": "One Scene",
      "s_23e5b4d53ead": "One night",
      "s_633dffa31805": "One night or until completed",
      "s_26c6b590e34b": "One turn",
      "s_9c679173e7cc": "Instantaneous",
      "s_af0fa7cd4eb8": "Permanent",
      "s_9f0dc46e2c19": "Instantaneous or one night",
      "s_e102517374a8": "Self",
      "s_e3f139abb7a5": "Touch",
      "s_0fe7d82f25a3": "Short",
      "s_d404968ea90b": "Medium",
      "s_11eda67f9b15": "Long",
      "s_43067d91a03f": "Far Away",
      "s_bbfa773e5a63": "Close",
      "s_97c89a4d6630": "Action",
      "s_44e6bb3f3acb": "Minor action",
      "s_d2dc109abc55": "Minor Action",
      "s_f996ddc38c35": "Reaction",
      "s_13f0d41ae548": "Minor action or reaction",
      "s_6eef6648406c": "None",
      "s_940a179c898f": "Varies",
      "s_bc7819b34ff8": "Unknown",
      "s_89edce0fa0d8": "full entry missing",
      "s_d6330c5ff7a7": "Alpha source gap",
      "s_baec6cbbd048": "Discipline Power",
      "s_68119e6a931d": "No current Focus-bearing Skill is listed by a selected Lifepath.",
      "s_463e4257d41a": "No other Skill currently has a Focus slot.",
      "s_a2a85f7653c6": "No Lifepath Resource dots allocated yet.",
      "s_87a16d48cf00": "Character is complete under the implemented Alpha rules.",
      "s_b59155107bd0": "Reset all Attribute ratings to their 1-dot baseline?",
      "s_89f31ccd8547": "Reset all free Skill dots? Lifepath Skill dots will stay.",
      "s_96bedcc0a719": "Clear all selected Focuses?",
      "s_5375c6d91d74": "Reset the current character?",
      "s_4f33b57d5257": "Could not import this character JSON: ",
      "s_7a86e32b667f": "Choose the vampire tier. The tier sets maximum dots and the character-creation budgets for Lifepaths, Attributes, Disciplines, powers, Merits, Clan Traits, Skills, and Resources.",
      "s_0bce06af27e4": "This build focuses on Vampire Neonate, Ancilla, and Elder. Ghoul and Duskborn remain outside the enabled flow for now.",
      "s_5eba94f8eb0c": "Clan determines your curse, Beast/frenzy expression, clan Disciplines, and available Clan Traits.",
      "s_f968928dd6a6": "Select a clan, then resolve any required variable Discipline immediately. For Lasombra this means choosing Corruption or Oblivion before Discipline-dot allocation.",
      "s_4c4391d44b76": "Your sire type grants 1 additional Discipline dot. Generation places you in a power category and sets the generation modifier.",
      "s_3a22a44e5401": "The Storyteller typically chooses generation. Neonates are 13th–11th generation, Ancillae 10th–9th, and Elders 8th–6th in the supplied Alpha rules.",
      "s_0c8d307769e5": "Lifepaths represent past professions, identities, and roles. Each Lifepath gives Skill and Resource dots.",
      "s_c863282730d9": "Attributes define the character’s potential in Physical, Social, and Mental categories.",
      "s_4b0931b0a70e": "Assign primary, secondary, and tertiary category budgets. Each Attribute begins at 1. Use the Info button to read what each rating means; changing dots on mobile no longer opens the help drawer automatically.",
      "s_95dd68b6f8d5": "Skills define learned competency. Lifepaths contribute dots first, then you distribute the free Skill dots from the tier budget.",
      "s_75e4b6763084": "House rule: the base chargen Skill cap is 3, and each selected Lifepath that lists a Skill raises that Skill’s cap by +1, whether or not a Lifepath dot was assigned to it. Focus selection is handled on the next page.",
      "s_276ab8afd966": "A Skill has one Focus at rating 1, a second at 3, and a third at 5. Rating 2 therefore still has exactly one Focus.",
      "s_9d3594c5c91c": "All Focus slots are player choices. Parenthetical Focuses printed in selected Lifepaths are shown as recommendations during selection, alongside the Skill’s RAW example Focuses. They never lock or auto-fill a Focus, and you may type another relevant Focus.",
      "s_24e8ebf0392e": "Discipline dots unlock powers by rank. Clan Traits and Merits provide distinctive passive or activated abilities.",
      "s_2279914d74bc": "Choose the exact number of powers, Clan Traits, and Merits from the Dot Distribution table. A power’s rank cannot exceed your dots in its Discipline. Prerequisites are enforced when the Alpha text provides them.",
      "s_294f11225936": "A vampire begins balanced in the center of the seven-position Humanity Scale. Nature defines the mortal axis and its outburst.",
      "s_1d51847696ab": "Resources are Physical Assets, Social Assets, and Wealth. Lifepaths grant Resource dots; the Dot Distribution table grants additional free Resource dots.",
      "s_af96fe7898ac": "Calculate Vitae and Willpower, then define identity details, important items, and optional Flaws.",
      "s_e2471d3d6c65": "The Alpha packet provides a Skill description and example Focuses, but no rating-by-rating Skill scale comparable to Attributes.",
      "s_6d467bbf24d9": "Powers are listed by rank. Open an individual power for activation, cost, Difficulty, distance, duration, and full rules text.",
      "s_91f12d9e6b85": "The supplied Alpha packet lists this Discipline in clan summaries but does not provide Chapter 5 power definitions for it.",
      "s_0ad43f5d6677": "The selected vampire tier sets character-creation budgets and maximum ratings.",
      "s_a9dc68728a37": "Generation measures how far the vampire is descended from the First Vampire.",
      "s_a93c80e35ca6": "How old or young do you look? This is the character’s apparent age: the age an observer would estimate from their appearance. It is separate from Actual Age.",
      "s_be07deb375e0": "Custom Lifepath",
      "s_6b74730c1fa8": "Step 1 · Player Packet",
      "s_93e867006f47": "Step 2 · Player Packet",
      "s_c84165902437": "Step 3 · Player Packet",
      "s_0447f8fce29d": "Step 4 · Player Packet",
      "s_888cbc4ee772": "Step 5 · Player Packet",
      "s_0af602e1cfbd": "Step 5 · Player Packet + house rule",
      "s_f20e8a60f277": "Step 6 · Player Packet",
      "s_9451b2ae56ee": "Step 7 · Player Packet",
      "s_81a164992cdb": "Step 8 · Player Packet",
      "s_d7fdd44e17fd": "Step 9 · Player Packet",
      "s_e458f8c1f366": "What Are You?",
      "s_185385a394e5": "Disciplines, Clan Traits & Merits",
      "s_423845be217f": "Humanity Scale & Nature",
      "s_9361e50b0341": "Ancillae may begin at stage 1 toward either side if the Storyteller chooses an unbalanced beginning. Elders may begin at stage 2 toward either side.",
      "s_d6f6623ba186": "Vitae Maximum = 10 + Stamina. Willpower Maximum = 5 + Composure + Resolve. You receive one additional important item per Lifepath, provided it fits that Lifepath. Flaws have no fixed mechanical bonus or penalty in the Alpha packet.",
      "s_2793aab3b7f2": "Player Packet · Step 1 + Step 5: Maximum Dots and Attributes",
      "s_f0fca5da9b18": "Player Packet · Step 5: Skills & Focuses · cap modified by project house rule",
      "s_a9c6ab0505df": "Player Packet · Chapter 3: The Clans",
      "s_a23c10b98141": "Player Packet · Step 4: Lifepaths",
      "s_e1543c54dcfc": "Player Packet · Chapter 5: Powers of the Blood",
      "s_a930af0fa76c": "Player Packet · Step 6: Merits",
      "s_e90e12240c44": "Player Packet · Step 7: Humanity Scale and Your Nature",
      "s_6be9c5fe6ad8": "Tier determines the scale of the character and the chargen budgets used throughout this generator. The sidebar and each allocation step apply the selected tier automatically.",
      "s_b16d86448469": "Player Packet · Step 1: What Are You?",
      "s_ee4abcdc8b43": "Lower generations have stronger blood. Generation Modifier is used by multiple blood- and generation-related rules. The allowed generation range depends on the selected tier.",
      "s_a7cedb33ba16": "Player Packet · Step 3: Generation",
      "s_927b41aad7da": "Sire Type",
      "s_d9feb2156cb1": "The vampire relationship that shaped the character’s early nights.",
      "s_3db4351ea582": "The Sire step determines the bonus Discipline dot.",
      "s_a682be9fd0ef": "Player Packet · Step 3: Your Sire and Generation",
      "s_fb8f768276ea": "Selected Lifepaths",
      "s_2843922e9869": "No Lifepaths selected",
      "s_b283d8b5f50f": "Humanity Scale",
      "s_e2d50e533bec": "The Humanity Scale tracks the character between Beast-driven and mortal impulses.",
      "s_dcecd1fd7253": "The starting position depends on tier and Storyteller options. Nature represents the mortal axis that continues to pull on the character. Open the Nature entry separately for its specific rules text.",
      "s_9847b7a9bc31": "Player Packet · Step 7: Humanity Scale and Nature",
      "s_29a1bcad04d0": "Character Detail",
      "s_7d9fef6db018": "How old or young the character looks.",
      "s_1e875593c6d5": "Vampires stop aging when they are Embraced. Apparent Age is the age someone would estimate from the character’s visible appearance. For a vampire that appearance is normally the body preserved from the Embrace, but the field asks how old the character looks rather than asking for the exact age-at-Embrace number. Actual Age is the chronological field: how old the character really is, how old they were at the Embrace, and how long ago that was.",
      "s_cfa83195d1a7": "Player Packet · Step 9: Character Details",
      "s_035c7abf4d6e": "Step 8 · Equipment",
      "s_c3d35b2b566a": "A short list of key objects the character carries that may matter during play.",
      "s_d8a235db08cc": "Baseline gear",
      "s_f942c3fc5495": "ID, cellphone, and keys to the haven are assumed",
      "s_c146a87f96a2": "One additional Important Item per Lifepath",
      "s_9005943434bf": "RAW says each additional Important Item must fit the character’s Lifepath background. The rule limits the number of items by the number of Lifepaths; it does not require a permanent one-to-one slot assignment to a particular Lifepath. If an Important Item is used creatively or interestingly during a test, the Storyteller might award +1 die. Important Items are therefore practical narrative equipment with a possible situational bonus, not a Touchstone-style relationship mechanic.\n\nWeapons are described separately. The Alpha gives weapon categories and says to work with the Storyteller to decide which weapon or weapons suit the character; it does not state a fixed chargen weapon count.",
      "s_97ba9d01b175": "Player Packet · Step 8: Important Items and Weapons",
      "s_8390e618e362": "Weapons use broad categories that determine base damage and effective distance.",
      "s_7ba2335f1684": "Damage 2 · Close/Medium · +1 die to hide",
      "s_63f6d0e7995b": "Damage 3 · Close/Long",
      "s_a9bd860d67e4": "Damage 4 · Close/Far Away · −1 die to hide",
      "s_a7d43bc86fa5": "Unarmed attacks deal damage equal to half Strength and have Close distance. The weapon categories are deliberately loose. RAW says to work with the Storyteller to decide which weapon or weapons suit the character and how they are handled in play. The supplied Alpha does not state a fixed number of weapons granted during character creation.",
      "s_a23024858339": "Player Packet · Step 8: Weapons",
      "s_e2b1c8926c84": "Each dot increases the Haven’s size and security and raises the Difficulty for others trying to find or break into it. The Alpha does not give a fixed square-meter or security-system table by rating.",
      "s_60ce6365fd66": "Each dot increases the size, number, and overall value of your holdings, ranging from a handful of dilapidated fixer-uppers toward a massive downtown office tower.",
      "s_e48f36d289d3": "Each dot increases the size and complexity of the collection, from a modest collection with limited items toward a hoard that would make a museum jealous. For a weapons Repository, RAW does not map dots to specific weapon tiers or prices.",
      "s_0bfddaa563f2": "Each dot increases the vehicle’s size, value, and prestige, from small vehicles toward extremely expensive or prestigious ones. The Alpha gives no exact price brackets.",
      "s_c085fb772c22": "An Ally helps when doing so does not cost them too much or put them at great risk. The packet does not provide a separate 1–5 Ally scale beyond the Minions and Retainer variants.",
      "s_b7fd6bfa5d4c": "The dot rating is the Retainer’s NPC Level.",
      "s_e7cce698f013": "Each dot represents greater proficiency, knowledge, and access to restricted or confidential information.",
      "s_b184171d0a6f": "Each dot increases the reach of your fame, from a small niche toward an international audience.",
      "s_ff92de542624": "Each dot represents a small group of mortals you can safely feed on if needed.",
      "s_d34899124c51": "Each dot represents a distinct alternate identity and improves the quality of your masks.",
      "s_5a2e2dbb9aa6": "Dots represent relative power and influence in a specific society. 1 dot is a basic but respectable member; 5 dots place you among its top authority figures.",
      "s_14be55eb1cdb": "Dots increase overall financial worth and routine purchasing power. 1 dot supports frugal/economic habits; 5 dots makes you probably one of the wealthiest individuals in your city. The Alpha gives no fixed currency values for ratings 2–4. It explicitly gives an example where Wealth 2 can be strained by spending 1 dot for a particularly expensive purchase or several nights in a luxurious hotel.",
      "s_bd473fe2d257": "Player Packet · Step 8: Your Resources",
      "s_48865785331d": "Lifepaths represent major roles and experiences from the character’s past. They grant Skill and Resource allocations and can also establish suggested Focuses.",
      "s_62afcf0ac07b": "Each Lifepath normally grants 5 Skill dots among its listed Skills and 3 Resource dots among its listed Resources.",
      "s_3ea93adb60fe": "The supplied Alpha packet gives no qualitative description for this Attribute rating.",
      "s_4a21eeed24ce": "Choose a supported Vampire tier.",
      "s_fa84ba249563": "Choose a Clan.",
      "s_ea3371b4af5e": "Caitiff requires 3 randomly determined Disciplines.",
      "s_0db58fcd9f64": "This Clan is not available for character creation in the current Alpha.",
      "s_943cb1478e3c": "Choose a sire type.",
      "s_da5b43a11f6e": "Choose the adoptive sire / broodmate Clan.",
      "s_9fba51a373e7": "Choose the bonus Discipline granted by the sire type.",
      "s_93a49d3105d0": "Generation is outside the selected tier.",
      "s_47e756779db7": "Physical, Social, and Mental must use different primary/secondary/tertiary budgets.",
      "s_4df4cb79ead7": "Resolve the Clan’s three Disciplines first.",
      "s_713b9a525949": "A selected Discipline power no longer meets its rank requirement.",
      "s_f39322fb54fa": "Full Clan Traits are unavailable for this clan in the supplied Alpha packet.",
      "s_7856f741dc3a": "Choose a Nature.",
      "s_f58f020996c1": "Starting Humanity position is not allowed for this tier.",
      "s_c804c336534d": "Enter a character name.",
      "s_05d8d2c9309f": "Adoptive sire",
      "s_e4e3cb49be3b": " and related Clan",
      "s_d0a5cd87735f": "not selected",
      "s_ff48b4ba7b3f": "this clan",
      "s_1309d0eae609": " · Sire +1",
      "s_73bdc43fbfda": " · powers in development",
      "s_ce0e9e10727e": "Cost —",
      "s_b4395abff639": "Action —",
      "s_b3427402aa5f": "Monstrous 1",
      "s_fb9b57f130a6": "Mortal 1",
      "s_9ccb23bcec26": "Monstrous 2",
      "s_2e9317893258": "Mortal 2",
      "s_230e2e006d44": "Middle dot of the 7-dot Humanity Scale.",
      "s_483424abfa31": "Optional unbalanced beginning if the Storyteller uses that rule.",
      "s_ed5af1424bf8": "e.g. Armory, Dresden court, BMW 5 Series",
      "s_033072d2ce30": "What exactly is this Resource for the character?",
      "s_eb4ac84dcf2a": "Explain Apparent Age",
      "s_8fa9796dcc94": "Explain Important Items",
      "s_00c7620ae215": "Key object carried during the night",
      "s_7d246cc0ac3a": "Explain weapon categories",
      "s_6cbda4b51ec4": "The Alpha gives no fixed chargen weapon count; list agreed weapons or combat gear here.",
      "s_2b4c564c2f46": "Explain Humanity Scale",
      "s_885aa6e5e0c8": "Explain weapons",
      "s_7804e1e535fb": "Unsupported schema",
      "s_88480d230544": "and related Clan",
      "s_26d0dcfe84f3": "· Sire +1",
      "s_d233a8c2304e": "· powers in development",
      "s_e0fca110a4a8": "Could not import this character JSON:",
      "s_0b3d98d5a8a2": "Curse",
      "s_c095734e905e": "Frenzy",
      "s_66e12969c225": "Count",
      "s_0fa0f7ae68ce": "Allowance",
      "s_5bd44ebe63cd": "Tier",
      "s_55f8ebc805e6": "Description",
      "s_4bd291394543": "Neutral",
      "s_a36ef8aba229": "Light",
      "s_84d7adf04f3b": "Heavy",
      "s_039300206d12": "Discipline dots",
      "s_c425e7fae62b": "Clan dots",
      "s_3f722f888c27": "Clan allocation",
      "s_d1a616085a1a": "Traits",
      "s_21b246a788af": "Selected Lifepaths:",
      "s_7b5b5aba3395": "No selected powers",
      "s_29024d7d22ea": "Custom Lifepath name",
      "s_cdca8eca3a50": "Choose exactly 5 Skills",
      "s_0bb4dbf25a37": "Define exactly 3 Resource types",
      "s_0e49bb3a8b01": "Other Skills · free allocation",
      "s_8a66c3199e81": "House rule: base cap 3 +1 per Lifepath listing the Skill",
      "s_b5fcfbeba84a": "No Skill dots have been assigned through Lifepaths yet.",
      "s_93b9dac31ca1": "Every Attribute starts at 1. Assign the primary, secondary, and tertiary budgets as additional dots above that baseline. Choices are blocked immediately when they would exceed the category allocation or the tier’s Max Dots.",
      "s_4a6686dc5fae": "RAW tier Max Dots: Neonate 5, Ancilla 6, Elder 8. Attribute budgets (7/5/3, 8/6/4, 9/7/5) are dots distributed above the free 1-dot baseline in every Attribute. Final category totals are therefore budget + 3. The Alpha provides qualitative rating descriptions only through 5.",
      "s_81fe9de42544": "A Skill gains Focus slots at ratings 1, 3, and 5. Every Focus is selected by the player. Concrete parenthetical Focuses printed in Lifepaths are recommendations, never fixed values.",
      "s_d69f520a0925": "Concrete Lifepath suggestions appear first when available. Instructions such as “choose an art form” are not treated as Focus names. RAW Skill examples remain available as quick choices, and you can always type another relevant Focus.",
      "s_bab17e0d5f3a": "Choose the permitted starting Humanity position and the Nature that represents the character’s mortal axis.",
      "s_8143e9593c80": "Matching Resources from multiple Lifepaths are combined into one rating. Define what each Physical or Social Asset actually is for this character.",
      "s_33f720d4db8c": "How Resource dots work: dots represent usable economic, physical, or social capital. A Resource test uses Resource dots + an Attribute chosen by the Storyteller. Each dot improves the Resource’s quality or potential uses. You can temporarily spend a dot to strain the Resource for a greater effect, then recover spent dots through downtime. Use ? on a Resource for its specific dot meaning.",
      "s_783776510dd9": "Describe the actual asset, person, collection, or identity",
      "s_24b751fc219f": "e.g. basement flat in Neustadt, concealed entrance, reinforced shutters",
      "s_32dccedb01e3": "Complete identity details, Important Items, weapons if relevant, and optional Flaws. The review below follows a character-sheet hierarchy instead of equal-weight dashboard cards.",
      "s_d9fb4dbdff9a": "How old the character looks, not a second chronological age field.",
      "s_9713d6f12099": "Chronological age; the Alpha also asks how old they were at the Embrace and how long ago it was.",
      "s_55471d5f3de4": "10 + Stamina",
      "s_d3355d77c43a": "5 + Composure + Resolve",
      "s_4c20a09282a0": "Physical and Social Assets must be specific to the character. Most Resource types do not have an exact 1–5 shopping list in the Alpha; their dots scale the quality, size, reach, access, or NPC Level described by that type.",
      "s_04841f39c2eb": "No eligible powers yet. Add or receive a Discipline dot first.",
      "s_03cba82e6be6": "Complete the Clan Discipline choice first.",
      "s_bdc1c11f48f2": "No full power definitions for this Discipline are supplied in the Alpha packet.",
      "s_6437b7bf6558": "Rating",
      "s_0c9a64a81040": "Read Clan rules",
      "s_94a7393ac36f": "Player Packet · Chapter 5:",
      "s_4dfc56f1caf1": "No qualitative description for this rating is supplied in the Alpha.",
      "s_4973c42c631e": "The project Lifepath Skill Cap house rule overrides the RAW cap-3 sentence: a Skill listed by this Lifepath has chargen cap 4.",
      "s_fba48df19384": "Spend the listed dots among the three Clan Disciplines; the sire-granted dot is separate and cannot be removed.",
      "s_f7acc2ce067e": "Open Clan step",
      "s_40fd6271441a": "RAW says to distribute the listed dots among the three Clan Disciplines; it does not state a mandatory 3/2/1-style spread.",
      "s_3117d9000318": "Clan Discipline",
      "s_a4358ed680ff": "Non-Clan",
      "s_1a8e362c96d4": "granted by Sire",
      "s_9e763451c946": "non-Clan at chargen",
      "s_02620dbe78c2": "powers in development",
      "s_358f8f3d6b85": "power selected",
      "s_9e97ceca60d4": "powers selected",
      "s_dfdfdafb7e3a": "Suggested Focus",
      "s_4fff801fbb5c": "Lifepath dots",
      "s_75f527181b57": "Free",
      "s_d3bc3d68e50a": "Attribute dots remaining",
      "s_1a11e3511dc4": "Discipline powers",
      "s_dd48a1149548": "Rank",
      "s_7cb596ef8339": "Apparent Age help",
      "s_c454936ace15": "Important Item",
      "s_ead533685e26": "Weapon",
      "s_f32d0645a833": "Weapons",
      "s_2b2ffb1536e5": "Player Packet · Step 8: Resources",
      "s_ab0cec982627": "Player Packet · Step 9: Finishing Touches",
      "s_eec5303b9536": "dots represent usable economic, physical, or social capital. A Resource test uses Resource dots + an Attribute chosen by the Storyteller. Each dot improves the Resource’s quality or potential uses. You can temporarily spend a dot to strain the Resource for a greater effect, then recover spent dots through downtime. Use",
      "s_a74a5c796c05": "on a Resource for its specific dot meaning.",
      "s_c01d0a100001": "Generation band",
      "s_c01d0a100002": "Generation Modifier",
      "s_c01d0a100003": "Maximum dots",
      "s_c01d0a100004": "Maximum Discipline dots",
      "s_c01d0a100005": "Lifepaths",
      "s_c01d0a100006": "Attribute dot budgets",
      "s_c01d0a100007": "Clan Discipline dots",
      "s_c01d0a100008": "Sire Discipline dot",
      "s_c01d0a100009": "Discipline Powers",
      "s_c01d0a10000a": "Merits",
      "s_c01d0a10000b": "Clan Traits",
      "s_c01d0a10000c": "Free Skill dots",
      "s_c01d0a10000d": "Free Resource dots",
      "s_c01d0a10000e": "Young character",
      "s_c01d0a10000f": "Lifepaths with this option",
      "s_c01d0a100010": "Lifepath Skill dots",
      "s_c01d0a100011": "Lifepath Resource dots",
      "s_c01d0a100012": "Lifepath Skill cap",
      "s_c01d0a100013": "Player Packet · Step 4: Your Lifepaths",
      "s_c01d0a100014": "Young character option"
    }
  },
  "interface": {
    "documentLang": "en",
    "documentTitle": "VTM V6 Alpha Character Generator",
    "languageToggle": {
      "label": "UA",
      "title": "Перемкнути українською"
    },
    "import": {
      "full": "Import",
      "short": "Import"
    },
    "steps": {
      "creature": {
        "nav": "Creature",
        "title": "What are you?"
      },
      "clan": {
        "nav": "Clan",
        "title": "Your Clan"
      },
      "sire": {
        "nav": "Sire",
        "title": "Sire & Generation"
      },
      "lifepaths": {
        "nav": "Lifepaths",
        "title": "Your Lifepaths"
      },
      "attributes": {
        "nav": "Attributes",
        "title": "Attributes"
      },
      "skills": {
        "nav": "Skills",
        "title": "Skills"
      },
      "focuses": {
        "nav": "Focuses",
        "title": "Focuses"
      },
      "powers": {
        "nav": "Powers",
        "title": "Disciplines, Traits & Merits"
      },
      "humanity": {
        "nav": "Humanity",
        "title": "Humanity & Nature"
      },
      "resources": {
        "nav": "Resources",
        "title": "Your Resources"
      },
      "finish": {
        "nav": "Finish",
        "title": "Finishing Touches"
      }
    }
  }
};
