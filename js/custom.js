            STATE = {
                fridge: 8,
                coffee: 6,
                temperature: 22.5                
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

                $("#fridge-value").html(STATE.fridge);
                $("#coffee-value").html(STATE.coffee);
                $("#temp-value").html(STATE.temperature);
            }

            function main() {
                setInterval(changeFrontEnd, 1000);

            }

            main();