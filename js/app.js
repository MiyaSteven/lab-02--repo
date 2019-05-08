'use strict';

function Hornimals(animals) {
    this.image_url = animals.image_url;
    this.title = animals.title;
    this.description = animals.description;
    this.name = animals.name;
    this.horns = animals.horns;
}

Hornimals.allHornimals = [];

Hornimals.prototype.render = function() {
    
    const animalsClone = $('#horn-template').clone();
    
animalsClone.text(this.name);
animalsClone.find('img').attr('src', this.image_url);
}