let serverSystem = server.registerSystem(0, 0);
serverSystem.initialize = () => {
    console.log("Hello world!");
    this.broadcastEvent("minecraft:display_chat_event", "Operon: Hello World!!!");
};

sampleSystem.shutdown = function() {
	//Cleanup all the things
};