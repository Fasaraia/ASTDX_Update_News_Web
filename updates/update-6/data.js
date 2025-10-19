// This file contains all the data for "Update 6".
const updateData = {
    // --- METADATA ---
    id: "update-6",
    title: "Update 6",
    date: "Sept 21, 2025",

    // --- UNIT FILTERS FOR GRIDS ---
    // All new units will be displayed in one grid for this update.
    newAdditions: [
        "Meduka", "Renitsu", "Flaming Tiger", "Shirtless Devil", "Gakukai", "Blood Queen", "Flower Trainer", "Frost Moon", "Miracle Maker"
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
            image: "assets/units/5_star_units/meduka_icon.png",
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
            image: "assets/units/5_star_units/renitsu_icon.png",
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
            image: "assets/units/primal_units/flaming_tiger_icon.png",
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
            image: "assets/units/5_star_units/shirtless_devil_icon.png",
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
            image: "assets/units/5_star_units/gakukai_icon.png",
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
                        "Regenerates <span class='highlight-text-green'>10</span> HP Every 3 Seconds, Up to <span class='highlight-text-green'>150</span> HP",
                        "<span class='highlight-text-green'>30%</span> Chance to Dodge Attacks",
                        "Gakukai’s Attacks have a <span class='highlight-text-green'>20%</span> Chance to Inflict Black Electrokinesis, Which applies visual cracks to Enemies. Black Electrokinesis lasts Forever and Makes Enemies take 2% More Damage Per Stack, and can be Stacked up to 5 Times for a total of 10% More Damage (No visuals)"
                    ]
                }],
            }
        },
        {
            name: "Blood Queen",
            image: "assets/units/5_star_units/blood_queen_icon.png",
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
                        "Every Attack sends a Blood Slash that deals <span class='highlight-text-green'>30%</span> of Unohana’s Damage towards the Strongest Enemy in her Range. If this Enemy is a Boss Enemy, it instead deals <span class='highlight-text-green'>50%</span> of Unohana’s Damage. [Blood Slash Aoe Size: Line 4]",
                        "For Every Enemy Unohana Kills:",
                        "◦ <span class='highlight-text-green'>1%</span> Damage (Up to <span class='highlight-text-green'>20%</span>)",
                        "◦ <span class='highlight-text-green'>0.5%</span> Crit (Up to <span class='highlight-text-green'>10%</span>)",
                        "Upon Reaching Max Stacks, Unohana enters a Frenzy, getting an additional <span class='highlight-text-green'>25%</span> Crit and An Additional Attack Every <span class='highlight-text-green'>3</span> Attacks for <span class='highlight-text-green'>20s</span>. Once this ends, her stacks are reset"
                    ]
                },
                {
                    heading: 'Beauty in Blood',
                    content: [
                        "Every Time Unohana Attacks 5</span> Times: ",
                        "Generate <span class='highlight-text-green'>1</span> Blood Orb Circling Around Unohana, Up to <span class='highlight-text-green'>4</span>",
                        "For Every Blood Orb currently held:",
                        "◦ <span class='highlight-text-green'>7.5%</span> Damage",
                        "Whenever Unohana is attacked:",
                        "◦ Consume <span class='highlight-text-green'>1</span> Blood Orb to do the Following:",
                        "  ◦ Counter Attack with a Blood Splatter that deals <span class='highlight-text-green'>40%</span> of Unohana’s Damage (if allies are in range are stunned, consumes an blood orb to remove stun)"
                    ]
                }]
            }
        },
        {
            name: "Flower Trainer",
            image: "assets/units/exclusive_units/flower_trainer_icon.png",
            rarity: "Exclusive",
            element: "Green",
            placement: "Ground",
            method: "Tower",
            passive: {
                title: 'Passive Ability:',
                columnCount: 2,
                columns: [{
                    heading: 'Beautiful Poisonous Elegance',
                    content: [
                        "<span class='highlight-text-green'>60%</span> Chance to Dodge",
                        "Flower Trainer’s Poison Has a Stronger Toxin, Making it deal <span class='highlight-text-green'>35%</span> Damage over 8 Seconds and Preventing Enemies from Regenerating",
                        "Whenever Flower Trainer is Stunned:",
                        "◦ Apply <span class='highlight-text-green'>3</span> Stacks of Poison to the Enemy that Attacked Her"
                    ]
                },
                {
                    heading: 'Sweet and Motivating Beauty',
                    content: [
                        "All Slayer Units Within Flower Trainer’s Range Get a <span class='highlight-text-green'>10%</span> Chance to Dodge",
                        "All Slayer Units Within Flower Trainer’s Range get a <span class='highlight-text-green'>10%</span> Dmg Boost",
                        "All Slayer Units Within Flower Trainer’s Range get a <span class='highlight-text-green'>5%</span> Chance to perform an Additional Attack",
                        "<span class='cd-desc'>[Does Not Stack with Multiple Flower Trainers, and Flower Trainer does not get this Herself]</span>"
                    ]
                }]
            }
        },
        {
            name: "Frost Moon",
            image: "assets/units/exclusive_units/frost_moon_icon.png",
            rarity: "Exclusive",
            element: "Blue",
            placement: "Ground",
            method: "Frost Moon Portal",
            passive: {
                title: 'Passive Ability:',
                columnCount: 2,
                columns: [{
                    heading: 'Flamboyant Upper Lunar',
                    content: [
                        "Regenerates <span class='highlight-text-green'>10 HP</span> Every 3 Seconds, Maxing at <span class='highlight-text-green'>150 HP</span>",
                        "Stuns Inflicted on Frost Moon are <span class='highlight-text-green'>20%</span> Shorter",
                        "All Upper Lunar Units in Frost Moons’s Range get <span class='highlight-text-green'>5%</span> Damage and <span class='highlight-text-green'>5%</span> Crit Chance",
                        "<span class='cd-desc'>[Does Not Stack with Multiple Doumas]</span>",
                        "For Every Wave passed:",
                        "◦ <span class='highlight-text-green'>2.5%</span> Damage (Up to  <span class='highlight-text-green'>25%</span>)",
                        "◦ <span class='highlight-text-green'>1%</span> Range (Up to  <span class='highlight-text-green'>10%</span>)"
                    ]
                },
                {
                    heading: 'Bodhisattva of Mahapadma',
                    content: [
                        "Douma’s <span class='highlight-text-blue'>Freeze</span> lasts 40% Longer",
                        "Every time Douma Attacks 3 Times:",
                        "◦ Generate 2 Ice Lotus on Douma (Up to 20)",
                        "All Slayer Units Within Flower Trainer’s Range get a <span class='highlight-text-green'>5%</span> Chance to perform an Additional Attack",
                        "◦  Consume 10 Ice Lotus to Generate an Ice Lotus Tree that takes the attack, Freezes the Attacker and Applies Chilled"
                    ]
                }]
            },
            manualAbility: {
                title: 'Manual Ability:',
                columns: [{
                    heading: 'Demon Metamorphosis',
                    content: [
                        "<span class='cd-desc'>N/A</span>",
                        "Requires Flower Trainer to be in range to be used (any upgrade)",
                        "◦ Consume all MAX upg Douma in range and combine their DMG stat",
                        "◦ Summon 1 Frost Moon Clone that acts as a seperate unit",
                        "◦ Increase HP to <span class='highlight-text-green'>666</span>",
                        "◦ All attacks deal poison",
                        "◦ Lose <span class='highlight-text-green'>75</span> HP per attack. Reaching 0 HP deletes Douma and the Frost Moon Clone"
                    ]
                }]
            }
        },
        {
            name: "Miracle Maker",
            image: "assets/units/5_star_units/miracle_maker_icon.png",
            rarity: "5 Star",
            element: "Red",
            placement: "Ground",
            method: "Starpass",
            passive: {
                title: 'Passive Ability:',
                columnCount: 1,
                columns: [{
                    heading: 'Towering Giant',
                    content: [
                        "Miracle Maker Takes <span class='highlight-text-green'>20%</span> Less Damage Taken from Attacks",
                        "Miracle Maker’s Size continuously grows with Each New Move Obtained, Every Time Miracle Maker Grows in Size:",
                        "◦ <span class='highlight-text-green'>20%</span> Less Damage Taken from Attacks",
                        "◦ <span class='highlight-text-green'>20%</span> Less Damage Taken from Attacks",
                        "Upon Reaching Max Size:",
                        "For Every Wave passed:",
                        "◦ Enemies will always Target Miracle Maker, regardless of how many units are in their range when Attacking",
                        "◦ Miracle Maker becomes Hybrid"
                    ]
                }]
            }
        }
    ]
};