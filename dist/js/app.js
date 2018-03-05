(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var sendRequestButton = void 0;
var requestBlocks = void 0;

function createRequestObject(children) {

    var requestObject = {};
    var requester = children[0].value;

    children.forEach(function (item, index) {
        requestObject.pair = [requester, children[index].value];
    });

    // requestObject.requester = children[0].value

    // let requested = children.map((n, index) => children[index].value)
    // requestObject.requested = requested

    console.log(requestObject);
}

window.addEventListener('load', function () {

    sendRequestButton = document.querySelector('#send-requests');
    addEventListeners(sendRequestButton);
});

function addEventListeners(buttonElement) {
    buttonElement.addEventListener('click', function () {
        var requestBlocks = document.querySelectorAll('.request-block');

        requestBlocks.forEach(function (item) {
            var children = Array.from(item.children);
            createRequestObject(children);
        });
    });
}

},{}]},{},[1]);
