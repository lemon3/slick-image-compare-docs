---
title: Methods
---

<script setup>
</script>

# Methods
Methods available after initialization(!)
```js
const sic = new SlickImageCompare('#my-div');
```
## init
```js
sic.init();
```

## stop
Stops all animations, the handle immediately stops at the current position (if it is moving).
```js
sic.stop();
```

## play
tbd.
```js
sic.play(stopAt, repetitions, duration, easingFun);
```

## animateTo
Animates the slider (handle) to a specific position (percentage from left or top), with the defined duration (in ms) and easing function.

**percent** type: number
possible values for **percent**: 0 - 100
to which position the slider should slide.

**duration** type: number *(optional)*
the duration is in ms(!)
if not set, it uses the standard duration defined via option object.

**easing** type: function *(optional)*
possible values for **easing**: see easing functions
if not set, it uses the standard easing function defined via option object.
```js
sic.animateTo(percent, duration, easing);
```

## goto
Slider (handle) jumps to a given position (percentage from left or top)

**percent** type: number
possible values for **percent**: 0 - 100
to which position the slider should jump.
```js
sic.goto(percent);
```

## setAngle
sets the angle of the handle (parting line).

**angle** type: number
possible values for **angle**: -30 - 30
```js
sic.setAngle(angle);
```

## changeDirection
Changes the direction of the slider (**ltr** value). So if **ltr** is set to true (the default value), it is set to false and the slider logic is updated.
```js
sic.changeDirection();
```

## changeOrientation
Changes the orientation of the slider (**horizontal** value). So if **horizontal** is set to true (the default value), it is set to false, and the slider logic is updated.
```js
sic.changeOrientation();
```

## showAfter
When the method is called, the slider immediately shows the 'after' image.
```js
sic.showAfter();
```

## showBefore
When the method is called, the slider immediately shows the 'before' image.
```js
sic.showBefore();
```

## toggleView
When the method is called, the slider immediately shows the 'after' or 'before' image, depending on what is currently visible.
```js
sic.toggleView();
```

## destroy
tbd.
```js
sic.destroy();
```
