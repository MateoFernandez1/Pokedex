import Bulbasaur from "./img/bulbasaur.png"; 
import Charmander from "./img/charmander.png"; 
import Squirtle from "./img/squirtle.png"; 
import Butterfree from "./img/butterfree.png"; 
import Pikachu from "./img/pikachu.png"; 
import Gastly from "./img/gastly.png"; 
import Ditto from "./img/ditto.png"; 
import Mew from "./img/mew.png"; 
import Aron from "./img/aron.png"; 

const DATA = [
        {
           "name":"Bulbasaur",
           "number":"#001",
           "img":Bulbasaur,
           "type":"Grass",
           "type2":"Poison",
           "weigth":"6.9 kg",
           "height":"0.7 m",
           "ability":"Overgrow Chlorophyll",
           "info":"There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
           "hp":45,
           "atk":49,
           "def":49,
           "satk":65,
           "sdef":65,
           "spd":45,
           "color":"bulb",
        },
        {
           "name":"Charmander",
           "number":"#004",
           "img":Charmander,
           "type":"Fire",
           "type2":null,
           "weigth":"8.5 kg",
           "height":"0.6 m",
           "ability":"Blaze Solar-Power",
           "info":"From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
           "hp":39,
           "atk":52,
           "def":43,
           "satk":60,
           "sdef":50,
           "spd":65,
           "color":"char",
        },
        {
           "name":"Squirtle",
           "number":"#007",
           "img":Squirtle,
           "type":"Water",
           "type2":null,
           "weigth":"9.0 kg",
           "height":"0.5 m",
           "ability":"Torrent Rain-Dish",
           "info":"After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
           "hp":44,
           "atk":48,
           "def":65,
           "satk":50,
           "sdef":64,
           "spd":43,
           "color":"squi",
       },
        {
           "name":"Butterfree",
           "number":"#012",
           "img":Butterfree,
           "type":"Bug",
           "type2":"Flying",
           "weigth":"32 kg",
           "height":"1.1 m",
           "ability":"Compound-Eyes Tinted-Lens",
           "info":"The wings are protected by a rain-repellent dust. As a result, this Pokémon can fly about even in rain.",
           "hp":60,
           "atk":45,
           "def":50,
           "satk":80,
           "sdef":80,
           "spd":70,
           "color":"butt",
        },
        {
           "name":"Pikachu",
           "number":"#025",
           "img":Pikachu,
           "type":"Electric",
           "type2":null,
           "weigth":"6.0 kg",
           "height":"0.4 m",
           "ability":"Static Lightning-Rod",
           "info":"It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
           "hp":35,
           "atk":55,
           "def":40,
           "satk":50,
           "sdef":50,
           "spd":90,
           "color":"pika",
        },
        
        {
           "name":"Gastly",
           "number":"#092",
           "img":Gastly,
           "type":"Ghost",
           "type2":"Poison",
           "weigth":"0.1 kg",
           "height":"1.3 m",
           "ability":"Levitate",
           "info":"Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
           "hp":30,
           "atk":35,
           "def":30,
           "satk":100,
           "sdef":35,
           "spd":80,
           "color":"gast",
        },
        {
           "name":"Ditto",
           "number":"#132",
           "img":Ditto,
           "type":"Normal",
           "type2":null,
           "weigth":"4.0 kg",
           "height":"0.3 m",
           "ability":"Limber 	Imposter",
           "info":"It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
           "hp":48,
           "atk":48,
           "def":48,
           "satk":48,
           "sdef":48,
           "spd":48,
           "color":"ditto",
        },
        {
           "name":"Mew",
           "number":"#152",
           "img":Mew,
           "type":"Psychic",
           "type2":null,
           "weigth":"4.0 kg",
           "height":"0.4 m",
           "ability":"Synchronize",
           "info":"When viewed through a microscope, this Pokémon's short, fine, delicate hair can be seen.",
           "hp":100,
           "atk":100,
           "def":100,
           "satk":100,
           "sdef":100,
           "spd":100,
           "color":"mew",
        },
        {
           "name":"Aron",
           "number":"#304",
           "img":Aron,
           "type":"Steel",
           "type2":"Rock",
           "weigth":"60 kg",
           "height":"0.4 m",
           "ability":"Sturdy Rock-Head",
           "info":"It eats iron to build its steel body. It is a pest that descends from mountains to eat bridges and train tracks.",
           "hp":50,
           "atk":70,
           "def":100,
           "satk":40,
           "sdef":40,
           "spd":30,
           "color":"aron",
        }
   ]

export default DATA