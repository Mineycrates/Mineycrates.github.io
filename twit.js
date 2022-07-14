

const twitForm = document.getElementById("twitType");
var months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

function addTwit(event){
    event.preventDefault();
    let twit = twitForm.myTwit.value; 
    if (!twit){
        twit = "Nothing's on my mind, wehe~";
    }
    const postDate = new Date();
    const postInfo = "posted on " +  postDate.getDate() + " " + months[postDate.getMonth()] + ", " + postDate.getHours()+":"+postDate.getMinutes();
    const newTwit = document.createElement('li');
    const newDiv = document.createElement('div');
    const outerDiv = document.createElement('div');
    const wrapDiv = document.createElement('div');
    const breakLine = document.createElement('br');
    wrapDiv.className = "wrapDiv";
    outerDiv.className = "outerPost";
    newDiv.className = "newAvatar";
    const newTwitText = document.createElement('span');
    const newPostDate = document.createElement('p');
    newPostDate.innerHTML = postInfo;
    newTwitText.innerHTML = twit;
    const twits = document.getElementById('twitSpace').getElementsByTagName('ul')[0];
    const outer = twits.appendChild(outerDiv);
    outer.appendChild(newDiv);
    const newerTwits = outer.appendChild(wrapDiv);

    newerTwits.appendChild(newTwit);
    
    newTwit.appendChild(newTwitText);
    newerTwits.appendChild(newPostDate);
    outer.appendChild(breakLine);
 
 

    twitForm.myTwit.value = "";
   
}


//assign events
twitForm.onsubmit = addTwit;


