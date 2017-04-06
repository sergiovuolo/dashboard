            STATE = {
                fridge: 8,
                coffee: 6,
                temp: 22.5                
            } 

            ACTIONVALUES = {
                "put": +1,
                "take": -1,
                "drink": -1,
                "buy": +1,
                "up": +1,
                "down": -1
            }

            function getRandomArbitrary(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }


            function getEvent() {
                var event_name = ED.EVENTSET[getRandomArbitrary(0, ED.EVENTSET.length)];
                var event_value = getRandomArbitrary(0, 5);
                return {
                    event_name: event_name,
                    event_value: event_value
                }  
            }

            function changeFrontEnd() {
/*                var event = getEvent();
                var desiredId = event.event_name.split(":")[0] + "-value";
                console.log(event);
                console.log(event.event_name);
                console.log(event.event_name.split(":"));
                console.log(event.event_name.split(":")[0]);
                console.log(desiredId);
                $("#" + desiredId).html(event.event_value );
                console.log(getEvent());*/

                var event = getEvent();
                var desiredAttribute = event.event_name.split(":")[0];
                var desiredAction = event.event_name.split(":")[1];
                console.log(desiredAttribute);
                console.log(ACTIONVALUES[desiredAction]);
                STATE[desiredAttribute] += ACTIONVALUES[desiredAction] * event.event_value;


                $("#fridge-value").html(STATE.fridge);
                $("#coffee-value").html(STATE.coffee);
                $("#temp-value").html(STATE.temp);
            }

            function main() {
                setInterval(changeFrontEnd, 1000);

            }

            main();