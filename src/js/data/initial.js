dataSetVersion = "2023-09-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album/Category",
    key: "series",
    tooltip: "Check this to restrict by album.",
    checked: true,
    sub: [
      { name: "Mekakucity Days", tooltip: "First Album", key: "album1" },
      { name: "Mekakucity Records", tooltip: "Second Album", key: "album2" },
      { name: "Mekakucity Reload", tooltip: "Third Album", key: "album3" },
      { name: "Other", tooltip: "Other Songs", key: "other", checked: false },
    ]
  },
  {
    name: "Remove Songs without MV",
    key: "noMV",
    tooltip: "Check this to remove all songs without an official MV.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kagerou Daze",
    img: "KagerouMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Headphone Actor",
    img: "ActorMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Kuusou (Souzou/Mousou) Forest",
    img: "SouzouMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Ene no Dennou Kikou",
    img: "CyberJourneyMP.png",
    opts: {
      series: ["album1"],
      noMV: true
    }
  },
  {
    name: "Dead and Seek",
    img: "DeadSeek.png",
    opts: {
      series: ["album1"],
      noMV: true
    }
  },
  {
    name: "Jinzou Enemy",
    img: "EnemyMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Toumei Answer",
    img: "AnswerMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Kisaragi Attention",
    img: "KisaragiMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Mekakushi Code",
    img: "MekakushiMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Konoha no Sekai Jijou",
    img: "WorldMP.png",
    opts: {
      series: ["album1"]
    }
  },
  {
    name: "Shinigami Record",
    img: "ShinigamiMP.png",
    opts: {
      series: ["album1"],
      noMV: true
    }
  },
  {
    name: "Children Record",
    img: "ChildrenMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Yobanashi Deceive",
    img: "YobaMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Shounen Brave",
    img: "BravehMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Yuukei Yesterday",
    img: "YuukeiMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Gunjou Rain",
    img: "GunjouMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Outer Science",
    img: "ScienceMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Otsukimi Recital",
    img: "RecitalMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Losstime Memory",
    img: "LostMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Ayano no Koufuku Riron",
    img: "AyanoTMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Marry no Kakuu Sekai",
    img: "Sekai.png",
    opts: {
      series: ["album2"],
      noMV: true
    }
  },
  {
    name: "Summertime Record",
    img: "SummerMP.png",
    opts: {
      series: ["album2"]
    }
  },
  {
    name: "Imaginary Reload",
    img: "ImaginaryReloadMP.png",
    opts: {
      series: ["album3"],
      noMV: true
    }
  },
  {
    name: "Shissou Word",
    img: "ShissouWordMP.png",
    opts: {
      series: ["album3"]
    }
  },
  {
    name: "My Funny Weekend",
    img: "MyFunnyWeekendMP.png",
    opts: {
      series: ["album3"],
      noMV: true
    }
  },
  {
    name: "Additional Memory",
    img: "AdditionalMemoryMP.png",
    opts: {
      series: ["album3"]
    }
  },
  {
    name: "Lost Day Hour",
    img: "LostDayHourMP.png",
    opts: {
      series: ["album3"],
      noMV: true
    }
  },
  {
    name: "Remind Blue",
    img: "RemindBlueMP.png",
    opts: {
      series: ["album3"],
      noMV: true
    }
  },
  {
    name: "Wasurete Shimatta Natsu no Owari ni",
    img: "WasureteMP.png",
    opts: {
      series: ["album3"],
      noMV: true
    }
  },
  {
    name: "daze",
    img: "MPdaze.png",
    opts: {
      series: ["other"]
    }
  },
  {
    name: "days",
    img: "MPdays.png",
    opts: {
      series: ["other"]
    }
  },
  {
    name: "RED",
    img: "RED.png",
    opts: {
      series: ["other"]
    }
  },
  {
    name: "Tomodachi no Uta",
    img: "MPTnU.png",
    opts: {
      series: ["other"],
      noMV: true
    }
  },
  {
    name: "draw",
    img: "MPdraw.png",
    opts: {
      series: ["other"],
      noMV: true
    }
  }
];
