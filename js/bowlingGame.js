var BowlingGame = function() {
	this.rolls = [];
	this.currentRoll = 0;
};

BowlingGame.prototype.roll = function(pins) {
	this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.score = function() {
	var score = 0;
	var frameIndex = 0;
	var self = this;

	function sumOfBallsInFrame() {
		return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
	}

	function spareBonus() {
		return self.rolls[frameIndex + 2];
	}

	function strikeBonus() {
		return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
	}

	function isStrike() {
		return self.rolls[frameIndex] === 10;
	}

	function isSpare() {
		return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
	}

	for (var frame = 0; frame < 10; frame++) {
        if (isStrike()) {
            //TODO
        } else if (isSpare()) {
           //TODO
        } else {
            //TODO 
        }
    }
    return score;
};
