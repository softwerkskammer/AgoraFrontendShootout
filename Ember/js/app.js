App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function () {

});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return { events: this.store.find('events', 1),
      activities: this.store.find('activity'),
      groups: this.store.find('group')

    };
  }
});

App.Events = DS.Model.extend({
  memberId: DS.attr("string")
});

App.MyActivitiesComponent = Ember.Component.extend({
  classNames: ['activities']
});

App.Group = DS.Model.extend({
  longName: DS.attr('string'),
  color: DS.attr('string')
});

App.Activity = DS.Model.extend({
  title: DS.attr('string')
});

App.Group.FIXTURES = [
  {
    "id": "agora",
    "longName": "Agora",
    "color": "#a89696"
  },
  {
    "id": "alle",
    "longName": "Alle Mitglieder",
    "color": "#cc0000"
  },
  {
    "id": "commercial",
    "longName": "Commercial Events",
    "color": "#787a0a"
  },
  {
    "id": "craftsmanswap",
    "longName": "Craftsman Swaps",
    "color": "#1b8f8f"
  },
  {
    "id": "karlsruhe",
    "longName": "Karlsruhe",
    "color": "#42b0ed"
  },
  {
    "id": "karlsruhe-orga",
    "longName": "Karlsruhe Orga",
    "color": "#fac255"
  },
  {
    "id": "remotepairing",
    "longName": "Remote Pair Programming",
    "color": "#e384d4"
  },
  {
    "id": "rheinmain",
    "longName": "Rhein-Main",
    "color": "#a400b3"
  },
  {
    "id": "socrates2014",
    "longName": "SoCraTes 2014",
    "color": "#cb6868"
  },
  {
    "id": "socrates-orga",
    "longName": "SoCraTes Orga",
    "color": "#991d33"
  },
  {
    "id": "stuttgart",
    "longName": "Stuttgart",
    "color": "#00c2ff"
  }
];

App.Activity.FIXTURES = [
  {
    "id": 1,
    "allRegisteredMembers": ["user001", "user002", "user003", "user004", "user005"],
    "startMoment": "17.06.2014",
    "url": "SoCraTes_2014_Orga_Telko__21",
    "title": "SoCraTes 2014 Orga Telko #21",
    "groupName": "SoCraTes Orga",
    "colorRGB": "#991d33"
  },
  {
    "id": 2,
    "allRegisteredMembers": ["user006", "user007", "user008", "user009", "user010", "user011", "user012", "user013", "user014", "user015", "user016", "user017"],
    "startMoment": "25.06.2014",
    "url": "Treffen_31_der_Softwerkskammer_Rhein-Main",
    "title": "Treffen #31 der Softwerkskammer Rhein-Main",
    "groupName": "Rhein-Main",
    "colorRGB": "#a400b3"
  },
  {
    "id": 3,
    "allRegisteredMembers": ["user002", "user018", "user019", "user003", "user020"],
    "startMoment": "16.07.2014",
    "url": "ka-Treffen-35",
    "title": "35. Treffen der Softwerkskammer Karlsruhe",
    "groupName": "Karlsruhe",
    "colorRGB": "#42b0ed"
  },
  {
    "id": 4,
    "allRegisteredMembers": ["user021", "user022", "user006", "user023", "user024"],
    "startMoment": "07.08.2014",
    "url": "socrates-2014",
    "title": "SoCraTes 2014",
    "groupName": "SoCraTes 2014",
    "colorRGB": "#cb6868"
  }
];

