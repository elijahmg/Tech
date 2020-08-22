# Form builder #

This application can build form from JSON config

### How to start ###

Before starting a project run build:css command
~~~
npm run build:css
~~~

This will create compiled tailwind file then run

~~~
npm run dev
~~~

For test run

~~~
npm test
~~~

#### Demo ###

https://tech-task-form-builder.herokuapp.com/

---

### Supported type of fields ###
- Buttons
- Radio buttons
- Input fields
    - numberfield
    - textfield
    - textarea
    - checkbox
    - datefield

```json
{
  "formLabel": "My Form",
  "items": [
    {
      "type": "numberfield",
      "label": "Count"
    }
  ],
  "radioButtonGroup": {
    "title": "My radio buttons",
    "fields": [
      {
        "value": "one",
        "label": "One"
      },
      {
        "value": "two",
        "label": "Two"
      }
    ]
  },
  "buttons": [
    {
      "type": "primary",
      "label": "Click me"
    },
    {
      "type": "secondary",
      "label": "Nice secondary button"
    }
  ]
}
```