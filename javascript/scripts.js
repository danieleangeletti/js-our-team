const my_container = document.getElementById("my-container");
const my_row = document.getElementById("my-row");

const our_team_array = [];

const src_img_array = [
    "./img/wayne-barnett-founder-ceo.jpg",
    "./img/angela-caroll-chief-editor.jpg",
    "./img/walter-gordon-office-manager.jpg",
    "./img/angela-lopez-social-media-manager.jpg",
    "./img/scott-estrada-developer.jpg",
    "./img/barbara-ramos-graphic-designer.jpg"
]

const wayne_barnett = generate_character("Wayne", "Barnett", "Founder & CEO", "./img/wayne-barnett-founder-ceo.jpg");
const angela_caroll = generate_character("Angela", "Caroll", "Chief Editor", "./img/angela-caroll-chief-editor.jpg");
const walter_gordon = generate_character("Walter", "Gordon", "Office Manager", "./img/walter-gordon-office-manager.jpg");
const angela_lopez = generate_character("Angela", "Lopez", "Social Media Manager", "./img/angela-lopez-social-media-manager.jpg");
const scott_estrada = generate_character("Scott", "Estrada", "Developer", "./img/scott-estrada-developer.jpg");
const barbara_ramos = generate_character("Barbara", "Ramos", "Graphic Designer", "./img/barbara-ramos-graphic-designer.jpg");

our_team_array.push(wayne_barnett, angela_caroll, walter_gordon, angela_lopez, scott_estrada, barbara_ramos);

console.log(our_team_array);

for (let i = 0; i < our_team_array.length; i++) {

    console.log(our_team_array[i].first_name, our_team_array[i].last_name, our_team_array[i].role, our_team_array[i].image);

    const my_div = document.createElement("div");
    my_div.classList.add("card", "col-2");

    my_div.innerHTML += 
    `
    <img src="${our_team_array[i].image}" class='card-img-top' alt='...'>
    <div class='card-body'>
        <h5 class='card-title'>${our_team_array[i].first_name} ${our_team_array[i].last_name}</h5>
        <p class='card-text'>${our_team_array[i].role}</p>
    </div>
    `
    my_row.append(my_div);

}

// FUNCTION

function generate_character(first_name, last_name, role, image) {
    
    const new_character = {
        first_name: first_name,
        last_name: last_name,
        role: role,
        image: image
    };

    return new_character;

}