App.Events.FIXTURES = [
  { "id": 1,
    "postsByGroup": {
      "agora": [],
      "alle": [],
      "commercial": [],
      "craftsmanswap": [],
      "karlsruhe": [
        {
          "dialogUrl": "/wiki/modal/karlsruhe/blog_2014-04-10_continuous_delivery",
          "pureName": "Continuous Delivery (CD)\r",
          "date": "10.04.2014",
          "url": "/wiki/karlsruhe/blog_2014-04-10_continuous_delivery",
          "dialogId": "karlsruhe-blog_2014-04-10_continuous_delivery"
        },
        {
          "dialogUrl": "/wiki/modal/karlsruhe/blog_2014-03-19_refactoring",
          "pureName": "Refactoring Workshop mit Rusi\r",
          "date": "19.03.2014",
          "url": "/wiki/karlsruhe/blog_2014-03-19_refactoring",
          "dialogId": "karlsruhe-blog_2014-03-19_refactoring"
        },
        {
          "dialogUrl": "/wiki/modal/karlsruhe/blog_2014-02-12_objectcalisthenics",
          "pureName": "Validating the Object Calisthenics\r",
          "date": "12.02.2014",
          "url": "/wiki/karlsruhe/blog_2014-02-12_objectcalisthenics",
          "dialogId": "karlsruhe-blog_2014-02-12_objectcalisthenics"
        },
        {
          "dialogUrl": "/wiki/modal/karlsruhe/blog_2014-01-08flowdesign",
          "pureName": "Flow Design mit Robin\r",
          "date": "08.01.2014",
          "url": "/wiki/karlsruhe/blog_2014-01-08flowdesign",
          "dialogId": "karlsruhe-blog_2014-01-08flowdesign"
        },
        {
          "dialogUrl": "/wiki/modal/karlsruhe/blog_2013-12-11_letztestreffen",
          "pureName": "Letztes Jahrestreffen\r",
          "date": "11.12.2013",
          "url": "/wiki/karlsruhe/blog_2013-12-11_letztestreffen",
          "dialogId": "karlsruhe-blog_2013-12-11_letztestreffen"
        }
      ],
      "karlsruhe-orga": [],
      "remotepairing": [],
      "rheinmain": [],
      "socrates2014": [],
      "socrates-orga": [],
      "stuttgart": []
    }, "changesByGroup": {
    "agora": [
      {
        "dialogUrl": "/wiki/modal/agora/index",
        "pureName": "index",
        "date": "09.03.2014",
        "url": "/wiki/agora/index",
        "dialogId": "agora-index"
      }
    ],
    "alle": [
      {
        "dialogUrl": "/wiki/modal/alle/europaweite-veranstaltungen-2014",
        "pureName": "europaweite-veranstaltungen-2014",
        "date": "09.05.2014",
        "url": "/wiki/alle/europaweite-veranstaltungen-2014",
        "dialogId": "alle-europaweite-veranstaltungen-2014"
      },
      {
        "dialogUrl": "/wiki/modal/alle/katas-koans-codebases",
        "pureName": "katas-koans-codebases",
        "date": "30.04.2014",
        "url": "/wiki/alle/katas-koans-codebases",
        "dialogId": "alle-katas-koans-codebases"
      },
      {
        "dialogUrl": "/wiki/modal/alle/softwerkskammer-historie",
        "pureName": "softwerkskammer-historie",
        "date": "21.04.2014",
        "url": "/wiki/alle/softwerkskammer-historie",
        "dialogId": "alle-softwerkskammer-historie"
      },
      {
        "dialogUrl": "/wiki/modal/alle/links-und-literatur",
        "pureName": "links-und-literatur",
        "date": "11.04.2014",
        "url": "/wiki/alle/links-und-literatur",
        "dialogId": "alle-links-und-literatur"
      },
      {
        "dialogUrl": "/wiki/modal/alle/index",
        "pureName": "index",
        "date": "18.03.2014",
        "url": "/wiki/alle/index",
        "dialogId": "alle-index"
      },
      {
        "dialogUrl": "/wiki/modal/alle/socrates",
        "pureName": "socrates",
        "date": "09.03.2014",
        "url": "/wiki/alle/socrates",
        "dialogId": "alle-socrates"
      }
    ],
    "commercial": [
      {
        "dialogUrl": "/wiki/modal/commercial/index",
        "pureName": "index",
        "date": "31.08.2013",
        "url": "/wiki/commercial/index",
        "dialogId": "commercial-index"
      }
    ],
    "craftsmanswap": [
      {
        "dialogUrl": "/wiki/modal/craftsmanswap/an-craftsman-swaps-interessierte-firmen",
        "pureName": "an-craftsman-swaps-interessierte-firmen",
        "date": "12.11.2013",
        "url": "/wiki/craftsmanswap/an-craftsman-swaps-interessierte-firmen",
        "dialogId": "craftsmanswap-an-craftsman-swaps-interessierte-firmen"
      },
      {
        "dialogUrl": "/wiki/modal/craftsmanswap/index",
        "pureName": "index",
        "date": "12.11.2013",
        "url": "/wiki/craftsmanswap/index",
        "dialogId": "craftsmanswap-index"
      }
    ],
    "karlsruhe": [
      {
        "dialogUrl": "/wiki/modal/karlsruhe/infrastructureascode",
        "pureName": "infrastructureascode",
        "date": "12.06.2014",
        "url": "/wiki/karlsruhe/infrastructureascode",
        "dialogId": "karlsruhe-infrastructureascode"
      },
      {
        "dialogUrl": "/wiki/modal/karlsruhe/index",
        "pureName": "index",
        "date": "11.06.2014",
        "url": "/wiki/karlsruhe/index",
        "dialogId": "karlsruhe-index"
      },
      {
        "dialogUrl": "/wiki/modal/karlsruhe/blog_2014-04_10_continuous_delivery",
        "pureName": "blog_2014-04_10_continuous_delivery",
        "date": "10.04.2014",
        "url": "/wiki/karlsruhe/blog_2014-04_10_continuous_delivery",
        "dialogId": "karlsruhe-blog_2014-04_10_continuous_delivery"
      },
      {
        "dialogUrl": "/wiki/modal/karlsruhe/blog_jan2014",
        "pureName": "blog_jan2014",
        "date": "14.01.2014",
        "url": "/wiki/karlsruhe/blog_jan2014",
        "dialogId": "karlsruhe-blog_jan2014"
      }
    ],
    "karlsruhe-orga": [
      {
        "dialogUrl": "/wiki/modal/karlsruhe-orga/index",
        "pureName": "index",
        "date": "31.08.2013",
        "url": "/wiki/karlsruhe-orga/index",
        "dialogId": "karlsruhe-orga-index"
      }
    ],
    "remotepairing": [
      {
        "dialogUrl": "/wiki/modal/remotepairing/erfahrungen-mit-tools",
        "pureName": "erfahrungen-mit-tools",
        "date": "03.12.2013",
        "url": "/wiki/remotepairing/erfahrungen-mit-tools",
        "dialogId": "remotepairing-erfahrungen-mit-tools"
      },
      {
        "dialogUrl": "/wiki/modal/remotepairing/index",
        "pureName": "index",
        "date": "17.11.2013",
        "url": "/wiki/remotepairing/index",
        "dialogId": "remotepairing-index"
      }
    ],
    "rheinmain": [
      {
        "dialogUrl": "/wiki/modal/rheinmain/treffen-29",
        "pureName": "treffen-29",
        "date": "29.04.2014",
        "url": "/wiki/rheinmain/treffen-29",
        "dialogId": "rheinmain-treffen-29"
      },
      {
        "dialogUrl": "/wiki/modal/rheinmain/index",
        "pureName": "index",
        "date": "28.04.2014",
        "url": "/wiki/rheinmain/index",
        "dialogId": "rheinmain-index"
      },
      {
        "dialogUrl": "/wiki/modal/rheinmain/treffen-28",
        "pureName": "treffen-28",
        "date": "26.03.2014",
        "url": "/wiki/rheinmain/treffen-28",
        "dialogId": "rheinmain-treffen-28"
      }
    ],
    "socrates2014": [
      {
        "dialogUrl": "/wiki/modal/socrates2014/car-and-taxi-sharing",
        "pureName": "car-and-taxi-sharing",
        "date": "05.06.2014",
        "url": "/wiki/socrates2014/car-and-taxi-sharing",
        "dialogId": "socrates2014-car-and-taxi-sharing"
      },
      {
        "dialogUrl": "/wiki/modal/socrates2014/index",
        "pureName": "index",
        "date": "03.06.2014",
        "url": "/wiki/socrates2014/index",
        "dialogId": "socrates2014-index"
      },
      {
        "dialogUrl": "/wiki/modal/socrates2014/socrates-participants",
        "pureName": "socrates-participants",
        "date": "30.05.2014",
        "url": "/wiki/socrates2014/socrates-participants",
        "dialogId": "socrates2014-socrates-participants"
      },
      {
        "dialogUrl": "/wiki/modal/socrates2014/sunday-workshops",
        "pureName": "sunday-workshops",
        "date": "20.05.2014",
        "url": "/wiki/socrates2014/sunday-workshops",
        "dialogId": "socrates2014-sunday-workshops"
      }
    ],
    "socrates-orga": [
      {
        "dialogUrl": "/wiki/modal/socrates-orga/programm",
        "pureName": "programm",
        "date": "03.06.2014",
        "url": "/wiki/socrates-orga/programm",
        "dialogId": "socrates-orga-programm"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/telko07mai2014",
        "pureName": "telko07mai2014",
        "date": "08.05.2014",
        "url": "/wiki/socrates-orga/telko07mai2014",
        "dialogId": "socrates-orga-telko07mai2014"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/telkoprotokolle",
        "pureName": "telkoprotokolle",
        "date": "08.05.2014",
        "url": "/wiki/socrates-orga/telkoprotokolle",
        "dialogId": "socrates-orga-telkoprotokolle"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/marketingmassnahmen",
        "pureName": "marketingmassnahmen",
        "date": "08.05.2014",
        "url": "/wiki/socrates-orga/marketingmassnahmen",
        "dialogId": "socrates-orga-marketingmassnahmen"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/index",
        "pureName": "index",
        "date": "08.05.2014",
        "url": "/wiki/socrates-orga/index",
        "dialogId": "socrates-orga-index"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/codeofconductdraft",
        "pureName": "codeofconductdraft",
        "date": "06.05.2014",
        "url": "/wiki/socrates-orga/codeofconductdraft",
        "dialogId": "socrates-orga-codeofconductdraft"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/telko29apr2014",
        "pureName": "telko29apr2014",
        "date": "29.04.2014",
        "url": "/wiki/socrates-orga/telko29apr2014",
        "dialogId": "socrates-orga-telko29apr2014"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/telko23apr2014",
        "pureName": "telko23apr2014",
        "date": "23.04.2014",
        "url": "/wiki/socrates-orga/telko23apr2014",
        "dialogId": "socrates-orga-telko23apr2014"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/telko16apr2014",
        "pureName": "telko16apr2014",
        "date": "20.04.2014",
        "url": "/wiki/socrates-orga/telko16apr2014",
        "dialogId": "socrates-orga-telko16apr2014"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/sponsoring",
        "pureName": "sponsoring",
        "date": "17.04.2014",
        "url": "/wiki/socrates-orga/sponsoring",
        "dialogId": "socrates-orga-sponsoring"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/eingeladeneberuhmteleute",
        "pureName": "eingeladeneberuhmteleute",
        "date": "05.04.2014",
        "url": "/wiki/socrates-orga/eingeladeneberuhmteleute",
        "dialogId": "socrates-orga-eingeladeneberuhmteleute"
      },
      {
        "dialogUrl": "/wiki/modal/socrates-orga/telko02apr2014",
        "pureName": "telko02apr2014",
        "date": "02.04.2014",
        "url": "/wiki/socrates-orga/telko02apr2014",
        "dialogId": "socrates-orga-telko02apr2014"
      }
    ],
    "stuttgart": []
  }, "mailsByGroup": {
    "agora": [],
    "alle": [
      {
        "timeUnix": 1402672410,
        "id": "2AD43BC5-E3CF-45E9-AE0C-6AA541C1310D@alexei-vinogradov.de",
        "subject": "[Softwerkskammer] Information: Software Testing group created",
        "memberNickname": null,
        "displayedSenderName": "A V",
        "time": "13.06.2014",
        "sortedResponses": []
      }
    ],
    "commercial": [
      {
        "timeUnix": 1402525336,
        "id": "B5DC0030-05D3-4CAB-B502-FC9F2EF1B632@me.com",
        "subject": "[SWKCommercial] .NET Open Space Karlsruhe",
        "memberNickname": null,
        "displayedSenderName": "N R",
        "time": "12.06.2014",
        "sortedResponses": []
      }
    ],
    "craftsmanswap": [],
    "karlsruhe": [
      {
        "timeUnix": 1402392808,
        "id": "5396D0E8.8070309@gmail.com",
        "subject": "[SWK-KA] cucumber workshop morgen",
        "memberNickname": null,
        "displayedSenderName": "U",
        "time": "10.06.2014",
        "sortedResponses": []
      }
    ],
    "karlsruhe-orga": [],
    "remotepairing": [],
    "rheinmain": [
      {
        "timeUnix": 1402054957,
        "id": "5391A92D.2090109@gmail.com",
        "subject": "[swkrm] Eclipse DemoCamp Luna: Donnerstag, 10. Juli ab 17:00 Uhr",
        "memberNickname": null,
        "displayedSenderName": "F E",
        "time": "06.06.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1401135159,
        "id": "2729387D8042DB42A4A2DA01317289EE0FF82A@skynet.sowenig.de",
        "subject": "[swkrm] Biete Mitfahrgelegenheit Treffen #30",
        "memberNickname": null,
        "displayedSenderName": "S K",
        "time": "26.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1401133751,
        "id": "CA39BA8E-E4A7-474B-8DF2-DF23003D9E55@alexei-vinogradov.de",
        "subject": "Re: [swkrm] Agenda für morgen",
        "memberNickname": null,
        "displayedSenderName": "A V",
        "time": "26.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1401133104,
        "id": "53839830.9080705@gmail.com",
        "subject": "Re: [swkrm] Agenda für morgen",
        "memberNickname": null,
        "displayedSenderName": "J S",
        "time": "26.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1401132450,
        "id": "6EC7B8FE-F2B0-4809-93E9-7859138F3388@alexei-vinogradov.de",
        "subject": "Re: [swkrm] Agenda für morgen",
        "memberNickname": null,
        "displayedSenderName": "A V",
        "time": "26.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1401131992,
        "id": "538393D8.9040709@gmail.com",
        "subject": "[swkrm] Agenda für morgen",
        "memberNickname": null,
        "displayedSenderName": "J S",
        "time": "26.05.2014",
        "sortedResponses": []
      }
    ],
    "socrates2014": [
      {
        "timeUnix": 1400647954,
        "id": "20140521045234.GA2233@anthrakas.wosc.de",
        "subject": "[SoCraTes2014] Workshop Sunday",
        "memberNickname": null,
        "displayedSenderName": "W S",
        "time": "21.05.2014",
        "sortedResponses": []
      }
    ],
    "socrates-orga": [
      {
        "timeUnix": 1401821867,
        "id": "20140603185747.GL10188@pluto.fritz.box",
        "subject": "[SoCraTes Orga] Hangout Link",
        "memberNickname": null,
        "displayedSenderName": "B R",
        "time": "03.06.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400612790,
        "id": "B6ED0329-7A50-4441-A770-22560BA260FD@me.com",
        "subject": "Re: [SoCraTes Orga] Hangout Link",
        "memberNickname": null,
        "displayedSenderName": "N R",
        "time": "20.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400612740,
        "id": "21DECEB6-74A0-4090-B6E7-7DABA0EEC056@me.com",
        "subject": "[SoCraTes Orga] Hangout jetzt",
        "memberNickname": null,
        "displayedSenderName": "N R",
        "time": "20.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400612731,
        "id": "20140520190531.GE1773@pluto",
        "subject": "[SoCraTes Orga] Hangout Link",
        "memberNickname": null,
        "displayedSenderName": "B R",
        "time": "20.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400524204,
        "id": "20140519183004.GB2142@anthrakas.wosc.de",
        "subject": "[SoCraTes Orga] Entwurf: Workshop Sunday",
        "memberNickname": null,
        "displayedSenderName": "W S",
        "time": "19.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400094659,
        "id": "94B8A8D6-A8F3-4AEE-B5EF-1973ADD49308@klosebrothers.de",
        "subject": "Re: [SoCraTes Orga] Hangout Link",
        "memberNickname": null,
        "displayedSenderName": "M K",
        "time": "14.05.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400093922,
        "id": "20140514185842.GE3096@pluto",
        "subject": "[SoCraTes Orga] Hangout Link",
        "memberNickname": null,
        "displayedSenderName": "B R",
        "time": "14.05.2014",
        "sortedResponses": []
      }
    ],
    "stuttgart": [
      {
        "timeUnix": 1401942714,
        "id": "20140605043154.5017D6BE0719@dd28606.kasserver.com",
        "subject": "[stuttgart] Nächstes Treffen der Softwerkskammer Stuttgart im Juni",
        "memberNickname": null,
        "displayedSenderName": "D G",
        "time": "05.06.2014",
        "sortedResponses": []
      },
      {
        "timeUnix": 1400231413,
        "id": "5375D5F5.1040903@gmail.com",
        "subject": "[stuttgart]",
        "memberNickname": null,
        "displayedSenderName": "R K",
        "time": "16.05.2014",
        "sortedResponses": []
      }
    ]
  }, "memberId": "user002"}

];
