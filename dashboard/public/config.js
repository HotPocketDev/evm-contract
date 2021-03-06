/**
 * HotPocket cluster dashboard config file.
 */

// submitInputs: Whether to display input submission form or not.
// rawDataMode: "text" (stringify) | "len" (show length) | "hash" (show hash)

window.dashboardConfig = {
    clusterName: "Hot Pocket", // Default value if a query parameter is not specified.
    signalRUrl: "https://func-hotpocket.azurewebsites.net/api",
    tableAccount: "https://sthotpocket.table.core.windows.net",
    tableName: "nodestate",
    tableSas: "sv=2018-03-28&si=nodestate-publicread&tn=nodestate&sig=gkVvcsRQXYevf0gU6CdK%2FzpQojiYazqN0KF4m8Fvp%2Fs%3D",
    inputFunc: "https://func-hotpocket.azurewebsites.net/api/submitinput?code=1fqDRFwOdQaz/GDyBULLDaaolHS0b7Ls6N1Q/m55AqXbPVrOo6xRtQ==",
    submitInputs: false, // Defaults to false.
    clusterFound: false, // Defaults to false.
    rawDataMode: "hash",
    hidden: false // Whether public viewing is hidden (Dashboard available for internal testing only)
};

window.dashboardConfig.supportedClusters = {
    evm: {
        clusterName: "EVM Contract",
        submitInputs: true
    }
}

window.dashboardConfig.regions = [
    {
        id: "syd",
        name: "Sydney",
        country: "AU",
        pos: { anchor: "tr", top: "86%", left: "92.5%" }
    },
    {
        id: "yto",
        name: "Toronto",
        country: "CA",
        pos: { anchor: "bl", top: "40%", left: "22.5%" }
    },
    {
        id: "ams",
        name: "Amsterdam",
        country: "NL",
        pos: { anchor: "br", top: "35%", left: "48%" }
    },
    {
        id: "atl",
        name: "Atlanta",
        country: "US",
        pos: { anchor: "tl", top: "47.5%", left: "22%" }
    },
    {
        id: "cdg",
        name: "Paris",
        country: "FR",
        pos: { anchor: "tr", top: "39.5%", left: "48.5%" }
    },
    {
        id: "dfw",
        name: "Dallas",
        country: "US",
        pos: { anchor: "br", top: "47%", left: "19%" }
    },
    {
        id: "ewr",
        name: "New Jersey",
        country: "US",
        pos: { anchor: "tl", top: "43%", left: "25.3%" }
    },
    {
        id: "fra",
        name: "Frankfurt",
        country: "DE",
        pos: { anchor: "tl", top: "37%", left: "49.5%" }
    },
    {
        id: "icn",
        name: "Seoul",
        country: "KR",
        pos: { anchor: "tr", top: "44%", left: "85%" }
    },
    {
        id: "lax",
        name: "Los Angeles",
        country: "US",
        pos: { anchor: "tr", top: "47.5%", left: "12.5%" }
    },
    {
        id: "lhr",
        name: "London",
        country: "GB",
        pos: { anchor: "tr", top: "36%", left: "46.7%" }
    },
    {
        id: "mia",
        name: "Miami",
        country: "US",
        pos: { anchor: "tl", top: "52%", left: "23%" }
    },
    {
        id: "nrt",
        name: "Tokyo",
        country: "JP",
        pos: { anchor: "bl", top: "44%", left: "88.5%" }
    },
    {
        id: "ord",
        name: "Chicago",
        country: "US",
        pos: { anchor: "br", top: "42%", left: "21.8%" }
    },
    {
        id: "sea",
        name: "Seattle",
        country: "US",
        pos: { anchor: "tr", top: "37.5%", left: "12.3%" }
    },
    {
        id: "sgp",
        name: "Singapore",
        country: "SG",
        pos: { anchor: "bl", top: "65%", left: "79%" }
    },
    {
        id: "sjc",
        name: "Silicon Valley",
        country: "US",
        pos: { anchor: "bl", top: "31.8%", left: "11.5%" }
    },
    {
        id: "sto",
        name: "Stockholm",
        country: "SE",
        pos: { anchor: "bl", top: "30.8%", left: "52%" }
    },
    {
        id: "mex",
        name: "Mexico City",
        country: "MX",
        pos: { anchor: "tr", top: "55.8%", left: "17%" }
    },
    {
        id: "col",
        name: "Colombo",
        country: "LK",
        pos: { anchor: "tr", top: "62.8%", left: "71.5%" },
        skipCycling: true
    }
];

window.dashboardConfig.specialRegionAssignments = [
    {
        idx: 41,
        regionId: "col"
    }
]