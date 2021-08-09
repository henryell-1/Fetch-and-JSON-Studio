window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
}).then(function(jason){
    console.log(jason);
    const container = document.querySelector('#container');
    let astronauts ='';
    for(astronaut of jason){
        astronauts += `<div class="astronaut">
        <div class="bio">
           <h3>Mae Jemison</h3>
           <ul>
              <li>Hours in space: 190</li>
              <li>Active: false</li>
              <li>Skills: Physician, Chemical Engineer</li>
           </ul>
        </div>
        <img class="avatar" src="images/mae-jemison.jpg">
     </div>
     `;
    }
    container.innerHTML - astronauts;
})    

});