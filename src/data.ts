
export const datas={
    nav:[
        {
            name:"Home",
            waiting:10,
        },
        {
            name:"Community",
            waiting:10,
        },
        {
            name:"Fact-Hub",
            waiting:10,
        },
        {
            name:"Trophies",
            waiting:10,
        },
        {
            name:"Notifications",
            waiting:10,
        }
    ],
    categories:[
        {
            name:"Hot News",
            waiting:10,
        },
        {
            name:"Trending",
            waiting:10,
        },
        {
            name:"Music",
            waiting:10,
        },
        {
            name:"Kids",
            waiting:10,
        },
        {
            name:"Sports",
            waiting:10,
        },
        {
            name:"Lifestyle",
            waiting:10,
        },
        {
            name:"Career",
            waiting:10,
        },
        {
            name:"Health Care",
            waiting:10,
        },
        {
            name:"Religion",
            waiting:10,
        },
        {
            name:"Technology",
            waiting:10,
        }
    ]
}

export type IsportType={
    id:number,
    home:string,
    away:string,
    date:string,
    time:string,
    venue:string,
    status:string,
    homeScore:number,
    awayScore:number,
    matchSummary:string,
    homeIcon:string,
    awayIcon:string
}
export const clubMatches:Array<IsportType>=[
    {

        id:1,
        home:"Chelsea",
        away:"Manchester City",
        date:"2022-10-10",
        time:"12:00",
        venue:"Emirates Stadium",  
        status:"finished",
        homeScore:2,
        awayScore:0,
        matchSummary:"Get statistics for the Chelsea Vs. Manchester City Champions league semifinal football match now.",
        homeIcon:"/clubs/chelsea.png",
        awayIcon:"/clubs/mancity.png"
     },
    {
        id:2,
        home:"RealMadrid",
        away:"Manchester United",
        date:"2022-10-10",
        time:"12:00",
        venue:"Old Trafford",
        status:"finished",
        homeScore:0,
        awayScore:4,
        matchSummary:"Get statistics for the RealMadrid Vs. Manchester United Champions league semifinal football match now.",
        homeIcon:"/clubs/real.png",
        awayIcon:"/clubs/manu.png"
    }
    
]