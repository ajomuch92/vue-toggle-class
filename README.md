# vue-class-toggle
## A vue.js directive that helps to add, remove or toggle class on HTML elements based on events 


### Install  

NPM:  
```bash
npm i --save vue-class-toggle
```
Require it in your main.js file:

```javascript
// ES6
import 'vue-class-toggle';
```

### Ssage instructions  

Add `v-class-toggle` as an attribute on the element you wish to handle and pass and config object:

```html
<div class='some-class' v-class-toggle="config"></div>
```

### config

```javascript
{
  if: 'eventName',
  do: '[add/remove/toggle] className',
  on: 'unique identifier',
  to: 'selector'
}
```
- if (Required): Event name to listen
- do (Required): Action to do when event ocurrs. It could add, remove or toggle a class from a HTML element
- on (Optional): Unique identifier where the listener will be apply. If it's omitted, the listener will be apply on the same element where is put it. E.g. #my-id
- to (Optional): CSS selector where the class will be added, removed or toggle. 

### License
ISC

Inspired by: [Anijs](http://anijs.github.io/)