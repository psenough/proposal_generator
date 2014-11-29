
var Character = function(name, image) {
	this.name = name;
	this.image = image;
};

var Keyword = function(name) {
	this.name = name;
	this.toggled = false;
};

//todo: generate an automatic id

//todo: allow sharing by passing id

//try this with meteor.js?

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
				
				ch.addEventListener('click', function() { pg.rebuildProposal(); }, false);
				
			}
		}
	},
	
	listKeywords: function() {
		var obj = this;
		var dom = document.getElementById('leftdivkeywords');
		if (dom) {
			dom.innerHTML = '';
			console.log(this.keywords);
			for (var i=0; i<this.keywords.length; i++) {
				
				// add keyword to div
				var keyword = document.createElement('div');
				keyword.thisid = i;
				var toggled = '';
				if (this.keywords[i]['toggled']) toggled = ' toggled';
				keyword.setAttribute('class', 'keyword'+toggled);
				keyword.innerHTML = this.keywords[i]['name'];
				dom.appendChild(keyword);
				
				
				// if keyword clicked toggle on/off and rebuild proposal to reflect it
				keyword.addEventListener('click',
					function() {
						obj.keywords[this.thisid]['toggled'] = !obj.keywords[this.thisid]['toggled'];
						pg.listKeywords(); //todo: could replace this line with just changing the class of this
						pg.rebuildProposal();
					}, false);
			}
		}
	},
	
	rebuildProposal: function() {
		
		//todo: fields should be editable and stored automatically somehow
		
		var dom = document.getElementById('rightdiv');
		if (dom) {
			dom.innerHTML = '';
			
			// title
			var title = document.createElement('div');
			title.setAttribute('id', 'title');
			title.innerHTML = 'title';
			dom.appendChild(title);
			
			// todo: chapter separators
			
			// build blablabla with image part
			var intro = document.createElement('div');
			intro.setAttribute('id', 'intro');
			intro.innerHTML = 'lorem ipsum';
			dom.appendChild(intro);
				
					
			//todo: build budget part
			var budget = document.createElement('div');
			budget.setAttribute('id', 'budget');
			var output = '<table>';
			
			output += '</table>';
			
			budget.innerHTML = output;
			dom.appendChild(budget);
		
			//todo: build paying process part
		
			//todo: build responsabilities part
		
		}
		
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

