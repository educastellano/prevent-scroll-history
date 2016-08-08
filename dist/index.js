(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Stolen from:
//  http://stackoverflow.com/questions/8737709/any-way-to-prevent-horizontal-scrolling-triggering-swipe-back-gesture-on-os-x-li
// 
module.exports = function (element) {

    element.addEventListener('mousewheel', function(event) {
        // We don't want to scroll below zero or above the width and height
        var maxX = this.scrollWidth - this.offsetWidth;

        // If this event looks like it will scroll beyond the bounds of the element, 
        // prevent it and set the scroll to the boundary manually
        if (this.scrollLeft + event.deltaX < 0 ||
            this.scrollLeft + event.deltaX > maxX) {

            event.preventDefault();

            // Manually set the scroll to the boundary
            this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
        }
    }, false);

}
},{}]},{},[1]);
