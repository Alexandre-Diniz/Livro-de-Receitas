### Schemas

\dot RecipeSchema {}

RecipeSchema.schema = {

  name: 'Recipe',

  primaryKey: 'id',

  properties: {

    id:    {type: 'string', default: `${new Date()}-${Math.floor(Math.random() * 1000)}`},

    title: 'string',

    ingredients: {type: 'string', default: '[]'},

    directions: {type: 'string', default: '[]'},

    gallery: {type: 'string', default: '[]'},

  }
  
}