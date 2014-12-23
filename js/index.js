
//todo: bs'o'meter on the top right

var Character = function(name, image, desc) {
	this.name = name;
	this.image = image;
	this.desc = desc;
};

var Keyword = function(name, operators) {
	this.name = name;
	this.operators = operators;
	this.toggled = false;
};

//todo: generate an automatic id

//todo: allow sharing by passing id

//try this with meteor.js?

var PG = function() {
	this.characters = [
		new Character('suit',		'gfx/suit.jpg',		'a suit, never developed a thing in his life, no idea of work cost, thinks last minute changes are ok'),
		new Character('engineer',	'gfx/engineer.jpg',	'an engineer, knows how things get done, just wants a fair quote')
	];
	
	this.selectedCharacter = 1;
	
    this.keywords = [
    	new Keyword( 'simple webpage',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':10},
					{'target':'validation', 			'type':'add', 'value':5}
				]
		),	
		new Keyword( 'simple website',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'database', 				'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':10},
					{'target':'backoffice development', 'type':'add', 'value':10},
					{'target':'backoffice design', 		'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}
				]
		),				
		new Keyword( 'simple desktop application',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':10},
					{'target':'validation', 			'type':'add', 'value':5},					
					{'target':'quality assurance', 		'type':'add', 'value':5}
				]
		),
		new Keyword( 'simple mobile application',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'database', 				'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':15},
					{'target':'backoffice development', 'type':'add', 'value':5},
					{'target':'backoffice design', 		'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},					
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),
		
		/*new Keyword( 'needs minor changes',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':5},
					{'target':'backoffice development', 'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),*/
		
		new Keyword( 'needs to communicate',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'communication module', 	'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),			
		
		new Keyword( 'needs physical interface',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'interaction design', 	'type':'add', 'value':5},
					{'target':'interaction module', 	'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),			
		/*new Keyword( 'needs to do something',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),*/
				
		/*new Keyword( 'we know perfectly what we want',
				[
					{'target':'specification', 			'type':'add', 'value':10},
					{'target':'frontend redesign', 		'type':'add', 'value':10},
					{'target':'frontend development', 	'type':'add', 'value':5},
					{'target':'backoffice development', 'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),*/
		
		new Keyword( '3D animation content',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'3D modelling', 			'type':'add', 'value':10},
					{'target':'3D animation', 			'type':'add', 'value':10},
					{'target':'3D engine integration', 	'type':'add', 'value':10},
					{'target':'materials / shaders', 	'type':'add', 'value':10},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),

		new Keyword( 'video content',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'shooting', 				'type':'add', 'value':5},
					{'target':'cutting/editing', 		'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),		
		new Keyword( 'augmented reality',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'augmented reality module', 'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),
		new Keyword( 'computer vision',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'computer vision module', 'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':5}	
				]
		),
		
		new Keyword( 'turnkey solution',
				[
					{'target':'documentation', 			'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':10}	
				]
		),

		/*new Keyword( 'future partnership',
				[
					{'target':'documentation', 			'type':'add', 'value':5},
					{'target':'validation', 			'type':'add', 'value':5},
					{'target':'quality assurance', 		'type':'add', 'value':10}	
				]
		),*/
		
		new Keyword( 'simple game',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'interaction design', 	'type':'add', 'value':5},
					{'target':'frontend design', 		'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':10},
					{'target':'validation', 			'type':'add', 'value':5},					
					{'target':'quality assurance', 		'type':'add', 'value':5}
				]
		),
		
		/*new Keyword( 'installation',
				[
					{'target':'specification', 			'type':'add', 'value':5},
					{'target':'interaction design', 	'type':'add', 'value':5},
					{'target':'frontend development', 	'type':'add', 'value':10},
					{'target':'travelling expenses', 	'type':'add', 'value':5},					
					{'target':'validation', 			'type':'add', 'value':5},					
					{'target':'quality assurance', 		'type':'add', 'value':5}
				]
		),*/
		
		//todo: we have the design
		//todo: we have someone's sourcecode
		//todo: can you do this project from someone else's proposal?
		//todo: urgency in budget
		//todo: urgency in delivery
		//todo: already exists in market
		//todo: can you do it cheaper?
		//todo: prototype
		//todo: robotic customization
		//todo: workshop
		
		
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
				var selected = '';
				//console.log(pg.selectedCharacter + ' ' + i);
				if (pg.selectedCharacter == i) selected = ' selected';
				ch.setAttribute('class', 'character'+selected);
				ch.setAttribute('id', this.characters[i].name);
				ch.setAttribute('title', this.characters[i].desc);
				ch.style.backgroundImage = "url('"+this.characters[i].image+"')";
				ch.index = i;
				dom.appendChild(ch);
				
				ch.addEventListener('click', function() {
						//console.log(pg.selectedCharacter + ' ' + this.index);
						pg.selectedCharacter = this.index;
						pg.listCharacters();
						pg.rebuildProposal();
					}, false);
				
			}
		}
	},
	
	listKeywords: function() {
		var obj = this;
		var dom = document.getElementById('leftdivkeywords');
		if (dom) {
			dom.innerHTML = '';
			//console.log(this.keywords);
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
				
			
			this.processKeywords();
					
			//todo: build budget part
			var budget = document.createElement('div');
			budget.setAttribute('id', 'budget');
			var output = '';
			
			output += 'Cost per work hour: €' + this.eurosHour + '<br>';
			output += 'Work hours per day: ' + this.hoursDay + '<br>';
			output += 'Risk factor buffer: ' + this.buffer + '<br>';
			
			if (Object.keys(this.budget_software).length > 0) {
				output += '<h3>Software</h3>';
				output += '<table>';
				output += '<tr>';
				output += '<th>Task</th>';
				output += '<th>Days</th>';
				output += '<th>Cost</th>';
				output += '</tr>';
				var accdays = 0;
				for (key in this.budget_software) {
					output += '<tr>';
					output += '<td>'+key+'</td>';
					output += '<td>'+this.budget_software[key]+'</td>';
					output += '<td>'+this.processPrice(this.budget_software[key])+'</td>';
					output += '</tr>';
					accdays += this.budget_software[key];
				}
				output += '<tr>';
				output += '<td>TOTAL</td>';
				output += '<td>'+accdays+'</td>';
				output += '<td>'+this.processPrice(accdays)+'</td>';
				output += '</tr>';
				output += '</table>';
			}
			
			budget.innerHTML = output;
			dom.appendChild(budget);
		
			//todo: build paying process part
		
			//todo: build responsabilities part
		
		}
		
	},
	
	processPrice: function(days) {
		var n = ((days*this.eurosHour*this.hoursDay)/(this.buffer));
		var output = '€'+n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
		return output;
	},
	
	initBudgets: function() {
		this.budget_software = {};
		this.budget_hardware = {};
	},
	
	budgetFunction: function(array, operator) {
		var property = operator['target'];
		var operation = operator['type'];
		var value = operator['value'];
		
		switch(operation) {
			case 'add':
				if (array.hasOwnProperty(property)) {
					array[property] += value;
				} else {
					array[property] = value;
				}
			break;
			case 'mul':
				if (array.hasOwnProperty(property)) array[property] *= value;
				//	else array[property] = 0;
			break;
		}			
	},
	
	processKeywords: function() {
		this.initBudgets();
		
		for(var i=0; i<this.keywords.length; i++) {
			
			// pass for adding values
			for(var j=0; j<this.keywords[i].operators.length; j++) {
				if (!this.keywords[i].toggled) continue;
				if (this.keywords[i].operators[j]['type'] == 'add')
					this.budgetFunction(
						this.budget_software,
						this.keywords[i].operators[j]
						);
			}
			
			// pass for multiplying values
			for(var j=0; j<this.keywords[i].operators.length; j++) {
				if (!this.keywords[i].toggled) continue;
				if (this.keywords[i].operators[j]['type'] == 'mul')
					this.budgetFunction(
						this.budget_software,
						this.keywords[i].operators[j]
						);
			}
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

