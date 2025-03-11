---
title: Static Functions
---

<script setup>
</script>

## Static functions
```js
// call this to init all data-sic elements
// returns all instances as array, or false if already initialized
SlickImageCompare.init();

// get the instance for a given element
// returns false if no element is given, the element doesn't exist, or there is no SlickImageCompare instance connected to the element.
SlickImageCompare.getInstance(element);

// returns an array off all defined instances
SlickImageCompare.getInstances();

// returns the object with the default values
SlickImageCompare.getDefaults();

// destroys all previously created instances
SlickImageCompare.destroyAll();

```
