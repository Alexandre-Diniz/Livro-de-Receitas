import Realm from 'realm'

import { RecipeSchema } from '../schemas/RecipeSchema'

export function getRealm(){
  return Realm.open({
    schema: [RecipeSchema]
  })
}