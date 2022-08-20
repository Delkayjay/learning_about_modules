
import chalk from 'chalk';
import figlet from 'figlet';
import fun from 'everyday-fun';

figlet('The riddler...', function(err, result){
    console.log(chalk.blue.bgGrey.bold(result));

    const riddle = fun.getRandomRiddle();

    console.log(chalk.bgGreen(riddle.riddle));

    setTimeout(function() {
        console.log(chalk.blue.bgGreen.bold(riddle.answer));
    }, 5000)

});
