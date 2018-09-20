new Vue({
  el: '#app',
  data: {
    mqttClient: null,
    messages: [],
  },
  created: function() {
    // connect to test broker
    this.mqttClient = mqtt.connect({
      host: 'test.mosquitto.org',
      port: 8080,
    });

    // when it's connected to the broker, subscribe to 'moey' topic
    var that = this
    this.mqttClient.on('connect', function(){
      var topic = 'moey';
      that.mqttClient.subscribe(topic);
    });

    // when it receives a message, print it on the screen
    var that = this
    this.mqttClient.on('message', function(topic, payload){
      console.log('payload:', payload);
      var message = String.fromCharCode.apply(null, payload);
      that.messages.push(message);
    });
  },
});
