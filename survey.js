const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :)  ', (activity) => {
  const name = activity;
  console.log(`Ok ${name} `);

  rl.question('What\'s an activity you like to do? ', (answer) => {
    const activity = answer;
    console.log(`Interesting! Tell me more. `);
  
    rl.question('What do you listen to while doing that? ', (answer) => {
      const music = answer;
      console.log(`Ahh, a person of good taste. `);
    
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        const meal = answer;
        console.log(`Of course! Because ${meal} is the only correct answer. `);
      
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          const food = answer;
          console.log(`Mercy all this food talk is gonna make someone hungry! Let's keep going. `);
        
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            const sport = answer;
            console.log(`Ok, just one more question: `);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              const superpower = answer;
              console.log(`Nicely done! Here's the result`);
            
              console.log(`Hey! My name is ${name}. I like to listen to ${music} while I ${activity}. ${meal[0].toUpperCase() + meal.slice(1)} is my favourite meal of the day and I love a good ${food}. But let's be honest, who doesn't? ${sport[0].toUpperCase() + sport.slice(1)} is my favourite sport. Whether I'm good at it or not, you can be the judge lool. Be nice. If I had to chose one awesome quality about myself, I would have to say ${superpower}. But enough about me, let me get to know you :)`);
              rl.close();
            }); 
          });  
        }); 
      });
    });
  });
});



