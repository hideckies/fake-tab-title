function fake() {
    // Set title to local storage
    localStorage.setItem(window.location.href, document.title);

    const titleList = [
        "Allrecipes | Food, friends, and recipe inspiration",
        "Apple",
        "App news and reviews, best software downloads and discovery - Softonic",
        "BBC - Home",
        "Bloomberg.com",
        "Booking.com | Official site | The best hotels & accommodations",
        "Centers for Disease Control and Prevention",
        "CNET: Product reviews, how-tos, deals and the latest tech news",
        "CNN International - Breaking News, US News, World News and Videos",
        "Dictionary by Merriam-Webster: America's most-trusted online dictionary",
        "Dictionary.com | Meaning and Definitions of Words at Dictionary.com",
        "Encyclopedia Britannica | Britannica",
        "ESPN: Serving sports fans. Anytime. Anywhere.",
        "Fox News - Breaking News Updates | Latest News Headlines | Photos & News Videos",
        "GitHub",
        "globo.com - Absolutamente tudo sobre notícias, esportes entretenimento",
        "Google",
        "GSMArena.com - mobile phone reviews, news, specifications and more...",
        "Healthline: Medical information and health advice you can trust.",
        "IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows",
        "Instructure | Educational Software Development",
        "Investopedia: Sharper insight, better investing.",
        "Local Weather Forecast, News and Conditions | Weather Underground",
        "LiveScore | Live Football Scores, Fixtures & Results",
        "Mayo Clinic - Mayo Clinic",
        "MarketWatch: Stock Market News - Financial News - MarketWatch",
        "Microsoft - Official Home Page",
        "National Institutes of Health (NIH) | Turning Discovery Into Health",
        "News, sport and opinion from the Guardian's US edition | The Guardian",
        "NDTV.com: Get Latest News, India News, Breaking News - NDTV.com",
        "Nintendo - Official Site - Video Game Consoles, Games - Nintendo - Official Site",
        "Nordstrom Online & In Store: Shoes, Jewelry, Clothing, Makeup, Dresses",
        "Pinterest",
        "Restaurants, Dentists, Bars, Beauty Salons, Doctors - Yelp",
        "Rotten Tomatoes: Movies | TV Shows | Movie Trailers | Reviews - Rotten Tomatoes",
        "Samsung US | Mobile | TV | Home Electronics | Home Appliances | Samsung US",
        "Shutterfly | Photo Books, Cards, Prints, Wall Art, Gifts, Wedding",
        "SoundCloud: Listen to music and stream podcasts online for free",
        "Spotify",
        "TechCrunch - Srartup and Technology News",
        "TechRadar | The source for tech buying advice",
        "The Home Depot",
        "Thesaurus.com: Synonyms and Antonyms of Words",
        "Time and Date",
        "Tripadvisor: Read Reviews, Compare Prices & Book",
        "Unsplash: Beautiful Free Images & Pictures",
        "U.S. News & World Report: News, Rankings and Analysis on Politics, Education, Healthcare and More",
        "Vocabulary.com - Learn Words - English Dictionary",
        "Walmart.com | Save Money. Live Better.",
        "Weather.com",
        "WebMD - Better information. Better health.",
        "Wells Fargo – Banking, Credit Cards, Loans, Mortgages & More",
        "Wikipedia, the free encyclopedia",
        "Xe: Currency Exchange Rates - International Money Transfer",
        "Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos",
        "YourDictionary: Dictionary definitions you can understand",
        "YouTube",
        "++Lowers Industries - NCR Carbonless in Stock or Custom Paper Color Sequence"
    ]
    
    var randNum = Math.floor(Math.random() * titleList.length);
    // Set title
    document.title = titleList[randNum];
    // Remove icon
    var linkTags = document.getElementsByTagName("link");
    for (let link of linkTags) {
        if (link.rel.includes('icon')) {
            link.href = "https://hdks.org/fake-tab-title/fake-favicon.png";
        }
    }
}

fake();