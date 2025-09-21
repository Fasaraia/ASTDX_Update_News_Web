// This file contains all the data for "Update 6".
const updateData = {
    // --- METADATA ---
    id: "update-6",
    title: "Update 6",
    date: "Sept 21, 2025",

    // --- UNIT FILTERS FOR GRIDS ---
    // All new units will be displayed in one grid for this update.
    newAdditions: [
        "Meduka", "Renitsu", "Flaming Tiger", "Shirtless Devil", "Gakukai", "Blood Queen"
    ],
    // No separate "New Passives" section for this update
    newPassives: [], 

    // --- EVENT DATA (Not applicable for this update) ---
    bannerRates: [],
    contracts: [],

    // --- ALL UNIT DATA FOR THIS UPDATE ---
    allUnits: [
        {
            name: "Meduka",
            image: "assets/units/placeholder.png",
            rarity: "5 Star",
            element: "Green",
            placement: "Air",
            method: "Banner",
            passive: {
                title: 'Passive Ability:',
                columnCount: 1,
                columns: [{
                    heading: 'Magic Arrow Volley',
                    content: [
                        "For every <span class='highlight-text-red'>enemy</span> in Meduka’s Range:",
                        "◦ <span class='highlight-text-green'>2% </span> More Damage (Up to 30%)",
                        "◦ <span class='highlight-text-green'>2% </span> Chance to Dodge (Up to 30%)",
                        "If there are 15 or More Enemies in Range:",
                        "Meduka will Perform a <span class='highlight-text-green'>Full AOE</span> Arrow Volley that deals <span class='highlight-text-green'>100%</span> of Madoka’s Damage"
                    ]
                }]
            }
        },
        {
            name: "Renitsu",
            image: "assets/units/placeholder.png",
            rarity: "5 Star",
            element: "Orange",
            placement: "Ground",
            method: "Banner",
            passive: {
                title: 'Passive Ability:',
                columnCount: 1,
                columns: [{
                    heading: 'Indominatible Slayer Spirit',
                    content: [
                        "This Unit can Still Attack while <span class='highlight-text-red'>Stunned</span>, But His Attacks will only deal <span class='highlight-text-red'>25%</span> Of His Damage",
                        "Renitsu’s Thunder Strikes Apply a Stronger Form of Shock, Dealing <span class='highlight-text-green'>15%</span> Damage Over 2 Seconds",
                        "Every <span class='highlight-text-green'>7</span> Attacks, Zenitsu lets out a heavily amplified strike that deals <span class='highlight-text-green'>220%</span> of His Damage.",
                    ]
                }]
            }
        },
        {
            name: "Flaming Tiger",
            image: "assets/units/placeholder.png",
            rarity: "Primal",
            element: "Red",
            placement: "Ground",
            method: "Trial 4",
            passive: {
                title: 'Passive Ability:',
                columnCount: 2,
                columns: [{
                    heading: 'Burning Resolve',
                    content: [
                        "ALL <span class='highlight-text-purplegradient'>Slayer</span> Units within range deal <span class='highlight-text-green'>10%</span> more DoT Damage (not stackable with multiple Flaming Tigers)",
                        "Any units that is attacked will be redirected to Flaming Tiger, taking the damage instead",
                        "<span class='highlight-text-green'>50%</span> Damage Reduction",
                        "If redirected, Counter Attack with a Flaming Slash that deals <span class='highlight-text-green'>30%</span> of Flaming Tiger’s Damage and <span class='highlight-text-orangegradient'>applies Burn</span>. If Flaming Tiger’s HP Drops to 75 and Under, This Counter instead deals <span class='highlight-text-green'>100%</span> of Flaming Tiger’s Damage.",
                    ]
                },
                {
                    heading: 'Blazing Heart',
                    content: [
                        "If Flaming Tiger is Stunned from an <span class='highlight-text-red'>Attack</span> that he intercepted to protect an <span class='highlight-text-green'>Ally</span>:",
                        "◦ That <span class='highlight-text-green'>Ally</span> Unit Gets <span class='highlight-text-green'>20%</span> More Damage and has a <span class='highlight-text-green'>20%</span> Chance to <span class='highlight-text-orangegradient'>inflict Burn</span>",
                        "If Humble Swordsman or Flower Trainer is in Flaming Tiger’s Range and Targets the Same Enemy as Flaming Tiger:",
                        "◦ Flaming Tiger gain <span class='highlight-text-green'>5% damage",
                        "◦ Flaming Tiger gets a <span class='highlight-text-green'>20%</span> Chance to Crit if This Enemy is a Boss Enemy, or <span class='highlight-text-green'>30%</span> if it’s against a Boss named Akaza."
                    ]
                }]
            },
            manualAbility: {
                title: 'Manual Ability:',
                columns: [{
                    heading: 'Set Your Heart Ablaze',
                    content: [
                        "<span class='cd-desc'>N/A</span>",
                        "If Flaming Tiger is at 30 HP or below or has dealt 2.5m damage:",
                        "◦ Swap attack to 9th form",
                        "◦ Replace <span class='highlight-text-red'>burn</span> with <span class='highlight-text-orangegradient'>Purgatory Flames</span> (60% of DoT damage in 8 seconds)",
                        "◦ First attack deal <span class='highlight-text-green'>+250%</span> damage and has <span class='highlight-text-green'>100%</span> chance to crit",
                        "◦ Permanent <span class='highlight-text-green'>+30% Damage</span>"
                    ]
                }]
            }
        },
        {
            name: "Shirtless Devil",
            image: "assets/units/placeholder.png",
            rarity: "5 Star",
            element: "Blue",
            placement: "Air",
            method: "Evolve",
            passive: {
                title: 'Passive Ability:',
                columnCount: 1,
                columns: [{
                    heading: 'Cyromancer Expertise',
                    content: [
                        "Shirtless Devil's Freeze lasts <span class='highlight-text-green'>40%</span> longer",
                        "Every time Shirtless Devil's <span class='highlight-text-blue'>freezes</span> 5 enemies:",
                        "◦ Construct an Ice Block anywhere in his range with HP equal to 50% of his Damage; enemies must destroy this ice block to pass",
                        "When Shirtless Devil is hit by a blow that would stun him:",
                        "◦  Construct an Ice Shield that absorbs the hit and applies <span class='highlight-text-blue'>Chilled</span> to the attacker (once per enemy, up to 5 times)"
                    ]
                }],
            }
        },
        {
            name: "Gakukai",
            image: "assets/units/placeholder.png",
            rarity: "5 Star",
            element: "Purple",
            placement: "Ground",
            method: "Tower",
            passive: {
                title: 'Passive Ability:',
                columnCount: 1,
                columns: [{
                    heading: 'Corrosive Black Lightning',
                    content: [
                        "Regenerates 10 HP Every 3 Seconds, Up to 150 HP",
                        "30% Chance to Dodge Attacks",
                        "Gakukai’s Attacks have a 20% Chance to Inflict Black Electrokinesis, Which applies visual cracks to Enemies. Black Electrokinesis lasts Forever and Makes Enemies take 2% More Damage Per Stack, and can be Stacked up to 5 Times for a total of 10% More Damage (No visuals)"
                    ]
                }],
            }
        },
        {
            name: "Blood Queen",
            image: "assets/units/placeholder.png",
            rarity: "5 Star",
            element: "Purple",
            placement: "Ground",
            method: "Tower",
            passive: {
                title: 'Passive Ability:',
                columnCount: 2,
                columns: [{
                    heading: 'Twisted Blood Queen’s Rampage',
                    content: [
                        "Every Attack sends a Blood Slash that deals 30% of Unohana’s Damage towards the Strongest Enemy in her Range. If this Enemy is a Boss Enemy, it instead deals 50% of Unohana’s Damage. [Blood Slash Aoe Size: Line 4]",
                        "For Every Enemy Unohana Kills:",
                        "◦ 1% Damage (Up to 20%)",
                        "◦ 0.5% Crit (Up to 10%)",
                        "Upon Reaching Max Stacks, Unohana enters a Frenzy, getting an additional 25% Crit and An Additional Attack Every 3 Attacks for 20s. Once this ends, her stacks are reset"
                    ]
                },
                {
                    heading: 'Beauty in Blood',
                    content: [
                        "Every Time Unohana Attacks 5 Times: ",
                        "Generate 1 Blood Orb Circling Around Unohana, Up to 4",
                        "For Every Blood Orb currently held:",
                        "◦ 7.5% Damage",
                        "Whenever Unohana is attacked:",
                        "◦ Consume 1 Blood Orb to do the Following:",
                        "  ◦ Counter Attack with a Blood Splatter that deals 40% of Unohana’s Damage (if allies are in range are stunned, consumes an blood orb to remove stun)"
                    ]
                }]
            }
        }
    ]
};