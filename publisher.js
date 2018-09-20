new Vue({
  el: '#app',
  data: {
    mqttClient: null,
    message: '',
  },
  created: function() {
    // connect to test broker
    this.mqttClient = mqtt.connect({
      host: 'test.mosquitto.org',
      port: 8080,
    });
  },
  methods: {
    publish: function(){
      // publish a message to subscribers of topic 'moey'
      var topic = 'moey';
      console.log('publishing a message', this.message);
      this.mqttClient.publish(topic, this.message);
    },
  },
});
