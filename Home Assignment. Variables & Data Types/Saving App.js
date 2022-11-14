let samGoal = 10000;
let samCurrentSaving = 7500;

//Subtract samGoal and samCurrentSaving to get the deficiency.
let samDeficiency = (samGoal-samCurrentSaving); 

//Divide samDeficiency and samGoal to get the 0.25 then multiply it to 100 to get the percentage.
let percentageAway = (samDeficiency/samGoal) * 100;


console.log(`Thank you for your discipline and hardwork,Sam! You are now ${percentageAway}% away from your goal of saving ₱${samGoal}`);