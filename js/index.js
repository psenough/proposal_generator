
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
		new Character('suit',		'suit.jpg'),
		new Character('engineer',	'engineer.jpg')
	];
	
	this.selectedCharacter = -1;
	
    this.keywords = [
    	new Keyword('web'),
    	new Keyword('desktop'),
    	];
};

PG.prototype = {
	
	listCharacters: function() {
		var dom = document.getElementById('leftdivcharacters');
		if (dom) {
			dom.innerHTML = '';
			for (var i=0; i<this.characters.length; i++) {
				//todo: add character to div
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
		
	}
	
}

var pg;

function init() {
	pg = new PG();
	pg.listCharacters();
	pg.listKeywords();
	pg.rebuildProposal();
}

