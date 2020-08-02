var quotes=[`"Change the world by being yourself." – Amy Poehler`,`"Every moment is a fresh beginning." – T.S Eliot`,`"Never regret anything that made you smile." – Mark Twain`,`"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt`,`"Simplicity is the ultimate sophistication." – Leonardo da Vinci`,`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." -James Cameron`,`"If I’m gonna tell a real story, I’m gonna start with my name." – Kendrick Lamar`,`"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa`,`"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt`,`"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead`,`"Oh, the things you can find, if you don’t stay behind." – Dr. Seuss`,`"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt`,`"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin`,`"I could agree with you but then we’d both be wrong." – Harvey Specter`,`"It is during our darkest moments that we must focus to see the light." -Aristotle`,`"Whoever is happy will make others happy too." -Anne Frank`,`"Have enough courage to start and enough heart to finish." – Jessica N. S. Yourko`];
console.log(quotes);

function codegenerator(){
    var q=Math.floor(Math.random()*(quotes.length));
    var ele=document.getElementById("random_quote");
    ele.innerHTML=quotes[q];
}
