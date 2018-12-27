var stage2Info = {
	currQuestion: 0,
	complete: false,
	isOver : false
	isResponseMode : false,
	turnOns: [],
	turnOffs: []
};


function createQuestion(question, choice1, choice2, choice3, choice4, posResponse, negResponse){
		this.question = question;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		this.posResponse = posResponse;
		this.negResponse = negResponse;
		this.correct = null;

		this.setRandomCorrect() = function(){
			switch(Math.floor(Math.random()*4){
				case 0: this.correct = this.choice1; break;
				case 1: this.correct = this.choice2; break;
				case 2: this.correct = this.choice3; break;
				case 3: this.correct = this.choice4; break;
			}
		}
}




function initPersonality(){

	for(var i=0;i<questions.length;i++)
		questions[i].setRandomCorrect();

	var questionChoices = [];
	for(var i=0;i<questions.length;i++)
		questionChoices.push(i);

	var curr;
	for(var i=0;i<15;i++){
		curr = Math.floor(Math.random()*questionChoices.length);
		stage2Info.turnOns.push(curr);
		questionChoices.splice(questionChoices.indexOf(curr), 1);
	}
	//the remaining questions in the choices will be used as turnOffs. so no need to randomize anymore.
	for(var i=0;i<15;i++){
		stage2Info.turnOffs.push(questionChoices[i]);
	}
}

var buttons = {
	genderSelection: [], //boy or girl
	stage1: [], //left and right to switch between screens
	stage2: [], // 4 buttons for the questions
	stage3: [] // 4 buttons for the answers 
};


function initStage2Set(){ // initialize correct answers, 
	var i;
	var choiceList = []; //0,1,2,3 to signify their order when being displayed

	var turnOnChoices = [];
	var turnOffChoices = [];

	for(i=0;i<4;i++)
		choiceList.push(i);

	var set;
	var curr;
	var choiceNum;

	for(i=0;i<5;i++){ // 5 questions
		set = [];
		set.length = 4;

		for(i=0;i<4;i++)
			choiceList.push(i);

		for(i=0;i<2;i++){
			curr = Math.floor(Math.random()*turnOnChoices.length);
			choiceNum = Math.floor(Math.random(*choiceList.length));
			set[choiceNum] = stage2Info.turnOns[curr];
			turnOnChoices.splice(curr,1);
			choiceList.splice(choiceNum,1);
		}
		
		for(i=0;i<2;i++){
			curr = Math.floor(Math.random()*turnOffChoices.length);
			choiceNum = Math.floor(Math.random(*choiceList.length));
			set[choiceNum] = stage2Info.turnOffs[curr];
			turnOnChoices.splice(curr,1);
			choiceList.splice(choiceNum,1);
		}
		buttons.stage2.push(set);
	}
}

