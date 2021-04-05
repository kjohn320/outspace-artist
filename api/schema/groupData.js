const galaxyGroupList = [
    {
        groupName: "Local Group",
        shortDescription: "The galaxy group that includes the milky way",
        longDescription: "The Local Group is the galaxy group that includes the Milky Way. It has a total diameter of roughly 3 megaparsecs (10 million light-years; 9×1022 metres), and a total mass of the order of 2×1012 solar masses (4×1042 kg).[1] It consists of two collections of galaxies in a dumbbell shape: the Milky Way and its satellites form one lobe, and the Andromeda Galaxy and its satellites constitute the other. The two collections are separated by about 800 kpc (3×106 ly; 2×1022 m) and are moving toward one another with a velocity of 123 km/s.[2] The group itself is a part of the larger Virgo Supercluster, which may be a part of the Laniakea Supercluster. The total number of galaxies in the Local Group is unknown as some are occluded by the Milky Way; however, at least 80 members are known, most of which are dwarf galaxies.",
        imageLink: "https://en.wikipedia.org/wiki/File:Local_Group_and_nearest_galaxies.jpg"
    },
    {
        groupName: "Bullet Group",
        shortDescription: "Named in comparison with the Bullet Cluster, being of similar formation, except smaller.",
        longDescription: "The Bullet Group (SL2S J08544-0121) is a newly merging group of galaxies, a merger between two galaxy groups to form a new larger one, that recently had a high speed collision between the two component groups. The group exhibits separation between its dark matter and baryonic matter components, and the galaxies occurring in two clumps, while the gas expanding into a billowing cloud encompassing all three clumps. As of 2014, it is one of the few galaxy clusters known to show separation between the dark matter and baryonic matter components. The group is named after the Bullet Cluster, a similar merging galaxy cluster, except on a smaller scale, being of groups instead of clusters.",
        imageLink: ""
    },
    {
        groupName: "Copeland Septet",
        shortDescription: "",
        longDescription: "Copeland Septet (also Copeland's Septet) is a group of galaxies in the constellation Leo that includes NGC 3748, NGC 3754, NGC 3750, NGC 3751, NGC 3745, NGC 3753 and NGC 3746.[2][3] The group was discovered by British astronomer Ralph Copeland in 1874.",
        imageLink: "https://en.wikipedia.org/wiki/File:Copeland_Septet_group_of_galaxies.jpg"
    },
    {
        groupName: "Deer Lick Group",
        shortDescription: `Coined by Tom Lorenzin (author of "1000+ The Amateur Astronomers' Field Guide to Deep Sky Observing") to honor Deer Lick Gap in the mountains of North Carolina, from which he had especially fine views of the galaxy group.`,
        longDescription: "NGC 7331 Group is a visual grouping of galaxies in the constellation Pegasus. Spiral galaxy NGC 7331 is a foreground galaxy in the same field as the collection, which is also called the Deer Lick Group,.[1] It contains four other members, affectionately referred to as the 'fleas': the lenticular or unbarred spirals NGC 7335 and 7336, the barred spiral galaxy NGC 7337 and the elliptical galaxy NGC 7340. These galaxies lie at distances of approximately 332, 365, 348 and 294 million light years, respectively.[2] Although adjacent on the sky, this collection is not a galaxy group, as NGC 7331 itself is not gravitationally associated with the far more distant 'fleas'; indeed, even they are separated by far more than the normal distances (~2 Mly) of a galaxy group.",
        imageLink: "https://en.wikipedia.org/wiki/File:NGC_7331_-_Peris.jpg"
    },
    {
        groupName: "Leo Triplet",
        shortDescription: "This small group of galaxies lies in the constellation Leo.",
        longDescription: "The Leo Triplet (also known as the M66 Group) is a small group of galaxies about 35 million light-years away[5] in the constellation Leo. This galaxy group consists of the spiral galaxies M65, M66, and NGC 3628.",
        imageLink: "https://en.wikipedia.org/wiki/File:LeoTripletHunterWilson.jpg"
    },
    {
        groupName: "Markarian's Chain",
        shortDescription: "This stretch of galaxies forms part of the Virgo Cluster.",
        longDescription: `Markarian's Chain is a stretch of galaxies that forms part of the Virgo Cluster. When viewed from Earth, the galaxies lie along a smoothly curved line. Charles Messier first discovered two of the galaxies, M84 and M86, in 1781. The other galaxies seen in the chain were discovered by William Herschel and are now known primarily by their catalog numbers in John Louis Emil Dreyer's New General Catalogue, published in 1888.It was ultimately named after the Armenian astrophysicist, Benjamin Markarian, who discovered their common motion in the early 1960s. Member galaxies include M84 (NGC 4374), M86 (NGC 4406), NGC 4477, NGC 4473, NGC 4461, NGC 4458, NGC 4438 and NGC 4435. It is located at RA 12h 27m and Dec +13° 10'. The bright members of the chain are visible through small telescopes. Larger telescopes can be used to view the fainter galaxies. At least seven galaxies in the chain appear to move coherently, although others appear to be superposed by chance.[4] Six of the points on the chain can be marked by galaxies. The other two points are pairs of galaxies.`,
        imageLink: "https://en.wikipedia.org/wiki/File:MarkariansHunterWilson.jpg"
    },
    {
        groupName: "Robert's Quartet",
        shortDescription: `This compact group of galaxies lies 160 million light-years away in the Phoenix constellation.`,
        longDescription: `Robert's Quartet is a compact galaxy group approximately 160 million light-years away in the constellation Phoenix. It is a family of four very different galaxies whose proximity to each other has caused the creation of about 200 star-forming regions and pulled out a stream of gas and dust 100,000 light years long. Its members are NGC 87, NGC 88, NGC 89 and NGC 92, discovered by John Herschel on the 30 September 1834.`,
        imageLink: "https://en.wikipedia.org/wiki/File:Phot-34a-05-fullres.jpg"
    },
    {
        groupName: "S'eyfert's Sextet",
        shortDescription: "Seyfert's Sextet is a group of galaxies about 190 million light-years away in the constellation Serpens.",
        longDescription: `The group appears to contain six members, but one of the galaxies, NGC 6027d, is a background object and another "galaxy," NGC 6027e, is actually a part of the tail from galaxy NGC 6027. The gravitational interaction among these galaxies should continue for hundreds of millions of years. Ultimately, the galaxies will merge to form a single giant elliptical galaxy.`,
        imageLink: "https://en.wikipedia.org/wiki/File:Seyfert_Sextet_full.jpg"
    },
    {
        groupName: "Stephan's Quintet",
        shortDescription: "Stephan's Quintet is a visual grouping of five galaxies of which four form the first compact galaxy group ever discovered.",
        longDescription: "The group, visible in the constellation Pegasus, was discovered by Édouard Stephan in 1877 at the Marseille Observatory. The group is the most studied of all the compact galaxy groups.[2] The brightest member of the visual grouping (and the only non-member of the true group) is NGC 7320, which has extensive H II regions, identified as red blobs, where active star formation is occurring.",
        imageLink: "https://en.wikipedia.org/wiki/File:Stephan%27s_Quintet_Hubble_2009.full_denoise.jpg"
    },
    {
        groupName: "Wild's Triplet",
        shortDescription: "",
        longDescription: `Wild's Triplet is a group of three small, interacting spiral galaxies. The galaxies are visible in the constellation Virgo. The triplet has luminous connecting bridges and is located some 200 million light-years away. The aforementioned bridges are probably formed as a result of gravitational tidal interactions among the galaxies. The triplet is named after the British-born and Australia-based astronomer Paul Wild, who studied the trio in the early 1950s.`,
        imageLink: ""
    },
    {
        groupName: "Zwicky's Triplet",
        shortDescription: "Zwicky's Triplet is a group of three galaxies visible in the constellation Hercules.",
        longDescription: "Zwicky's Triplet is a group of three galaxies visible in the constellation Hercules.",
        imageLink: ""
    },
];


module.exports = galaxyGroupList;