export default function getCategory(category) {
    const descriptions = {
        "T-Shirts": "Unleash chaos with HellSpawn’s statement T-shirts, crafted from premium cotton and featuring raw, dystopian graphics.",

        "Hoodies": "Stay fierce in HellSpawn’s hoodies, featuring oversized fits, deep hoods, and eerie graphics that radiate untamed energy.",

        "Trousers": "Dominate the streets in HellSpawn’s trousers, featuring distressed finishes, cargo pockets, and metal hardware for an urban edge.",

        "Sweat Shirts": "Stay warm in HellSpawn’s sweatshirts, blending comfort with cryptic designs, oversized fits, and hardcore streetwear aesthetics.",

        "Note Books": "Jot down your dark thoughts in HellSpawn’s premium notebook, bound with gothic aesthetics and built for dreamers and disruptors.",

        "Mugs": "Fuel your day with HellSpawn’s mugs, featuring dark, striking designs on high-quality ceramic for the ultimate statement.",

        "Shorts": "Move freely in HellSpawn’s shorts, designed for comfort, style, and a raw, unapologetic attitude.",

        "Mobile Covers": "Shield your phone in HellSpawn’s mobile covers, offering shockproof durability and wicked designs that demand attention.",

        "Mouse Pads": "Level up your setup with HellSpawn’s precision mousepads, featuring anti-slip bases and bold, high-impact artwork.",

        "Caps": "Complete your look with HellSpawn’s bold caps, featuring gothic embroidery, structured fits, and an unmistakable rebellious edge.",

        "Key Chains": "Carry a piece of rebellion with HellSpawn’s rugged keychains, designed with heavy-duty materials and sinister detailing.",
    };

    return descriptions[category] || "No Description";
}