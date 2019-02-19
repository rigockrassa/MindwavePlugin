// Empty constructor
function MindwavePlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
MindwavePlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'MindwavePlugin', 'show', [options]);
}

// Installation constructor that binds MindwavePlugin to window
MindwavePlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.MindwavePlugin = new MindwavePlugin();
  return window.plugins.MindwavePlugin;
};
cordova.addConstructor(MindwavePlugin.install);
