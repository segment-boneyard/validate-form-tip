
var classes = require('classes');
var Tip = require('tip');


/**
 * Expose `generate`.
 */

module.exports = generate;


/**
 * Generate a plugin to apply the tip adapters.
 *
 * @param {Validator} validator
 */

function generate (options) {
  options = options || {};
  return function plugin (validator) {

    /**
     * When invalid, show a tooltip.
     *
     * @param {Element} el
     * @param {String} message
     */

    validator.invalid(function (el, message) {
      classes(el).add('invalid');
      var tip = new Tip(message);
      if (options.position) tip.position(options.position);
      if (options.effect) tip.effect(options.effect);
      tip.show(el);
      tip.hide(options.duration || 4000);
    });

  };
}