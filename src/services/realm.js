import Realm from 'realm'
import { Alert } from 'react-native'

import { RecipeSchema } from '../schemas/RecipeSchema'

const SCHEMA_VERSION = 4

export function getRealm() {
  return Realm.open({
    schema: [RecipeSchema.schema], schemaVersion: SCHEMA_VERSION
  })
}

export async function migration() {
  return Realm.open({
    schema: [RecipeSchema],
    schemaVersion: SCHEMA_VERSION,
    migration: (oldRealm, newRealm) => {
      const oldObjects = oldRealm.objects('Recipe');
      const newObjects = newRealm.objects('Recipe');

      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].gallery = '[]'
        newObjects[i].ingredients = '[]'
        newObjects[i].directions = '[]'
      }
    }
  }).then(()=>{
    Alert.alert('migration')
  })
}