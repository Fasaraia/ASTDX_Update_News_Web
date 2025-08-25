const newUnitsData = [
    {
        name: "Banana",
        image: "assets/units/placeholder.png",
        rarity: "Unbound",
        element: "Green",
        placement: "Ground",
        method: "Banner",
        passive: {
            title: 'Passive Ability:',
            columnCount: 2, 
            columns: [{
                heading: 'Banana',
                content: [
                    "you become a banana",
                    "banana becomes you",
                    "<span class='highlight-text-red'>-10%</span> humanity"
                ]
            },{
                heading: 'Banana',
                content: [
                    "<span class='highlight-text-green'>+15%</span> DMG in banana maps "
                ]

            }]
        }
    },
    {
        name: "Michishibo",
        image: "assets/units/unbound_units/kokushiboU_icon.png",
        rarity: "Unbound",
        element: "Purple",
        placement: "Ground",
        method: "Banner Y",
        passive: {
            title: 'Passive Abilities:',
            columnCount: 2, 
            columns: [{
                heading: 'Mastery of the Moon',
                content: [
                    "Every attack <strong>chains</strong> to another enemy in <span class='highlight-text-purplegradient'>Michishibo's range</span>; <strong>Ricocheting for 60%</strong> of his <strong>Damage</strong>",
                    "Trigger an <strong>additional attack</strong> for every 5 attacks",
                    "For Every <span class='highlight-text-red'>Kill</span> during <span class='highlight-text-purplegradient'>Transparent World</span> (These Buffs Reset upon Transparent World Ending):",
                    "◦ <span class='highlight-text-green'>+4%</span> Crit (Up to <span class='highlight-text-green'>+20%</span>)",
                    "◦ <span class='highlight-text-green'>+3%</span> Dmg (Up to <span class='highlight-text-green'>+15%</span>)",
                    "◦ <span class='highlight-text-green'>+3%</span> Range (Up to <span class='highlight-text-green'>+15%</span>)"
                ]
            },{
                heading: 'Demon Hunger Mixed with Swordsman Superiority',
                content: [
                    "For <span class='highlight-text-purplegradient'>every 3 enemies defeated</span>, Michishibo Increases his HP by <span class='highlight-text-green'>+10 HP</span> (Up to <span class='highlight-text-green'>200 HP</span>)",
                    "If the Map takes Place at <strong>Night</strong>:",
                    "◦ Gain <span class='highlight-text-green'>+20%</span> Dmg",
                    "◦ <span class='highlight-text-purplegradient'>Transparent World</span> Duration is <strong>Doubled</strong>"
                ]

            }]
        }
    },
    {
        name: "Spider Boss",
        image: "assets/units/unbound_units/chrolloU_icon.png",
        rarity: "Unbound",
        element: "Green",
        placement: "Ground",
        method: "Banner X",
        passive: {
            title: 'Passive Abilities:',
            columns: [{
                heading: 'Master of Tricks',
                content: [
                    "Every Time Spider Boss Kills <span class='highlight-text-green'>5</span> of a <strong>Unique Enemy Type</strong>: Apply the Following Effects",
                    "◦ <span class='highlight-decelerate'>Decelerate</span> - Next Attack Applies Slow",
                    "◦ <span class='highlight-explosive'>Explosive</span> - 50% Chance to Dodge for 20 Seconds",
                    "◦ <span class='highlight-powerful'>Powerful</span> - 10% Damage for 10 Seconds",
                    "◦ <span class='highlight-rage'>Rage</span> - 20% Chance to Crit for 30 Seconds",
                    "◦ <span class='highlight-regenerator'>Regenerator</span> - The next attack applies Poison DoT",
                    "◦ <span class='highlight-cloner'>Cloner</span> - Perform a guaranteed Additional Attack"
                ]
            }, {
                heading: 'Copycat',
                content: [
                    "Spider boss's <strong>attacks</strong> are always <span class='highlight-text-green'>super effective</span> against <span class='highlight-text-green'>any element enemy</span>"
                ]
            }]
        }
    },
    {
        name: "Supreme Leader",
        image: "assets/units/unbound_units/freizaU_icon.png",
        rarity: "Unbound",
        element: "Orange",
        placement: "Air",
        method: "Trial 3",
        passive: {
            title: 'Passive Ability:',
            columns: [{
                heading: 'Ever-Evolving Emperor',
                content: [
                    "For <strong>every transformation</strong> <span class='highlight-text-purplegradient'> Supreme Leader</span> undergoes:",
                    "◦ <span class='highlight-text-green'>+5%</span> Crit",
                    "◦ <span class='highlight-text-green'>+10%</span> Chance to Dodge"
                ]
            }]
        }
    },
    {
        name: "Magma Marine",
        image: "assets/units/unbound_units/akainuU_icon.png",
        rarity: "Unbound",
        element: "Red",
        placement: "Ground",
        method: "Trial 2",
        passive: {
            title: 'Passive Ability:',
            columns: [{
                heading: 'Ruthless Hot Head',
                content: [
                    "Magma Marine's <span class='highlight-text-orangegradient'>Burn Ticks</span> deal <span class='highlight-text-green'>+25%</span> more damage",
                    "If Magma Marine is <span class='highlight-text-red'>attacked</span>, negates the Attack and <span class='highlight-text-orangegradient'>applies burn</span> to the enemy that attacked<span class='highlight-text-orangegradient'> (5 Times Only)</span>"
                ]
            }]
        }
    },
    {
        name: "Etri",
        image: "assets/units/unbound_units/esdeathU_icon.png",
        rarity: "Unbound",
        element: "Blue",
        placement: "Ground",
        method: "Trial 1",
        passive: {
            title: 'Passive Ability:',
            columns: [{
                heading: 'Ice Queen\'s Frozen Heart',
                content: [
                    "<span class='highlight-text-blue'>Etri's Freeze</span> lasts <span class='highlight-text-green'>+50%</span> Longer",
                    "Applies a <span class='highlight-text-bluegradient'>chilled status effect</span> after <span class='highlight-text-blue'>freeze ends</span>"
                ]
            },
            {
                heading: 'Chilled',
                content: [
                    "<span class='highlight-text-yellow'>Slows down</span> enemies by <span class='highlight-text-green'>10%</span> for <span class='highlight-text-bluegradient'>8 seconds</span></span>"
                ]
            }
        ]
        }
    }
];