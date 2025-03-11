---
title: Events
---

<script setup>
</script>

# Events
you can listen to all kind of events, to extend the functionality of the image compare slider.
List of available events and when they are triggered

| name             | called / triggered ...                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| init             | after **initialization**                                                      |
| drag             | on **interaction** (drag, mousemove)                                          |
| update           | on every handle position change                                               |
| beforeshown      | if the **before** image is shown                                              |
| aftershown       | if the **after** image is shown                                               |
| interactionstart | user begins interaction                                                       |
| interactionend   | user ends interaction                                                         |
| viewchange       | changed form **before** image shown to **after** image shown (and vice versa) |
