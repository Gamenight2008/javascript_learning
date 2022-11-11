//Get the url
const site = window.location.hostname

//Add Custom css - function
const add_custom_style = css => document.head.appendChild(document.createElement('style')).innerHTML = css

//Create custom e;ement function
function create_custom_element(tag, attr_tag, attr_name, value){
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.querySelector("html").append(custom_element)
}

//The blacklist
const blacklist = [
    "www.google.com",
    "www.youtube.com",
    "www.facebook.com",
    "www.twitter.com",
    "www.instagram.com",
    "www.reddit.com",
    "www.netflix.com",
    "www.amazon.com",
    "www.ebay.com",
    "www.wikipedia.org",
    "www.yahoo.com",
    "www.bing.com",
    "www.tumblr.com",
    "www.pinterest.com",
    "www.linkedin.com",
    "www.imgur.com",
    "www.quora.com",
    "www.stackoverflow.com",
    "duckduckgo.com",
    "www.blogger.com",
    "www.tiktok.com",
    "www.vimeo.com",
    "www.yelp.com",
    "www.flickr.com",
    "www.dailymotion.com",
    "www.etsy.com",
    "www.4chan.org",
    "www.9gag.com",
    "www.500px.com",
    "www.abc.net.au",
    "www.abcnews.go.com",
    "www.about.com"
]

/*
Check current site
 */

if(blacklist.includes(site)){
    document.querySelector("html").innerHTML = "<center><h1>Go back to work!</h1><br><img src'https://cdn.britannica.com/33/229033-050-73CE4FAB/Joseph-Stalin.jpg'></center>"

}