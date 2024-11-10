
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
        home:"Real Madrid",
        away:"Manchester United",
        date:"2022-10-10",
        time:"12:00",
        venue:"Old Trafford",
        status:"finished",
        homeScore:0,
        awayScore:4,
        matchSummary:"Get statistics for the Real Madrid Vs. Manchester United Champions league semifinal football match now.",
        homeIcon:"/clubs/real.png",
        awayIcon:"/clubs/manu.png"
    }
    
]

export type InewsType={
    id:number,
    title:string,
    category:string,
    image:string,
    details:string,
    date:string,
    author:string,
    views:number,
    comments:number,
    shares:number
    impressions:number
    status:"Fact-Checked"|"Community-Verified"|"unverified"
}
export const newsList:InewsType[]=[
    {
        id:1,
        title:"10 ways to reduce your office work depression.",
        category:"Lifestyle",
        image:"/newslist/newsList1.jpg",
        details:"Office work depression is a common problem that affects many people. It can be caused by a variety of factors, including long hours, high stress levels, and a lack of work-life balance. In this article, we will discuss 10 ways to reduce your office work depression and improve your mental health.",
        date:"2022-10-10",
        author:"John Doe",
        views:500000,
        comments:200000,
        shares:200000,
        impressions:121000,
        status:"Fact-Checked"
    },
    {
        id:2,
        title:"The benefits of regular exercise for your mental health.",
        category:"Health Care",
        image:"/newslist/newsList2.jpg",
        details:"Regular exercise has many benefits for your physical health, but did you know that it can also have a positive impact on your mental health? In this article, we will discuss the benefits of regular exercise for your mental health and how you can incorporate it into your daily routine.",
        date:"2022-10-10",
        author:"Admin",
        views:500000,
        comments:200000,
        shares:200000,
        impressions:121000,
        status:"Community-Verified"
    },
    {
        id:3,
        title:"The top 5 ways to improve your mental health.",
        category:"Health Care",
        image:"/newslist/newsList1.jpg",
        details:"Mental health is an important aspect of overall well-being, but it is often overlooked. In this article, we will discuss the top 5 ways to improve your mental health and maintain a positive outlook on life.",
        date:"2022-10-10",
        author:"Jane Doe",
        views:500000,
        comments:200000,
        shares:200000,
        impressions:121000,
        status:"Fact-Checked"
    },
    {
        id:4,
        title:"The benefits of meditation for stress relief.",
        category:"Health Care",
        image:"/newslist/newsList2.jpg",
        details:"Meditation is a powerful tool for stress relief and relaxation. In this article, we will discuss the benefits of meditation for stress relief and how you can incorporate it into your daily routine to improve your mental health.",
        date:"2022-10-10",
        author:"Admin",
        views:500000,
        comments:200000,
        shares:200000,
        impressions:121000,
        status:"Community-Verified"
    },

]