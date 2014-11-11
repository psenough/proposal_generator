
var Character = function(name, image) {
	this.name = name;
	this.image = image;
};

var Keyword = function(name) {
	this.name = name;
	this.toggled = false;
};

var PG = function() {
	this.characters = [
		new Character('suit',		'gfx/suit.jpg'),
		new Character('engineer',	'gfx/engineer.jpg')
	];
	
	this.selectedCharacter = -1;
	
    this.keywords = [
    	new Keyword('web'),
    	new Keyword('desktop'),
    	];
    	
    this.eurosHour = 35;
    this.hoursDay = 7;
    this.buffer = 0.75;
};

PG.prototype = {
	
	listCharacters: function() {
		var dom = document.getElementById('leftdivcharacters');
		if (dom) {
			dom.innerHTML = '';
			for (var i=0; i<this.characters.length; i++) {
				// add characters to div
				var ch = document.createElement('div');
				ch.setAttribute('class', 'character');
				ch.setAttribute('id', this.characters[i].name);
				ch.style.backgroundImage = "url('"+this.characters[i].image+"')";
				dom.appendChild(ch);
				
				//todo: if character clicked rebuild proposal to reflect it 
			}
		}
	},
	
	listKeywords: function() {
		var dom = document.getElementById('leftdivkeywords');
		if (dom) {
			dom.innerHTML = '';
			for (var i=0; i<this.keywords.length; i++) {
				//todo: add keyword to div
				//todo: if keyword clicked toggle on and off and rebuild proposal to reflect it
			}
		}
	},
	
	rebuildProposal: function() {
		
		//todo: build blablabla with image part
		
		//todo: build budget part
		
		//todo: build paying process part
		
		//todo: build responsabilities part
		
	},
	
	characterIs: function(type) {
		if (this.selectedCharacter < 0) return false;
		if (this.selectedCharacter > this.characters.length) return false;
		return (this.characters[this.selectedCharacter].name == type);
	}
	
}

var pg;

function init() {
	pg = new PG();
	pg.listCharacters();
	pg.listKeywords();
	pg.rebuildProposal();
}

