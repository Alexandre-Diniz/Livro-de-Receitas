import Realm from 'realm'

export class RecipeSchema {}
RecipeSchema.schema = {
  name: 'Recipe',
  primaryKey: 'id',
  properties: {
    id:    {type: 'string', default: `${new Date()}-${Math.floor(Math.random() * 1000)}`},
    title: 'string',
    ingredients: 'data',
    directions: 'data'
  }
}